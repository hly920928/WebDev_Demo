<template>
  <div  >
    <h1>{{ msg }}</h1>
    <button @click="jump_to_child_comp_1">child_comp_1</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      msg: 'comp_2'
    }
  },
  methods:{
    jump_to_child_comp_1:function(){
      window.location.href=window.location.href+"/child_comp_1";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>