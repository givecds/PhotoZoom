var getSingle=function(fn){
  var result;
  return function(){
    return result||(result=fn.apply(this,arguments))
  };
};

var picbg=getSingle(function(){
	var bgdiv = document.createElement('div');
	bgdiv.className = "imageground";
	bgdiv.style.display = "none";
	document.body.appendChild(bgdiv);
	return bgdiv;
});

var picZoom=getSingle(function(img){
	var picdiv = document.createElement('div');
	picdiv.className = "box";
	picdiv.innerHTML = "<img src='"+img+"' class='bigimg'>";
	picdiv.style.display = "none";
	document.body.appendChild(picdiv);
	return picdiv;
});

var myimg=document.getElementsByTagName("img");

function getScrollTop(){
    if(document.documentElement&&document.documentElement.scrollTop){
	     return document.documentElement.scrollTop;
	}
    else if(document.body){
	     return document.body.scrollTop;
	}
};

for(var i=0;i<myimg.length;i++){
	imgtext= myimg[i].src.split(".",1);
	imgsrc=imgtext[0]+"b.jpg";
	
	myimg[i].onclick = function(){
		var scrollTop = getScrollTop();
		var bg = picbg();
		var pic = picZoom(imgsrc);
		bg.style.top = scrollTop+"px";
		pic.style.top = 200+scrollTop+"px";
		pic.style.display = "block";
		bg.style.display = "block";
		pic.onclick =function(){
			bg.style.display = "none";
			pic.style.display = "none";
		};
		bg.onclick =function(){
			bg.style.display = "none";
			pic.style.display = "none";
		};
	};
	
};