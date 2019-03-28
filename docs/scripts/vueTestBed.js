let vueVM=[];
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
            }
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
            }
        },
        computed:{
            computed_classObj_1:function(){
                 return {
                    blueBG:true,
                    redText:true
                }
            }  
        }
    });
}