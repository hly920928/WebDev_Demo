<template>
  <div id="app">
    <myHeader></myHeader>
    <myNav></myNav>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from "./components/footer"  
import myHeader from "./components/header"
import myNav from "./components/nav"
export default {
  data:function () {
    return {}
  },
  components:{myFooter,myHeader,myNav}  /* not [] */
}
</script>

<style>
 
</style>
