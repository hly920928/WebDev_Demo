var myOne= 666;
var mystr= "mystr";
var gobalVar=777;
//init


function togglePink(){
    this.classList.toggle("class_Pink");
}
function plusOne(x){
    return x+1;
}
var str1 ="str";
function set_666(x){
    var t=x;
    t=666;
    return t;
}
function plusOne_gobal(x){
    gobalVar++;
    return gobalVar;
}
console.log("OK_111");
console.log("OK_222");
function testA(x){
    if(x==666){
        console.log("x is 666");
       }
   if(x===666){
    console.log("x is 666");
   }else{
    console.log("x is not 666 and int");
   }
}
var myobj={
     aa:666

}
var myArray=[1,2,3,4,5];
var objAdd=function(obj){
    obj.aa++;
    return obj;
}
function eching(){
    while(true){
        var t=prompt();
        if(t=="break")break
        alert(t);
    }
}
function eching(){
    while(true){
        var t=prompt();
        if(t=="break")break
        alert(t);
    }}
function eching_n_mod(n,m){
    for(var i=0;i<n;i++){
      if(i%m!=0)continue
      console.log(i);
    }
}
function hello(){
    console.log("hello"); 
}
function exec(func){
    func();
}
function plus_one(x){
    x=x+1;
    return x;
}
function append_str(x){
    x=x+"OK ";
    return x;
}
function factorial(x){
    if(x===0)return 1;
    return x*factorial(x-1);
}
function bind(f,x){
    return function(y){
       return f(x,y);
    }
}
function plusXY(x,y){
    return x+y;
}
var single=[666];
function plusArray(x){
    x[0]++;
    return x;
}
var myClass={
    a:10,
    myClass:function myClass(x){
        this.a=x;
    },
    setA:function(x){
        this.a=x;
    },
    plus_a:function(){
        this.a++;
    }
}
var objNest={
    a:100,
    b:200,
    obj2:[
        {c:5},
        {c:5},
    ]
}
function test1(x){
     for(var i=0;i<x.length;i++){
         x[i].style.color="blue";
     }
}
function background_violent(x){
    var body=document.querySelector("body");
   if(body.style.background==="violet"){
    body.style.background="navy";
   }else{
    body.style.background="violet"
   }
}
var _maxNum=6;
var p1_score;
var p2_score;
var isFinal=false;
var maxNum;

function _Reset(){
    p1_score.textContent=0;
    p2_score.textContent=0;
    p1_score.style.color="Black";
    p2_score.style.color="Black";
    isFinal=false;
}
function onMaxChange(){
    _maxNum=this.value;
    maxNum.textContent=_maxNum;
    _Reset();
}
function tryProduceWinner(){
    var total=Number(p1_score.textContent)+Number(p2_score.textContent);
    if(total==_maxNum){
        isFinal=true;
        if(Number(p1_score.textContent)>Number(p2_score.textContent)){
            p1_score.style.color="Green";
        }else{
            p2_score.style.color="Green";
        }
        if(Number(p1_score.textContent)==Number(p2_score.textContent)){
        {
            p1_score.style.color="Gray";
            p2_score.style.color="Gray";
        }
     }
}}
window.onload=function init1(){
    isFinal=false;
    maxNum=document.querySelector("#maxNum");
    maxNum.textContent=_maxNum;
    var maxNumInput=document.querySelector("#myNumbers_Input");
    maxNumInput.addEventListener("click",onMaxChange);
    maxNumInput.value=_maxNum;
    p1_score=document.querySelector("#p1");
    p2_score=document.querySelector("#p2");
    var p1_Input=document.querySelector("#p1_btn");
    p1_Input.addEventListener("click",function(){
        if(!isFinal){
            p1_score.textContent++;
            tryProduceWinner();
        }});
    var p2_Input=document.querySelector("#p2_btn");
    p2_Input.addEventListener("click",function(){
        if(!isFinal){
            p2_score.textContent++;
            tryProduceWinner();
        }});
    var btn_Reset=document.querySelector("#Reset");
    btn_Reset.addEventListener("click",_Reset);
    var hv=   document.querySelectorAll(".Hove");
    for(var i=0;i<hv.length;i++){
        hv[i].addEventListener("mouseover",function(){
        console.log("mouseover");
       this.style.color="Green";
        })
        hv[i].addEventListener("mouseleave",function(){
            console.log("mouseleave");
           this.classList.remove("aaa");
            })
    }
}
