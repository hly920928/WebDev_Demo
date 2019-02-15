const mHOST="127.0.0.1";
const mPORT=27017;
var mUrl="mongodb://"+mHOST+":"+mPORT+"/cats";
var mongoose=require("mongoose");

var catSchema=new mongoose.Schema({
  name:String,
  age:Number,
  temperament:String
});
var Cat=mongoose.model("Cat",catSchema);//compile Schema into model
/*
var NeoCat=new Cat(
{
name:"Cat5",
age:4,
temperament:"mild"
}
);
NeoCat.save(
function(err,cat){

    if(err){
        console.log("Error At Cat1 saved!");
        return;
    }else {
        console.log("Cat1 saved!");
        console.log(cat);        
    }
});

*/
Cat.create(
{
  name:"Cat6",
  age:6,
  temperament:"bad"
},
function(err,cat){

    if(err){
        console.log("Error At Cat1 saved!");
        return;
    }else {
        console.log("Cat1 saved!");
        console.log(cat);        
    }
});
Cat.find({},
function(err,cats){
  if(err){
   console.log("Cat find error :"+err);
  }else{
    console.log("All cats :");
    console.log(cats);
  }
});
console.log("ok");