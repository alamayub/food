<template>
  <div class="order">
    <v-container>
      <v-tabs v-model="tab">
        <v-tab>On Way</v-tab>
        <v-tab>Completed</v-tab>
        <v-tab>Canceled</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
            
        </v-tab-item>
        <v-tab-item>
              
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>  
</template>

<script>
export default {
  data: () => ({
    tab: null
  })
}
</script>