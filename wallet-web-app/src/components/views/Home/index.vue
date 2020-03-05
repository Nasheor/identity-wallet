<template>
    <div>
        <keep-alive>
            <NavigationDrawer/>
        </keep-alive>

        <!-- Router view where the data of all components will be rendered -->
        <v-content>
            <v-container
                fluid
                fill-height
            >
                <v-layout
                    align-center
                    justify-center
                >
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>

        <!-- Calling the identity upload form  -->
        <v-btn
            bottom
            color="pink"
            dark
            fab
            fixed
            right
            @click="dialog = !dialog"
        >
            <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="800px"
        >
            <IdentityForm />
        </v-dialog>
    </div>
</template>
 <script src='./Home.js' />
 <style scoped lang="scss" src="./Home.scss"></style>