const PORT = 44564 ;
//const HOST = "240e:e0:8a44:3b00:407f:17af:44d4:d21";
const HOST = "127.0.0.1";
//127.0.0.1
//116.234.26.211
//192.168.1.6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var seq=0;
var _friends=["F1","F2"];
function loop(){
    console.log("Server Working! "+seq);seq++;
  }
var request = require('request');
request.get('https://hly920928.github.io/',
function(err,httpResponse,body){
  console.log("error :"+err);
  console.log("statusCode :"+httpResponse.statusCode);
  console.log("Body////");
   console.log(body);
})
function WeatherRequest(req){
  var weatherURL="http://apifreelat.market.alicloudapi.com/whapi/json/aliweather/briefforecast3days"
var weatherHeader={Authorization:"APPCODE 11c9963b67194af7babd3c89a1e93a31"} 
var weatherBody={lat:"39.91488908",lon:"116.40387397" ,token:"443847fa1ffd4e69d929807d42c2db1b"};
var weatherOption={
  url:weatherURL,
  method :"POST",
  headers:weatherHeader,
  form:weatherBody
}
request(weatherOption,weatherCallBack);
}
var OMDBAppKey= 59188403;
function weatherCallBack(err,httpResponse,body){
if(err==null&&httpResponse.statusCode==200){
  //console.log(body);
 var weatherData=JSON.parse(body);
 return weatherData;
}
}

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.static("public"))
app.listen(PORT,HOST,function(){
    console.log("server start "+HOST+":"+PORT);
});
app.post("/addfriend",function(req,res){
    var name=req.body.MoviesKW;// must app.use(bodyParser.urlencoded({extended:true}));
    _friends.push(name);
    res.redirect("/prq");
});
app.get("/r/:sub",function(req,res){
    res.send("Hi :sub");
});
app.get("/r/:sub/comments/:id/:page",function(req,res){
    var pr=req.params;
var sub=pr.sub;    
var id=pr.id;    
    res.send("Hi :sub :"+sub+" : "+id);
});
var speak={
  pig:"Oink",
  cow:"Moo",
  dog:"Woof",
}

app.get("/speak/:ani",function(req,res){
    var pr=req.params;
    var ani=pr.ani;   
    if(speak[ani]==undefined){
      res.send("ani unknown");
    }else{
      res.send(speak[ani]+" speak");
    }
});
app.get("/repeat/:word/:num",function(req,res){
  console.log("repeating!");
    var pr=req.params;
    var word=pr.word;   
    var n=Number(pr.num); 
    var sendData=word;
    res.render("fil.ejs",{thingV:sendData,nV:n});
});
app.get("/bye",function(req,res){
    res.send("goodBye XXXXXX");
});
app.get("/fil/:thing",function(req,res){
    var pr=req.params;
    var thing=pr.thing;
    res.render("fil.ejs",{thingV:thing});
});
app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/mcg",function(req,res){
    res.render("myColorGame.ejs");
});
app.get("/prq",function(req,res){
    res.render("postReq.ejs",{frds:_friends});
});
app.get("/public/:file",function(req,res){
    var path="E:\\NodeJS\\public\\"+req.params.file;
    res.sendFile(path);
});
app.get("/movies",function(req,res){
  res.render("movies.ejs");
});
app.post("/searchMovies",function(req,res){
 
  var name=req.body.MoviesKW;// must app.use(bodyParser.urlencoded({extended:true}));
  var url="http://www.omdbapi.com/?apikey="+OMDBAppKey+"&s="+name;
  request(url,
   function(error, response, body){
  if(error==null&&response.statusCode==200){
    //console.log(body);
   var Data=JSON.parse(body);
   res.render("moviesSerach.ejs",{data:Data["Search"]});
  }

}
  );
});
app.get("*",function(req,res){
    res.send("Not Router");
});

setInterval(loop,5000);