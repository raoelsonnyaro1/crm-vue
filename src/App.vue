<template>
  <v-app>
    <v-main app>
      <router-view/>
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><router-link :to="item.route">{{ item.title }}</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
        drawer: true,
        items: [
          { title: 'Home',route:'/home', icon: 'mdi-home-city' },
          { title: 'My Account',route:'', icon: 'mdi-account' },
          { title: 'Département', route:'',icon: 'mdi-group' },
          { title: 'Users',route:'', icon: 'mdi-account-group-outline' },
          { title: 'Project',route:'project', icon: 'mdi-list-box' },
          { title: 'Logout',route:'', icon: 'mdi-logout' },
        ],
        mini: true,
  }),
};
</script>
