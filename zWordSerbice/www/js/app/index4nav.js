define(['myutil','app/myfn'],function(x,url){
	function getNavData(root){
		var xhr =x();//创建ajax 对象
		xhr.open('get',url.getBaseURL()+'/znav');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
		if(xhr.readyState===4){
			var navs =JSON.parse(xhr.responseText);//转换成数组
			navs.forEach(function(elem,index){
				var li=document.createElement('li');
				li.innerHTML=elem['name'];
				
				if(elem['dymicImageUrl']!=""){
					var img =document.createElement('img')
					img.className="floctD_img1";
					img.src=elem['dymicImageUrl']
				li.appendChild(img);
			}
				root.appendChild(li);	
				})
			
			}
		}
	}
	return getNavData;
})