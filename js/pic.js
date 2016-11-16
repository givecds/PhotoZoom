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

var picZoom=getSingle(function(){
	var picdiv = document.createElement('div');
	picdiv.className = "box";
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
	myimg[i].onclick = function(imgsrc){
		var imgtext = this.src.split(".",1);
		var imgsrc=imgtext[0]+"b.jpg";
		var scrollTop = getScrollTop();
		var bg = picbg();
		var pic = picZoom();
		bg.style.top = scrollTop+"px";
		pic.style.top = 200+scrollTop+"px";
		pic.style.display = "block";

		pic.innerHTML = "<img src='"+imgsrc+"' class='bigimg'>";
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