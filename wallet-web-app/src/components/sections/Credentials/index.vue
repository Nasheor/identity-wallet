<template>
    <v-container fluid dark class="mx-auto mt-0">
      <v-row>
        <v-col cols="84">
          <v-row
            align="start"
            justify="start"
          >
            <CredentialCard
              v-for="n in 21"
              :key="n"
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