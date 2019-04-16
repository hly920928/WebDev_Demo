//ES6

//import
//can't work on local file systems,must be via network
//error on firefox
/* 
import("./other.js").then(
   (module)=>{
      module._exportModule1.fn1();
   }
);

*/
//class 
class Person{
    constructor(__name){
        this._name=__name;
    }
    printOut(){
        console.log("this person is " +this.name);
    }
    get name(){// get OR set+ A() ,A must be different from any this.*
        return this._name.toUpperCase();
    }
    set name(value){
        if(typeof(value)=="string"){
            this._name=value;
        }
    }
}
class Student extends Person{
    constructor(_name,_sID){
        super(_name);
        this.studentID=_sID;
    }
    printOut(){
        console.log("studentID " +this.studentID);
    }
    printOutTotal(){
        super.printOut();//note the difference
        this.printOut(); 
    }
  
}
//error on firefox
/*
class RabitProto{
    static counter=function(){
        let count=0;
        return function(isAdd){
            if(isAdd)count++;
            else return count;
        }
    }();
    static addOne
}
class Rabit extends RabitProto{
    constructor(){
        super();
        RabitProto.counter(true);
    }
}
let Rabit1=new Rabit();
let Rabit2=new Rabit();
let Rabit3=new Rabit();
 */
let Tom=new Person("Tom");
console.log("Is Tom.__proto__===Person.prototype? :"+(Tom.__proto__===Person.prototype));//true
let John=new Student("John",66666);
console.log("Is John.__proto__===Student.prototype? :"+(John.__proto__===Student.prototype));//true
console.log("Is John.__proto__===Person.prototype? :"+(John.__proto__===Person.prototype));//false
console.log("Is John.__proto__.__proto__===Person.prototype? :"+(John.__proto__.__proto__===Person.prototype));//true

console.log(Tom._name);//Tom
console.log(Tom.name);//Tom
Tom.name=6666;
console.log(Tom.name);//Tom
Tom.name="Jack";
console.log(Tom.name);//Jack
//function
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
//symbol
let symbol_1=Symbol("symbol1");//Symbol(A) A just for Debug
let symbol_2=Symbol("symbol1");
console.log("is symbol_1===symbol_2 :"+(symbol_1===symbol_2));
let obj1Withsymbol={
    [symbol_1]:778//note []
}
let symbol_for1=Symbol.for("symbol1");//Symbol.for(A),A is identity
let symbol_for2=Symbol.for("symbol1");
console.log("is symbol_for1===symbol_for1 :"+(symbol_for1===symbol_for1));
let obj1Withsymbolfor={ 
    [Symbol.for("symbol1")]:776//note []
}
console.log("obj1Withsymbolfor[symbol_for1] :"+obj1Withsymbolfor[symbol_for1]);
console.log("symbol1 is "+obj1Withsymbol[symbol_1]);
console.log("symbol2 is "+obj1Withsymbol[symbol_2]);
//well-known symbol
let myArray=[1,2,3];
myArray[Symbol.toPrimitive]=()=>{return "myArray_changed";}//using Symbol.toPrimitiv to overwrite built-in function
console.log("Print out myArray:"+myArray);
let array2=[1,2,3,4,5];
//iterator
let itr=array2[Symbol.iterator]();
console.log("Test iterator");
while(true){
    let next=itr.next();
    if(next.done===true)break;
    console.log(next.value);
}
//generator
function *gen(count){
    for(let i=0;i<count;i++){
       try{
        yield i;// note async behaviour i.e. iterator would keep i
       }catch(e){
        console.log(e);
       }
    }
}

let itr2=gen(5);
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.throw("myError!!!"));//note: still yield 2
console.log(itr2.return("End"));//note:after return yield :done==true
console.log(itr2.next());
//itr2.next().value();//error
//promise
let myPromise=new Promise(function(res,rej){
    //my code 
    setTimeout(
      ()=>{res("res running");},
      1000
    )
});
function promiseCallingtime(){
    let promiseLocal=new Promise(function(res,rej){
        //my code 
        console.log("promiseLocal OK");//promise will be called immeddiately after defined 
        res("res running");//res will be called immeddiately after promise.then() and being reached
    });
    setTimeout(function(){
     console.log("After 5s");
     promiseLocal.then((value)=>{console.log(value)});
    },5000);
}
//myPromise.then((value)=>{console.log("After Promise: "+value)});
// chainingpromise
let myPromiseFunc=function(input){
    return new Promise(function(res,rej){
        //my code 
        setTimeout(
          ()=>{console.log("in Promise : input ="+input);input++;res(input);},
          1000
        )
    });
}
//let myPromise1=myPromiseFunc(0);
//let myPromise2=myPromise1.then(myPromiseFunc);//=res(input) or rej(input);
//let myPromise3=myPromise2.then(myPromiseFunc);
// above equal
function chainingPromise_Normal(input){
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(myPromiseFunc)
    .then((input)=>{console.log("chaining promise 1 end : input = "+input);});
}
//
//catch
let myPromiseFuncMustMore1=function(input){
    return new Promise(function(res,rej){
        //my code
        if(input<1){
            rej(input);
        } else setTimeout(
          ()=>{console.log("in myPromiseFuncMustMore1 : input ="+input);input++;res(input);},
          1000
        )
    });
}
let myPromiseFuncMustMore10=function(input){
    return new Promise(function(res,rej){
        //my code 
        if(input<10){
            rej(input);//note rej undefine throw error
        } else setTimeout(
          ()=>{console.log("in myPromiseFuncMustMore10 : input ="+input);input++;res(input);},
          1000
        )
    });
}

