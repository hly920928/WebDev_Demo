let vueVM=[];
function convertToTwoDigit(v){
    let ans=Number(v)+1;
    if(ans<10)ans="0"+ans;
    else ans=String(ans);
    return ans;
}
function getFormatedDate(){
    let nowDate=new Date();
    let ans=String(nowDate.getFullYear())+":";
    
    ans=ans+convertToTwoDigit(nowDate.getMonth())+":";
    ans=ans+convertToTwoDigit(nowDate.getDay())+"#";
    ans=ans+convertToTwoDigit(nowDate.getHours())+":";
    ans=ans+convertToTwoDigit(nowDate.getMinutes())+":";
    ans=ans+convertToTwoDigit(nowDate.getHours());
    return ans;
}
window.onload=function(){
    console.log("vueDemo.js loaded!");
    vueVM[0]=new Vue({
      el:"#vue_container_0",
      data:{
        text_1:"TestText",
        imgSrc:"../images/imgTest_1.jpg",
        imgTitle:"img1_A"
      }
    });
    vueVM[1]=new Vue({
        el:"#vue_container_1",
        data:{
            testMessgae_1:"testMessgae_1",
            cardDataSet:[
                {
                    header:"TestText_1",
                    imgData:{
                        imgSrc:"../images/imgTest_1.jpg",
                        imgTitle:"img1"
                    }
                },
                {
                    header:"TestText_2",
                    imgData:{
                        imgSrc:"../images/imgTest_2.jpg",
                        imgTitle:"img2"
                    }
                },
                {
                    header:"TestText_3",
                    imgData:{
                        imgSrc:"../images/imgTest_3.jpg",
                        imgTitle:"img3"
                    }
                }
            ]
        },
        methods:{
            printOut_0:function(){console.log("Proxy Method OK");},// add proxy method to vueVM[1]
            printOut_1:function(){console.log("access Proxy Data : "+this.testMessgae_1);}// access data using this
        }
      });
    vueVM[2]=new Vue({
        el:"#vue_container_2",
        data:{
            clickTime:0,
            isDislpay_img_1:false,
            Btn_2_text:"Show Img",
            div_3_ID:0
        },
        methods:{
            ClickEvent_1:function(){this.clickTime++;},
            ClickEvent_2:function(){
                this.isDislpay_img_1=!this.isDislpay_img_1;
               if(this.Btn_2_text="Show Img"){
                this.Btn_2_text="Hide Img";
               }else{
                 this.Btn_2_text="Show Img";
               }},
            ClickEvent_3:function(){this.div_3_ID=(this.div_3_ID+1)%3;}
        }
      });
    vueVM[3]=new Vue({
        el:"#vue_container_3",
        data:{
            Input_1:"Input 1",
            Input_Lazy:"Input_Lazy",
            Input_Number:"Input_Number",
            textAreaText:"textAreaText",
            radioBtnText:"B",
            
            checkBoxArray:[],
            selectMsg_1:"K",
            selectList_1:[
                {value:"G",
                text:"G"},
                {value:"H",
                text:"H"},
                {value:"K",
                text:"K"}
            ]
        },
        methods:{
            ClickEvent_1:function(){this.clickTime++;},
            ClickEvent_2:function(){
                this.isDislpay_img_1=!this.isDislpay_img_1;
               if(this.Btn_2_text="Show Img"){
                this.Btn_2_text="Hide Img";
               }else{
                 this.Btn_2_text="Show Img";
               }},
            ClickEvent_3:function(){this.div_3_ID=(this.div_3_ID+1)%3;}
        }
      });
    vueVM[4]=new Vue({
        el:"#vue_container_4",
        data:{
            Msg_1:"Msg_1",
            div_1_title:"div_1_title",
            Msg_2:"Msg_2",
            msg_P1:"ABC",
            msg_P2:"EFG"
        },
        filters:{
            passFilter_1:function(input){//note:filters have input
                return input+" Filtered!";
            }
        },
        computed:{//note:computed have not input
            Msg_2Computed:function(){
                return this.Msg_2+" Computed!";
            },
            msg_P1plusP2:{//reflect and proxy,implement bi-direction linking
               get:function(){
                   return this.msg_P1+' '+this.msg_P2;
               },
               set:function(v){// note:have input
                   let data=v.split(' ');//not " "
                   this.msg_P1=data[0];
                   this.msg_P2=data[1];
               }
            },
          
        }
      });
    vueVM[5]=new Vue({
        el:"#vue_container_5",
        data:{
            class_1:"redText",
            class_2:"blueBG",
            isRedText_1:false,
            isblueBG_1:true,
            classObj_1:{
                redText:true,
                blueBG:false,
            },
            styleObject_1:{
              color:'yellow',
              background:'violet'
            },
            textInput_I:{
                msg:"",
                limit:50,
                remain:0,
                classList:[]
            }
        },
        computed:{
            computed_classObj_1:function(){
                 return {
                    blueBG:true,
                    redText:true
                }
            } ,
            textInput_I_computed:{
                get:function(){return this.textInput_I.msg;},
                set:function(v){
                    if(v.length<50){
                        this.textInput_I.msg=v;
                        this.textInput_I.remain=this.textInput_I.limit-v.length;
                        let id=this.textInput_I.classList.indexOf("redBorder");
                         if(id!=-1){
                            this.textInput_I.classList.splice(id,1);
                         }
                    }else{
                        this.textInput_I.remain=0;
                        this.textInput_I.msg=v.substr(0,50);
                        this.textInput_I.classList.push("redBorder");
                    }
                }
            }
        }
    });
    //global component
    Vue.component(
        "comp_1",//component name,using small case to avoid error
       {
        template:"#template_comp_1",
        data:function(){
            return {
                msg_1:"_msg_1",
                msg_2:"_msg_2 "+this.prop_1
            };
        },
        props:["prop_1"],//prop name declare here
        methods:{
           
        }
       }


    );

    vueVM[6]=new Vue({
        el:"#vue_container_6",
        data:{},
        filters:{},
        computed:{},
    });
    vueVM[7]=new Vue({
        el:"#vue_container_7",
        components:{
        comp_1_local:{
            template:"#template_comp_1",
            data:function(){
            return {
                msg_1:"_msg_1_Local",
                msg_2:"_msg_2_Local"
            };
            },
            props:["prop_1"],
            methods:{}
            }
        },
        data:{},
        filters:{},
        computed:{},
    });
    vueVM[8]=new Vue({
        el:"#vue_container_8",
        data:{
          data_prop_1:"data_prop_in_VM_data"

        }
    });
    Vue.component(
        "component_with_input_1",//component name,using small case to avoid error
       {
        template:"#template_component_with_input_1",
        data:function(){
            return {
                msg_in_component_1:"msg_in_component_1_send_In",
                msg_in_component_2:"msg_in_component_2_send_In"
            };
        },
        props:[],//prop name declare here
        methods:{
            sendOut_1:function(){
                this.$emit("reload",this.msg_in_component_1);
            },
            sendOut_2:function(){
                this.$emit("reload",this.msg_in_component_1,this.msg_in_component_2);
            }
        }
       }


    );
    vueVM[9]=new Vue({
        el:"#vue_container_9",
        data:{
          data_prop_2:"data_prop_2_in_VM_data",
          msg_VM_1:"msg_VM_1_OK",
          msg_VM_2:"msg_VM_2_OK",
          msg_VM_3:"msg_VM_3_OK",
          msg_4:"msg_4"
        },
        methods:{//different with computed, not v-model with DOM,must call by event
            receiveData_I:function(v1,v2){
                this.msg_VM_2=v1;
                this.msg_VM_3=v2;
            },
            _alert:()=>{
                alert("click Component");
              }
        }
    });
    Vue.component(
        "component_calculator_unit",//component name,using small case to avoid error
       {
        template:"#calculatorUnit",
        data:function(){
            return {
                value_in_data:this.value_in_props
            };
        },
        props:["label","value_in_props"],//prop name declare here
        methods:{
            sendOut:function(event){
                this.$emit("input_event",Number(event.currentTarget.value));
            }
        }
       });
    Vue.component(
        "component_calculator_unit_v1",//component name,using small case to avoid error
       {
        template:"#calculatorUnit_1",
        data:function(){
            return {};
        },
        props:["label","value"],//prop name declare here
        methods:{
            send:function(v){
                this.$emit("input",Number(v));

            }}
        
        });
    vueVM[10]=new Vue({
        el:"#vue_container_10",
        data:{
            price:10,
            shipping:20,
            discount:5
        },
        computed:{
            computeTotal:function(){
                return this.price+this.shipping-this.discount;
            }
        }
       }
    );
    Vue.component(
        "component_slot_test",//component name,using small case to avoid error
       {
        template:"#slot_test",
        data:function(){
            return {};
        },
        props:[],//prop name declare here
        methods:{}
        }
        );
     
        vueVM[11]=new Vue({
            el:"#vue_container_11",
            data:{
                price:10,
                shipping:20,
                discount:5
            },
            computed:{
                computeTotal:function(){
                    return this.price+this.shipping-this.discount;
                }
            }
           }
        );
        let bus_1=new Vue();
        Vue.component(
                "component_input_1",//component name,using small case to avoid error
               {
                template:"#comp_input_1",
                data:function(){
                    return {value:"Default_In_Input"};
                },
                props:[],//prop name declare here
                methods:{
                    send:function(){
                        this.$emit("send",this.value);
                        bus_1.$emit("send",this.value);
                    }
                }
                }
                ); 
        Vue.component(
                    "component_display_1",//component name,using small case to avoid error
                   {
                    template:"#comp_display_1",
                    data:function(){
                        return {value:"Default_In_Display"};
                    },
                    props:[],//prop name declare here
                    methods:{
                    },
                    created:function(){
                        let component=this;
                        //let value=this.value //error this.value is a string ,value is a copy,not a reference
                        bus_1.$on("send",function(v){
                            component.value=v;
                        });
                    }
                    }
                    ); 
    vueVM[12]=new Vue({
                        el:"#vue_container_12",
                        data:{
                        },
                        computed:{}
                       }
                    );

        Vue.component(
                        "readingmode_comp",//component name,using lower case to avoid error
                       {
                        template:"#reading_mode",
                        data:function(){
                            return {};
                        },
                        props:["title","author","date","category"],//prop name declare here
                        methods:{
                        },
                        created:function(){}
                        }
                        ); 
    
    vueVM[13]=new Vue({
                        el:"#vue_container_13",
                        data:{
                            status:"view",
                            title_input:{
                                text:"article title",
                                limit:50,
                                getRemain:function(){
                                    return this.limit-this.text.length;
                                },
                                
                                isBorderRed:function(){
                                    return this.getRemain()==0;
                                }
                            },
                            author:"article author",
                            article_main:"The killdeer (Charadrius vociferus) is a large plover found in the Americas. It was described and given its current scientific name in 1758 by Carl Linnaeus in the 10th edition of his Systema Naturae. Subspecies breed from southeastern Alaska and southern Canada to Mexico, in the West Indies, and in and around Peru. The non-breeding habitat includes coastal wetlands, beach habitats, and coastal fields. Although it is a shorebird, it does not necessarily nest close to water. Both parents incubate the young for 22 to 28 days on average. The killdeer primarily feeds on insects, although other invertebrates and seeds are eaten. It forages almost exclusively in fields, especially those with short vegetation and with cattle and standing water. It has a range of responses to predation by birds and mammals, including charging at intruders, which can be fatal for the killdeer. The species is declining but not yet threatened.",
                            date:getFormatedDate(),
                            category:"Tech",
                            category_color:"teal",
                            category_list:["Tech","Web","News","Science","Sports"]
                        },
                        computed:{
                            title_input_computed:{
                                get:function(){
                                    return this.title_input.text; 
                                },
                                set:function(v){
                                        if(v.length>50){
                                            v=v.substr(0,50);
                                        }
                                        this.title_input.text=v;
                                        return this.title_input.text;
                                    },

                                }
                            },
                        methods:{
                            switch_mode:function(){
                                     if(this.status=="view"){
                                        this.status="edit";
                                     }else{
                                        this.status="view";
                                     }
                                     this.date=getFormatedDate();
                            }
                        }
                       }
                    );
    Vue.component(
                        "component_input_sync",//component name,using small case to avoid error
                       {
                        template:"#comp_input_sync",
                        data:function(){
                            return {msg_sent:"msg_sent_default"};
                        },
                        props:["my_prop_1"],//using .sync, prop can be any name,not just "value" with v-model
                        methods:{
                            sendOutSync:function(){}//using a void function to avoid error
                        },
                        created:function(){
                            let comp=this;
                            comp.sendOutSync=function(event){// binding function in creating time ,using this closure ,avoid "this" problem
                                comp.msg_sent="msg_sent "+event.currentTarget.value;
                                comp.$emit("update:my_prop_1",event.currentTarget.value);////using .sync,custom event must be update:propname
                            }
                        }
                        }
                        ); 
    Vue.component(
                            "component_with_model",//component name,using small case to avoid error
                           {
                            template:"#comp_input_with_model",
                            model:{
                                prop:"my_prop_2",
                                event:"update_my_prop_2"
                            },//using model to bind to model (with any name,not just "value" and "input")
                            data:function(){
                                return {};
                            },
                            props:["my_prop_2"],//using .sync, prop can be any name,not just "value" with v-model
                            methods:{
                                sendOutSync:function(){}//using a void function to avoid error
                            },
                            created:function(){
                                let comp=this;
                                comp.sendOutSync=function(event){// binding function in creating time ,using this closure ,avoid "this" problem
                                    comp.msg_sent="msg_sent "+event.currentTarget.value;
                                    comp.$emit("update_my_prop_2",event.currentTarget.value);////using .sync,custom event must be update:propname
                                }
                            }
                            }
                            ); 
    vueVM[14]=new Vue({
            el:"#vue_container_14",
            data:{
                msg_1:"msg_1_in_Data",
                msg_2:"msg_2_in_Data"
            }
            
        });
        Vue.component(
            "componnent_with_scoped_slots",//component name,using small case to avoid error
           {
            template:"#comp_with_scoped_slots",
            data:function(){
                return {data_in_components_1:"data_in_components_1_output",
                        data_in_components_2:"data_in_components_2_output"
                          };
            },
            props:[]//using .sync, prop can be any name,not just "value" with v-model
         
            }); 
        Vue.component(
                "componcomp_with_multiple_scoped_slots",//component name,using small case to avoid error
               {
                template:"#comp_with_multiple_scoped_slots",
                data:function(){
                    return {};
                },
                props:["item_list"]//using .sync, prop can be any name,not just "value" with v-model
             
                }); 
        vueVM[15]=new Vue({
            el:"#vue_container_15",
            data:{
                item_list_in_VM:[
                    {item_v1:"v1",item_v1_v:"v1_v"},
                    {item_v1:"v2",item_v1_v:"v2_v"},
                    {item_v1:"v3",item_v1_v:"v3_v"},
                    
                ]
            }
                    
        });
        Vue.component(
            "component_in_script",//component name,using small case to avoid error
           {
            template:"#component_in_script",
            data:function(){
                return {msg_in_component_data:"msg_in_component_data_output"};
            },
            props:["msg_in_component_props"]//using .sync, prop can be any name,not just "value" with v-model
         
            }); 
        vueVM[16]=new Vue({
            el:"#vue_container_16",
            data:{
                msg_in_VM_data_2:"msg_in_VM_data_2_output"
            },
            computed:{
                computed_getMsgInComponentUsingRef:function(){
                    return this.$refs.ref_to_components.msg_in_component;//computed using in rendering time,not working
                },
            },
            methods:{
                method_getMsgInComponentDataUsingRef:function(){
                        return this.$refs.ref_to_components.msg_in_component;//method using after rendering time, working
                    },
                method_setMsgInInComponentDataUsingRef:function(v){
                        this.$refs.ref_to_components.msg_in_component_data=v;//note change data,not reaction happen
                    },
                    method_setMsgInInComponentPropsUsingRef:function(v){
                        this.$refs.ref_to_components.msg_in_component_props=v;//can't work ,note throw error
                    }
            }
        });
        vueVM[17]=new Vue({
            el:"#vue_container_17",
            data:{
                msg_1:"msg_1_in_VI",
                msg_1_log:"msg_1_log"
            },
            watch:{
                msg_1:function(newV,oldV){
                   this.msg_1_log="msg_1 change : new = "+ newV+" old = "+oldV;
                }  
            }


        });
        vueVM[18]=new Vue({
            el:"#vue_container_18",
            template:"#template_test_1" //using the whole template
            
        });
        Vue.component(
            "component_test_2",//component name,using small case to avoid error
            {
            template:"#template_test_2",
            //parent:"#vue_container_19",//linking to parent you know
            inject:["data_1_from_parent"],
            data:function(){
                return {
                    msg_in_component_data: this.$parent.msg_test_1,
                    msg_in_component_data_2:"msg_in_component_data",
                    injecting_data:this.data_1_from_parent
                }
            },
            props:["index"]//using .sync, prop can be any name,not just "value" with v-model
           
            }); 
        vueVM[19]=new Vue({
            el:"#vue_container_19",
            data:{
                msg_test_1:"msg_test_1_in_vueVM",
                component_index:[555,666],
                //getFrom_Children_error:this.$children[0].msg_in_component_data_2 //casue error
                getFromChildren_msg:"Null",
                data_watched:{data_1:"data_watched_data_1_default"},
                watch_output:"watch_output_default",
                data_test_1:"data_test_1__default",
                data_test_3:0,
                update_time:0,
            },
            //any other thing except Vue default
            my_option_1:"my_option_1_string",
            my_option_2:["my_option_2_1","my_option_2_2"],
            my_option_3:{data_1:"my_option_3_data_1"},
            provide:{
                data_1_from_parent:"data_1_provided_by_ vueVM[19]"
            },
            methods:{
                addChildren:()=>{},
                forceUpdate:()=>{},
                getFromChildren_afterRendering:()=>{},
                set_data_test_1:()=>{},
                delete_data_test_1:()=>{},
                set_data_test_2:()=>{},
                delete_data_test_2:()=>{},
                set_my_option_1:()=>{},
                delete_my_option_1:()=>{},
                set_my_option_4:()=>{},
                delete_my_option_4:()=>{},
                update_data_test_3:()=>{},
            },
            created:function(){
                let thisInstance=this;
                thisInstance.addChildren= function(){
                    thisInstance.component_index.push(thisInstance.component_index[thisInstance.component_index.length-1]+1);
                },
                thisInstance.forceUpdate= function(){
                    thisInstance.$forceUpdate();
                },
                thisInstance.getFromChildren_afterRendering= function(){
                    thisInstance.getFromChildren_msg=thisInstance.$children[0].msg_in_component_data_2 ;
                }
                thisInstance.update_data_test_3=function(){
                    thisInstance.data_test_3++;
                    thisInstance.data_test_3++;
                    thisInstance.data_test_3++;
                    thisInstance.data_test_3++;
                    thisInstance.data_test_3++;
                    console.log("update data_test_3 finished");
                    console.log(thisInstance.$el.querySelector("#data_test_3_div").innerText);//note data_test_3 unchanged
                   
                    thisInstance.$nextTick(function()
                    {
                      
                        console.log("nextTick!!!");
                        console.log(thisInstance.$el.querySelector("#data_test_3_div").innerText);//note data_test_3 changed and async
                    });
                    console.log("leave update_data_test_3");
                }
                let addSetAndDelete=function(target,name){
                    thisInstance["set_"+name]=function(){
                        thisInstance.$set(
                            thisInstance[target],
                            name,
                            "new "+name
                        );
                   };
                   thisInstance["delete_"+name]=function(){
                    thisInstance.$delete(
                        thisInstance[target],
                        name
                    );
               }
            
                };
                addSetAndDelete("$data","data_test_1");//delete error ,can't delele item under vue default object
                addSetAndDelete("$data","data_test_2");//delete and set ,error can't set a new item under vue default object
                addSetAndDelete("$options","my_option_1");//all right,but $options is not reactive
                addSetAndDelete("$options","my_option_4");//all right,can  set or delete a new item under $options
            },
            updated:function(){
                //this.update_time++; don't update data in updated function,it will recursively update,dead looping
                console.log("updated!!!");
            }
        });
        vueVM[19].$watch(
            "data_watched"
           ,function(newV,oldV){
            if(!newV||!oldV)return 
            vueVM[19].watch_output
            ="data_watched has changed : old = "+oldV.data_1+" new = "+newV.data_1;
            // note small bug newV==oldV when watch with deep:true 
            // assigning whole object will get correct result,even when deep:fasle
           },
           {
            immediate: true,//  callback will be triggered after watch added
            deep:true //  callback will be triggered when data inside object changed
           }
        );
        Vue.component(
            "comp_switch_1",
         {
            template:"#comp_switch",
             data:function(){return {comp_name: "comp_switch_1"};
         }
      } );
      Vue.component(
         "comp_switch_2",
      {      
          template:"#comp_switch",
          data:function(){return {comp_name: "comp_switch_2"};
      }
   } );
   Vue.component(
    "comp_switch_3",
 {
    template:"#comp_switch",
     data:function(){return {comp_name: "comp_switch_3"};
 }
} );

  Vue.component(
    "component_animated_1",
    {
       template:"#comp_animated_1",
       //working , ignore Vue console warning
       methods:{
        beforeEnter:function(el){
            el.style.opacity=0;
            el.style.fontSize=0;
        },
        enter:function(el,done){
           Velocity(el,{opacity:1,fontSize:"2em"},{duration:1000}); //set keyframe
           Velocity(el,{fontSize:"1em"},{duration:1000});  
           Velocity(el,{fontSize:"1em"},{complete:done});  //note set ending status with done
        },
        leave:function(el,done){
            Velocity(el,{fontSize:"2em"},{duration:1000}); //set keyframe
            Velocity(el,{opacity:0,fontSize:"0em"},{duration:1000});  
            Velocity(el,{fontSize:"0em"},{complete:done});  //note set ending status with done
         }
       }
    }
  );
        vueVM[20]=new Vue({
            el:"#vue_container_20",
            data:{
                 show_1:true,
                 show_2:true,
                 show_3:true,
                 compId:0,
                 compNameList:[  "comp_switch_1","comp_switch_2", "comp_switch_3"],
                 list_2:[{content:"A"},{content:"B"},{content:"C"},{content:"D"}],
                 newItem:null
            }
        });
        Vue.component(
            "component_in_render_function",
            {
                 render:function(createElement){
                     //equal using JS to build DOM tree
                    let p1=createElement(
                        "p", //tag type
                        "In p1"//innerText
                        
                        );
                    let p2=createElement(
                            "p", //tag type
                             [p1]//inner element ,must in array,even only one element
                            );
                    let p3=createElement(
                                "p", //tag type
                                "In p3"//innerText
                         );
                        return createElement(
                            "div",
                             [p3,p1,p2]
                        );
                 }
            }   
        );
        Vue.component(
            "component_in_render_function_attr_added",
            {
                 render:function(createElement){
                     //equal using JS to build DOM tree
              
                        return createElement(
                            "div",
                            {
                                style:{
                                    fontSize:"1.2em",
                                    color:"blue"
                                }
                            }
                            ,
                           "In component_in_render_function_attr_added"
                        );
                 }
            }   
        );
        Vue.component(
            "component_in_render_function_with_list",
            {
                 render:function(createElement){
                     //equal using JS to build DOM tree
                        let span_1=createElement(
                            "span",
                            "item_name "
                        );
                        let span_2=createElement(
                            "span",
                            "item_val "
                        );
                       let items=this.items_list.map(function(item){
                           return  createElement(
                                 "div",
                                 [
                                    span_1,      
                                    createElement(
                                        "span",
                                        item.name+" "
                                    ),
                                    span_2,
                                    createElement(
                                        "span",
                                        item.value
                                    )
                                 ]
                            );
                       });
                        return createElement(
                            "div",
                            [
                                createElement(
                                "h4",
                                "create list using render fuction"
                            ),items
                             ]
                        );
                 },
                 data:function(){
                     return {
                        items_list:[
                            {name:"A",value:"val_A"},
                            {name:"B",value:"val_B"},
                            {name:"C",value:"val_C"},
                            {name:"D",value:"val_D"}
                        ]
                    }
                 }
            }   
        );
        Vue.component(
            "component_in_render_function_with_input",{
                render:function(createElement){
                    let self=this;
                   return createElement(
                       "input",
                       {
                           attrs:{
                               title:"input_I"
                           },
                           domProps:{
                                  value:this.msg
                           },
                           on:{
                               input:function(event){
                                self.send(event.currentTarget.value);
                               }
                           }
                       }
                   );
                },
                props:["msg"],
                model:{
                    event:"my_event_1",
                    prop:"msg"
                },
              methods:{
                  send:function(v){
                      this.$emit("my_event_1",v);
                  }
              }
            })
        vueVM[21]=new Vue({
            el:"#vue_container_21",
            data:{
                msg_in_VM:"msg_in_VM_default"
            }
        });
        Vue.directive("test_1",{
             bind:function(el,binding){
            
                 let that=el;
                 let parentNode=el.parentNode;//note null
                 console.log("In test_1 bind el : "+el);
             },
             inserted:function(el,binding){
                let that=el;
                let parentNode=el.parentNode;//note not null
                console.log("In test_1 inserted el : "+el);
            },
            unbind:function(el,binding){
                let that=el;
                let parentNode=el.parentNode;
                console.log("In test_1 unbind el : "+el);
            },
            update:function(el,binding){
                let bindinfObj=binding;
                let expression=binding.expression;
                let innerText=el.innerText;
                console.log("In test_1 update: innerText : "+innerText);//note unchanged
            },
            componentUpdated:function(el,binding){
                let innerText=el.innerText;
                console.log("In test_1 componentUpdate: innerText : "+innerText);//note changed
            }
        });
        Vue.directive("test_2",{
            update:function(el,binding){
                let bindinfObj=binding;//using debugger to inspect binding object structure 
                let expression=binding.expression;
                let innerText=el.innerText;
                console.log("In test_1 update: innerText : "+innerText);//note unchanged
            }
        });
        Vue.directive("test_3",function(el,binding){//equal hook:bind and update
            console.log("shortCut : bind and update")
            let bindinfObj=binding;//using debugger to inspect binding object structure 
            let expression=binding.expression;
            let innerText=el.innerText;
            console.log("In test_1 update: innerText : "+innerText);//note unchanged
        });
        vueVM[22]=new Vue({
            el:"#vue_container_22",
            data:{
                show_1:true,
                val_1:0,
                msg_1:1,
                msg_2:2
             }
        });
        var myMixin_1={
            data:{
               
                msg_3:"msg_in_mixin_3",//override by the same name in VM
                msg_4:"msg_in_mixin_4"
                },
                methods:{
                    method_1:function(){console.log("In method_1_mixin");},//override by the same name in VM
                    method_2:function(){console.log("In method_2_mixin");}
                },
                created:()=>{console.log("In created_1_mixin");}//both will be called
        }
        vueVM[23]=new Vue({
            el:"#vue_container_23",
            mixins:[myMixin_1],
            data:{
             msg_1:"msg_in_VM_1",
             msg_2:"msg_in_VM_2",
             msg_3:"msg_in_VM_3"
             },
             methods:{
                 method_1:function(){console.log("In method_1_VM");}
             },
             created:()=>{console.log("In created_1_VM");}
                
        });
}