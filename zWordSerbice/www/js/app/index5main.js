define(['jquery','myutil','app/myfn'],function($,x,url){
	function getMian(root){
		var xhr=x();
		xhr.open('get',url.getBaseURL()+'/zcity');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				var mains =JSON.parse(xhr.responseText);
//				找到mainCtiy大容器
				var cityUl=$('.ctiyUl');
				//动态创建
				mains.forEach(function(elem,index){
				var cityLi=$("<li class='cityLi'></li>");
				var cityImg=$("<img class='cityImg'/>");
				cityImg.attr("src",elem['imgurl']);
				var citySpan1=$('<span class="citySpan1"></span>');
				var citySpan2=$('<span class="citySpan2"></span>');
				var citySpan3=$('<span class="citySpan3"></span>');
				var citySpan4=$('<span class="citySpan4"></span>');
				var citySpan5=$('<span class="citySpan5"></span>');
				var cityH3=$("<h3 class='cityH3'></h3>");
				
				//里面的ul
				var ul=$('<ul class="ul"></ul>');
				elem['introduce'].forEach(function(el,ind){
					var li=$('<li class="li"></li>');
					var img=$('<img class="img"/>');
					img.attr("src","images/xingxing.jpg")
					li.html(el);
					ul.append(li);
					li.append(img);
				})
				var citySpan6=$('<span class="citySpan6"></span>');
				var citySpan7=$('<span class="citySpan7"></span>');
				var citySpan8=$('<span class="citySpan8"></span>');
				var cityInput=$('<input type="button" class="cityInput" />')
				citySpan6.html(elem['oldPrice']);
				citySpan7.html(elem['newPrice']);
				citySpan8.html('元起');
				cityInput.val('立即订购');
				cityH3.html(elem['title']);
				citySpan1.html(elem["address"]);
				citySpan2.html(elem["browseCount"]);
				citySpan3.html('次数浏览');
				citySpan4.html(elem["soldCount"]);
				citySpan5.html('件数已售');
				cityLi.append(ul);
				cityLi.append(citySpan1);
				cityLi.append(citySpan2);
				cityLi.append(citySpan3);
				cityLi.append(citySpan4);
				cityLi.append(citySpan5);
				cityLi.append(citySpan6);
				cityLi.append(citySpan7);
				cityLi.append(citySpan8);
				cityLi.append(cityInput);
				cityLi.append(cityH3);
				cityLi.append(cityImg);
				cityUl.append(cityLi);
				});
				
				$('a').on('click',function(e){	
					//阻止默认事件
				e.preventDefault();
				//获取点击的是第几页
				var pageNum=$(this).html();
				$('.cityLi').eq(pageNum-1).show().siblings().hide();
				$(this).addClass('active').siblings().removeClass('active');
				console.log($('.cityLi').eq(pageNum-1));

				})
				
			}
		}
	}
	
	
	
	
	
	return getMian;
})