//
//
function chainingPromise_Catch_1(input){
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(myPromiseFuncMustMore1)
    .then(myPromiseFuncMustMore10)
    .catch((input)=>{console.log("catch reject chaining 2 ,promise end : input = "+input);});
}
function chainingPromise_Catch_2(input){
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(myPromiseFuncMustMore10)
    .then(myPromiseFuncMustMore1)
    .catch((input)=>{console.log("catch reject chaining 3,promise end : input = "+input);});
}
//note:catch will happen at anything throw error point in chain
let myNormalFunc=function(input){
    console.log("in myNormalFunc : input ="+input);
    input++;
    return input;
}
let myWrongPromiseFunc=(input)=>{
    return new Promise(function(res,rej){res(myNormalFunc(input));});
};
function chainingPromise_SuccessNormalFunc_1(input){
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(myNormalFunc)//.then(SuccessNormalFunc)=new Promise(function(res,rej){res(SuccessNormalFunc(input));});
    .then(myPromiseFunc)
    .then((input)=>{console.log("chaining promise 4 end : input = "+input);});
}
let myErrorNormalFunc=function(input){
    throw("In myErrorFunc Error");
}
function chainingPromise_myErrorNormalFunc_1(input){
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(myErrorNormalFunc)//.then(ErrorNormalFunc)=new Promise(function(res,rej){rej(SuccessNormalFunc(input));});
    .then(myPromiseFunc,(input)=>{console.log("On rejected :"+input)})
    .then((input)=>{console.log("chaining promise 4 end : input = "+input);});
}
function chainingPromise_FuncReturnSuccessPromise_1(){
    let flag=true;
    let value="val1"
    let myPromiseSuccess=new Promise(function(res,rej){
        if(flag)res("success :"+value);
    });
    value="val1_1";
    myPromiseSuccess.then((value)=>console.log("First resolved :"+value));//value=val1,in closoure when Promise is defined
    let FuncReturnSuccessPromise=()=>{
        flag=false;
        value="val2";
        return myPromiseSuccess;
    }
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(FuncReturnSuccessPromise)//.then(ErrorNormalFunc)=new Promise(function(res,rej){rej(SuccessNormalFunc(input));});
    .then((in_value)=>{
        //myPromiseFuncSuccess already resolved 
        //this res will be called with input as same as First resolved
        console.log("flag = "+flag);//false
        console.log("value = "+value);//val2
        console.log("Twice resolved :"+in_value);
    },
    (error)=>{console.log("On rejected :"+error)});
}
// Promise all and race
function chainingPromise_FuncReturnFailPromise_1(){
    let flag=true;
    let value="val1"
    let myPromiseFail=new Promise(function(res,rej){
        if(flag)rej("Fail :"+value);
    });
    value="val1_1";
    // match myPromiseFail uncatched
    myPromiseFail.then((value)=>console.log("First resolved"+value),(value)=>console.log("First rejected "+value));//value=val1,in closoure when Promise is defined
    let FuncReturnFailPromise=()=>{
        flag=false;
        value="val2";
        return myPromiseFail;
    }
    myPromiseFunc(0)
    .then(myPromiseFunc)
    .then(FuncReturnFailPromise)//.then(ErrorNormalFunc)=new Promise(function(res,rej){rej(SuccessNormalFunc(input));});
    .then(
        (in_value)=>{
            //myPromiseFuncSuccess already resolved 
            //this rej will be called in closoure when Promise is defined
            console.log("flag = "+flag);//true
            console.log("value = "+value);//val1
            console.log("Twice resolved :"+in_value);
        }
        ,(error)=>{
            //myPromiseFuncSuccess already resolved 
            //this rej will be called in closoure when Promise is defined
            console.log("flag = "+flag);//true
            console.log("value = "+value);//val1
            console.log("Twice rejected :"+error);
        });
}

