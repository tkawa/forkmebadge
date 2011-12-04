	$(function() {
		$('.radio-pos').click(function() {
	  		updateBadge();
		});
		
		$("form :input").focus(function() {
			$(this).addClass('focus');
	  		updateBadge();
		});
		
		$("form :input").blur(function() {
			$(this).removeClass('focus');
	  		updateBadge();
		});
		
	  	function updateBadge() {
	  		var posTop = $('#posTop').val();
	  		var pos = $('.radio-pos:checked').val();
	  		var color = $('#color').val();
	  		var account = $('#account').val();
			o.account = account;
			o.color = color;
			o.side = pos;
			o.top = posTop;
			o.showbadge();
			reposArw();
	  	}
	  	updateBadge();
	  	
	  	//$('.source-view').fadeOut();
  		$('.b_source').click(function() {
  			viewSource();
			return false;
		});
  		$('.b_close').click(function() {
	  		$('.source-view').fadeOut();
	  		$('.source-add').fadeIn();
			return false;
		});
	  	function viewSource() {
	  		var posTop = $('#posTop').val();
	  		var pos = $('.radio-pos:checked').val();
	  		var color = $('#color').val();
	  		var account = $('#account').val();
	  		
	  		$('.source-add').fadeOut();
	  		$('.source-view').fadeIn();
	  		
			var codeStr = "";
			codeStr += "<script src='http://forkmebadge.heroku.com/badge.js' type='text/javascript'></script>";
			codeStr += "<script type='text/javascript' charset='utf-8'><!--";
			codeStr += "o.account = 'xxx';o.color = '#"+color+"';o.side = '"+pos+"';o.top = "+posTop+";o.showbadge();";
			codeStr += "--></script>";
			$("#regularTextarea").val(codeStr);
	  		
	  	}
  		$('.source-view').fadeOut(0);
  		
	  	function reposArw() {
	  		var posTop = $('#posTop').val();
	  		var pos = $('.radio-pos:checked').val();
	  		
			$('.arw-badge-r').fadeOut(0);
			$('.arw-badge-l').fadeOut(0);
	  		if(pos == "r") {
	  			$('.arw-badge-r').css('top', parseInt(posTop)+50);
	  			$('.arw-badge-r').css('right', 60);
		  		$('.arw-badge-r').fadeIn();
	  		} else {
	  			$('.arw-badge-l').css('top', parseInt(posTop)+50);
	  			$('.arw-badge-l').css('left', 60);
		  		$('.arw-badge-l').fadeIn();
	  		}
	  	}
	});






/* iPhone振り分け
---------------------------------------------------------------------------------------------------- */
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isiPhone = navigator.userAgent.match(/iPhone/i) != null;

if (isiPad || isiPhone) {
} else {
}


/* 外部リンクを_blankに変更
---------------------------------------------------------------------------------------------------- */
$(function() {
	$("a[href^='http://']").attr("target","_blank");
});



/* opwin
---------------------------------------------------------------------------------------------------- */
function opwin(url, width, height, trg){
	if (!!window && url) {
		if (!trg) trg = "_blank";
		options = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,favorites=no";
		var whop = "width="+width+",height="+height+","+options;
		win = window.open(url, trg, whop);
		win.focus();
	}
}

