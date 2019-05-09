import vue from "vue"
import vuex from "vuex"
function changeEachPrice(state,argument){
  let val=new Number(argument[2].price);
  if(argument[0]){
      val+=argument[1];
    } else{
      val-=argument[1];
    } 
    argument[2].price=val.toFixed(2);
  }
vue.use(vuex);
const store={
    state:{
        product_list:[
            {product:"apple",price:"5"},
            {product:"peach",price:"4"},
            {product:"grape",price:"6"},
            {product:"orange",price:"3"}
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
    mutations:{
      mutute_each_price:function(state,argument){
        changeEachPrice(state,argument);
        },
 
      mutate_all_price:function(state,argument){
        state.product_list.forEach(function(item) {
          argument.push(item);
          changeEachPrice(state,argument);
          argument.pop();
        })
      }
    },
    actions:{
      action_each_price(context,argument){
        context.commit("mutute_each_price",argument);//action can't directly access state 
      }
    }
}
export default new vuex.Store(store);