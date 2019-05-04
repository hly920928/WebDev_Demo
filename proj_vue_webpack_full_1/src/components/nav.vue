<template>
  <div class="hello">
      <!-- named route syntax -->
     <router-link :to="{name:'comp_1_name',params:{msg_1:'click_one'}}"><button>1</button></router-link>
      <router-link to="/comp_2"><button>2</button></router-link>
       <router-link to="/comp_3"><button>3</button></router-link>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
