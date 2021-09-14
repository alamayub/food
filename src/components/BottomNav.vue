<template>
  <v-bottom-navigation :value="val" color="primary" app grow :class="$route.name != 'ItemView' ? 'd-flex' : 'd-none'">
    <v-btn v-for="(item, index) in items" :key="index" :to="item.to">
      <span v-text="item.title" />
      <v-icon>{{ $route.path === item.to ? `${item.icon}` : `${item.icon}-outline` }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    props: {
      items: Array  
    },  
    data: () => ({ 
      val: 0,
    }),
  }
</script>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn {  
  min-width: 70px !important;
}
.v-icon.v-icon { font-size: 20px !important; }
</style>