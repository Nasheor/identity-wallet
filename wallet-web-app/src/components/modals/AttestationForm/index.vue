<template>
    <v-card v-if="isDrizzleInitialized">
        <v-card-title class="grey darken-7">
        Add Attestant
        </v-card-title>
        <v-container grid-list-sm>
            <v-layout
                row
                wrap
            >
                <v-flex
                    xs12
                    align-center
                    justify-space-between
                >
                    <v-text-field
                        prepend-icon="mdi-account"
                        placeholder="Name"
                        v-model = "name"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field
                        prepend-icon="mdi-email"
                        placeholder="Email"
                        v-model = "email"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field
                        type="tel"
                        prepend-icon="mdi-phone"
                        placeholder="(000) 000 - 0000"
                        v-model = "phone"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-autocomplete
                        v-model="attesting"
                        :items="credentials"
                        prepend-icon="mdi-folder-account"
                        filled
                        dense
                        chips
                        small-chips
                        label="Credentials Attesting"
                        multiple
                    ></v-autocomplete>                    
                </v-flex>
                <v-flex xs12>
                    <v-select
                        v-model="relationship"
                        :items="relationship_list"
                        filled
                        label="Relationship to Account"
                        prepend-icon="mdi-account-network"
                        dense
                    ></v-select>                 
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
        <v-btn
            text
            @click="submit"
        >Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script src='./AttestationForm.js' />
<style scoped lang="scss" src="./AttestationForm.scss"></style>