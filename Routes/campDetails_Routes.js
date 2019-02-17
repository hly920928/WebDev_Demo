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
        Camp=module_package.camp_model;
        //standardAddCallBack=module_package.stdCallBack;
        isLoggedIn=module_package.isLoggedIn_middleware;
        allRoutesStart(router);
      }
  }
function allRoutesStart(router){
  router.get("/campDetails/:id",function(req,res){
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
  router.post("/campDetails/:id/newComment",isLoggedIn,function(req,res){
    var id=req.params.id;
    /*var _auther=req.body.comment.auther;
    var _content=req.body.comment.content;
      var cmt={auther:_auther,content:_content};
      */
     campMongo.addNewCommentAtCampByUserToDB({_id:id},req.body.content,req.user,function(){res.redirect("/campSets/"+id);});
  });
  router.put("/campDetails/:id/Update",function(req,res){
    var idNow=req.params.id;
    //res.send("In put /campDetails/"+idNow+"/Edit");
    Camp.findOneAndUpdate({_id:idNow},req.body.camp,function(err,Camp){
      if(err){
        res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:Camp,newWarning:"Update Error"});
         //res.redirect("/campDetails/"+idNow);
      }else{
        res.redirect("/campDetails/"+idNow);}
    });
  
  });
  router.delete("/campDetails/:id/Destroy",function(req,res){
    var idNow=req.params.id;
    //res.send("In put /campDetails/"+idNow+"/Edit");
    Camp.findOne({_id:idNow},req.body.camp,function(err,CampFound){
      if(err){
        res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:CampFound,newWarning:"Error:Camp Can't found "});
         //res.redirect("/campDetails/"+idNow);
      }else{
        CampFound.delete(function(err){
          if(err){
            res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:CampFound,newWarning:" Error:Camp Can't DELETE"});
          }else{
            res.redirect("/campSets/");
          }
        });
       }
    });
  
  });
  }
