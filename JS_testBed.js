"use strict"
var obj1={
    a:5
}
function myAdd(b,c){
   return this.a+b+c;   
}
var v1=myAdd.call(obj1,1,2);//8
var v2=myAdd.apply(obj1,[1,3]);//9
var b1=myAdd.bind(obj1,1,2);//function
var b2=myAdd.bind(obj1,1);//function partially bind
console.log(b1());
console.log(b2(3));
//constructor
function vec3(x,y,z){
   this.x=x;
   this.y=y;
   this.z=z;
}
var v1=new vec3(1,1,1);
var v2= new vec3(2,2,2);


//inheritance
function Car(brand,type,year){
    this.brand=brand;
    this.type=type;
    this.year=year;
}
function Motorcycle(brand,type,year){
    Car.apply(this,arguments);//attribute binding
    this.numOfWheel=4;
}
var Motorcycle1=new Motorcycle("A","TypeB",16);

function Person(name){
    this.name=name;
}
var p1=new Person("Tom");
var p2=new Person("Jack");
console.log(p1.__proto__===Person.prototype);//note constructor.prototype object no .prototype
//prototype chaining
Person.prototype.species="homo sapiens";//add attribute,and only once for all Object created by new
console.log(p1.species);//after new ,add still effective
//closure as private var
function counter(){
    let c=0;
   return function(){return ++c;};
}
var ct1=counter();
console.log(ct1());
console.log(ct1());
console.log(ct1());

var ct2=counter();
console.log(ct2());
console.log(ct2());
console.log(ct2());
console.log(ct2());
//note ct1 ct2, c is not the same