
var url_badge = 'http://forkmebadge.heroku.com/';
url_badge = '/';
//url_badge = '../public/';
var element_badge = 'folkmebadge';

var o = {};
o.defaultTop=100;
o.defaultColor='#3d80a2';
o.side='r';

o.showbadge = function(){
	if(!window.XMLHttpRequest) return;
	if(document.getElementById(element_badge)){
		document.body.removeChild(document.getElementById(element_badge));
	}
	
	o.tabStyleCode='-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);position:fixed;'+'top:'+o.top+'px;'+'width:31px;'+'height:119px;'+'z-index:9998;'+'cursor:pointer;'+'background:'+o.color+' url(http://forkmebadge.heroku.com/images/badge.png);'+'background-repeat:no-repeat;';
	
	o.aboutStyleCode='position:fixed;'+'top:'+(parseInt(o.top)+106)+'px;'+'margin-top:6px;margin-left:9px;margin-right:9px;width:13px;'+'height:15px;'+'z-index:9999;'+'cursor:pointer;'+'background: url(http://forkmebadge.heroku.com/images/about.png);'+'background-repeat:no-repeat;';
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
	elements.innerHTML='<div id="'+element_badge+'" style="'+o.tabStyleCode+'"></div><div id="fmAbout" style="'+o.aboutStyleCode+'"></div>'+'<style>#fmAbout{visibility:hidden;} #folkmebadge:hover #fmAbout{visibility:visible;}</style>';
	document.getElementById(element_badge).onclick=function(){
		window.open('http://github.com/'+o.account);
	}
	document.getElementById('fmAbout').onclick=function(){
		window.open('http://forkmebadge.heroku.com/')
	}
	
	$('#folkmebadge').hover(
		function() { $(this).fadeTo(10, 0.2); $(this).fadeTo(300, 1); },
		function() {}
	);
	
}



