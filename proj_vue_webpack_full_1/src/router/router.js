import Vue from 'vue'
import VueRouter from 'vue-router'
//components
import comp_1 from "../components/comp_1"
const  comp_2=()=> import("../components/comp_2");  /* using function to lazyloading */
const  comp_3=()=> import("../components/comp_3");
const  child_comp_1=()=> import("../components/child_comp_1");
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
   {path:"/comp_2",component:comp_2,
          children:[
             {
               path:"child_comp_1"  /* note :not /  */
               ,component:child_comp_1,
             }
          ]
},
   {path:"/comp_3",
   components:{   /* note :componentS /  */
      default:comp_3,
      other_comp_1:child_comp_1
   }
}
];
export default new VueRouter({routes});