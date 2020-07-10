<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>

      <router-link to="/add">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Редактировать</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      
        <router-link to="/">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>

        <router-link to="/events">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-bell-check-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Мероприятия</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        
        <router-link to="/guests">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Участники</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goToAccount">
            <v-list-item-title>Аккаунт</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><router-link style="color:white;" to="/">АИСС</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
        <!--<v-btn v-if="user" @click="goToAccount">Аккаунт</v-btn> -->
        <!-- <v-icon>mdi-magnify</v-icon> -->
      
    </v-app-bar>

    <v-main>
        <router-view style="margin-top: 10px;"/>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),

    methods: {
      check() {
        console.log("123")
      },

      goToAccount() {
        this.$router.push('/user/' + JSON.parse(localStorage.getItem('user')).user_id)
      }
    },

  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>