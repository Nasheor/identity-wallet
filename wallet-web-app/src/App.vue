<!-- <template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>Identity Wallet</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-content>
      <Login />
    </v-content>
  </v-app>
</template> -->
<template>
  <div v-if="isDrizzleInitialized" id="app">
    <h1>Sign the Guestbook</h1>
    <drizzle-contract-form
      contractName="Login"
      method="signBook"
      :placeholders="['Name']"
    />
    <h2>Guests:</h2>
    <ul v-if="getNames">
      <li v-for="(name, i) in getNames" :key="i">{{ utils.toUtf8(name) }}</li>
    </ul>
  </div>
  <div v-else>
    Loading application...
  </div>
</template>

<script>
// import Login from './components/views/Login';

// export default {
//   name: 'App',

//   components: {
//     Login,
//   },

//   data: () => ({
//     //
//   }),
// };
import { mapGetters } from "vuex"
export default {
  name: "app",
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance", "isDrizzleInitialized"]),    
    ...mapGetters("contracts", ["getContractData"]),    
    getNames() {
      let data = this.getContractData({
        contract: "Login",
        method: "getNames"
      });
      if (data === "loading") return false;
      console.log("Data\t"+ data);
      return data
    },    
    utils() {
      return this.drizzleInstance.web3.utils
    }
  },  
  methods: {
    verifyCredentials() {
      const verify = this.drizzleInstance.contracts["Login"].methods['Login']
      verify.cacheSend(this.)
    }
  }
  created() {
    this.$store.dispatch("drizzle/REGISTER_CONTRACT", {
      contractName: "Login",
      method: "getNames",
      methodArgs: []
    })
  }
}
</script>
