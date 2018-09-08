<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed>
      <v-list>
        <v-list-tile @click.prevent>
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Meetups</v-list-tile-title>
        </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click="sideNav = !sideNav" 
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>account_balance</v-icon>
          Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: null
    };
  },
  name: "App"
};
</script>
