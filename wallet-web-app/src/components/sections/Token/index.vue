<template>
    <v-container class="d-flex align-center">
        <v-card dark shaped fluid>
            <v-card-title>
                Tokens
                <v-spacer></v-spacer>
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
                :items="desserts"
                :search="search"
            ></v-data-table>
        </v-card>
        <v-card class="ml-4"> 
            <v-card-title >Generate Token</v-card-title>
            <v-row class="pl-4">
                <v-col cols="12">
                    <v-combobox
                        v-model="select"
                        :items="items"
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
                </v-col>    
                <v-col v-show="getVisiblity===true" cols="12" sm="6">
                    <v-select
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