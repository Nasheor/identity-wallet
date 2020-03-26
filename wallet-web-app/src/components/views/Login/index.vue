<template>
<v-content v-if="getLoginStatus === false || getLoginStatus === 'false' || getLoginStatus === null">
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
                    <v-btn @click.prevent="verifyAccount">Login</v-btn>
                </v-card-actions>
            </v-card>
            <v-card v-show="errorMessage" class="alert pa-8 elevation-12 rowss" color="red lighten-2" role="alert">
                <strong class="ml-12">Wrong key! Try Again.</strong><v-spacer /> 
                <v-btn class="ml-4" color="red lighten-8" @click="errorMessage = false" type="button" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </v-btn>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-content>  
<v-content v-else>
    <p> This is fucking things up </p>
</v-content>  
</template>
 <script src='./Login.js' />
 <style scoped lang="scss" src="./Login.scss"></style>