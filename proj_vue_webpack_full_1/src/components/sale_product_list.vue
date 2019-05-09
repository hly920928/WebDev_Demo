<template>
  <div  >
     <p>Sale Price List</p>
   <ul>
        <li v-for="item in $store.getters['a/sale_product_list']">
               <b>{{item.product}}</b> :   $<i>{{item.price}}</i>/Kg
          </li>


   </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default{
  
  data:function(){
    return {}
  },
  computed: {
 /*   sale_product_list:function(){
     return  this.$store.getters.sale_product_list
   } */
  /*  ...mapGetters(["sale_product_list"]) */  /* not ; */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
