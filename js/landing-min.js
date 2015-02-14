function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return w.call(e,t)}function i(e,t){var i,o,n,a,r,s,d,l,c,u,p,m=t&&t.split("/"),f=h.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(m=m.slice(0,m.length-1),e=e.split("/"),r=e.length-1,h.nodeIdCompat&&y.test(e[r])&&(e[r]=e[r].replace(y,"")),e=m.concat(e),c=0;c<e.length;c+=1)if(p=e[c],"."===p)e.splice(c,1),c-=1;else if(".."===p){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((m||g)&&f){for(i=e.split("/"),c=i.length;c>0;c-=1){if(o=i.slice(0,c).join("/"),m)for(u=m.length;u>0;u-=1)if(n=f[m.slice(0,u).join("/")],n&&(n=n[o])){a=n,s=c;break}if(a)break;!d&&g&&g[o]&&(d=g[o],l=c)}!a&&d&&(a=d,s=l),a&&(i.splice(0,s,a),e=i.join("/"))}return e}function o(t,i){return function(){var o=v.call(arguments,0);return"string"!=typeof o[0]&&1===o.length&&o.push(null),c.apply(e,o.concat([t,i]))}}function n(e){return function(t){return i(t,e)}}function a(e){return function(t){m[e]=t}}function r(i){if(t(f,i)){var o=f[i];delete f[i],g[i]=!0,l.apply(e,o)}if(!t(m,i)&&!t(g,i))throw new Error("No "+i);return m[i]}function s(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var l,c,u,p,m={},f={},h={},g={},w=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/;u=function(e,t){var o,a=s(e),d=a[0];return e=a[1],d&&(d=i(d,t),o=r(d)),d?e=o&&o.normalize?o.normalize(e,n(t)):i(e,t):(e=i(e,t),a=s(e),d=a[0],e=a[1],d&&(o=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},p={require:function(e){return o(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},l=function(i,n,s,d){var l,c,h,w,v,y,b=[],x=typeof s;if(d=d||i,"undefined"===x||"function"===x){for(n=!n.length&&s.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=u(n[v],d),c=w.f,"require"===c)b[v]=p.require(i);else if("exports"===c)b[v]=p.exports(i),y=!0;else if("module"===c)l=b[v]=p.module(i);else if(t(m,c)||t(f,c)||t(g,c))b[v]=r(c);else{if(!w.p)throw new Error(i+" missing "+c);w.p.load(w.n,o(d,!0),a(c),{}),b[v]=m[c]}h=s?s.apply(m[i],b):void 0,i&&(l&&l.exports!==e&&l.exports!==m[i]?m[i]=l.exports:h===e&&y||(m[i]=h))}else i&&(m[i]=s)},requirejs=require=c=function(t,i,o,n,a){if("string"==typeof t)return p[t]?p[t](i):r(u(t,i).f);if(!t.splice){if(h=t,h.deps&&c(h.deps,h.callback),!i)return;i.splice?(t=i,i=o,o=null):t=e}return i=i||function(){},"function"==typeof o&&(o=n,n=a),n?l(e,t,i,o):setTimeout(function(){l(e,t,i,o)},4),c},c.config=function(e){return c(e)},requirejs._defined=m,define=function(e,i,o){i.splice||(o=i,i=[]),t(m,e)||t(f,e)||(f[e]=[e,i,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1),this.init()}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows"},e.prototype={init:function(){var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)&&(this.OS=OSNames.Windows,this._isMobile=!0),!this._isMobile){var t=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),!t){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(t=!0)}this._isMobile=t}},config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadDemo();var e=this.demos[this.demoIndex],t=document.getElementById(e.id),i=!1;if(t)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if((this._preferImages||this._forceVideo)&&void 0!==e.video){i=!1;var o=document.createElement("video");o.id="v"+t.id,o.className="demoimg",o.preload="auto",o.autoplay="autoplay",o.controls="controls",o.poster="/video/moodo.png";for(var n=0;n<e.video.length;++n){var a=document.createElement("source");a.src=e.video[n].path,a.type=e.video[n].type,o.appendChild(a)}t.id="",t.style.overflow="hidden",t.appendChild(o),this.videoLoaded=!0,window.postMessage("video_started","*")}else if(e.src){i=!0;var r=document.createElement("iframe");r.id=t.id,r.className=t.className+" demo",r.setAttribute("seamless","seamless"),r.scrolling="no",r.src=e.src,t.parentElement.replaceChild(r,t)}}else{var s=document.createElement("img");s.id=t.id,s.className="demoimg",s.src=this.getImgSrc(e.img),t.id="",t.style.overflowY="hidden",t.style.overflowX="auto",t.appendChild(s)}this.demoIndex++,(this._noLoadDelay||!i)&&this._loadDemo()}}},new e}),define("util",["DemoManager"],function(e){function t(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else t=e;return t}var i={},o=[0,5,15,35,80,170],n=[408,500,502,503,504];i.XHR=function(e){function i(){p>m?(m++,setTimeout(a,1e3*o[m])):log("XHR Failed to retry - reached max retry limit")}function a(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&p>m?(e.retry=i,u&&n.indexOf(e.status)>=0?e.retry():d(e)):d(e))},f&&h?e.open(s.toUpperCase(),r,!0,f,h):e.open(s.toUpperCase(),r,!0),c)for(var o in c)e.setRequestHeader(o,c[o]);if(l){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var a=t(l);e.send(a)}else e.send()}var r=e.url,s=e.type,d=e.cb,l=e.data,c=e.headers,u=e.autoRetry,p=e.maxRetries||2,m=0,f=e.username,h=e.password;a()},i.XHR_PrivateAPI=function(e){var t="https:",o="/private/v1",n={type:e.type,url:t+"//api.moo.do"+o+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};i.XHR(n)},i.XHR_PublicAPI=function(){},i.sendEvent=function(e,t,o){if(window.ga)try{ga("send","event",e,t,"LandingPage",o)}catch(n){i.reporError(n)}},i.reportError=function(){},window.sendToAppStore=function(t,o){e.isMobile()&&e.OS&&(t=e.OS),url&&i.sendEvent("AppStore",t+"_"+o)};var a={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,t){var o;e==a.Email&&window.open("mailto:contact@moo.do","_blank"),o&&i.sendEvent("Social",e+"_"+t)},i}),define("auth",["util"],function(e){function t(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return t.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),t=JSON.parse(e);if(t){var i=t.activeUser;return i}}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(){var e=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident")?this.sendToApp():this.authenticate(!1,function(e){e?this.getEmailAddr(function(e){var t=this.getCurrentAppUser();t===e.email?this.sendToApp():this.sendToApp(e.email)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp()},sendToApp:function(e){window.location.href=e?window.location.protocol+"//"+window.location.host+"/app/#user="+encodeURIComponent(e):window.location.protocol+"//"+window.location.host+"/app/#login=true"},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(i,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),t&&t(this.isLoggedIn)}.bind(this))},getEmailAddr:function(t){var i=gapi.auth.getToken();if(i){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+i.access_token;e.XHR({type:"GET",url:o,autoRetry:!0,cb:function(e){if(200===e.status){var i={};try{i=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}t(i)}else t()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new t}),(window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0)&&(window.location.pathname="/app/");var numRetries=2,loadYTVideo=!1;if(("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo){var origMuteState=!1,ytplayer;!function(){function e(){1===ytplayer.getPlayerState()&&ytplayer.getCurrentTime()>=n-1.5&&(ytplayer.pauseVideo(),origMuteState&&ytplayer.unMute())}function t(t){n=ytplayer.getDuration(),setInterval(e,1e3),origMuteState=t.target.isMuted(),t.target.mute(),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},3500),require(["DemoManager"],function(e){if(e.isMobile()){var t=document.getElementById("videoFrame");t.style.opacity=1}})}function i(e){switch(e.data){case YT.PlayerState.PLAYING:var t=document.getElementById("videoFrame");t.style.opacity=1;break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function o(e){console.log("Player Error: ",e)}var n,a=document.createElement("script");a.src="//www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r),window.onYouTubeIframeAPIReady=function(){ytplayer=new YT.Player("videoFrame",{videoId:"gr8-VIBWRak",playerVars:{enablejsapi:1,autoplay:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:window.location.protocol+"//"+window.location.host},events:{onReady:t,onStateChange:i,onError:o}})}}()}requirejs(["util","auth","DemoManager"],function(e,t,i){function o(e){return"string"==typeof e?v[e]||(v[e]=document.getElementById(e)):e}function n(e){var t="",i=["ms","webkit","moz","o"],o=document.body.style,n=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof o[e])t="";else for(var a=0;a<i.length;a++)if("string"==typeof o[i[a]+n]){t=i[a];break}var r=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+r:r}function a(){x=n("transform"),T=n("transition"),E=n("animation"),M=n("animationDelay"),window.addEventListener("resize",u),b=window.innerWidth,i.isMobile()?document.documentElement.classList.add("mobile"):(document.onscroll=m,m()),i.isLegacyBrowser()&&document.documentElement.classList.add("prefImages");var t=navigator.userAgent;(-1!==t.indexOf("MSIE")||-1!==t.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.openGetStarted=function(t){i.isMobile()?sendToAppStore(i.OS):(document.documentElement.classList.add("gettingStarted"),setTimeout(function(){document.documentElement.classList.add("blurred")},200),e.sendEvent("Menu","GetStarted_"+t))},window.hideGetStarted=function(){document.documentElement.classList.remove("blurred"),document.documentElement.classList.remove("gettingStarted")},window.pageLoaded=!0,document.documentElement.style.opacity=1}function r(){function n(e,t){var i=k[t],o="/app/#demo=true&touch=false&dmode=0x1091&data="+i.data+"&panes="+i.panes+"&script="+(i.script?i.script:"none");return{id:e,src:o,noMobile:!0}}function a(){var e=s();if(!i.isMobile()&&(e+=window.innerHeight,e>A+200)){var t=n("demoProcess","kanban");return i.registerDemo(t),i.notifyOfLoad(),document.removeEventListener("scroll",r),!0}}function r(){requestAnimationFrame(a)}function d(){var e=window.innerHeight-60-150;e=Math.max(e,600);var t=Math.max((e-50-600)/2,0);if(o("intro").style[x]="translate(0,"+t+"px)",o("intro").style.height=e+"px",o("demoIntroWrapper").style.height=e-50+"px",!i.isMobile()&&!i.isMobile()){var n=s();getStartedButtonPos=o("platformsTop").getBoundingClientRect().top+n}}function u(e,t){i.isMobile()?sendToAppStore(i.OS,e):(c(),e.style.opacity=1,e.style.display="block"),t.stopPropagation()}function p(e,t){var i=o(t).children[e];i!==O[t]&&(O[t]&&O[t].classList.remove("selected"),i.classList.add("selected"),O[t]=i)}function m(e){p(e,"processes")}function h(e){if(console.log("Received: "+e.data),C[e.data])C[e.data]();else switch(e.data){case"demo_started":o("topDemo").style.opacity=1;break;case"demo_done":for(var t=o("checkboxes").children,i=0;i<t.length;i++)t[i].style[M]=.15*i+.5+"s",log(M,t[i].style[M]);document.documentElement.classList.add("demoDone")}}function g(){function e(e,t,i,n){var a=o(t);a.style[T]=e?"all "+e+"ms ease-in-out":"",a.style[i]=n}function t(t,i,o,n){e(t,i,x,"translate("+o+"px,"+n+"px)")}function i(e,t,i){var n=o(t);n.classList.add(i)}function n(t,i){e(t,i,"opacity",0)}function a(t,i){e(t,i,"opacity",1)}function r(e,t,i,n){{var a=o(t);a.getBoundingClientRect().width}a.innerHTML="<span>"+i+'</span><span class="fadeIn1s">'+n+"</span>"}function s(e,t,i){var n=o(t);n.innerHTML=i}function d(e,t,i){var n=o(t);n.innerText=i}function l(e,t,i){f(t,i)}function c(){h.push(Array.prototype.slice.call(arguments,0))}function u(e){h.push(e)}function p(e){h.push(e)}function m(){do{g++;var e=h[g];if(e){if(!isNaN(e)){setTimeout(m,e);break}if("string"==typeof e){C[e]=m;break}var t=(e[0],e[1]);e.splice(1,1),t.apply(t,e)}}while(e)}var h=(o("i1Title"),[]),g=-1,w=70,v=w;c(0,t,"i1Title",-135,15),c(0,t,"i1Title2",-135,50),c(0,t,"i1Cards",0,w),c(0,t,"demoIntroWrapper",315,v),u(500),c(1e3,a,"i1Title"),c(1e3,a,"i1Title2"),c(0,r,"i1Title","","Organize all your stuff"),u(2e3),c(0,a,"i1Cards");for(var y=0;6>y;y++)c(200,a,"i1C"+y),c(200,e,"i1C"+y,"box-shadow","0 1px 4px rgba(0,0,0,0.3)"),u(140);u(1e3),c(1e3,t,"i1Cards",0,w+40);for(var y=0;6>y;y++)c(1e3,e,"i1C"+y,"box-shadow",""),c(1e3,t,"i1C"+y,0,20*-y);u(200),c(0,r,"i1Title2","","together"),c(400),c(0,i,"i1Cards","show"),u(1500),c(1e3,r,"i1Title2","together ","in a simple outline"),c(0,e,"i1CardsEls","overflow","hidden");for(var y=0;6>y;y++){var b;y>0&&(b=50),3==y&&(b=100),c(1e3,t,"i1C"+y,b,20*-y)}u(2e3),c(1e3,e,"i1Cards","opacity",0),c(1e3,e,"i1Title","opacity",0),c(1e3,e,"i1Title2","opacity",0),u(1e3),c(1e3,e,"i1Title","opacity",1),c(0,d,"i1Title",""),c(1e3,e,"demoIntroWrapper","opacity",1),c(0,l,"demoIntro","start"),c(0,t,"i1Title",-110,15),c(0,r,"i1Title","","This is your email"),p("showSecondPane"),c(1e3,t,"demoIntroWrapper",160,v),c(1e3,r,"i1Title","This is your email",""),c(0,e,"i1Title2","opacity",1),c(0,t,"i1Title2",190,15),c(0,r,"i1Title2","","",200),c(1e3,r,"i1Title2","","This is your todo list"),c(1e3,t,"i1Title",-270,15),c(1e3,t,"i1Title2",25,15),p("showEmails"),c(1e3,r,"i1Title","This is your email"," on"),c(0,s,"i1Title2",'<span class="fadeOut500ms">This is </span><span>your todo list</span>'),c(1e3,t,"i1Title",-225,15),c(1e3,t,"i1Title2",-50,15),p("showAgenda"),c(0,n,"i1Title2"),c(1e3,r,"i1Title","This is your emails and todo list ","on your calendar"),c(1e3,t,"i1Title",-320,15),c(1e3,t,"demoIntroWrapper",0,v),p("done"),c(1e3,n,"i1Title"),u(1e3),c(0,r,"i1Title","",""),c(0,t,"i1Title",-150,15),c(0,a,"i1Title"),c(0,r,"i1Title","","This is a live demo. Try it!"),u(1e6),m()}y=o("buttonGetStarted-top"),I=!0;var w=t.getCurrentAppUser();if(w)try{var v=new URL(document.referrer),b=v.hostname;if("www.moo.do"!==b&&"dev.moo.do"!==b&&"beta.moo.do"!==b&&"localhost"!==b)return void t.sendToApp()}catch(E){}var L=document.getElementById("exampleHeaders");L&&(lastExampleHighlight=L.children[0]);var k={intro:{data:"intro.intro",panes:"PaneGmail:1:2",script:"intro"},kanban:{data:"intro.kanban",panes:"1,,kIdeas:1,,kTodo:1,,kProgress:1,,kTesting",script:"kanban"},gtd:{data:"intro.gtd",panes:"1,,inbox:1,,projects:2,#mobile",script:"gtd"},project:{data:"intro.project",panes:"1,,todo:1,+Jay -//:1,#Android",script:"projectManagement"},inbox:{data:"intro.inbox",panes:"PaneGmail:1:1,,respond",script:"inboxZero"}};i.registerDemo(n("demoIntro","intro"));var A=0,R=o("demoProcess").getBoundingClientRect();A=R.top+s(),a()||document.addEventListener("scroll",r),i.isMobile()&&l("sectionTopDemo"),document.documentElement.classList.remove("hidden");var _=i.isMobile()||i.isLegacyBrowser(),S=!1;i.config({preferImages:_,forceVideo:S,noLoadDelay:i.isMobile()}),i.beginLoading(),window.addEventListener("resize",d),d(),document.onclick=function(){c()},o("platWinTop").onclick=function(e){u(o("popupWinTop"),e)},o("platWinGetStarted").onclick=function(e){u(o("popupWinGetStarted"),e)};var O={};window.exampleClick=function(t,i){highlightExample(t);var o="data:about."+t+","+i;f("demoExamples",o),e.sendEvent("Menu","Demo"+exampleTitles[t])},window.processClick=function(t,i){m(t);var o=k[i],n="data="+o.data+"&panes="+o.panes+"&script="+(o.script?o.script:"none");f("demoProcess",n),e.sendEvent("Menu","Demo"+i)},m(0);var C={};window.addEventListener("message",h,!1),window.requestNotification=function(t,i){var n=document.forms["requestNotification"+t+i],a=document.getElementById("result"+t+i),r=n.email.value;return void 0===r||null===r||r.length<5?a.innerText="Please enter a valid email address.":e.XHR_PrivateAPI({type:"POST",path:"/feedback/notification",data:{email:r,platform:t},cb:function(e){200===e.status?(n.email.value="",a.innerText="Thanks for your interest!",o("signupbox"+i).style.display="none"):a.innerText="There was an error processing your request, please try again in a few minutes."}}),!1},g()}function s(){return document.documentElement.scrollTop||document.body.scrollTop}function d(e){document.documentElement&&(document.documentElement.scrollTop=e),document.body.scrollTop=e}function l(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}function c(){L&&(L.style.opacity=0,L.style.display="",L=void 0)}function u(){b=window.innerWidth;var e=document.getElementById("video");if(e){var t=e.firstElementChild;t.style.height="";var i=window.getComputedStyle(t),o=parseInt(i.width),n=Math.round(o*(9/16));t.style.height=n+"px",document.getElementById("videoFrame").style.height=n+"px"}}function p(){i.isMobile()?10:40,s()}function m(){requestAnimationFrame(p)}function f(e,t){var i=document.getElementById(e);if(i){var o=i.contentWindow;o&&o.postMessage(t,"*")}}function h(e,t,i){return-i*e*(e-2)+t}function g(e,t){function i(e){a||(a=e-20);var o=Math.min((e-a)/t,1),s=h(o,r,n);d(s),1>o&&requestAnimationFrame(i)}var o=document.getElementById(e),n=o.getBoundingClientRect().top;if(window.requestAnimationFrame){var a,r=s();requestAnimationFrame(i)}else d(n)}function w(){a(),("/about/"===window.location.pathname||"/"===window.location.pathname)&&r()}var v={};window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,window.log=console.log.bind(console);var y,b,x="transform",T="transition",E="animation",M="animationDelay",L=void 0,I=!1;window.scrollToDemo=function(){g("demoText",400)},window.requestAuthorization=function(i){t.requestAuthorization(),e.sendEvent("Menu","Login_"+i)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?w():document.addEventListener("DOMContentLoaded",w,!1)}),define("landing",function(){});