<template>
    <v-container class="d-flex justify-center" fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
            <v-toolbar
                dark
                color="gray darken-3"
                class="mb-1"
            >
                <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    label="Search"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                    <v-spacer></v-spacer>
                    <v-select
                        v-model="sortBy"
                        flat
                        solo-inverted
                        hide-details
                        :items="keys"
                        class="pl-2"
                        label="Sort by"
                    ></v-select>
                    <v-spacer></v-spacer>
                    <v-btn-toggle
                        v-model="sortDesc"
                        mandatory
                    >
                        <v-btn
                            large
                            depressed
                            color="gray darken-3"
                            :value="false"
                        >
                            <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>
                        <v-btn
                            large
                            depressed
                            color="gray darken-3"
                            :value="true"
                        >
                            <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <v-btn
                        large
                        depressed
                        color="gray darken-3"
                        :value="false"
                        @click="dialog = !dialog"
                    >
                        <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                </template>
            </v-toolbar>
        </template>
  
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
                <v-card-subtitle class="overline">{{item.email}}</v-card-subtitle>
                <v-divider></v-divider>
  
                <v-list dense>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                  >
                    <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                    <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                        <!-- {{ item[key.toLowerCase()] }} -->
                        <v-icon>mdi-checkbox-marked</v-icon>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
  
        <template v-slot:footer>
          <v-row class="mt-2" align="center" justify="center">
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
  
            <v-spacer></v-spacer>
  
            <span
              class="mr-4
              grey--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="gray darken-3"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="gray darken-3"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
        <v-dialog
            v-model="dialog"
            width="800px"
        >
            <AttestationForm />
        </v-dialog>
    </v-container>
</template>

<script src='./Attestations.js' />
<style scoped lang="scss" src="./Attestations.scss"></style>