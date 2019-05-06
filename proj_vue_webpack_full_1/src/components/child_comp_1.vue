<template>
  <div  >
    <h1>{{ msg }} </h1>  <!-- dynamic router -->

  </div>
</template>

<script>
module.exports={
  
  data:function(){
    return {
      msg: 'child_comp_1'
    }
  },
  computed: {
     url_msg_1:function(){
       return this.$route.params.msg_1;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
