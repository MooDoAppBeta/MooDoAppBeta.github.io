function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return w.call(e,t)}function i(e,t){var i,o,n,a,r,s,d,c,l,u,m,p=t&&t.split("/"),f=h.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=e.split("/"),r=e.length-1,h.nodeIdCompat&&y.test(e[r])&&(e[r]=e[r].replace(y,"")),e=p.concat(e),l=0;l<e.length;l+=1)if(m=e[l],"."===m)e.splice(l,1),l-=1;else if(".."===m){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||g)&&f){for(i=e.split("/"),l=i.length;l>0;l-=1){if(o=i.slice(0,l).join("/"),p)for(u=p.length;u>0;u-=1)if(n=f[p.slice(0,u).join("/")],n&&(n=n[o])){a=n,s=l;break}if(a)break;!d&&g&&g[o]&&(d=g[o],c=l)}!a&&d&&(a=d,s=c),a&&(i.splice(0,s,a),e=i.join("/"))}return e}function o(t,i){return function(){var o=v.call(arguments,0);return"string"!=typeof o[0]&&1===o.length&&o.push(null),l.apply(e,o.concat([t,i]))}}function n(e){return function(t){return i(t,e)}}function a(e){return function(t){p[e]=t}}function r(i){if(t(f,i)){var o=f[i];delete f[i],g[i]=!0,c.apply(e,o)}if(!t(p,i)&&!t(g,i))throw new Error("No "+i);return p[i]}function s(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,u,m,p={},f={},h={},g={},w=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/;u=function(e,t){var o,a=s(e),d=a[0];return e=a[1],d&&(d=i(d,t),o=r(d)),d?e=o&&o.normalize?o.normalize(e,n(t)):i(e,t):(e=i(e,t),a=s(e),d=a[0],e=a[1],d&&(o=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},m={require:function(e){return o(e)},exports:function(e){var t=p[e];return"undefined"!=typeof t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},c=function(i,n,s,d){var c,l,h,w,v,y,b=[],x=typeof s;if(d=d||i,"undefined"===x||"function"===x){for(n=!n.length&&s.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=u(n[v],d),l=w.f,"require"===l)b[v]=m.require(i);else if("exports"===l)b[v]=m.exports(i),y=!0;else if("module"===l)c=b[v]=m.module(i);else if(t(p,l)||t(f,l)||t(g,l))b[v]=r(l);else{if(!w.p)throw new Error(i+" missing "+l);w.p.load(w.n,o(d,!0),a(l),{}),b[v]=p[l]}h=s?s.apply(p[i],b):void 0,i&&(c&&c.exports!==e&&c.exports!==p[i]?p[i]=c.exports:h===e&&y||(p[i]=h))}else i&&(p[i]=s)},requirejs=require=l=function(t,i,o,n,a){if("string"==typeof t)return m[t]?m[t](i):r(u(t,i).f);if(!t.splice){if(h=t,h.deps&&l(h.deps,h.callback),!i)return;i.splice?(t=i,i=o,o=null):t=e}return i=i||function(){},"function"==typeof o&&(o=n,n=a),n?c(e,t,i,o):setTimeout(function(){c(e,t,i,o)},4),l},l.config=function(e){return l(e)},requirejs._defined=p,define=function(e,i,o){i.splice||(o=i,i=[]),t(p,e)||t(f,e)||(f[e]=[e,i,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1),this.init()}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows"},e.prototype={init:function(){var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)&&(this.OS=OSNames.Windows,this._isMobile=!0),!this._isMobile){var t=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),!t){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(t=!0)}this._isMobile=t}},config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadDemo();var e=this.demos[this.demoIndex],t=document.getElementById(e.id),i=!1;if(t)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if((this._preferImages||this._forceVideo)&&void 0!==e.video){i=!1;var o=document.createElement("video");o.id="v"+t.id,o.className="demoimg",o.preload="auto",o.autoplay="autoplay",o.controls="controls",o.poster="/video/moodo.png";for(var n=0;n<e.video.length;++n){var a=document.createElement("source");a.src=e.video[n].path,a.type=e.video[n].type,o.appendChild(a)}t.id="",t.style.overflow="hidden",t.appendChild(o),this.videoLoaded=!0,window.postMessage("video_started","*")}else if(e.src){i=!0;var r=document.createElement("iframe");r.id=t.id,r.className=t.className+" demo",r.setAttribute("seamless","seamless"),r.scrolling="no",r.src=e.src,t.parentElement.replaceChild(r,t)}}else{var s=document.createElement("img");s.id=t.id,s.className="demoimg",s.src=this.getImgSrc(e.img),t.id="",t.style.overflowY="hidden",t.style.overflowX="auto",t.appendChild(s)}this.demoIndex++,(this._noLoadDelay||!i)&&this._loadDemo()}}},new e}),define("util",["DemoManager"],function(e){function t(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else t=e;return t}var i={},o=[0,5,15,35,80,170],n=[408,500,502,503,504];i.XHR=function(e){function i(){m>p?(p++,setTimeout(a,1e3*o[p])):log("XHR Failed to retry - reached max retry limit")}function a(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&m>p?(e.retry=i,u&&n.indexOf(e.status)>=0?e.retry():d(e)):d(e))},f&&h?e.open(s.toUpperCase(),r,!0,f,h):e.open(s.toUpperCase(),r,!0),l)for(var o in l)e.setRequestHeader(o,l[o]);if(c){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var a=t(c);e.send(a)}else e.send()}var r=e.url,s=e.type,d=e.cb,c=e.data,l=e.headers,u=e.autoRetry,m=e.maxRetries||2,p=0,f=e.username,h=e.password;a()},i.XHR_PrivateAPI=function(e){var t="http:",o="/private/v1",n={type:e.type,url:t+"//api.moo.do"+o+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};i.XHR(n)},i.XHR_PublicAPI=function(){},i.sendEvent=function(e,t,o){if(window.ga)try{ga("send","event",e,t,"LandingPage",o)}catch(n){i.reporError(n)}},i.reportError=function(){},window.sendToAppStore=function(t,o){e.isMobile()&&e.OS&&(t=e.OS);var n;switch(t){case OSNames.Android:n="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:n="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:n="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8";break;case OSNames.Windows:}n&&(i.sendEvent("AppStore",t+"_"+o),window.location.href=n)};var a={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,t){var o;switch(e){case a.Facebook:o="http://facebook.com/MooDoApp";break;case a.Twitter:o="http://twitter.com/MooDoApp";break;case a.Google:o="http://google.com/+MooDoApp";break;case a.Email:o="mailto:contact@moo.do"}o&&(i.sendEvent("Social",e+"_"+t),window.open(o,"_blank"))},i}),define("auth",["util"],function(e){function t(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return t.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),t=JSON.parse(e),i=t.activeUser;return i}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(){var e=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident")?this.sendToApp():this.authenticate(!1,function(e){e?this.getEmailAddr(function(e){var t=this.getCurrentAppUser();t===e.email?this.sendToApp():this.sendToApp(e.email)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp()},sendToApp:function(e){window.location.href=e?window.location.protocol+"//"+window.location.host+"/app/#user="+encodeURIComponent(e):window.location.protocol+"//"+window.location.host+"/app/#login=true"},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(i,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),t&&t(this.isLoggedIn)}.bind(this))},getEmailAddr:function(t){var i=gapi.auth.getToken();if(i){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+i.access_token;e.XHR({type:"GET",url:o,autoRetry:!0,cb:function(e){if(200===e.status){var i={};try{i=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}t(i)}else t()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new t}),(window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0)&&(window.location.pathname="/app/");var numRetries=2,loadYTVideo=!1;if(("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo){var origMuteState=!1,ytplayer;!function(){function e(){1===ytplayer.getPlayerState()&&ytplayer.getCurrentTime()>=n-1.5&&(ytplayer.pauseVideo(),origMuteState&&ytplayer.unMute())}function t(t){n=ytplayer.getDuration(),setInterval(e,1e3),origMuteState=t.target.isMuted(),t.target.mute(),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},3500),require(["DemoManager"],function(e){if(e.isMobile()){var t=document.getElementById("videoFrame");t.style.opacity=1}})}function i(e){switch(e.data){case YT.PlayerState.PLAYING:var t=document.getElementById("videoFrame");t.style.opacity=1;break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function o(e){console.log("Player Error: ",e)}var n,a=document.createElement("script");a.src="//www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r),window.onYouTubeIframeAPIReady=function(){ytplayer=new YT.Player("videoFrame",{videoId:"gr8-VIBWRak",playerVars:{enablejsapi:1,autoplay:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:window.location.protocol+"//"+window.location.host},events:{onReady:t,onStateChange:i,onError:o}})}}()}requirejs(["util","auth","DemoManager"],function(e,t,i){function o(e){return document.getElementById(e)}function n(e){var t="",i=["ms","webkit","moz","o"],o=document.body.style,n=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof o[e])t="";else for(var a=0;a<i.length;a++)if("string"==typeof o[i[a]+n]){t=i[a];break}var r=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+r:r}function a(){k=n("transform"),E=n("transition"),L=n("animation"),M=n("animationDelay"),window.onresize=m,x=window.innerWidth,i.isMobile()?(document.documentElement.classList.add("mobile"),o("topBar").classList.add("pinned"),R=!0):(document.onscroll=f,f()),i.isLegacyBrowser()&&document.documentElement.classList.add("prefImages");var e=navigator.userAgent;(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))&&document.documentElement.classList.add("ie"),requestAnimationFrame(function(){o("topBar").style[E]="opacity 200ms",o("topBar").style.opacity=1,requestAnimationFrame(function(){o("logoWrapper").style[E]="all 400ms",o("logoSubtitle").style[E]="all 300ms"})}),document.body.style.display="block",window.pageLoaded=!0}function r(){function n(e,t){i.isMobile()?sendToAppStore(i.OS,e):(u(),e.style.opacity=1,e.style.display="block"),t.stopPropagation()}function a(e){var t=document.getElementById("exampleHeaders").children[e];t!==k&&(k&&k.classList.remove("selected"),t.classList.add("selected"),k=t)}function r(t,i){var o=!L[t],n="script:"+t+(o?"":"-");log(n),h("demoCheckboxes",n),o?i.classList.add("checked"):i.classList.remove("checked"),L[t]=o,e.sendEvent("Menu","DemoCheckbox"+t+o)}function s(e){switch(console.log("Received: "+e.data),e.data){case"demo_started":o("topDemo").style.opacity=1;break;case"demo_done":for(var t=o("checkboxes").children,i=0;i<t.length;i++)t[i].style[M]=.15*i+.5+"s",log(M,t[i].style[M]);document.documentElement.classList.add("demoDone")}}b=o("buttonGetStarted-top"),T=!0;var d=t.getCurrentAppUser();if(d)try{var m=new URL(document.referrer),p=m.hostname;if("www.moo.do"!==p&&"dev.moo.do"!==p&&"beta.moo.do"!==p&&"localhost"!==p)return void t.sendToApp()}catch(f){}A=[o("sectionFeat"),o("sectionMade"),o("sectionQuotes"),o("platformsBottom")];var g=document.getElementById("exampleHeaders");g&&(k=g.children[0]);var w=[{id:"demoCheckboxes",src:"/app/#demo=true&touch=false&data=checkboxes.none&panes=1&script=checkintro&dmode=0x1091",noMobile:!0}];i.isMobile()&&l("sectionMade"),document.documentElement.classList.remove("hidden");var v=i.isMobile()||i.isLegacyBrowser(),y=!1;i.config({preferImages:v,forceVideo:y,noLoadDelay:i.isMobile()}),i.registerDemos(w),i.beginLoading();var x=window.innerHeight-180-120;x=Math.max(x,550),o("demoCheckboxes").style.height=x+"px",i.isMobile()||c(!0),document.onclick=function(){u()},o("platWinTop").onclick=function(e){n(o("popupWinTop"),e)},o("platWinBot").onclick=function(e){n(o("popupWinBot"),e)},o("platWinGetStarted").onclick=function(e){n(o("popupWinGetStarted"),e)};var k,E=["Intro","Life","Professional","Student","Developer"],L={check0:!0};window.exampleClick=function(t,i){a(t);var o="data:about."+t+","+i;h("demoDesktop",o),e.sendEvent("Menu","Demo"+E[t])},window.checkboxClick=function(e){var t=e.target;t.id||(t=t.parentElement);var i=t.id;i&&"checkboxes"!==i&&r(i,t)},o("checkboxes").onclick=window.checkboxClick,window.addEventListener("message",s,!1),window.requestNotification=function(t,i){var n=document.forms["requestNotification"+t+i],a=document.getElementById("result"+t+i),r=n.email.value;return void 0===r||null===r||r.length<5?a.innerText="Please enter a valid email address.":e.XHR_PrivateAPI({type:"POST",path:"/feedback/notification",data:{email:r,platform:t},cb:function(e){200===e.status?(n.email.value="",a.innerText="Thanks for your interest!",o("signupbox"+i).style.display="none"):a.innerText="There was an error processing your request, please try again in a few minutes."}}),!1},window.openGetStarted=function(t){i.isMobile()?sendToAppStore(i.OS):(document.documentElement.classList.add("gettingStarted"),setTimeout(function(){document.documentElement.classList.add("blurred")},200),e.sendEvent("Menu","GetStarted_"+t))},window.hideGetStarted=function(){document.documentElement.classList.remove("blurred"),document.documentElement.classList.remove("gettingStarted")}}function s(){return document.documentElement.scrollTop||document.body.scrollTop}function d(e){document.documentElement&&(document.documentElement.scrollTop=e),document.body.scrollTop=e}function c(e){if(!i.isMobile()){var t=s();y=o("platformsTop").getBoundingClientRect().top+t,t+=window.innerHeight;for(var n=0;n<A.length;n++){var a=A[n].getBoundingClientRect();S[n]=a.top,e&&S[n]>t&&(I[n]=!1,A[n].style.opacity=0)}}}function l(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}function u(){_&&(_.style.opacity=0,_.style.display="",_=void 0)}function m(){x=window.innerWidth;var e=document.getElementById("video");if(e){var t=e.firstElementChild;t.style.height="";var o=window.getComputedStyle(t),n=parseInt(o.width),a=Math.round(n*(9/16));t.style.height=a+"px",document.getElementById("videoFrame").style.height=a+"px"}i.isMobile()||(c(),f())}function p(){var e=i.isMobile()?10:40,t=s();if((t>e||680>x)&&!R?(o("topBar").classList.add("pinned"),R=!0):e>t&&x>=680&&R&&(o("topBar").classList.remove("pinned"),R=!1),T&&!i.isMobile()){if(x>=740&&t>y){O||(o("platformsTop").classList.add("pinned"),O=!0);var n=50,a=1-Math.min(t-y,n)/n,r=.75+.25*a;r!=C&&(b.style[k]="scale("+r+","+r+")"),C=r}else(740>x||y>t)&&O&&(o("platformsTop").classList.remove("pinned"),O=!1,1!=C&&(b.style[k]=""),C=1);t+=window.innerHeight;for(var d=0,c=0;c<A.length;c++)!I[c]&&t>S[c]+d&&(A[c].style.opacity=1,I[c]=!0)}}function f(){requestAnimationFrame(p)}function h(e,t){var i=document.getElementById(e);if(i){var o=i.contentWindow;o.postMessage(t,"*")}}function g(e,t,i){return-i*e*(e-2)+t}function w(e,t){function i(e){a||(a=e-20);var o=Math.min((e-a)/t,1),s=g(o,r,n);d(s),1>o&&requestAnimationFrame(i)}var o=document.getElementById(e),n=o.getBoundingClientRect().top;if(window.requestAnimationFrame){var a,r=s();requestAnimationFrame(i)}else d(n)}function v(){a(),("/about/"===window.location.pathname||"/"===window.location.pathname)&&r()}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,window.log=console.log.bind(console);var y,b,x,k="transform",E="transition",L="animation",M="animationDelay",A=[],S=[],I=[],R=!1,_=void 0,O=!1,T=!1,C=1;window.scrollToDemo=function(){w("demoText",400)},window.requestAuthorization=function(i){t.requestAuthorization(),e.sendEvent("Menu","Login_"+i)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?v():document.addEventListener("DOMContentLoaded",v,!1)}),define("landing",function(){});