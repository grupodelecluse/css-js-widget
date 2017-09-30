/**
 * Coin Slider - Unique jQuery Image Slider
 * @version: 1.0 - (2010/04/04)
 * @requires jQuery v1.2.2 or later
 * @author Ivan Lazarevic
 * Examples and documentation at: http://workshop.rs/projects/coin-slider/
 
 * Licensed under MIT licence:
 *   http://www.opensource.org/licenses/mit-license.php
**/
(function(f){var e=[],c=[],k=[],m=[],d=[],h=[],b=[],g=[],l=[],a=[],j=[];f.fn.coinslider=f.fn.CoinSlider=function(A){var r=function(E){var I=parseInt(e[E.id].width/e[E.id].spw),D=I,L=parseInt(e[E.id].height/e[E.id].sph),H=L,C=0,J=0,K=0,G,F,N=e[E.id].width-e[E.id].spw*D,B=N,M=e[E.id].height-e[E.id].sph*H,O=M;for(G=1;G<=e[E.id].sph;G++){B=N;if(O>0){O--;H=L+1}else{H=L}for(F=1;F<=e[E.id].spw;F++){if(B>0){B--;D=I+1}else{D=I}c[E.id][C]=G+""+F;C++;if(e[E.id].links){f("#"+E.id).append("<a href='"+m[E.id][0]+"' class='cs-"+E.id+"' id='cs-"+E.id+G+F+"' style='width:"+D+"px; height:"+H+"px; float: left; position: absolute;'></a>")}else{f("#"+E.id).append("<div class='cs-"+E.id+"' id='cs-"+E.id+G+F+"' style='width:"+D+"px; height:"+H+"px; float: left; position: absolute;'></div>")}f("#cs-"+E.id+G+F).css({"background-position":-J+"px "+(-K+"px"),left:J,top:K});J+=D}K+=H;J=0}f(".cs-"+E.id).mouseover(function(){f("#cs-navigation-"+E.id).show()});f(".cs-"+E.id).mouseout(function(){f("#cs-navigation-"+E.id).hide()});f("#cs-title-"+E.id).mouseover(function(){f("#cs-navigation-"+E.id).show()});f("#cs-title-"+E.id).mouseout(function(){f("#cs-navigation-"+E.id).hide()});if(e[E.id].hoverPause){f(".cs-"+E.id).mouseover(function(){e[E.id].pause=true});f(".cs-"+E.id).mouseout(function(){e[E.id].pause=false});f("#cs-title-"+E.id).mouseover(function(){e[E.id].pause=true});f("#cs-title-"+E.id).mouseout(function(){e[E.id].pause=false})}};var y=function(C){clearInterval(b[C.id]);var B=e[C.id].delay+e[C.id].spw*e[C.id].sph*e[C.id].sDelay;b[C.id]=setInterval(function(){v(C)},B)};var v=function(B,C){if(e[B.id].pause===true){return}z(B);a[B.id]=0;l[B.id]=setInterval(function(){o(B,c[B.id][a[B.id]])},e[B.id].sDelay);f(B).css({"background-image":"url("+k[B.id][g[B.id]]+")"});if(typeof(C)=="undefined"){g[B.id]++}else{if(C=="prev"){g[B.id]--}else{g[B.id]=C}}if(g[B.id]==k[B.id].length){g[B.id]=0}if(g[B.id]==-1){g[B.id]=k[B.id].length-1}f(".cs-button-"+B.id).removeClass("cs-active");f("#cs-button-"+B.id+"-"+(g[B.id]+1)).addClass("cs-active");if(h[B.id][g[B.id]]){f("#cs-title-"+B.id).css({opacity:0}).animate({opacity:e[B.id].opacity},e[B.id].titleSpeed);f("#cs-title-"+B.id).html(h[B.id][g[B.id]])}else{f("#cs-title-"+B.id).css("opacity",0)}};var o=function(C,B){f(".cs-"+C.id).attr("href",m[C.id][g[C.id]]).attr("target",d[C.id][g[C.id]]);if(a[C.id]==e[C.id].spw*e[C.id].sph){clearInterval(l[C.id]);return}f("#cs-"+C.id+B).css({opacity:0,"background-image":"url("+k[C.id][g[C.id]]+")"});f("#cs-"+C.id+B).animate({opacity:1},300);a[C.id]++};var p=function(C){var B;f(C).append("<div id='cs-navigation-"+C.id+"'></div>");f("#cs-navigation-"+C.id).hide();f("#cs-navigation-"+C.id).append("<a href='#' id='cs-prev-"+C.id+"' class='cs-prev'>"+e[C.id].prevText+"</a>");f("#cs-navigation-"+C.id).append("<a href='#' id='cs-next-"+C.id+"' class='cs-next'>"+e[C.id].nextText+"</a>");f("#cs-prev-"+C.id).css({position:"absolute",top:e[C.id].height/2-15,left:0,"z-index":1001,"line-height":"30px",opacity:e[C.id].opacity}).click(function(D){D.preventDefault();v(C,"prev");y(C)}).mouseover(function(){f("#cs-navigation-"+C.id).show()});f("#cs-next-"+C.id).css({position:"absolute",top:e[C.id].height/2-15,right:0,"z-index":1001,"line-height":"30px",opacity:e[C.id].opacity}).click(function(D){D.preventDefault();v(C);y(C)}).mouseover(function(){f("#cs-navigation-"+C.id).show()});f("<div id='cs-buttons-"+C.id+"' class='cs-buttons'></div>").appendTo(f("#coin-slider-"+C.id));for(B=1;B<k[C.id].length+1;B++){f("#cs-buttons-"+C.id).append("<a href='#' class='cs-button-"+C.id+"' id='cs-button-"+C.id+"-"+B+"'>"+B+"</a>")}f.each(f(".cs-button-"+C.id),function(D,E){f(E).click(function(F){f(".cs-button-"+C.id).removeClass("cs-active");f(this).addClass("cs-active");F.preventDefault();v(C,D);y(C)})});f("#cs-navigation-"+C.id+" a").mouseout(function(){f("#cs-navigation-"+C.id).hide();e[C.id].pause=false});f("#cs-buttons-"+C.id).css({left:"50%","margin-left":-k[C.id].length*15/2-5,position:"relative"})};var z=function(F){var G=["random","swirl","rain","straight"],D,C,B,E;if(e[F.id].effect===""){E=G[Math.floor(Math.random()*(G.length))]}else{E=e[F.id].effect}c[F.id]=[];if(E=="random"){B=0;for(D=1;D<=e[F.id].sph;D++){for(C=1;C<=e[F.id].spw;C++){c[F.id][B]=D+""+C;B++}}q(c[F.id])}if(E=="rain"){n(F)}if(E=="swirl"){t(F)}if(E=="straight"){u(F)}j[F.id]*=-1;if(j[F.id]>0){c[F.id].reverse()}};var q=function(B){var D=B.length,C,F,E;if(D===0){return false}while(--D){C=Math.floor(Math.random()*(D+1));F=B[D];E=B[C];B[D]=E;B[C]=F}};var t=function(C){var E=e[C.id].sph,F=e[C.id].spw,L=1,K=1,D=0,H=0,J=0,B,I=true,G;while(I){H=(D===0||D===2)?F:E;for(G=1;G<=H;G++){c[C.id][J]=L+""+K;J++;if(G!=H){switch(D){case 0:K++;break;case 1:L++;break;case 2:K--;break;case 3:L--;break}}}D=(D+1)%4;switch(D){case 0:F--;K++;break;case 1:E--;L++;break;case 2:F--;K--;break;case 3:E--;L--;break}B=w(E,F)-s(E,F);if(F<=B&&E<=B){I=false}}};var n=function(E){var I=e[E.id].sph,B=e[E.id].spw,H=0,G=1,C=1,F=1,D=true;while(D){for(i=F;i<=G;i++){c[E.id][H]=i+""+parseInt(C-i+1);H++}C++;if(G<I&&C<B&&I<B){G++}if(G<I&&I>=B){G++}if(C>B){F++}if(F>G){D=false}}};var u=function(E){var B=0,D,C;for(D=1;D<=e[E.id].sph;D++){for(C=1;C<=e[E.id].spw;C++){c[E.id][B]=D+""+C;B++}}};var s=function(C,B){if(C>B){return B}else{return C}};var w=function(C,B){if(C<B){return B}else{return C}};var x=function(B){c[B.id]=[];k[B.id]=[];m[B.id]=[];d[B.id]=[];h[B.id]=[];g[B.id]=0;a[B.id]=0;j[B.id]=1;e[B.id]=f.extend({},f.fn.coinslider.defaults,A);f.each(f("#"+B.id+" img"),function(C,D){k[B.id][C]=f(D).attr("src");m[B.id][C]=f(D).parent().is("a")?f(D).parent().attr("href"):"";d[B.id][C]=f(D).parent().is("a")?f(D).parent().attr("target"):"";h[B.id][C]=f(D).next().is("span")?f(D).next().html():"";f(D).hide();f(D).next().hide()});f(B).css({"background-image":"url("+k[B.id][0]+")",width:e[B.id].width,height:e[B.id].height,position:"relative","background-position":"top left"}).wrap("<div class='coin-slider' id='coin-slider-"+B.id+"' />");f("#"+B.id).append("<div class='cs-title' id='cs-title-"+B.id+"' style='position: absolute; bottom:0; left: 0; z-index: 1000;'></div>");r(B);if(e[B.id].navigation){p(B)}v(B,0);y(B)};this.each(function(){x(this)})};f.fn.coinslider.defaults={width:565,height:290,spw:7,sph:5,delay:3000,sDelay:30,opacity:0.7,titleSpeed:500,effect:"",navigation:true,links:true,hoverPause:true,prevText:"prev",nextText:"next"}})(jQuery);
/*** Blogger JSON Feed callback function for CoinSlider by ADB * http://ayudadeblogger.com * http://abogadosasociadosec.com * http://volantedeportivo.com **/
var config=AutoCoinConfig,urlxx=config.url_blog,urltag="/-/"+config.tagName;if(config.url_blog===""){urlxx=window.location.protocol+"//"+window.location.host}if(config.tagName===false){urltag=""}function AutoCoinSlider(w){var u,c,m,g,t,k,b,s,f,e,h,o,v,q,d="",a=w.feed.entry;if(a!==undefined){d="<div id='coinautoslide'>";f=a.length;for(var r=0;r<f;r++){e=a[r].link.length;for(var p=0;p<e;p++){if(a[r].link[p].rel=="alternate"){u=a[r].link[p].href;break}}for(var n=0;n<e;n++){if(a[r].link[n].rel=="replies"&&a[r].link[n].type=="text/html"){m=a[r].link[n].title.split(" ")[0];break}}if("content" in a[r]){t=a[r].content.$t}else{if("summary" in a[r]){t=a[r].summary.$t}else{t=""}}if("media$thumbnail" in a[r]){k=a[r].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+config.imageSize)}else{k=config.pBlank}if(m===0){g=' <span class="cm">'+config.NoCmtext+"</span>"}else{g=' <span class="cm">'+m+" "+config.cmtext+"</span>"}t=t.replace(/<\S[^>]*>/g,"");if(t.length>config.SumChars){t=t.substring(0,config.SumChars)+"..."}c=a[r].title.$t;s=a[r].published.$t.substring(0,10),h=s.substring(0,4),o=s.substring(5,7),v=s.substring(8,10),q=config.MonthNames[parseInt(o,10)-1],b='<span class="date"><span class="dd">'+v+'</span> <span class="dm">'+q+'</span> <span class="dy">'+h+"</span></span>";d+='<a href="'+u+'" target="_blank"><img src="'+k+'" alt="'+c+'"/><span><strong>'+c+"</strong><cite>"+b+g+"</cite><p>"+t+"</p></span></a>"}d+="</div>";$("#coinslidewrap").html(d);$("#coinautoslide").coinslider({width:config.width,height:config.height,spw:config.spw,sph:config.sph,delay:config.delay,sDelay:config.sDelay,opacity:config.opacity,titleSpeed:config.titleSpeed,effect:config.effect,navigation:config.navigation,links:config.links,hoverPause:config.hoverPause,prevText:config.prevText,nextText:config.nextText,})}else{$("#coinslidewrap").html("<span>No result!</span>")}}document.write('<div id="coinslidewrap"/>');document.write('<script type="text/javascript" src="'+urlxx+"/feeds/posts/summary"+urltag+"?redirect=false&max-results="+config.MaxPost+'&alt=json-in-script&callback=AutoCoinSlider"><\/script>');
