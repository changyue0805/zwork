define(['jquery','myutil','app/myfn'],function($,x,url){
	function getTab(root){
		var xhr =x();
		xhr.open('get',url.getBaseURL()+'/zmenu');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
			var tabs =JSON.parse(xhr.responseText);	
			tabs.forEach(function(elem,index){
				//tab左邊
				var li =$("<li class='leftli'></li>");
				var div =$("<div class='somDiv'></div>");
				var img =$("<img class='leftImg'>");
				var h3 =$("<h3></h3>");
				var p =$("<p> </p>");
				var span=$('<span>&gt;</span>')
				img.attr('src',elem['imgMenu']);
				h3.html(elem['title']);
				p.html(elem['mainCity']);
				li.append(img);
				li.append(div);
				div.before(span);
				div.append(h3);
				div.append(p);
				$(root).append(li);
				
				
				//tab右邊
				var bigDiv=$("<div class='div_right'></div>");
				li.append(bigDiv);
				function handlerLfet(e){
					if(e.type=='mouseenter'){
						$(this).children('.div_right').css('display','block');
						$(this).children('.div_right').fadeIn(100)
						$(this).css('background','white');
					}else if(e.type=='mouseleave'){
						$(this).children('.div_right').css('display','none');
						$(this).css('background','');
					}
					
				}
				li.on("mouseenter mouseleave",handlerLfet);				 	
				 	//tab 裡面的內容
					//tab 第一個div
					var tabDiv1=$("<div class='Div1'></div>");
					//tab 第二個div
					var tabDiv2=$("<div class='Div2'></div>");
					//划出来模块的标题1
					var firsth2 =$("<h2 class='tabRh1'></h2>");
					firsth2.html(elem['moreCity'][0]['cityName']);
					//划出来模块的标题下的内容
//					左边的div1
					var rightul =$("<ul class='tab_ul'></ul>");
					elem['moreCity'][0]['items'].forEach(function(elem1,index1){
						var rightLi1 =$('<li class="rigthli1"></li>');
						var righta=$('<a class="righta"></a>');
						
//						console.log(elem1)
						//判断图片
						if(elem['moreCity'][0]['items'][0].indexOf('.jpg') > -1){
//						console.log(elem['moreCity'][0]['items']);
						var rightimg=$('<img class="rightimg1">');
						//图片的设置
						rightimg.css('width','60px').css('height','60px');
						rightimg.attr("src",elem1);
						righta.append(rightimg);
						
						}else{
							righta.html(elem1);
						}
						
						righta.append(rightimg);
						rightul.append(rightLi1);
						rightLi1.append(righta);					
					});
					bigDiv.append(tabDiv1);
					tabDiv1.append(firsth2);
					tabDiv1.append(rightul);
					bigDiv.append(tabDiv2);
					//第二个h2
					//判断moreCity的长度大于1
					if(elem['moreCity'].length>1){
					//判断第四的去右边
						if(elem['moreCity'].length==3){
						var secondh2=$('<h2 class="tabRh1"></h2>');
						secondh2.html(elem['moreCity'][1]['cityName']);
						tabDiv1.append(secondh2);
						var rightul2 =$("<ul class='tab_ul2'></ul>"); 
						elem['moreCity'][1]['items'].forEach(function(elem2,index2){
							var rightLi2 =$('<li class="rigthli2"></li>');
							var righta2=$('<a class="righta2"></a>');
							righta2.html(elem2);
							rightul2.append(rightLi2);
							rightLi2.append(righta2);
						})
						tabDiv1.append(rightul2); 	
					}else{
						var secondh2=$('<h2 class="tabRh1"></h2>');
						secondh2.html(elem['moreCity'][1]['cityName']);
						tabDiv2.append(secondh2);
						var rightul2 =$("<ul class='tab_ul2'></ul>"); 
						elem['moreCity'][1]['items'].forEach(function(elem2,index2){
							var rightLi2 =$('<li class="rigthli2"></li>');
							var righta2=$('<a class="righta2"></a>');
							righta2.html(elem2);
							rightul2.append(rightLi2);
							rightLi2.append(righta2);
						})
				
						tabDiv2.append(rightul2); 	
					}
					
				
}
//					右边的div2
				if(elem['moreCity'].length>2){
					//右边的标题
					var lasth2=$('<h2 class="tabRh1"></h2>');
//					右边的内容
					lasth2.html(elem['moreCity'][2]['cityName']);
				 	var rightul3 =$("<ul class='tab_ul2'></ul>"); 
					elem['moreCity'][2]['items'].forEach(function(elem3,index3){
					var rightLi3 =$('<li class="rigthli2"></li>');
					var righta3=$('<a class="righta2"></a>');
					tabDiv2.append(lasth2);
					righta3.html(elem3);
					rightul3.append(rightLi3);
					rightLi3.append(righta3);
					tabDiv2.append(rightul3);
					});

					
				}
				
				//					右边的图片
					var lastImg=$('<img class="lastImg" />');
					lastImg.attr("src",elem["moreCityImg"]);
					lastImg.css("width","278px").css('font-size','0px').css('margin','20px 0px 0px 0px');
					tabDiv2.append(lastImg);
				 })

				
				
				
				
			}
			
		
			
						
		}
	}
	
	return getTab;
})
