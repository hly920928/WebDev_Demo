<template>
  <div  >
     <p>Originnal Price List</p>
   <ul>
        <li v-for="item in info">
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
     info:function(){
       return this.$store.state.product_list;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
