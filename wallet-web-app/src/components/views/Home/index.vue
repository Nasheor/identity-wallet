<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        >
        <v-list dense>
            <template v-for="item in items">
            <v-layout
                v-if="item.heading"
                :key="item.heading"
                row
                align-center
            >
                <v-flex xs6>
                <v-subheader v-if="item.heading">
                    {{ item.heading }}
                </v-subheader>
                </v-flex>
                <v-flex
                xs6
                class="text-xs-center"
                >
                <a
                    href="#!"
                    class="body-2 black--text"
                >EDIT</a>
                </v-flex>
            </v-layout>
            <v-list-group
                v-else-if="item.children"
                :key="item.text"
                v-model="item.model"
                :prepend-icon="item.model ? item.icon : item['icon-alt']"
                append-icon=""
            >
                <template v-slot:activator>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>
                        {{ item.text }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </template>
                <v-list-item
                v-for="(child, i) in item.children"
                :key="i"
                >
                <v-list-item-action v-if="child.icon">
                    <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ child.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            <v-list-item
                v-else
                :key="item.text"
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
            </v-layout>
        </v-container>
        </v-content>
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