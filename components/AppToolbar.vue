<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
    </v-toolbar-title>
    <h3>โรงพยาบาลหาดใหญ่</h3>
    <v-spacer></v-spacer>

    <span class="hidden-sm-and-down">{{ this.user.email }}</span>

    <v-menu
      offset-y
      origin="center center"
      class="elelvation-1"
      :nudge-right="140"
      :nudge-bottom="14"
      transition="scale-transition"
    >
      <notification-list></notification-list>
    </v-menu>
    <v-menu
      offset-y
      origin="center center"
      :nudge-right="140"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="../static/avatar/man_2.jpg" alt="Michael Wang" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item, index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList";
import Util from "@/util";
import * as firebase from "firebase";
export default {
  name: "app-toolbar",
  components: {
    NotificationList
  },
  data: function() {
    return {
      user: "",
      items: [
        {
          icon: "fullscreen_exit",
          href: "#",
          title: "ออกจากระบบ",
          click: this.handleLogout
        }
      ]
    };
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },

    handleLogout() {
      // this.$router.push("/login");
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    }
  },
  mounted() {
    //ตรวจสอบการ login มาแล้วยัง
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;

      if (user) {
        this.user = user;
      } else {
        this.user = null;
        this.$router.push("/login");
      }
    });
  }
};
</script>
