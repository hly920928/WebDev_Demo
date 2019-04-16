if(process.env.COMPUTERNAME=="HLY2-PC"){
  PORT=27002;HOST = "192.168.1.3";
}else if (process.env.PWD==  '/root/AlC_NodeWebDev') {
    PORT = 27002; HOST= "0.0.0.0";
}else{
  PORT = process.env.PORT;HOST = process.env.IP;
}
const express=require("express");
const app=express();
app.use(express.static("public"));
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
//method-override
const methodOverride=require("method-override");
app.use(methodOverride("_methodOR"));
//sanitizer
const expressSanitizer=require("express-sanitizer");
app.use(expressSanitizer());
//basic setting
const filepath="E:/Programming_Project/hly920928.github.com";
const urlroot="http://127.0.0.1:44564"
//mongoDB

function campAddCallBack(err,blog){

    if(err){
        console.log("Error At blog create!");
        return;
    }else {
        console.log("A blog created!");
        console.log(blog);        
    }
  }
var mongoose=require("mongoose");
mongoose.set('useFindAndModify', false);//avoid warning
var blogMongo=require("./node_modules_my/blog_Mongoose_module.js");
blogMongo.connectionBlogDB(mongoose); 
var blogInfoMongo=blogMongo.getBlogModel(mongoose);

//blogInfomongo.create(blogNow,campAddCallBack);
var seq=0;
function mainloop(){
    console.log("Server Working! "+seq);seq++;
}
  //settingbodyParser

app.listen(PORT,HOST,function(){
    console.log("server start "+HOST+":"+PORT);
});
app.get("/",function(req,res){
    res.redirect("/BlogIndexAll");


});
app.get("/BlogIndexAll",function(req,res){
    blogInfoMongo.find({},
        function(err,_allBlog){
          if(err){
              console.log("Camp find error :"+err);
          }else{
            _allBlog.forEach(
              function(blog){
                if(blog.body!=undefined){blog.body=blog.body.substring(0,80);}
                else{blog.body="Not Content";}
              }
            );
            res.render("Blog_IndexAll.ejs",{url:urlroot,paths:filepath,allBlogs:_allBlog});
          }
        });


});

app.get("/BlogCreateNew",function(req,res){
        res.render("Blog_CreateNew.ejs",{url:urlroot,paths:filepath});
});
app.post("/BlogCreateNew",function(req,res){
  req.body.NewBlog.body=req.sanitize(req.body.NewBlog.body);
  blogInfoMongo.create(req.body.NewBlog, function(err,_blog){
    if(err){
      res.redirect("/BlogCreateNew");
    }else{
      res.redirect("/BlogIndexAll");
    }
  });

});
app.get("/BlogShowDetail/:id",function(req,res){
  var _id=req.params.id;
  blogInfoMongo.findById(_id,function(err,_blog){
     if(err){
        res.redirect("/BlogIndexAll");
     }
     else{
      res.render("Blog_ShowDetail.ejs",{url:urlroot,paths:filepath,blog:_blog});
     }
  });
});

app.get("/BlogEditOld/:id",function(req,res){

  var _id=req.params.id;
  blogInfoMongo.findById(_id,function(err,_blog){
    if(err){
       res.redirect("/BlogIndexAll");
    }
    else{
     res.render("Blog_EditOld.ejs",{url:urlroot,paths:filepath,blog:_blog});}
  });


});
app.put("/BlogUpdateOld/:id",function(req,res){

  var id=req.params.id;
  //res.send("In put /BlogUpdateOld/"+_id);
  blogInfoMongo.findOneAndUpdate({_id:id},req.body.NewBlog,function(err,_blog){
    if(err){
       res.redirect("/BlogEditOld/"+id);
    }else{
      res.redirect("/BlogShowDetail/"+id);}
  });
  
});
app.delete("/BlogDeleteOld/:id",function(req,res){

  var _id=req.params.id;
  blogInfoMongo.findByIdAndRemove(_id,function(err,_blog){
    if(err){
       res.redirect("/BlogEditOld/"+_id);
    }else{
      res.redirect("/BlogIndexAll/");}
  });
});
  app.get("/public/:dir/:file",function(req,res){
    var dir=req.params.dir;var file=req.params.file;
     res.redirect("/"+dir+"/"+file);
  
  
    });

// heartbeat
/* setInterval(mainloop,5000); */