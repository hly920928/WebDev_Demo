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
            checkBoxArray:[]
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
}