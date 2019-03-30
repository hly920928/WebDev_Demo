var PORT;var HOST;

if(process.env.COMPUTERNAME=="HLY2-PC"){
  PORT=44564;HOST = "192.168.1.3";
}else if (process.env.PWD== '/root/StaticSite') {
    PORT = 27777 ; HOST= "0.0.0.0";
}else{
  PORT = process.env.PORT;HOST = process.env.IP;
}
const express=require("express");
const app=express();
app.use(express.static(__dirname));//__dirname:dir of this .js file

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,HOST,function(){
    console.log("server start "+HOST+":"+PORT);
  });
app.get("/",function(req,res){res.sendFile("index.html")});
app.post("/htmls/AJAX_Test",function(req,res){
  let name=req.body["username"];
  let id=req.body["id"];
  let a={
    a:1,
    b:2
  };
  res.json(a)
}
);