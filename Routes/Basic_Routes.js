var express;

var filepath;
var standardAddCallBack;


module.exports={
    setUp:function(module_package,router){
        express=module_package.express_module;
        filepath=module_package.filepathNow;
        standardAddCallBack=module_package.stdCallBack;
        allRoutesStart(router);
      }
  }
function allRoutesStart(router){
    router.get("/",function(req,res){
        //console.log("count :"+count);
        res.render("camp_Landing.ejs",{paths:filepath});
      });
    router.get("/public/scripts/:file",function(req,res){
        var path=filepath+"/scripts/"+req.params.file;
        res.sendFile(path);
      });
    router.get("/public/styles/:file",function(req,res){
        var path=filepath+"/styles/"+req.params.file;
        res.sendFile(path);
      });
    router.get("/public/images/:file",function(req,res){
        var path=filepath+"/images/"+req.params.file;
        res.sendFile(path);
      });
      // wild card
  }