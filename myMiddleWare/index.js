var Camp;
var Comment;
module.exports={
    setup:function(_camp,_comment){
        Camp=_camp;
        Comment=_comment;
    },
    isLoggedIn:function (req,res,next){
        if(req.isAuthenticated()){
            return next();
        }else{
            req.flash("message",["fail","Please Login!!!"]);
            res.redirect("/login");}
    },
    isUserOwnThisCamp: function(req,res,next){
        if(req.params.id==undefined){res.redirect("back");}
        var idCamp=req.params.id;
       Camp.findById(idCamp,function(err,campFound){
         if(err){res.redirect("back");}
         else{
           if(campFound.author.id.equals(req.user.id)){
                next();
           }else{
             req.flash("message",["fail","You are not the owner of this camps!"]);
             res.redirect("back");
           }
         }
        
       });
      },
      isUserOwnThisComment: function(req,res,next){
        if(req.params.cmtId==undefined){res.redirect("back");}
        var campId=req.params.campId;var commentId=req.params.cmtId;
        Comment.findById(commentId,function(err,commentFound){
         if(err){res.redirect("back");}
         else{
           if(commentFound.author.id.equals(req.user.id)){
                next();
           }else{
                req.flash("message",["fail","You are not the owner of this comments!"]);
                res.redirect("back");
           }
         }
        
       });
      }
}