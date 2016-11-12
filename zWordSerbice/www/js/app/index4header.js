define(['jquery','myutil','app/myfn'],function($,x,url){
	var funDiv=$('<div class="funDiv"></div>');
	$('.funli').append(funDiv);
	$('#funK').on('keyup',function(e){
		//获取input框中的内容
		var inputValue=$(this).val();
		//清空当前查询结果，重新查询
		funDiv.empty();
		//判断只能输入字母
		if(inputValue.length>0){
			//发送ajax请求
			var xhr =x();
			var Url = url.getBaseURL() + '/input?value='+inputValue;
			console.log(Url);
			xhr.open('get',Url);
			xhr.send(null);
			console.log(inputValue);
			xhr.onreadystatechange=function(e){
				if(xhr.readyState==4){
					console.log(JSON.parse(xhr.responseText));
					var datas =JSON.parse(xhr.responseText);
					var funUl=$("<ul></ul>");
					funDiv.append(funUl);
					datas['data']['list'].forEach(function(elem,index){
						var funLi=$("<li class='funLi'></li>");
						var funLa=$('<a class="funLa"></a>');
						funLa.attr('href',elem['url']);
						funLa.html(elem['word']);
						console.log(elem)
						if(elem['type_name'] == 'item'){
							funLi.attr('class','imgLi');
								var funLImg=$('<img class="funLImg"/>');
								funLImg.attr('src',elem['src']);
								funLi.append(funLImg);
								var funLp=$('<p class="funLp"></p>');
								var funLspan=$('<span class="funLspan"></span>');
								funLspan.html(elem['cn_name']);
								funLp.append(funLspan);
								span=funLspan.clone();
								span.html(elem['en_name']);
								funLp.append(span);
								funLi.append(funLp);
								
							}else if(elem['type_name']=='word'){
								
								funLi.append(funLa);
								}
						funUl.append(funLi);
					});
				funDiv.css("display",'block');
				};
			};

		};	
	});
		$('#funK').on('blur',function(){
			$('.funDiv').css('display','none');
		});
})		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*if(inputValue!=""){
			var xhr =x();
			var Url = url.getBaseURL() + '/input?value='+inputValue;
			console.log(Url);
			xhr.open('get',Url);
			xhr.send(null);
			console.log(inputValue);
			xhr.onreadystatechange=function(e){
				if(xhr.readyState==4){
					console.log(JSON.parse(xhr.responseText));
					var datas =JSON.parse(xhr.responseText);
					var funUl=$("<ul></ul>")
					datas['data']['list'].forEach(function(elem,index){
						var funLi=$("<li class='funLi'></li>");
						var funLImg=$('<img class="funLImg"/>');
						var funLspan=$('<span class="funLspan"></span>')
							if(elem['type_name']==elem['word']){
								funLspan.html(elem['word']);
								
							}else{
								funLImg.attr('src',elem['src']);
							}
					
						var funLh3=$('<h3 class="funLh3"></h3>');
						funLh3.html(elem['cn_name'])
						var funLp=$('<p class="funLp"></p>');
						var funLa=$('<a class="funLa"></a>');
						funLa.html(elem['belong_name']);
						
						funUl.append(funLi);
						funLi.append(funLImg);
						funLi.append(funLspan);
						funLi.append(funLh3);
						funLi.append(funLp);
						funLp.append(funLa)
						})
					
					funDiv.append(funUl);
				}
		}
			
		$('.funDiv').css('display','block');
		
		}
	})
				

})	*/
	
