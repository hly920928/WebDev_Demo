//var express;
//var mongoose;
var filepath;
var urlroot;
var Camp;
var campMongo;
var isLoggedIn;
//var standardAddCallBack;
module.exports={
      setUp:function(module_package,router){
        express=module_package.express_module;
        filepath=module_package.filepathNow;
        urlroot=module_package.url;
        //mongoose=module_package.mongoose_module;
        campMongo=module_package.myMongo_module;
        Camp=module_package.myMongo_module.campModel();
        //standardAddCallBack=module_package.stdCallBack;
        isLoggedIn=module_package.isLoggedIn_middleware;
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
          res.render("campSets.ejs",{url:urlroot,paths:filepath,camps:allCamps});
        }
      });
  });
  //must before "/campSets/add"
  router.get("/campSets/:id",function(req,res){
    var _id=req.params.id;
    Camp.findById(_id).populate("comments").exec(
        function(err,_camp){
            if(err){
                console.log(err);
              }else{
                res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:_camp});
              }
    });
  });
  router.post("/campSets",isLoggedIn,function(req,res){
    campMongo.addNewCampByUserToDB(req.body.camp,req.user,
      function(){res.redirect("/campSets/add");},
      function(){res.redirect("/campSets");});
  });
  }
