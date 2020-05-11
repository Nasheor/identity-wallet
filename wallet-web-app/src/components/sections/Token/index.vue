<template>
    <v-container class="d-flex" v-if="isDrizzleInitialized">
        <v-card dark shaped fluid>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                dark
                :headers="headers"
                :items="getTokens"
                :items-per-page=5
                :search="search"
                multi-sort
                no-results-text
                :expanded.sync="expanded"
                show-expand
                class="elevation-1"
            >
                <template v-slot:expanded-item="{ headers, item }">
                <v-divider></v-divider>
                    <v-list class="d-flex" shaped>
                        <v-list-item>
                            <v-list-item-title class="overline">
                                TOKEN
                            </v-list-item-title>
                            <v-card-subtitle class="overline">
                                {{item.token_hash}}
                            </v-card-subtitle>
                        </v-list-item>
                    </v-list>
                </template>          
            </v-data-table>
        </v-card>
        <v-card shaped class="ml-4" max-height="470"> 
            <v-card-title >Generate Token</v-card-title>
            <v-flex
                xs12
                align-center
                justify-space-between
            >
                <v-text-field
                    class="ml-4"
                    placeholder="Name"
                    v-model = "token_name"
                ></v-text-field>
            </v-flex>
            <v-row class="pl-4">
                <v-col cols="12">
                    <v-combobox
                        v-model="selected_credentials"
                        :items="credentials"
                        label="Choose Credentials"
                        multiple
                        chips
                    >
                        <template v-slot:selection="data">
                            <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                @click:close="data.parent.selectItem(data.item)"
                            >
                                <v-avatar
                                    class="accent white--text"
                                    left
                                    v-text="data.item.slice(0, 1).toUpperCase()"
                                ></v-avatar>
                                {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-switch
                        v-model="visiblity"
                        label="Make document visible with token"
                        flat
                        inset
                        color="blue"
                    />             
                    <v-select
                        v-show="getVisiblity===true"
                        v-model="token_file"
                        :items="files"
                        label="Choose File To Show"
                        dense
                        outlined
                    ></v-select>   
                </v-col>     
            </v-row>
            <v-card-actions>
                <v-btn
                    text
                    @click="submit"
                >Generate</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script src='./Token.js' />
<style scoped lang="scss" src="./Token.scss"></style>