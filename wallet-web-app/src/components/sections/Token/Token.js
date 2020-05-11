import { mapGetters } from 'vuex';
import { sha256 } from 'js-sha256';
import { token_args, counter_token_args } from '../../../utils/args';

export default {
    data () {
        return {
          search: '',
          selected: [],
          token_name: '',
          selected_credentials: [],
          token_file: '',
          visiblity: false,
          files:[],
          credentials: [],
          counter: 0,
          headers: [
            {
              text: 'Name',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'Timestamp', value: 'timestamp' },
            { text: 'File', value: 'file_hash' },
          ],
          tokens: [],
          expanded: [],
        }
    }, 
    computed: {
      ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
      ...mapGetters('contracts', ['getContractData']),
      ...mapGetters([
        "getCredentials"
      ]),
      getVisiblity() {
          return this.visiblity;
      },
      getTokens() {
        if(this.isDrizzleInitialized) {
          // Retrieving the counter which is the number of credentials of a user on ethereum
          this.counter = this.getContractData({
            contract: counter_token_args.contractName,
            method: counter_token_args.method,
            methodArgs: counter_token_args.methodArgs
          });
          // Retrieving the data of the credentials and respective file associated 
          // with the user and populating it locally
          let data = []
          for(let i = 1; i <= this.counter; i++ ) {
              // Updating the arguments for the contract method call
              // before dispatching it to the store
              token_args.methodArgs[0] = i;
              this.$store.dispatch('drizzle/REGISTER_CONTRACT', token_args);
              data.push(this.getContractData({
                  contract: token_args.contractName,
                  method: token_args.method,
                  methodArgs: token_args.methodArgs
              })); 
          }
          console.log(data);   
          this.tokens = data;
          return this.tokens;     
        } else {
          console.log("Drizzle still initializing");
        }                    
      }
    },
    methods: {
        submit() {
            if(this.isDrizzleInitialized) {
              let name = this.token_name;
              let credentials_data = this.selected_credentials.join('-');
              let file_address = '';
              let file = '';
              if(this.visiblity === true) {
                file = this.token_file;
                this.getCredentials.map(credential => {
                  if(credential['caption'] === file){
                    file_address = credential['file'];
                  }
                });
              }
              let timestamp_data = JSON.stringify(Math.floor(Date.now() / 1000));
              let token_hash = this.generateToken(credentials_data+name+file+timestamp_data+file_address);
              this.drizzleInstance
              .contracts["TokenHandler"]
              .methods["setToken"]
              .cacheSend(name, token_hash,
                  file, file_address, 
                  credentials_data, timestamp_data);

              this.token_name = '';
              this.selected_credentials = [];
              this.visiblity = false;
              this.token_file = '';
            } else {  
              console.log("Drizzle Not Initialized");
            }
        },
        generateToken(data) {
          return sha256(data);
        }
    },
    created() {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', counter_token_args);   
      this.getCredentials.map(credential => {
          if(credential['active']===true)
              this.credentials.push(credential['name']);
      });
      this.getCredentials.map(credential => {
          this.files.push(credential['caption']);
      });     
      
      console.log(this.getTokens);
    }   
}