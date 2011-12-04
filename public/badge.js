

var url_badge = './images/badge-';
var url_site = '';
var element_badge = 'twitterFollowBadge';

var o = {};
o.defaultTop=100;
o.defaultColor='#3d80a2';
o.side='r';

o.showbadge = function(){
	if(!window.XMLHttpRequest) return;
	if(document.getElementById(element_badge)){
		document.body.removeChild(document.getElementById(element_badge));
	}
	
	o.tabStyleCode='-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);z-index:9999;position:absolute;'+'top:'+o.top+'px;'+'width:31px;'+'height:119px;'+'z-index:999;'+'cursor:pointer;'+'background:'+o.color+' url(/images/badge.png);'+'background-repeat:no-repeat;';
	o.aboutStyleCode='position:fixed;'+'top:'+(parseInt(o.top)+107)+'px;'+'width:10px;'+'height:11px;'+'z-index:9876;'+'cursor:pointer;'+'background:url(./images/about.png);'+'background-repeat:no-repeat;';
	if(o.side=='l'){
		o.tabStyleCode+='left:0; background-position:right top;';
		o.aboutStyleCode+='left:0;';
	}else{
		o.tabStyleCode+='right:0; background-position:left top;';
		o.aboutStyleCode+='right:0;';
	}
	
	elements=document.createElement('div');
	elements.setAttribute('id',element_badge);
	document.body.appendChild(elements);
	elements.innerHTML='<div id="'+element_badge+'" style="'+o.tabStyleCode+'"></div><div id="tfbAbout" style="'+o.aboutStyleCode+'"></div>'+'<style>#tfbAbout{visibility:hidden;} #twitterFollowBadge:hover #tfbAbout{visibility:visible;}</style>';
	document.getElementById(element_badge).onclick=function(){
		window.open('http://github.com/'+o.account);
	}
	document.getElementById('tfbAbout').onclick=function(){
		window.open('http://xxxxxxxxxxxxxxxxxx/')
	}
	
	
}



