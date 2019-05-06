<template>
  <div  >
    <h1>{{ msg }}</h1>
     <a href="#/comp_2/child_comp_1"><button>child_comp_1</button></a>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      msg: 'comp_2'
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>