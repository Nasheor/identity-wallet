<template>
    <v-container fluid dark class="mx-auto mt-0">
      <v-row>
        <v-col cols="84">
          <v-row
            align="start"
            justify="start"
          >
            <CredentialCard
              v-for="credential in getCredentials"
              :key="credential['phone']"
              v-bind:email="credential['email']"
              v-bind:purpose="credential['name']"
              v-bind:phone="credential['phone']"
              v-bind:active="credential['active']"
              v-bind:address="credential['address']"
              v-bind:verified="credential['verified']"
              class="ma-3 pa-2"
              outlined
              tile
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container> 
</template>

 <script src='./Credentials.js' />
 <style scoped lang="scss" src="./Credentials.scss"></style>