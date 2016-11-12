var express =require('express');
var app =express();
var fs =require("fs");
var http=require('http');
//定义变量存取数据
var navdata =null;
var menudata =null;
var bannerdata =null;
var cityWalk=null;
//异步 要用相对路径不要用决对路径
fs.readFile('nav.json',function(err,data){
	if(err)
		console.log(err);
	navdata=data;
	
	fs.readFile('menu.json',function(err1,data1){
		if(err1)
			console.log(err1);
		menudata=data1;

		fs.readFile('banner.json',function(err2,data2){
			if(err2)
				console.log(err2);
			bannerdata=data2;
		fs.readFile('cityWalkList.json',function(err3,data3){
			if(err3)
				console.log(err3);
			cityWalk=data3;
			
			app.listen(9000);//端口
			console.log("启动");
			})
		})
	})
})
//提供web服务功能
app.use(express.static('www'));
//写接口
app.all('/*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
//处理客户端发来的请求
app.get('/znav',function(req,res,next){
	//转换成json
	res.header('Content-Type','application/json');
	res.send(navdata);
})
app.get('/zmenu',function(req,res,next){
	//转换成json
	res.header('Content-Type','application/json');
	res.send(menudata);
})
app.get('/zbanner',function(req,res,next){	
	//转换成json
	res.header('Content-Type','application/json');
	res.send(bannerdata);
})
app.get('/input',function(req,res,next){
	var keyword=req.query['value'];
	http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword='+keyword,function(httpRes){
		var buffer=[];
		//发送请求
		httpRes.on('data',function(chunk){
		 /**
              *
              * Nodejs中的Buffer:所谓缓冲区Buffer，就是 "临时存贮区" 的意思，是暂时存放输入输出数据的一段内存。
              JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造
              node发送http请求：注意 "res.on('data', function(chunk))"，其中的参数chunk是Buffer对象，
              直接用+拼接会自动转换为字符串，对于宽字节字符可能会导致乱码产生，
              解决方法：
              (1) 通过可读流中的setEncoding()方法，该方法可以让data事件传递不再是Buffer对象，而是编码后的字符串，其内部使用了StringEncoder模块。
              (2) 将Buffer对象暂存到数组中，最后在组装成一个大Buffer让后编码转换为字符串输出。
              */
            buffer.push(chunk);          
  			//请求结束，获取返回数据
  		})	
         	httpRes.on('end',function(){
             //将数组中的数据返回
            var resData = Buffer.concat(buffer);
            //发送到客户端的数据
//          console.log(resData);
			res.send(resData);
		
			
		})
		
	})
})
app.get('/zcity',function(req,res,next){	
	//转换成json
	res.header('Content-Type','application/json');
	res.send(cityWalk);
})
