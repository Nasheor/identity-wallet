<template>
    <v-card v-if="isDrizzleInitialized">
        <v-card-title class="grey darken-7">
        Create Identity Credential
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
            <v-flex xs6>
                <v-text-field
                    prepend-icon="mdi-domain"
                    placeholder="File Name"
                    v-model="caption"
                ></v-text-field>
            </v-flex>
            <v-flex xs6>
                <v-file-input 
                    label="File input"
                    show-size
                    @change="filePicked">
                </v-file-input>
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
 <script src='./IdentityForm.js' />
 <style scoped lang="scss" src="./IdentityForm.scss"></style>