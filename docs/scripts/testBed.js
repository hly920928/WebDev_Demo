
window.onload=function(){
    console.log("Load js");
    var myEventListener_1=function(){
       console.log(this);
       //event.stopPropagation();
    }
    var myEventListener_2=function(){
        console.log(this);
        //event.stopPropagation();
     }
    //note addEventListener third arg true or false,the different myEventListener calling order 
    document.querySelector("#myEventTarget_1").addEventListener("click",myEventListener_1,false);
    document.querySelector("#myEventTarget_2").addEventListener("click",myEventListener_1,true);
    document.querySelector("#myEventTarget_3").addEventListener("click",myEventListener_2,true);
}