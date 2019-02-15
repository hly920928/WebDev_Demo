const PORT = 44564 ;
//const HOST = "240e:e0:8a44:3b00:407f:17af:44d4:d21";
const HOST = "127.0.0.1";
//127.0.0.1
//116.234.26.211
//192.168.1.6
//express
const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));//__dirname:dir of this .js file
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,HOST,function(){
    console.log("server start "+HOST+":"+PORT);
});
//path setting
const filepath="E:/Programming_Project/hly920928.github.com";
const urlroot="http://127.0.0.1:44564";
//mongo

var mongoose=require("mongoose");
var mHOST="127.0.0.1";
var mPORT=27017;
var mongoUrl="mongodb://"+mHOST+":"+mPORT+"/AuthDemo";
function connectionDB(){
    mongoose.connect(mongoUrl,{useNewUrlParser:true});
    mongoose.connection.on('connected',
            function(){
            console.log("mongoose OK");
           });
     mongoose.connection.on('error',
            function(err){
            console.log("mongoose Error :"+err);
           });
   }
connectionDB();
//passport setting
var passport=require("passport");
var passportLocal=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
app.use(require("express-session")({
   secret:"886",
   resave:false,
   saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
//user
var User_Schema=new mongoose.Schema({
  username:String,
  password:String
});
User_Schema.plugin(passportLocalMongoose);
var User_Model =mongoose.model("User",User_Schema);
passport.use(new passportLocal(User_Model.authenticate()));
passport.serializeUser(User_Model.serializeUser());
passport.deserializeUser(User_Model.deserializeUser());
//User_Model.create({username:"John",password:"666"})
// middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/");
    }
}
//=============
//ROUTES
app.get("/",function(req,res){
res.render("authHome.ejs");
});
app.get("/secretPage", isLoggedIn,function(req,res){
    res.render("secretPage.ejs");
});
app.get("/register",function(req,res){
    res.render("registerPage.ejs");
});
app.post("/processRegister",function(req,res){
    var un=req.body.username;
    var pw=req.body.password;
    User_Model.register(new User_Model({username:un}),
    pw,
    function(err,user){
        if(err){
            console.log(err);
            return res.redirect("/register");

        }else{
            passport.authenticate("local")(
              req,res,
            function(){res.redirect("/secretPage")
           })
        }
    }
    );
});
app.get("/login",function(req,res){
    res.render("loginPage.ejs");
});
app.get("/logout",function(req,res){
    req.logOut();
    res.redirect("/");
});
app.post("/processLogin",
passport.authenticate("local",
{successRedirect:"/secretPage",
failureRedirect:"login"
}),
function(req,res){});
//heartBeats
var seq=0;
function heartBeats(){
    console.log("Server Working! "+seq);seq++;
  }
setInterval(heartBeats,5000);