<template>
  <v-app-bar app color="primary" dark height="60" elevate-on-scroll>
    <v-container class="d-flex justify-space-between align-center px-0 px-lg-3">
      <div class="logo">Foody</div>
      <div class="d-none d-sm-block">
        <v-btn v-for="(item, i) in items" height="60" :key="i" tile text :to="item.to">{{ item.title }}</v-btn>
      </div>
    </v-container>  
  </v-app-bar>  
</template>

<script>
export default {
  props: {
    items: Array  
  },
}
</script>