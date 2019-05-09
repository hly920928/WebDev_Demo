<template>
  <div  >
     <p>Originnal Price List</p>
   <ul>
        <li v-for="item in $store.state.a.product_list">
               <b>{{item.product}}</b> :   $<i>{{item.price}}</i>/Kg
               <button @click="changePrice(true,item)">Up Price</button>
    <button @click="changePrice(false,item)">Down Price</button>
          </li>
    <button @click="changeAllPrice(true)">Up All Price</button>
    <button @click="changeAllPrice(false)">Down All Price</button>
   </ul>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default{
  
  data:function(){
    return {
      price_step:0.2
    }
  },
  computed: {
   /*   info:function(){
       return this.$store.state.product_list;
     } */
     ...mapState(["product_list"])
  },
  methods:{
    /* ...mapMutations([
      "mutate_all_price"
      ]), */
    /*     ...mapActions([
      "a/action_each_price"
      ]), */
    changeAllPrice(direction){
      this.$store.commit("a/mutate_all_price",[direction,this.price_step]);  // namespaced
   /*   this.mutate_all_price([direction,this.price_step]); */
    },
    changePrice(direction,item){
       this.$store.dispatch("a/action_each_price",[direction,this.price_step,item]);
     /*  this.action_each_price([direction,this.price_step,item]); */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
