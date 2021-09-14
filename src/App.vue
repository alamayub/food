<template>
  <v-app>
    <Navbar :items="items" />
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
    <BottomNav :items="items" class="d-sm-none" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import BottomNav from './components/BottomNav.vue'
export default {
  name: 'App',
  components: { Navbar, BottomNav },
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Wishlist', icon: 'mdi-heart', to: '/wishlist' },
      { title: 'Cart', icon: 'mdi-cart', to: '/cart' },
      { title: 'Orders', icon: 'mdi-shopping', to: '/orders' },
      { title: 'Profile', icon: 'mdi-account', to: '/profile' },
    ],
  }),
};
</script>


<style>
html { scroll-behavior: smooth; }
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.container {
  max-width: 1250px !important;
  margin: 0 auto !important;
  padding: 12px !important;
}
.v-btn span {
  font-weight: 400 !important;
  font-size: 13px !important;
  text-transform: capitalize !important;
}

/* Inputs */
.v-text-field--outlined { border-radius: 0 !important; }
.v-input input, .v-input textarea { 
  font-size: 13px !important; 
  letter-spacing: .5px !important; 
}
.v-input .v-label { 
  font-size: 13px !important; 
  letter-spacing: 1px !important; 
}
.v-input__icon .v-icon.v-icon, .v-select-list .v-icon.v-icon { font-size: 16px !important; }
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #4a4dc7  !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #b71c1c !important; }

/* Image */
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
p { margin-bottom: 0 !important; }

.text__overflow {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Tabs */
.v-tab {
  padding: 0 12px !important;
  text-transform: capitalize !important;
  font-weight: 400 !important;
}
.v-tabs-bar { height: 36px !important; }

/* Card Items */
.card__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
  grid-gap: 12px;
}
.item__card {
  position: relative;
  cursor: pointer;
  transition: ease-in-out 250ms;
  display: grid;
  grid-template-columns: 120px auto;
}
.item__info { 
  border: .5px solid rgb(0 0 0 / 10%);
  border-left: none; 
  width: 100%;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.item__name {
  font-weight: 500;
  letter-spacing: .5px;
  line-height: 1.2;
}
.item__card p {
  font-size: 12px;
  letter-spacing: .5px;
  font-weight: 500;
}
@media (max-width: 960px) {
  .card__items { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 600px) {
  .card__items { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>