//all success,Promise.all success
function PromisAll(input){
    let myPromiseFuncSuccess=new Promise(function(res,rej){
        setTimeout(function(){res("success")},1000);
    
    });
    let myPromiseFuncFail=new Promise(function(res,rej){
        setTimeout(function(){rej("error")},1000);
    });
    Promise.all([myPromiseFuncSuccess,myPromiseFuncFail])
    .then((input)=>{console.log("succuss : input ="+input);})
    .catch((input)=>{console.log("fail : input ="+input);});
}
function PromisRace(input){
    let myPromiseFuncSuccess=new Promise(function(res,rej){
        setTimeout(function(){res("success")},1000);
    
    });
    let myPromiseFuncFail=new Promise(function(res,rej){
        setTimeout(function(){rej("error")},1000);
    });
    Promise.race([myPromiseFuncSuccess,myPromiseFuncFail])
    .then((input)=>{console.log("succuss : input ="+input);})
    .catch((input)=>{console.log("fail : input ="+input);});
}
//
//one success,Promise.race success
//
//all and race can chaining Promise,but can't chaining input 
// More object
function objAssignWitheSameAtrribute(){
    let obj1={
        a:1
    }
    let obj2={
        a:2
    }
    return Object.assign(obj1,obj2);//return obj.__proto__==Object.prototype obj.a=2(later overwrite)
}
function objAssign(){
    class Obj1{
        constructor(_a){
            this.a=_a;
        }
    }
    class Obj2{
        constructor(_b){
            this.b=_b;
        }
    }
    let obj1=new Obj1(1);
    let obj2=new Obj2(2);
    let obj3= Object.assign(obj1,obj2);//return obj.__proto__==Object.prototype obj.a=2
    return obj3;
}
function objSetProto(){
    class Obj1{
        constructor(_a){
            this.a=_a;
        }
    }
    let obj1=new Obj1(1);
    let obj2=Object.setPrototypeOf(obj1,Array);
    return obj2;
}
function arrayFrom(){
    let arr1=[1,2,3,4,5];
    let arr2=Array.from(arr1,(a)=>a*a);
    return arr2;
}
//Reflect API
//Proxy API
//Form Validity
function myReportValidity(event,message){
    let input=event.target;
    if(input.checkValidity()){
        input.setCustomValidity("");
    }else{
        input.setCustomValidity(message);
    }
}
function carouselControllerConstructor(id){
     var controller={};
     controller.currentImgId=0;
     controller.imgs=document.querySelectorAll("#"+id+">img");
     controller.imgs[0].style.display="block";
     controller.btn=document.querySelectorAll("#"+id+" i");
     controller.btn[0].addEventListener("click",()=>{
       let imgNum=controller.imgs.length;
       controller.imgs[controller.currentImgId].classList.add("CarouselSlidingOutLeft");
       let nextID=(controller.currentImgId+1)%imgNum;
       controller.imgs[nextID].style.display="block";
       controller.imgs[nextID].classList.add("CarouselSlidingInLeft");
       setTimeout(()=>{
        controller.imgs[controller.currentImgId].classList.remove("CarouselSlidingOutLeft");
        controller.imgs[nextID].classList.remove("CarouselSlidingInLeft");
        controller.imgs[controller.currentImgId].style.display="none";
           controller.currentImgId=nextID;
       },500);
     });
     controller.btn[1].addEventListener("click",()=>{
        let imgNum=controller.imgs.length;
        controller.imgs[controller.currentImgId].classList.add("CarouselSlidingOutRight");
        let nextID=(controller.currentImgId-1)%imgNum;
        if(nextID==-1)nextID=imgNum-1;
        controller.imgs[nextID].style.display="block";
        controller.imgs[nextID].classList.add("CarouselSlidingInRight");
        setTimeout(()=>{
         controller.imgs[controller.currentImgId].classList.remove("CarouselSlidingOutRight");
         controller.imgs[nextID].classList.remove("CarouselSlidingInRight");
         controller.imgs[controller.currentImgId].style.display="none";
            controller.currentImgId=nextID;
        },500);
      });
     return controller;
}
function setAllCustomValidity(){
    let formDiv=document.querySelector(".testFormValidationDiv");
    formDiv.querySelector("input[name='name']").addEventListener("change",(event)=>{myReportValidity(event,"Must have name!!!");});
    formDiv.querySelector("input[name='e-mail']").addEventListener("change",(event)=>{myReportValidity(event,"Must be vaild E-mail !!!");});
    formDiv.querySelector("input[name='phone']").addEventListener("change",(event)=>{myReportValidity(event,"Must be vaild Phone !!!");});
    formDiv.querySelectorAll(".genderSelector>input").forEach((radio)=>{
        radio.addEventListener("change",(event)=>{myReportValidity(event,"Must have name!!!");})
    });
}
function sendAjaxRequest(){
  let url="./AJAX_Test";
  let ajax=new XMLHttpRequest();
  //var formData = new FormData();
  //formData.append("username", "Hly");
  ajax.onreadystatechange=(event)=>{
     if(ajax.readyState==4&&ajax.status==200){
        console.log(ajax);
     }
  }
  ajax.open("POST",url,true);
  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //note &
  ajax.send("username=hly&id=6666");
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
    setAllCustomValidity();
    //Modal
    document.querySelectorAll(".ShowModalBtn,.CloseModalBtn").forEach((event)=>{event.addEventListener(
        "click",
        ()=>document.querySelector(".ModalBackground").classList.toggle("Modal_Background_displayed")
    )});
    let carouselController=carouselControllerConstructor("Carousel_1");
    document.querySelector(".AjaxBtn_1").addEventListener("click",sendAjaxRequest);
}
