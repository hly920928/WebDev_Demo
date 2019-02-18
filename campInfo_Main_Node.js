const PORT = 44564 ;
//const HOST = "240e:e0:8a44:3b00:6dff:3469:34d0:e971";
const HOST = "192.168.1.6";
//127.0.0.1
//116.234.26.211
//192.168.1.6
//240e:e0:8a44:3b00:c90:87e6:6297:ca4a
const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));//__dirname:dir of this .js file
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const filepath="E:/Programming_Project/hly920928.github.com";
const urlroot="http://127.0.0.1:44564";
//method-override
const methodOverride=require("method-override");
app.use(methodOverride("_methodOR"));
//mongoDB

var campMongo=require("./node_modules_my/campInfo_Mongoose_module.js");
var mongoose=campMongo.getMongoose();
function standardAddCallBack(err,data){

  if(err){
      console.log("Error At data create!");
      console.log(err);
      return;
  }else {
      console.log("A data created!");
      console.log(data);        
  }
}
//console.log(campMongo.mongoUrl);
//conection
campMongo.connection();
//Schema setting
var Camp=campMongo.campModel();
var Comment=campMongo.commentModel();
//add Fake Camp
//campMongo.addAllFakeCampToDB(standardAddCallBack);

//add Fake Comment
//campMongo.addAllFakeCommentAtCampToDB({name:"camp1"});
//mongo end

//authSetup

var myAuth=require("./node_modules_my/myAuth_module");
myAuth.setupAuth(app,"GoodLuck");
var AuthMod=myAuth.AuthModule;
var passport=AuthMod._passport;
var passportLocal=AuthMod._passportLocal;
var passportLocalMongoose=AuthMod._passportLocalMongoose;
campMongo.linkAuthModule(passport,passportLocal,passportLocalMongoose);
var User=campMongo.userModel();
campMongo.setupUserPassport(User);
//middleware
var isLoggedIn=myAuth.isLoggedIn;


var modulePackge={
  express_module:express,
  passport_module:passport,
  passportLocal_module:passportLocalMongoose,
  passportLocalMongoose_module:passportLocalMongoose,
  filepathNow:filepath,
  url:urlroot,
  mongoose_module:mongoose,
  camp_model:Camp,
  comment_model:Comment,
  user_model:User,
  myMongo_module:campMongo,
  userModel_module:User,
  isLoggedIn_middleware:isLoggedIn,
  stdCallBack:standardAddCallBack
}
//middleware pass user
app.use(function(req,res,next){
  res.locals.currentUser=req.user;
  res.locals.Warning="null";
  next();
});

 
//start server
app.listen(PORT,HOST,function(){
  console.log("server start "+HOST+":"+PORT);
});
//===============ROUTE




var allRoutes=express.Router({mergeParams:true});

//BasicRoutes
var BasicRoutes_Module=require("./Routes/Basic_Routes.js");
BasicRoutes_Module.setUp(modulePackge,allRoutes);

//campSetsRoutes
var campSetsRoutes_Module=require("./Routes/campSets_Routes.js");
campSetsRoutes_Module.setUp(modulePackge,allRoutes);

//campDetailsRoutes
var campDetailsRoutes=require("./Routes/campDetails_Routes.js");
campDetailsRoutes.setUp(modulePackge,allRoutes);

//userSettpRoutes
var userSettupRoutes_Module=require("./Routes/userSettup_Routes.js");
userSettupRoutes_Module.setUp(modulePackge,allRoutes);

app.use(allRoutes);




//
//heartBeats
var seq=0;
function heartBeats(){
    console.log("Server Working! "+seq);seq++;
  }
setInterval(heartBeats,5000);


