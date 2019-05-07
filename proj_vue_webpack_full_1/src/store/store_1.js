import vue from "vue"
import vuex from "vuex"
vue.use(vuex);
const store={
    state:{
        product_list:[
            {product:"apple",price:5},
            {product:"peach",price:4},
            {product:"grape",price:6},
            {product:"orange",price:3}
        ]
         
    },
    getters:{
      sale_product_list:function(state){  //state mean this state object above
               return state.product_list.map(function(item){
                 return {
                     product:item.product,
                     price:item.price/2
                 }
               });
      }

    },
    mutations:{},
    actions:{}
}
export default new vuex.Store(store);