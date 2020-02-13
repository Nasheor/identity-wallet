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
                @click="firstClick"
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
                @click="secondClick"
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
                <p> Identity for all </p>
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
        <v-card>
            <v-card-title class="grey darken-2">
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
                <v-layout align-center>
                    <v-avatar
                    size="40px"
                    class="mr-3"
                    >
                    <img
                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                        alt=""
                    >
                    </v-avatar>
                    <v-text-field
                    placeholder="Name"
                    ></v-text-field>
                </v-layout>
                </v-flex>
                <v-flex xs6>
                    <v-text-field
                        prepend-icon="mdi-domain"
                        placeholder="Company"
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
                ></v-text-field>
                </v-flex>
                <v-flex xs12>
                <v-text-field
                    type="tel"
                    prepend-icon="mdi-phone"
                    placeholder="(000) 000 - 0000"
                ></v-text-field>
                </v-flex>
            </v-layout>
            </v-container>
            <v-card-actions>
            <v-btn
                text
                color="primary"
                @click="dialog = false"
            >Cancel</v-btn>
            <v-btn
                text
                @click="dialog = false"
            >Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>
 <script src='./Home.js' />
 <style scoped lang="scss" src="./Home.scss"></style>