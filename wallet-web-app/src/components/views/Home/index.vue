<template>
    <div>
        <keep-alive>
            <NavigationDrawer/>
        </keep-alive>

        <!-- Router view where the data of all components will be rendered -->
        <v-content class="ml-4 pa-2 mt-0">
            <v-container
                fluid
                fill-height
                class="pa-0"
            >
                <v-layout>
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