<template>
  <div class="wishlist">
    <v-container>
      <div class="title mb-2">My Wishlist</div>
      <div class="card__items">
        <ItemCard v-for="(item, i) in items" :key="i" :item="item" type="Wishlist" />
      </div>
    </v-container>
  </div>  
</template>

<script>
import ItemCard from '../components/ItemCard.vue'
export default {
  components: { ItemCard },
  data: () => ({
    items: [
      { name: 'Pizza', price: 125, rating: 4.2, img: 'https://media.farandwide.com/8e/c1/8ec1b2fde1274f33915562d4efdc928f.jpeg' },
      { name: 'Burger', price: 140, rating: 3.5, img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/07/Starbucks_Food_Spinach_Feta_Wrap-1296x728-header.jpg?w=1155&h=1528' },
      { name: 'Cake', price: 155, rating: 4.5, img: 'https://youngmenshealthsite.org/wp-content/uploads/2015/05/iStock_000016515039Small.jpg' },
      { name: 'Mushroom Pizza', price: 85, rating: 4, img: 'https://thumbs.dreamstime.com/b/fast-food-concept-greasy-fried-restaurant-take-out-as-onion-rings-burger-hot-dogs-fried-chicken-french-fries-31114163.jpg' },
      { name: 'Ice Cream', price: 152, rating: 3.9, img: 'https://images.theconversation.com/files/410720/original/file-20210712-46002-1ku5one.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C1000%2C696&q=45&auto=format&w=496&fit=clip' },
      { name: 'Biryani', price: 150, rating: 3.5, img: 'https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/Burger%20King%20Fast%20Food%20circular%20economy.jpg?h=56e23526' },
    ]
  })
}
</script>