function opwin_c(url, trg, w, h, scroll) {
	var win_width = (screen.width - w) / 2;
	var win_height = (screen.height - h) / 2;
	win_detail = 'height='+h+',width='+w+',top='+win_height+',left='+win_width+',scrollbars='+scroll;
	win = window.open(url, trg, win_detail)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

//<a onClick="return refreshLink(this)" href="http://www.google.com" target="_blank">
function refreshLink(url) {
	var url = el.href;
	w = window.open();
	w.document.write('<meta http-equiv="refresh" content="0;url='+url+'">');
	w.document.close();
	return false;
}

/* rollover - fade
---------------------------------------------------------------------------------------------------- */
/*
$(function(){
	$('.fade').hover(
		function() { $(this).fadeTo(100, 0.5); $(this).fadeTo(300, 1.0); },
		function() { $(this).fadeTo(100, 0.5); $(this).fadeTo(300, 1.0); }
	);
});
*/

$(function(){
	$('.fade').hover(
		function() { $(this).fadeTo(10, 0.2); $(this).fadeTo(300, 1); },
		function() {}
	);
});

/* rollover - swapfade
---------------------------------------------------------------------------------------------------- */
$(function() {
  var image_cache = new Object();
  $('.swapfade').each(function(i) {
    var imgsrc = this.src;
    var dot = this.src.lastIndexOf('.');
    var imgsrc_on = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
    image_cache[this.src] = new Image();
    image_cache[this.src].src = imgsrc_on;
    
    var name = "swapfade"+i;
	$(this).parent().append('<img src="'+imgsrc_on+'" class="'+name+'">');
    $(this).css("position", "absolute");
    $("."+name).css("position", "absolute");
    $("."+name).fadeTo(0, 0.0);
    $("."+name).hover(
      function() { $("."+name).fadeTo(320, 1.0);$("."+name).fadeTo(20, 0.2);$("."+name).fadeTo(100, 1.0); },
      function() { $("."+name).fadeTo(320, 0.0); });
    
  });
});


/* rollover - swap
---------------------------------------------------------------------------------------------------- */
/* プリロード無し
$(function() {
  var image_cache = new Object();
  $('.swap').each(function(i) {
    var imgsrc = this.src;
    var dot = this.src.lastIndexOf('.');
    var imgsrc_on = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
    image_cache[this.src] = new Image();
    image_cache[this.src].src = imgsrc_on;
    $(this).hover(
      function() { this.src = imgsrc_on; },
      function() { this.src = imgsrc; });
  });
});
*/
$(function() {
	if (!document.getElementById) return
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');
	for (var i = 0; i < aImages.length; i++) {
		if (aImages[i].className == 'swap') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_on'+ftype);
			aImages[i].setAttribute('hsrc', hsrc);
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
	var aImagesInput = document.getElementsByTagName('input');
	for (var i = 0; i < aImagesInput.length; i++) {
		if (aImagesInput[i].className == 'swap') {
			var src = aImagesInput[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_on'+ftype);
			aImagesInput[i].setAttribute('hsrc', hsrc);
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			aImagesInput[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}
			aImagesInput[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
});


/* PageTop
---------------------------------------------------------------------------------------------------- */
$(function(){
	$.fn.ScrollTo = function(speed, callback) {
		var gosa = 80;
		var top = $(this).offset().top - gosa;
		if ('BODY' == $(this).attr('tagName')) {// for IE6
			top = 0;
		}
		//	$($.browser.safari ? 'body' : 'html')
		$('html, body').animate({scrollTop: top}, speed, 'swing', callback);
	};
	
	$(".scrollto").click(function(){
		var scrolltargetval = $(this).attr('href')			
		if (scrolltargetval.length == 1){
			var scrolltarget = 'body'
		}
		else {
			var scrolltarget = scrolltargetval
		}
		$(scrolltarget).ScrollTo(800);
		return false;
	});
});



/* flash - liquid
---------------------------------------------------------------------------------------------------- */

function chageHeight(h)
{
	$('#index').height(h);
}








/* Skeleton
---------------------------------------------------------------------------------------------------- */

/*
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/

$(document).ready(function() {

	/* Tabs Activiation
	================================================== */

	var tabs = $('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = $(this).attr('href');

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');

				//Show Tab Content & add active class
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

			}
		});
	});
});



/* bootstrap
---------------------------------------------------------------------------------------------------- */

/* ============================================================
 * bootstrap-dropdown.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdown
 * ============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function( $ ){

  "use strict"

  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( selector ) {
    return this.each(function () {
      $(this).delegate(selector || d, 'click', function (e) {
        var li = $(this).parent('li')
          , isActive = li.hasClass('open')

        clearMenus()
        !isActive && li.toggleClass('open')
        return false
      })
    })
  }

  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  var d = 'a.menu, .dropdown-toggle'

  function clearMenus() {
    $(d).parent('li').removeClass('open')
  }

  $(function () {
    $('html').bind("click", clearMenus)
    $('body').dropdown( '[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle' )
  })

}( window.jQuery || window.ender );

