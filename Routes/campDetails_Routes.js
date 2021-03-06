//var express;
//var mongoose;
var filepath;
var urlroot;
var Camp;
var Comment;
var campMongo;
var isLoggedIn;
var isUserOwnThisCamp;
var isUserOwnThisComment;
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
        Comment=module_package.comment_model;
        //standardAddCallBack=module_package.stdCallBack;
        isLoggedIn=module_package.middleWare.isLoggedIn;
        isUserOwnThisCamp=module_package.middleWare.isUserOwnThisCamp;
        isUserOwnThisComment=module_package.middleWare.isUserOwnThisComment;
        getMyWarning=module_package.getMyWarning;
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
                res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:_camp,Warning:getMyWarning(req)});
              }
    });
  });
  router.post("/campDetails/:id/newComment",isLoggedIn,function(req,res){
    var id=req.params.id;
    /*var _auther=req.body.comment.auther;
    var _content=req.body.comment.content;
      var cmt={auther:_auther,content:_content};
      */
     campMongo.addNewCommentAtCampByUserToDB({_id:id},req.body.content,req.user,function(){res.redirect("/campDetails/"+id);});
  });
  router.put("/campDetails/:id/Update",isLoggedIn,isUserOwnThisCamp,function(req,res){
    var idNow=req.params.id;
    //res.send("In put /campDetails/"+idNow+"/Edit");
    Camp.findOneAndUpdate({_id:idNow},req.body.camp,function(err,Camp){
      if(err){
        res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:Camp,Warning:getMyWarning(req)});
         //res.redirect("/campDetails/"+idNow);
      }else{
        req.flash("myWarning",["success","Update Camp OK!!!"]);
        res.redirect("/campDetails/"+idNow);}
    });
  
  });
  router.delete("/campDetails/:id/Destroy",isLoggedIn,isUserOwnThisCamp,function(req,res){
    var idNow=req.params.id;
    //res.send("In put /campDetails/"+idNow+"/Edit");
    Camp.findOne({_id:idNow},function(err,CampFound){
      if(err){
        res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:CampFound});
         //res.redirect("/campDetails/"+idNow);
      }else{
        CampFound.delete(function(err){
          if(err){
            res.render("campDetail.ejs",{url:urlroot,paths:filepath,c:CampFound});
          }else{
            res.redirect("/campSets/");
          }
        });
       }
    });
  });
  router.put("/campDetails/:campId/updateComment/:cmtId",isLoggedIn,isUserOwnThisComment,function(req,res){
    var campId=req.params.campId;var commentId=req.params.cmtId;
    //res.send("In comment update");
    Comment.findOneAndUpdate({_id:commentId},{content:req.body.content},function(err,_comment){
      if(err){
        res.redirect("/campDetails/"+campId);
         //res.redirect("/campDetails/"+idNow);
      }else{
        res.redirect("/campDetails/"+campId);}
    });
  
  });
  router.delete("/campDetails/:campId/destroyComment/:cmtId",isLoggedIn,isUserOwnThisComment,function(req,res){
    var campId=req.params.campId;var commentId=req.params.cmtId;
    //res.send("In put /campDetails/"+idNow+"/Edit");
    Comment.findOne({_id:commentId},function(err,_commentFound){
      if(err){
        res.redirect("/campDetails/"+campId);
         //res.redirect("/campDetails/"+idNow);
      }else{
        _commentFound.delete(function(err){
          if(err){
            res.redirect("/campDetails/"+campId);
          }else{
            res.redirect("/campDetails/"+campId);
          }
        });
       }
    });
  });
  }
