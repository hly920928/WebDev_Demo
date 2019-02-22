//var express;
//var mongoose;
var filepath;
var urlroot;
var Camp;
var campMongo;
var isLoggedIn;
var getMyWarning;
//var standardAddCallBack;
module.exports={
      setUp:function(module_package,router){
        express=module_package.express_module;
        filepath=module_package.filepathNow;
        urlroot=module_package.url;
        //mongoose=module_package.mongoose_module;
        campMongo=module_package.myMongo_module;
        Camp=module_package.camp_model;
        //standardAddCallBack=module_package.stdCallBack;
        isLoggedIn=module_package.middleWare.isLoggedIn;
        getMyWarning=module_package.getMyWarning;
        allRoutesStart(router);
      }
  }
  
function allRoutesStart(router){
  router.get("/campSets",function(req,res){
    Camp.find({},
      function(err,allCamps){
        if(err){
            console.log("Camp find error :"+err);
        }else{
          var myW=getMyWarning(req);
          res.render("campSets.ejs",{url:urlroot,paths:filepath,camps:allCamps,Warning:myW});
        }
      });
  });
  router.get("/campSets/:Statue",function(req,res){
    if(req.user==undefined||req.user.username==undefined){
      req.flash("myWarning",["fail","Please Login First!!!"]);
    }
    if(req.params.Statue=="LoginOK"){
      req.flash("myWarning",["success","Login Success!!! Welcome "+req.user.username+"!!!"]);
    }
     res.redirect("/campSets");
  });
  //must before "/campSets/add"
 
  router.post("/campSets",isLoggedIn,function(req,res){
    campMongo.addNewCampByUserToDB(req.body.camp,req.user,
      function(){res.redirect("/campSets/add");},
      function(){res.redirect("/campSets");});
  });
  }
