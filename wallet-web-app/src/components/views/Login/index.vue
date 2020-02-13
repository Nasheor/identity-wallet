<template>
<v-content V-IF="isDrizzleInitialized">
    <p> {{ activeAccount }} </p>
    <v-container
        fluid
        fill-height
    >
        <v-layout
            align-center
            justify-center
        >
            <v-flex
                xs12
                sm8
                md4
            >
            <v-card class="elevation-12">
                <v-card-text>
                <v-form>
                    <v-text-field
                        label="Account"
                        name="login"
                        type="text"
                        v-model="address"
                    ></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click.prevent="verifyAccount">Login</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-content>    
</template>
 <script src='./Login.js' />
 <style scoped lang="scss" src="./Login.scss"></style>