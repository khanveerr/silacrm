/*!-----------------------------------------------------------------
  Name: Con - Admin Dashboard with Material Design
  Version: 3.0.0
  Author: _nK
  Website: http://nkdev.info
  Purchase: http://themeforest.net/item/con-material-admin-dashboard-template/10621512?ref=_nK
  Support: http://nk.ticksy.com
  License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
  Copyright 2016.
-------------------------------------------------------------------*/
window.conApp={},!function(t){"use strict";var i=function(i,n){this.options=n,this.$yay=t(i),this.$content=this.$yay.find("~ .content-wrap"),this.$nano=this.$yay.find(".nano"),this.$html=t("html"),this.$body=t("body"),this.$window=t(window),this.changed=!1,this.init()};i.DEFAULTS={duration:300,resizeWnd:1e3},i.prototype.init=function(){var i=this;i.$body.addClass("yay-notransition"),i.$nano.nanoScroller({preventPageScrolling:!0}),t(".yay-toggle").on("click",function(t){t.preventDefault(),i.toggleYay()}),i.$content.on("click",function(){i.isHideOnContentClick()&&i.hideYay()}),i.$yay.on("click","li a.yay-sub-toggle",function(n){n.preventDefault(),i.toggleSub(t(this))}),i.$yay.hasClass("yay-gestures")&&i.useGestures(),i.$window.on("resize",function(){i.windowResize()}),i.windowResize(),setTimeout(function(){i.$body.removeClass("yay-notransition")},1),conApp.yaySelectItem=function(t){var n=i.$yay.find('[href*="'+t+'"]');if(n.length){i.$yay.find(".active").removeClass("active");var e=n.parent("li").parent("ul").siblings(".yay-sub-toggle"),o=!e.parent(".open").length;e.length&&o&&i.toggleSub(e),n.parent("li").addClass("active")}}},i.prototype.isShow=function(){return!this.$body.hasClass("yay-hide")},i.prototype.showType=function(){return this.$yay.hasClass("yay-overlay")?"overlay":this.$yay.hasClass("yay-push")?"push":this.$yay.hasClass("yay-shrink")?"shrink":void 0},i.prototype.isHideOnContentClick=function(){return this.$yay.hasClass("yay-overlap-content")},i.prototype.isStatic=function(){return this.$yay.hasClass("yay-static")},i.prototype.toggleYay=function(t){var i=this,n=!i.isShow();t&&("show"==t&&!n||"hide"==t&&n)||(i.options.changed=!0,n?i.showYay():i.hideYay())},i.prototype.showYay=function(){var t=this;t.$body.removeClass("yay-hide"),setTimeout(function(){t.$nano.nanoScroller(),t.$window.resize()},t.options.duration)},i.prototype.hideYay=function(){var t=this;t.$body.addClass("yay-hide"),t.$nano.nanoScroller({destroy:!0}),setTimeout(function(){t.$window.resize()},t.options.duration)},i.prototype.toggleSub=function(t){var i=this,n=t.parent(),e=n.find("> ul"),o=n.hasClass("open");e.length&&(o?i.closeSub(e):i.openSub(e,n))},i.prototype.closeSub=function(i){var n=this;i.css("display","block").stop().slideUp(n.options.duration,"swing",function(){t(this).find("li a.yay-sub-toggle").next().attr("style",""),n.$nano.nanoScroller()}),i.parent().removeClass("open"),i.find("li a.yay-sub-toggle").parent().removeClass("open")},i.prototype.openSub=function(t,i){var n=this;t.css("display","none").stop().slideDown(n.options.duration,"swing",function(){n.$nano.nanoScroller()}),i.addClass("open"),n.closeSub(i.siblings(".open").find("> ul"))},i.prototype.useGestures=function(){var t=this,i=0,n=0,e=0;t.$window.on("touchstart",function(t){n=(t.originalEvent.touches?t.originalEvent.touches[0]:t).pageX,e=(t.originalEvent.touches?t.originalEvent.touches[0]:t).pageX,i=1}),t.$window.on("touchmove",function(t){i&&(e=(t.originalEvent.touches?t.originalEvent.touches[0]:t).pageX)}),t.$window.on("touchend",function(o){if(i){var s=n-e,a=t.$html.hasClass("rtl");if(i=0,Math.abs(s)<100)return;a&&(s*=-1,n=t.$window.width()-n),0>s?40>n&&t.showYay():t.hideYay()}})};var n;i.prototype.windowResize=function(){var t=this;t.options.changed||(clearTimeout(n),n=setTimeout(function(){t.$window.width()<t.options.resizeWnd&&t.toggleYay("hide")},50))},conApp.initSidebar=function(){t(".yaybar").each(function(){var n=t.extend({},i.DEFAULTS,t(this).data(),"object"==typeof option&&option);new i(this,n)})},"undefined"==typeof conAngular&&conApp.initSidebar()}(jQuery),!function(t){"use strict";var i=function(i,n){this.options=n,this.$element=t(i),this.init()};i.DEFAULTS={fallback:["Seattle",""],icons:["wi-tornado","wi-night-thunderstorm","wi-storm-showers","wi-thunderstorm","wi-storm-showers","wi-rain-mix","wi-rain-mix","wi-rain-mix","wi-rain-mix","wi-snow","wi-rain-mix","wi-snow","wi-snow","wi-snow","wi-snow","wi-rain-mix","wi-snow","wi-rain-mix","wi-rain-wind","wi-cloudy-windy","wi-cloudy-windy","wi-cloudy-windy","wi-cloudy-windy","wi-cloudy-windy","wi-cloudy-gusts","wi-cloudy-gusts","wi-cloudy","wi-night-cloudy","wi-day-cloudy","wi-night-cloudy","wi-day-cloudy","wi-night-clear","wi-day-sunny","wi-night-clear","wi-day-sunny","wi-rain-mix","wi-day-sunny","wi-storm-showers","wi-storm-showers","wi-storm-showers","wi-rain","wi-rain-mix","wi-snow","wi-rain-mix","wi-night-cloudy","wi-storm-showers","wi-rain-wind","wi-storm-showers"]},i.prototype.init=function(){var t=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(i){t.loadWeather(i.coords.latitude+","+i.coords.longitude)}):t.loadWeather(t.options.fallback[0],t.options.fallback[1])},i.prototype.loadWeather=function(i,n){var e=this;t.simpleWeather({location:i,woeid:n,unit:"c",success:function(t){var i=['<div class="row">','<div class="temp col s7">',t.temp+"&deg;"+t.units.temp,' <span class="alt">'+t.alt.temp+"&deg;F</span>","</div>",'<div class="city col s5"><i class="fa fa-map-marker"></i> '+t.city+"</div>","</div>",'<div class="icon"><i class="wi '+e.options.icons[t.code]+'"></i></div>','<div class="currently">'+t.currently+"</div>"].join("");e.$element.html(i)},error:function(t){e.$element.html("<h4>Error</h4><p>"+t+"</p>")}})},conApp.initCardWeather=function(){t(".weather-card").each(function(){new i(this,i.DEFAULTS)})},"undefined"==typeof conAngular&&conApp.initCardWeather()}(jQuery),!function(t){"use strict";function i(){t(window).resize()}var n=function(i,n){this.options=n,this.$card=t(i),this.$closeBtn=this.$card.find("> .title > .close"),this.$minimizeBtn=this.$card.find("> .title > .minimize"),this.$content=this.$card.find("> .content")};n.DEFAULTS={duration:300},n.prototype.init=function(){var t=this;t.$closeBtn.on("click",function(i){i.preventDefault(),t.close()}),t.$minimizeBtn.on("click",function(i){i.preventDefault(),t.minimize()})},n.prototype.close=function(){var t=this;t.$card.velocity({opacity:0,translateY:-20},t.options.duration).velocity("slideUp",t.options.duration,function(){t.$card.remove(),i()})},n.prototype.minimize=function(){var t=this;t.$content.hasClass("velocity-animating")||(t.$card.hasClass("minimized")?t.$content.css("display","none").velocity("slideDown","swing",t.options.duration,i):t.$content.css("display","block").velocity("slideUp","swing",t.options.duration,i),t.$card.toggleClass("minimized"))},conApp.initCards=function(){t(".card").each(function(){var i=t.extend({},n.DEFAULTS,t(this).data(),"object"==typeof option&&option),e=new n(this,i);e.init()})},"undefined"==typeof conAngular&&conApp.initCards()}(jQuery),!function(t){"use strict";function i(i,e){return this.each(function(){var e=t(this),o=e.data("mdlayer"),s=t.extend({},n.DEFAULTS,e.data(),"object"==typeof i&&i);o||e.data("mdlayer",o=new n(this,s)),"string"==typeof i&&o[i]&&o[i](),"undefined"==typeof i&&o.toggle()})}var n=function(i,n){this.options=n,this.$body=t("body"),this.$navbar=t(".navbar-top:eq(0)"),this.$layer=t(i),this.$overlay=this.$layer.find("> .layer-overlay"),this.$content=this.$layer.find("> .layer-content"),this.contDuration=.8*this.options.duration,this.isOpened=this.$layer.hasClass("layer-opened"),this.busy=!1,this.startStyles={left:0,top:0,width:0,height:0,marginTop:0,marginLeft:0},this.useSVG=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&!/^((?!chrome).)*safari/i.test(navigator.userAgent),this.init()};n.DEFAULTS={duration:600,fixScrollbar:!1,onhide:!1,onshow:!1},n.prototype.init=function(){var t=this;t.useSVG?t.prepareSVG():t.$overlay.css({position:"absolute",borderRadius:"50%",zIndex:0}),this.$content[0]&&(this.$content[0].style.background="none"),t.$content.css({zIndex:2})},n.prototype.prepareSVG=function(){var t=this.$overlay.css("background-color"),i=['<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">','<g><circle cx="0" cy="0" r="0" fill="'+t+'"></circle></g>',"</svg>"].join("");this.$overlay.css({position:"absolute",width:"100%",height:"100%",background:"none",zIndex:0,transform:"scale(1)"}).html(i),this.$overlay[0]&&(this.$overlay[0].style.background="none")},n.prototype.setPosition=function(t){return this.useSVG?(t.find("g").attr({transform:"translate("+this.startStyles.left+", "+this.startStyles.top+")"}),t=t.find("circle"),t.attr({r:this.startStyles.radius})):t.css({left:this.startStyles.left,top:this.startStyles.top,width:2*this.startStyles.radius,height:2*this.startStyles.radius,marginTop:-this.startStyles.radius,marginLeft:-this.startStyles.radius}),t},n.prototype.toggle=function(t){return this.busy||"show"==t&&this.isOpened||"hide"==t&&!this.isOpened?!1:(this.busy=!0,this.calculateStartStyles(),void(this.isOpened?this.hide(1):this.show(1)))},n.prototype.show=function(t){if(!t)return this.toggle("show"),!1;var i=this;i.options.fixScrollbar&&(i.checkScrollbar(),i.setScrollbar(),i.$body.addClass("layer-fix-scroll")),i.setPosition(i.$overlay).velocity({scale:0},0).velocity({translateZ:0,scale:1},i.options.duration,function(){i.isOpened=!0,i.options.onshow&&i.options.onshow(),i.busy=!1}),i.$content.hide().delay(i.contDuration).velocity("fadeIn",i.contDuration),setTimeout(function(){i.$layer.addClass("layer-opened").show()})},n.prototype.hide=function(t){if(!t)return this.toggle("hide"),!1;var i=this;i.$content.velocity("fadeOut",i.contDuration),i.setPosition(i.$overlay).velocity({scale:1},0).velocity({translateZ:0,scale:0},i.options.duration,function(){i.isOpened=!1,i.$layer.removeClass("layer-opened").hide(),i.options.onhide&&i.options.onhide(),i.options.fixScrollbar&&(i.$body.removeClass("layer-fix-scroll"),i.resetScrollbar()),i.busy=!1})},n.prototype.calculateStartStyles=function(i){var n=this,e=n.$layer;this.isOpened||e.css({visibility:"hidden",display:"block"});var o={top:e.position().top,left:e.position().left,width:e.width(),height:"fixed"==e.css("position")?t(window).height():e.height()};this.isOpened||e.css({display:"none",visibility:"visible"}),n.startStyles={left:window.mousePos.x-o.left,top:window.mousePos.y-o.top},n.startStyles.left<0&&(n.startStyles.left=0),n.startStyles.top<0&&(n.startStyles.top=0),t.extend(n.startStyles,{radius:Math.sqrt(Math.pow(o.width,2)+Math.pow(o.height,2))})},n.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&(this.$body.css("padding-right",t+this.scrollbarWidth),this.$navbar.css("padding-right",t+this.scrollbarWidth))},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",""),this.$navbar.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="layer-scrollbar-measure",this.$body.append(t);var i=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),i},t.fn.MDLayer=i,t.fn.MDLayer.Constructor=n,window.mousePos={x:0,y:0},t(document).on("mousemove",function(t){window.mousePos.x=t.clientX||t.pageX,window.mousePos.y=t.clientY||t.pageY})}(jQuery),!function(t){var i=function(i,n){this.options=n,this.$chat=t(i),this.$window=t(window),this.$document=t(document),this.$chatForm=this.$chat.find(".send > form"),this.$msgNano=this.$chat.find(".messages .nano"),this.$msgCont=this.$msgNano.find("> .nano-content"),this.$msgInput=this.$chat.find("input[name=chat-message]")};i.DEFAULTS={msgDuration:300,msgDemo:"Demo chat message ;)"},i.prototype.init=function(){var i=this;i.initLayer(),i.$chatForm.on("submit",function(t){t.preventDefault(),i.sendMsg()}),i.$chat.on("click",".contacts .user",function(t){t.stopPropagation(),i.$chat.addClass("open-messages")}),i.$chat.on("click",".messages .topbar > .chat-back",function(t){t.stopPropagation(),t.preventDefault(),i.$chat.removeClass("open-messages")}),i.$chat.on("click",function(i){t(i.target).hasClass("chat-toggle")||t(i.target).parent().hasClass("chat-toggle")||i.stopPropagation()}),i.$chat.find(".nano").each(function(){var i="";t(this).hasClass("scroll-bottom")?i="bottom":t(this).hasClass("scroll-top")&&(i="top"),t(this).nanoScroller({preventPageScrolling:!0,scroll:i})})},i.prototype.initLayer=function(){var t=this;t.$chat.MDLayer({duration:400,onshow:function(){t.$window.resize()}}),t.$document.on("click",".chat-toggle",function(i){i.preventDefault(),i.stopPropagation(),t.$chat.MDLayer()}),t.$document.on("click",function(i){t.$chat.MDLayer("hide")}),t.$document.on("keyup",function(i){27==i.keyCode&&t.$chat.MDLayer("hide")})},i.prototype.sendMsg=function(){var i=this,n=i.$msgInput.val()||i.options.msgDemo;if(n){i.$msgInput.val("");var e=t('<div class="from-me">'+n+"</div>");i.$msgCont.append('<div class="clear"></div>').append(e),e.velocity({scale:0,opacity:0},0).velocity({scale:1,opacity:1},i.options.msgDuration),i.$msgNano.nanoScroller().nanoScroller({scroll:"bottom"})}},conApp.initChat=function(){t(".chat").each(function(){var n=t.extend({},i.DEFAULTS,t(this).data(),"object"==typeof option&&option),e=new i(this,n);e.init()})},"undefined"==typeof conAngular&&conApp.initChat()}(jQuery),!function(t){"use strict";t.fn.conSparkline=function(i,n){var e=t(this),o=t(window),s=function(){if(t.fn.sparkline){var o={};"bar"==n.type&&/%/g.test(n.width)&&(o.barSpacing=1,o.barWidth=e.width()/i.length),e.sparkline(i,t.extend(n,o))}};s();var a;o.on("resize",function(){clearTimeout(a),a=setTimeout(s,50)})}}(jQuery),!function(t){"use strict";var i=function(i,n){this.options=n,this.$todo=t(i),this.$add=this.$todo.find("#todo-add")};i.DEFAULTS={demoTask:"This is Lorem ipsum task"},i.prototype.init=function(){var i=this;i.$add.on("keypress",function(t){13==t.which&&i.addTask()}),this.$todo.on("click",".todo-task .todo-remove",function(n){n.preventDefault(),n.stopPropagation(),i.removeTask(t(this).parents(".todo-task:eq(0)"))})},i.prototype.addTask=function(){var i="todo-task-"+this.getUniqueID(),n=this.$add.val()||this.options.demoTask,e=['<div class="todo-task" style="display: none">','<input type="checkbox" id="'+i+'">','<label for="'+i+'">'+n+' <span class="todo-remove mdi-action-delete"></span></label>',"</div>"].join("");e=t(e),this.$add.val(""),this.$add.parent().before(e),e.velocity("slideDown",300)},i.prototype.removeTask=function(i){i.velocity({opacity:0},200,function(){t(this).velocity("slideUp",200,function(){t(this).remove()})})};var n=100;i.prototype.getUniqueID=function(){return t("#todo-task-"+n)[0]?(n++,this.getUniqueID()):n},conApp.initCardTodo=function(){t(".todo-card").each(function(){var n=t.extend({},i.DEFAULTS,t(this).data(),"object"==typeof option&&option),e=new i(this,n);e.init()})},"undefined"==typeof conAngular&&conApp.initCardTodo()}(jQuery),!function(t){"use strict";var i,n,e,o=function(i){i&&(this.bubbles=[],this.$element=t(i),e=i.getContext("2d"),this.init())},s=function(){function t(t){t?o.pos.y=n+Math.random()*n*.2:o.pos.y=n+20,o.pos.x=Math.random()*i,o.scale=.1+.7*Math.random(),o.velocity=.5*Math.random(),o.alpha=.1+.2*Math.random()}var o=this;o.pos={},this.draw=function(){o.alpha<=0&&t(),o.pos.y-=o.velocity,o.alpha-=4e-4,e.beginPath(),e.arc(o.pos.x,o.pos.y,10*o.scale,0,2*Math.PI,!1),e.fillStyle="rgba(105, 109, 136,"+o.alpha+")",e.fill()},t(!0)};o.prototype.init=function(){var n=this;n.updateSizes(),t(window).on("resize",function(){n.updateSizes()}),n.$element.css({position:"fixed",top:0,left:0,zIndex:1});for(var e=0;.5*i>e;e++){var o=new s;n.bubbles.push(o)}n.animate()},o.prototype.updateSizes=function(){i=window.innerWidth,n=window.innerHeight,this.$element.attr({width:i,height:n})},o.prototype.animate=function(){var t=this;e.clearRect(0,0,i,n);for(var o in t.bubbles)t.bubbles[o].draw();requestAnimationFrame(function(){t.animate()})},new o(t("#bubble-canvas")[0])}(jQuery),conApp.initMaterialPlugins=function(){"undefined"!=typeof $.fn.material_select&&$("select:not(.select2, .disabled)").each(function(){var t=$(this).parent("label");$(this).material_select(),t.length&&(t.wrap('<span style="color: #9e9e9e">'),$(this).parent().unwrap())}),"undefined"!=typeof $.fn.slider&&$(".slider").slider({full_width:!0}),"undefined"!=typeof $.fn.parallax&&$(".parallax").parallax(),"undefined"!=typeof $.fn.scrollSpy&&$(".scrollspy").scrollSpy(),"undefined"!=typeof $.fn.pickadate&&$(".datepicker").pickadate(),"undefined"!=typeof $.fn.dropdown&&$(".dropdown-button").each(function(){var t="true"==$(this).attr("data-hover")||!1,i="false"==$(this).attr("data-constrainwidth")||!0,n=$(this).attr("data-induration")||300,e=$(this).attr("data-outduration")||300;$(this).dropdown({hover:t,constrain_width:i,inDuration:n,outDuration:e})}),"undefined"!=typeof $.fn.collapsible&&$(".collapsible").each(function(){$(this).collapsible({accordion:"accordion"===$(this).attr("data-collapsible")})}),"undefined"!=typeof $.fn.leanModal&&$(".modal-trigger").each(function(){var t=$(this).attr("data-dismissible")||!0,i=$(this).attr("data-opacity")||.5,n=$(this).attr("data-induration")||300,e=$(this).attr("data-outduration")||300;$(this).leanModal({dismissible:t,opacity:i,in_duration:n,out_duration:e})})},conApp.initPlugins=function(){function t(){$(".select2").select2({width:"resolve"})}function i(){e.isotope({itemSelector:".item",layoutMode:"masonry",isResizeBound:!1})}if("undefined"!=typeof $.fn.select2){$(".select2").each(function(){$(this).wrap('<div style="width:100%;position:relative;"></div>').select2()});var n;$(window).on("resize",function(){clearTimeout(n),n=setTimeout(t,50)})}if("undefined"!=typeof $.fn.tagsInput&&$(".input-tag").tagsInput({width:"100%",height:"auto"}),"undefined"!=typeof $.fn.pikaday&&$(".pikaday").pikaday(),"undefined"!=typeof $.fn.clockpicker&&$(".clockpicker").clockpicker(),"undefined"!=typeof $.fn.spectrum&&$(".spectrum").spectrum({showButtons:!1}),"undefined"!=typeof $.fn.inputmask&&$("input[data-inputmask]").inputmask(),"undefined"!=typeof prettyPrint&&prettyPrint(),"undefined"!=typeof $.fn.markItUp&&$(".markItUp").markItUp(mySettings),"undefined"!=typeof Sortable&&$(".col.sortable, .sortable > .col").each(function(){var t={group:"widgets"};$(this).find(".title")[0]&&(t.handle=".title"),Sortable.create(this,t)}),"undefined"!=typeof WOW&&(new WOW).init(),"undefined"!=typeof $.fn.isotope){var n,e=$(".isotope");$(window).on("resize",function(){clearTimeout(n),n=setTimeout(i,50)})}$(".alert").on("click",".close",function(){$(this).parents(".alert").velocity({opacity:0,translateY:-20},300).velocity("slideUp",300,function(){$(this).remove()})}),function(){var t=$("#inputIconSearch");0!==t.length&&t.on("keyup",function(){var i=t.val();$(".icon-preview").hide(),$('.icon-preview:contains("'+i+'")').show(),$(".icon-card").hide(),$('.icon-card:contains("'+i+'")').show()})}(),function(){if("undefined"!=typeof PhotoSwipe){var t=['<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">','  <div class="pswp__bg"></div>','  <div class="pswp__scroll-wrap">','    <div class="pswp__container">','      <div class="pswp__item"></div>','      <div class="pswp__item"></div>','      <div class="pswp__item"></div>',"    </div>",'    <div class="pswp__ui pswp__ui--hidden">','      <div class="pswp__top-bar">','        <div class="pswp__counter"></div>','        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>','        <button class="pswp__button pswp__button--share" title="Share"></button>','        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>','        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>','        <div class="pswp__preloader">','          <div class="pswp__preloader__icn">','            <div class="pswp__preloader__cut">','              <div class="pswp__preloader__donut"></div>',"            </div>","          </div>","        </div>","      </div>",'      <!-- <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div> -->','      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">','        <div class="pswp__share-tooltip">','          <!-- <a href="#" class="pswp__share--facebook"></a>','          <a href="#" class="pswp__share--twitter"></a>','          <a href="#" class="pswp__share--pinterest"></a>','          <a href="#" download class="pswp__share--download"></a> -->',"        </div>","      </div>",'      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>','      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>','      <div class="pswp__caption">','        <div class="pswp__caption__center">',"        </div>","      </div>","    </div>","  </div>","</div>"].join("\n");$("body").append(t);var i=function(t){for(var i=function(t){for(var t,i,n,e,o=t.childNodes,s=o.length,a=[],r=0;s>r;r++)if(t=o[r],1===t.nodeType){i=t.children,n=t.getAttribute("data-size").split("x"),e={src:t.getAttribute("href"),w:parseInt(n[0],10),h:parseInt(n[1],10),author:t.getAttribute("data-author")},e.el=t,i.length>0&&(e.msrc=i[0].getAttribute("src"),i.length>1&&(e.title=i[1].innerHTML));var c=t.getAttribute("data-med");c&&(n=t.getAttribute("data-med-size").split("x"),e.m={src:c,w:parseInt(n[0],10),h:parseInt(n[1],10)}),e.o={src:e.src,w:e.w,h:e.h},a.push(e)}return a},n=function d(t,i){return t&&(i(t)?t:d(t.parentNode,i))},e=function(t){t=t||window.event,t.preventDefault?t.preventDefault():t.returnValue=!1;var i=t.target||t.srcElement,e=n(i,function(t){return"A"===t.tagName});if(e){for(var o,a=e.parentNode,r=e.parentNode.childNodes,c=r.length,l=0,d=0;c>d;d++)if(1===r[d].nodeType){if(r[d]===e){o=l;break}l++}return o>=0&&s(o,a),!1}},o=function(){var t=window.location.hash.substring(1),i={};if(t.length<5)return i;for(var n=t.split("&"),e=0;e<n.length;e++)if(n[e]){var o=n[e].split("=");o.length<2||(i[o[0]]=o[1])}return i.gid&&(i.gid=parseInt(i.gid,10)),i},s=function(t,n,e,o){var s,a,r,c=document.querySelectorAll(".pswp")[0];if(r=i(n),a={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var i=r[t].el.children[0],n=window.pageYOffset||document.documentElement.scrollTop,e=i.getBoundingClientRect();return{x:e.left,y:e.top+n,w:e.width}},addCaptionHTMLFn:function(t,i,n){return t.title?(i.children[0].innerHTML=(t.title||"")+(t.author?"<br/><small>Photo: "+t.author+"</small>":""),!0):(i.children[0].innerText="",!1)}},o)if(a.galleryPIDs){for(var l=0;l<r.length;l++)if(r[l].pid==t){a.index=l;break}}else a.index=parseInt(t,10)-1;else a.index=parseInt(t,10);if(!isNaN(a.index)){for(var d=document.getElementsByName("gallery-style"),p=0,u=d.length;u>p;p++)if(d[p].checked){"radio-all-controls"==d[p].id||"radio-minimal-black"==d[p].id&&(a.mainClass="pswp--minimal--dark",a.barsSize={top:0,bottom:0},a.captionEl=!1,a.fullscreenEl=!1,a.shareEl=!1,a.bgOpacity=.85,a.tapToClose=!0,a.tapToToggleControls=!1);break}e&&(a.showAnimationDuration=0),s=new PhotoSwipe(c,PhotoSwipeUI_Default,r,a);var h,f,y=!1,w=!0;s.listen("beforeResize",function(){var t=window.devicePixelRatio?window.devicePixelRatio:1;t=Math.min(t,2.5),h=s.viewportSize.x*t,h>=1200||!s.likelyTouchDevice&&h>800||screen.width>1200?y||(y=!0,f=!0):y&&(y=!1,f=!0),f&&!w&&s.invalidateCurrItems(),w&&(w=!1),f=!1}),s.listen("gettingData",function(t,i){y?(i.src=i.o.src,i.w=i.o.w,i.h=i.o.h):(i.src=i.m.src,i.w=i.m.w,i.h=i.m.h)}),s.init()}},a=document.querySelectorAll(t),r=0,c=a.length;c>r;r++)a[r].setAttribute("data-pswp-uid",r+1),a[r].onclick=e;var l=o();l.pid&&l.gid&&s(l.pid,a[l.gid-1],!0,!0)};i(".photoswipe-gallery")}}()},conApp.initSearchBar=function(){var t=$(".search-bar:eq(0)");t.MDLayer({duration:500,fixScrollbar:!0,onshow:function(){t.find("input").focus()}}),$(document).on("click",".search-bar-toggle",function(i){i.preventDefault(),i.stopPropagation(),t.MDLayer()}),$(document).on("keyup",function(i){27==i.keyCode&&t.MDLayer("hide")})},jQuery(function(){var t=jQuery;"undefined"==typeof conAngular&&(conApp.initSearchBar(),conApp.initPlugins(),conApp.initMaterialPlugins()),t(window).on("resize",function(){if("undefined"!=typeof nv&&"undefined"!=typeof nv.graphs&&nv.graphs.length)for(var t in nv.graphs)nv.graphs[t].update()})});