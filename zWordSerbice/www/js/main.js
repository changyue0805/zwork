requirejs.config({
	baseUrl:'js/lib',//模块加载的根路径（通用）
	paths:{
		'app':'../app',//路径
		'jquery':'jquery-3.1.1',
		'myutil':'../app/myUtil'
	},//对象
	shim:{
		'myutil':{
			exports:'createXHR'
		}
	}

});
//我定义的模块（用ajax吧内容添加进去）
define(['app/index4nav','app/index4banner','app/index4tab','app/index4header','app/index5main'],function(nav,banner,tab,header,main){
//调用nav模块方法
	var root1 =document.querySelector("#nav ul");
	var root2 =document.querySelector("#banner");
	var root3=document.querySelector(".tab");
	var root4=document.querySelector("#header");
	var root5=document.querySelector('#mainCtiy');
	nav(root1);
	banner(root2);
	tab(root3);
	main(root5);
})