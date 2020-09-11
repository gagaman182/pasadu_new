<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="../static/m.png"
                    alt="Vue Material Admin"
                    width="120"
                    height="120"
                  />
                  <h1 class="flex my-4 primary--text">
                    ครุภัณฑ์คอมพิวเตอร์
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Email"
                    type="text"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <nuxt-link to="/login">เข้าสู่ระบบ</nuxt-link>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="signup" :loading="loading"
                  >ลงทะเบียน</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from "firebase";
export default {
  layout: "default",
  data: () => ({
    loading: false,

    email: "",
    password: ""
  }),

  methods: {
    signup() {
      this.loading = true;
      // setTimeout(() => {
      //   this.$router.push("/dashboard");
      // }, 1000);

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.$router.push("/signup");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
