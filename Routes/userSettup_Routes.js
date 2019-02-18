var express;
var mongoose;
var filepath;
var urlroot;
var User;
var passport;
var standardAddCallBack;
module.exports={
      setUp:function(module_package,router){
        express=module_package.express_module;
        filepath=module_package.filepathNow;
        urlroot=module_package.url;
        //mongoose=module_package.mongoose_module;
        User=module_package.userModel_module;
        passport=module_package.passport_module;
        standardAddCallBack=module_package.stdCallBack;
        allRoutesStart(router);
      }
  }
function allRoutesStart(router){
  router.get("/register",function(req,res){
    res.render("campRegister.ejs");
  });
  router.get("/login",function(req,res){
    res.render("campLogin.ejs");
  });
  router.get("/login/:Status",function(req,res){
    var warning="null";
    if(req.params.Status=="LoginError"){
      warning={
        status:"fail",
        content:"Login Error!Try Again."
      };
    }
    if(req.params.Status=="PleaseLogin"){
      warning={
        status:"fail",
        content:"Please Login First"
      };
    }
    res.render("campLogin.ejs",{Warning:warning});
  });
  router.post("/processRegister",function(req,res){
    var un=req.body.username;
    var pw=req.body.password;
    User.register(new User({username:un}),
    pw,
    function(err,user){
        if(err){
            console.log(err);
            return res.redirect("/register");
  
        }else{
            passport.authenticate("local")(
              req,res,
            function(){res.redirect("/campSets");}
            )
        }
    }
    );
  });
  router.post("/processLogin", passport.authenticate('local', 
    { successRedirect: "/campSets/LoginOK",
     failureRedirect: '/login/LoginError' }),
            function(req,res){} 
  );
  
  router.get("/logout",function(req,res){
    req.logOut();
    res.redirect("back");
  });
  
  }