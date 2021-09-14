<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <!-- <div class="form white pa-3 pa--sm-4 pa-md-5 pa-lg-6">
          <div class="profile">
            <div class="profile__img">
              <img src="../assets/selena.jpg" alt="Foody Image" srcset="">
            </div>
            <div class="profile__info d-flex flex-column" style="grid-gap: 8px;">
              <div class="d-flex align-center" style="grid-gap: 8px;">
                <v-icon>mdi-account-outline</v-icon>
                <div class="title" style="line-height: 1;">Selena Gomez</div>
              </div>
              <div class="d-flex align-center" style="grid-gap: 8px;">
                <v-icon>mdi-email-outline</v-icon>
                <p>selena@gmail.com</p>
              </div>
              <div class="d-flex align-center" style="grid-gap: 8px;">
                <v-icon>mdi-phone-outline</v-icon>
                <p>+977 9876543210</p>
              </div>
            </div>
          </div>
          <v-list class="mt-3" dense>
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
              <v-list-item-icon class="mr-3">
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div> -->
        <div class="form white pa-3 pa--sm-4 pa-md-5 pa-lg-6">
          <v-tabs v-model="tab">
            <v-tab>Login</v-tab>
            <v-tab>Register</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-form ref="loginForm" v-model="loginValid" lazy-validation class="py-6 d-flex flex-column" @submit.prevent style="grid-gap: 16px;">
                <v-text-field v-model="login.email" placeholder="email@foody.com" dense outlined prepend-inner-icon="mdi-email-outline" hide-details :rules="emailRules" />
                <v-text-field v-model="login.password" placeholder="******" dense outlined prepend-inner-icon="mdi-lock-outline" :rules="passwordRules" hide-details @click:append="showPassword = !showPassword" :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="showPassword ? 'text' : 'password'" />
                <v-btn rounded width="150" height="40" class="mx-auto" color="primary" :loading="loadButton" :disabled="!loginValid" @click.stop="signIn">login</v-btn>
              </v-form>
            </v-tab-item>
            <v-tab-item>
              <v-form ref="registerForm" v-model="registerValid" lazy-validation class="py-6 d-flex flex-column" @submit.prevent style="grid-gap: 16px;">
                <v-text-field v-model="register.name" placeholder="Foody" dense outlined prepend-inner-icon="mdi-account-outline" :rules="emailRules" hide-details />
                <v-text-field v-model="register.email" placeholder="email@foody.com" dense outlined prepend-inner-icon="mdi-email-outline" :rules="emailRules" hide-details />
                <v-text-field v-model="register.mobile" placeholder="9876543210" dense outlined prepend-inner-icon="mdi-phone-outline" :rules="emailRules" hide-details />
                <v-text-field v-model="register.password" placeholder="******" dense outlined prepend-inner-icon="mdi-lock-outline" :rules="passwordRules" hide-details @click:append="showPassword = !showPassword" :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="showPassword ? 'text' : 'password'" />
                <v-btn rounded width="150" height="40" class="mx-auto" color="primary" :loading="loadButton" :disabled="!registerValid" @click.stop="signUp">Register</v-btn>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Wishlist', icon: 'mdi-heart', to: '/wishlist' },
      { title: 'Cart', icon: 'mdi-cart', to: '/cart' },
      { title: 'Order', icon: 'mdi-shopping', to: '/order' },
    ],
    tab: null,
    showPassword: false,
    loginValid: true,
    login: {
      email: null,
      password: null
    },
    registerValid: true,
    register: {
      name: null,
      email: null,
      mobile: '',
      password: null
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be at least 6 characters.',
    ],
  }),
  methods: {
    signIn() {},
    signUp() {}
  },
  computed: {
    loadButton() {
      return this.$store.state.button_load
    }
  }
}
</script>

<style>
.form {
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
}

.forget__password {
  text-decoration: underline !important;
  font-size: 13px !important;
  cursor: pointer;
  letter-spacing: .5px;
}

/* Profile */
.profile {
  display: flex;
  align-items: center;
  grid-gap: 20px;
}
.profile__img {
  height: 150px;
  width: 150px;
  border-radius: 4px;
  overflow: hidden;
}
@media (max-width: 500px) {
  .profile { grid-gap: 12px; }
  .profile__img {
    height: 120px;
    width: 120px;
  }
}
</style>


<!--
async signIn() {
      if(this.$refs.loginForm.validate()) {
        this.$store.commit('SET_BUTTON_LOAD', true)
        await firebase.auth().signInUserWithEmailAndPassword(this.login.email, this.login.password).then((user) => {
          console.log(user)
        }).catch(error => {
          alert(error.message);
        });
        this.$store.commit('SET_BUTTON_LOAD', false)
      }
    },
    async signUp() {
      if(this.$refs.registerForm.validate()) {
        this.$store.commit('SET_BUTTON_LOAD', true)
        await firebase.auth().createUserWithEmailAndPassword(this.register.email, this.register.password).then( async (res) => {
          await res.user.updateProfile({
            displayName: this.register.name
          }).then( () => console.log('profile updated')).catch( e => console.log(e.message))
        }).catch(error => {
          console.log(error.message);
        });
        this.$store.commit('SET_BUTTON_LOAD', false)
      }
    }
-->