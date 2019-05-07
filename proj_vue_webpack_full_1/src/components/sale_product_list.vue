<template>
  <div  >
     <p>Sale Price List</p>
   <ul>
        <li v-for="item in $store.getters.sale_product_list">
               <b>{{item.product}}</b> :   $<i>{{item.price}}</i>/Kg
          </li>


   </ul>
  </div>
</template>

<script>
module.exports={
  
  data:function(){
    return {}
  },
  computed: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
