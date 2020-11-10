<template lang="pug">
  #home
    b-row
      b-col(cols="12" md="6" lg="3" v-for='(item, index) in items' :key="index")
        b-card(
          :title="item.name" :img-src="item.img"
          img-top :sub-title="'$'+ item.price" border-variant="info")
          b-button(variant='primary' @click="addCart(item)")
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | &emsp;加入購物車
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          img: 'https://c.ecimg.tw/items/DGAGB4A900ANM1R/000002_1604283032.jpg',
          name: 'SAMSUNG 三星記憶卡',
          price: 788
        },
        {
          img: 'https://c.ecimg.tw/items/DYAN70A900AUPA5/000002_1599102543.jpg',
          name: '小米手環 5',
          price: 845
        },
        {
          img: 'https://f.ecimg.tw/items/DYAJCHA900AP7EG/000002_1604373280.jpg',
          name: 'Air pods pro ',
          price: 6090
        },
        {
          img: 'https://f.ecimg.tw/items/DYAJ93A900AXPNV/000002_1603176778.jpg',
          name: 'Apple iPhone 12 (128G)-黑色',
          price: 28500
        }
      ]
    }
  },
  methods: {
    addCart (item) {
      // 呼叫 mutations
      this.$store.commit('addCart', item)
    }
  }
}
</script>
