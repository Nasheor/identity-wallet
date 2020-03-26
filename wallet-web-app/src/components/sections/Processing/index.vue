<template>
    <v-container fluid dark class="mx-auto mt-0">
      <v-row>
        <v-col cols="84">
          <v-row
            align="start"
            justify="start"
          >
            <ProcessingCard
              v-for="(credential, index) in getProcessingCredentials"
              :key="credential['phone']"
              v-bind:email="credential['email']"
              v-bind:purpose="credential['name']"
              v-bind:phone="credential['phone']"
              v-bind:active="credential['active']"
              v-bind:address="credential['address']"
              v-bind:file_hash="credential['file']"
              v-bind:file_text="credential['caption']"
              v-bind:token="credential['token']"
              v-bind:index="index"
              class="ma-3 pa-2"
              outlined
              tile
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container> 
</template>

<script src='./Processing.js' />
<style scoped lang="scss" src="./Processing.scss"></style>