<template>
    <v-card
      class="d-flex flex-column justify-space-between pa-0"
      max-width="350"
      v-if="verificationStatus"
    >
        <v-img
            src="https://i.ibb.co/kgmbdtH/baseline-cloud-download-white-48dp.png"
            dark
            height="200px"
            @click="downloadFile"
        ></v-img>
   
        <v-card-title>
           {{ purpose }}
        </v-card-title>
    
        <v-card-subtitle class="overline">
            Token {{ credential_token }}
        </v-card-subtitle>
    
        <v-card-actions>  
            <v-btn
                @click="revokeToken"
                color="purple"
                text
            >
                Revoke Token
            </v-btn>    
            <v-spacer></v-spacer>    
            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
    
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-list shaped>
                    <v-list-item>
                        <v-list-item-title>
                            VERIFICATION STATUS
                        </v-list-item-title>
                        <v-rating
                            v-model="rating"
                            v-if="verificationStatus"
                            :length="length"
                            background-color="indigo lighten-3"
                            color="indigo"
                        ></v-rating>
                        <v-card-subtitle v-else>
                            Not Verified
                        </v-card-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            EMAIL
                        </v-list-item-title>
                        <v-card-subtitle class="overline">
                            {{ credential_email }}
                        </v-card-subtitle>
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition>
    </v-card>
</template>

 <script src='./CredentialCard.js' />
 <style scoped lang="scss" src="./CredentialCard.scss"></style>