import Vue from 'vue'
import VueRouter from 'vue-router'
//components
import comp_1 from "../components/comp_1"
const  comp_2=()=> import("../components/comp_2");  /* using function to lazyloading */
const  comp_3=()=> import("../components/comp_3");
 
Vue.use(VueRouter);
const routes=[
   {name:"root",path:"/",
   redirect: /* redirect root to comp_1_name */
   {
      name:"comp_1_name",
     params:{
      msg_1:"redirect from root"
     }
   }
},
   {name:"comp_1_name",path:"/comp_1/:msg_1",component:comp_1},
   {path:"/comp_2",component:comp_2},
   {path:"/comp_3",component:comp_3}
];
export default new VueRouter({routes});