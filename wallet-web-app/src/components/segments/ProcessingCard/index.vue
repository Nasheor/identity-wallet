<template>
    <v-card
      class="d-flex flex-column justify-space-between pa-0"
      max-width="350"
    >
        <v-img
            src="https://i.ibb.co/kgmbdtH/baseline-cloud-download-white-48dp.png"
            height="200px"
            @click="downloadFile"
        ></v-img>
   
        <v-card-title>
           {{ purpose }}
        </v-card-title>
    
        <v-card-subtitle class="overline">
            Token {{ credential_token }}
        </v-card-subtitle>
        <v-list shaped>
            <v-list-item>
                <v-list-item-title>
                    VERIFICATION STATUS
                </v-list-item-title>
                <v-card-subtitle>
                    <v-icon>mdi-close-box</v-icon>
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
    </v-card>
</template>

 <script src='./ProcessingCard.js' />
 <style scoped lang="scss" src="./ProcessingCard.scss"></style>