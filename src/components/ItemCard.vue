<template>
  <div class="item__card">
    <div style="border-radius: 4px; overflow: hidden;">
      <img :src="item.img" :alt="item.name">
    </div>
    <div class="item__info pa-3">
      <div class="item__name text__overflow">{{ item.name }}</div>
      <div class="d-flex justify-space-between align-center mt-1 mb-2">
        <v-rating v-model="item.rating" size="16" color="amber" readonly dense half-increments background-color="grey" />
        <p>Rs.{{ item.price }}</p>
      </div>
      <div class="d-flex justify-space-between">
        <div class="amber d-flex cart__alter">
          <v-btn height="30" width="30" icon color="black">
            <v-icon small v-text="'mdi-minus'" />
          </v-btn>
          <div style="width: 20px; font-size: 13px; font-weight: 500;" class="d-flex align-center justify-center">2</div>
          <v-btn height="30" width="30" icon color="black">
            <v-icon small v-text="'mdi-plus'" />
          </v-btn>
        </div>
        <div class="d-flex" style="grid-gap: 6px;">
          <v-btn v-if="type === 'Cart'" color="primary" height="30" icon width="30" outlined>
            <v-icon small v-text="'mdi-heart-outline'" />
          </v-btn>
          <v-btn v-if="type === 'Wishlist'" color="amber" height="30" icon width="30" outlined>
            <v-icon small v-text="'mdi-cart'" />
          </v-btn>
          <v-btn color="red" height="30" icon width="30" outlined>
            <v-icon small v-text="'mdi-delete'" />
          </v-btn>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    item: Object,
    type: String
  }  
}
</script>

<style scoped>
.cart__alter {
  height: 30px; 
  width: 80px; 
  border-radius: 15px; 
  overflow: hidden;
  box-shadow: 1px 4px 10px 0 rgb(0 0 0 / 10%);
}
</style>

<!--
<v-btn color="primary" height="30" :width="`calc(100% - 38px)`" outlined>
          <v-icon small left v-text="'mdi-shopping'" />
          <span v-text="'order now'" />
        </v-btn>
-->