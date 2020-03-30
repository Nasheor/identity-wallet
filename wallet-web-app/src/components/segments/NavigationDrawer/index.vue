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
            dark
        >
            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-3"
            >
                <v-app-bar-nav-icon color="white" @click.stop="updateDrawer"></v-app-bar-nav-icon>
            </v-toolbar-title>
            <!-- <v-text-field
                flat
                solo-inverted
                hide-details
                label="Search"
                class="hidden-sm-and-down"
                v-model="searchTerm"
            > {{activeAccount}}</v-text-field> -->
            <!-- <v-card-subtitle class=" headline ma-12">
                {{activeAccount}}
            </v-card-subtitle> -->
            <v-spacer></v-spacer>
            <v-btn @click="logout" icon>
                <v-icon color="white">mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
 <script src='./NavigationDrawer.js' />
 <style scoped lang="scss" src="./NavigationDrawer.scss"></style>