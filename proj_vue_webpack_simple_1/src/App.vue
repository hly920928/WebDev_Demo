<template>
  <div id="app">
    <p>{{msg}}</p>
      <red></red>
      <white></white>
       <blue></blue>
  </div>
</template>

<script>
import red from "./components/red"
import white from "./components/white"
import blue from "./components/blue"
export default {
    components:{
      red,
      white,
      blue
    },
    data:function(){
      return {
        msg: "A flag"
      }
    }
}
</script>

<style>
 
</style>
