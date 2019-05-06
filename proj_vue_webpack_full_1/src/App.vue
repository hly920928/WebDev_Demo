<template>
  <div id="app">
    <myHeader></myHeader>
    <myNav></myNav>
    <router-view></router-view>
    <router-view name="other_comp_1"></router-view>
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
  #app>*{
    border:3px black solid;
  }
</style>
