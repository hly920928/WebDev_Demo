<template>
  <div id="app">
    <myHeader></myHeader>
    <myNav></myNav>
    <router-view></router-view>
    <router-view name="other_comp_1"></router-view>
    <product_list></product_list>
      <sale_product_list></sale_product_list>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from "./components/footer"  
import myHeader from "./components/header"
import myNav from "./components/nav"
import product_list from "./components/product_list"
import sale_product_list from "./components/sale_product_list"
export default {
  data:function () {
    return {}
  },
  components:{myFooter,myHeader,myNav,product_list,sale_product_list}  /* not [] */
}
</script>

<style>
  #app>*{
    border:3px black solid;
  }
</style>
