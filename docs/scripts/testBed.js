//ES6
//import
import {exportModule1,exportModule2} from "other.js";

var fn1=(a=0,b=0)=>{
    let args=arguments;
    return a==b;
}
var fn2=function(a=0,b=0){
    let args=arguments;
    return a==b;
}
var fn3=function(...args){
    console.log(args);
}
var fn4=function(args){
    console.log(...args);
}
var fn5=function(args){
    for(let a of args)console.log(a);
}
var fn6=function(){
    let abc=555;
    let temple_l=`abc+1 ==${abc+1}`;
    console.log(temple_l);
}

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
