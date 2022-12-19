<template>
  <v-app>
    <v-app-bar app color="#344D59" >
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row class="justify-space-between px-6">
        <v-toolbar-title class="white-text">CRM</v-toolbar-title>
        <div>
          <v-badge 
          :content="notifications"
        :value="notifications"
        color="green"
        overlap><v-icon color="white">mdi-bell</v-icon></v-badge>
        </div>
      </v-row>
  
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="#344D59" app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="white-text">John Leider</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="item.action">
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-btn :to="item.route" text color="white">
          {{ item.title }}
        </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<style>
.white-text{
  color: white;
}</style>
<script>

export default {
  name: 'App',

  data: () => ({
        drawer: false,
        notifications:1,
        items: [
          { title: 'Accueil',route:'/', icon: 'mdi-home-city' },
          { title: 'Mon compte',route:'account', icon: 'mdi-account' },
          { title: 'Départements', route:'departement',icon: 'mdi-group' },
          { title: 'Utilisateurs',route:'user', icon: 'mdi-account-group-outline' },
          { title: 'Projets',route:'project', icon: 'mdi-list-box' },
          { title: 'Logout',route:'', icon: 'mdi-logout' },
        ],
        // mini: false,
  }),
};
</script>
