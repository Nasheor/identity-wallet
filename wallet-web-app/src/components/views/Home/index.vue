<template>
    <div>
        <!-- Main navigation drawer of the application -->
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-list-item
                        :key="item.text"
                        exact
                        :to="item.route"
                        >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <!-- Burger menu when the drawer is false -->
        <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
        >
            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-3"
            >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <span class="hidden-sm-and-down">Identity Wallet</span>
            </v-toolbar-title>
            <v-text-field
                flat
                solo-inverted
                hide-details
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-dialpad</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-email</v-icon>
            </v-btn>
        </v-app-bar>

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
                    <h2> Identity For All </h2>
                    <!-- <router-view></router-view> -->
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