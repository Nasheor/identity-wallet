<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>Identity Wallet</v-toolbar-title>
      </div>
    </v-app-bar>
    <v-content v-if="login==true">
      <Home />
    </v-content>
    <v-content v-else>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/views/Login';
import Home from './components/views/Home';
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
   Login,
   Home,
  },
  computed: {
    ...mapGetters({
      login: 'getLoginStatus',
    }),
  },
  created() {
    this.$router.push({path: '/login'});
  }
};

</script>
