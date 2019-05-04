import Vue from 'vue'
import VueRouter from 'vue-router'
//components
import comp_1 from "../components/comp_1"
import comp_2 from "../components/comp_2"
import comp_3 from "../components/comp_3"
Vue.use(VueRouter);
const routes=[
   {name:"comp_1_name",path:"/comp_1/:msg_1",component:comp_1},
   {path:"/comp_2",component:comp_2},
   {path:"/comp_3",component:comp_3}
];
export default new VueRouter({routes});