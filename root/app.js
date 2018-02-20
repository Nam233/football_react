var express=require("express");
var app=express();
app.post("/api/login",function(req,res){
	res.json({
		code:0,
		msg:"OK!"
	})
});
app.post("/api/register",function(req,res){
	res.json({
		code:0,
		msg:"OK!"
	})
});
app.listen(8848,function(){
	console.log("服务器启动！");
})