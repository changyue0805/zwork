define(['jquery','myutil','app/myfn','app/myfn1'],function($,x,url,style){
	function getBanner(root){
		var xhr=x();
		xhr.open('get',url.getBaseURL()+'/zbanner');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				var banners =JSON.parse(xhr.responseText);
				var arr1 = [];
				var arr2=[];
				var num =0;
				banners.forEach(function(elem,index){
					var imgUrls =elem['imgUrl'];
					arr1[index] = imgUrls;
					var hrefs =  elem['href'];
					arr2[index]=hrefs;
					$('.banImg').attr('src',imgUrls);
					$('.banImg').attr('href',hrefs);	
					$('.banImg').css(style);
					
			});	

			setInterval(function(){
				num++;
				if(num>3){
					num=0;
				}
				$('.banImg').attr('src',arr1[num])
				$('#banner a').attr('href',arr2[num])
			},2000)
//			var imgAll=$('#imgAll').append(imgUrls);
			
			
			
			
			
			
		}
	}
}
	return getBanner;
});