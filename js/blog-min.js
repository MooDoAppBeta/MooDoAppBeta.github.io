function el(e){return document.getElementById(e)}var requirejs,require,define;!function(e){function i(e,i){return w.call(e,i)}function o(e,i){var o,t,n,s,r,a,d,c,l,m,p=i&&i.split("/"),u=f.map,h=u&&u["*"]||{};if(e&&"."===e.charAt(0))if(i){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),c=0;c<e.length;c+=1)if(m=e[c],"."===m)e.splice(c,1),c-=1;else if(".."===m){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||h)&&u){for(o=e.split("/"),c=o.length;c>0;c-=1){if(t=o.slice(0,c).join("/"),p)for(l=p.length;l>0;l-=1)if(n=u[p.slice(0,l).join("/")],n&&(n=n[t])){s=n,r=c;break}if(s)break;!a&&h&&h[t]&&(a=h[t],d=c)}!s&&a&&(s=a,r=d),s&&(o.splice(0,r,s),e=o.join("/"))}return e}function t(i,o){return function(){return l.apply(e,v.call(arguments,0).concat([i,o]))}}function n(e){return function(i){return o(i,e)}}function s(e){return function(i){u[e]=i}}function r(o){if(i(h,o)){var t=h[o];delete h[o],g[o]=!0,c.apply(e,t)}if(!i(u,o)&&!i(g,o))throw new Error("No "+o);return u[o]}function a(e){var i,o=e?e.indexOf("!"):-1;return o>-1&&(i=e.substring(0,o),e=e.substring(o+1,e.length)),[i,e]}function d(e){return function(){return f&&f.config&&f.config[e]||{}}}var c,l,m,p,u={},h={},f={},g={},w=Object.prototype.hasOwnProperty,v=[].slice;m=function(e,i){var t,s=a(e),d=s[0];return e=s[1],d&&(d=o(d,i),t=r(d)),d?e=t&&t.normalize?t.normalize(e,n(i)):o(e,i):(e=o(e,i),s=a(e),d=s[0],e=s[1],d&&(t=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:t}},p={require:function(e){return t(e)},exports:function(e){var i=u[e];return"undefined"!=typeof i?i:u[e]={}},module:function(e){return{id:e,uri:"",exports:u[e],config:d(e)}}},c=function(o,n,a,d){var c,l,f,w,v,b,y=[];if(d=d||o,"function"==typeof a){for(n=!n.length&&a.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=m(n[v],d),l=w.f,"require"===l)y[v]=p.require(o);else if("exports"===l)y[v]=p.exports(o),b=!0;else if("module"===l)c=y[v]=p.module(o);else if(i(u,l)||i(h,l)||i(g,l))y[v]=r(l);else{if(!w.p)throw new Error(o+" missing "+l);w.p.load(w.n,t(d,!0),s(l),{}),y[v]=u[l]}f=a.apply(u[o],y),o&&(c&&c.exports!==e&&c.exports!==u[o]?u[o]=c.exports:f===e&&b||(u[o]=f))}else o&&(u[o]=a)},requirejs=require=l=function(i,o,t,n,s){return"string"==typeof i?p[i]?p[i](o):r(m(i,o).f):(i.splice||(f=i,o.splice?(i=o,o=t,t=null):i=e),o=o||function(){},"function"==typeof t&&(t=n,n=s),n?c(e,i,o,t):setTimeout(function(){c(e,i,o,t)},4),l)},l.config=function(e){return f=e,f.deps&&l(f.deps,f.callback),l},define=function(e,o,t){o.splice||(t=o,o=[]),i(u,e)||i(h,e)||(h[e]=[e,o,t])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1),this.init()}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows"},e.prototype={init:function(){var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)&&(this.OS=OSNames.Windows,this._isMobile=!0),!this._isMobile){var i=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),!i){var o="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(o).matches&&(i=!0)}this._isMobile=i}},config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,i=1e3,o=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var t=new RegExp("Chrome/([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1)),26>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var t=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1),o=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var t=new RegExp("Firefox/([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1)),16>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var t=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1),o=parseFloat(RegExp.$2)),6>i&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var i=0;i<e.length;++i)this.registerDemo(e[i])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadDemo();var e=this.demos[this.demoIndex],i=document.getElementById(e.id),o=!1;if(i)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if((this._preferImages||this._forceVideo)&&void 0!==e.video){o=!1;var t=document.createElement("video");t.id="v"+i.id,t.className="demoimg",t.preload="auto",t.autoplay="autoplay",t.controls="controls",t.poster="/video/moodo.png";for(var n=0;n<e.video.length;++n){var s=document.createElement("source");s.src=e.video[n].path,s.type=e.video[n].type,t.appendChild(s)}i.id="",i.style.overflow="hidden",i.appendChild(t),this.videoLoaded=!0,window.postMessage("video_started","*")}else if(e.src){o=!0;var r=document.createElement("iframe");r.id=i.id,r.className=i.className+" demo",r.setAttribute("seamless","seamless"),r.scrolling="no",r.src=e.src,i.parentElement.replaceChild(r,i)}}else{var a=document.createElement("img");a.id=i.id,a.className="demoimg",a.src=this.getImgSrc(e.img),i.id="",i.style.overflowY="hidden",i.style.overflowX="auto",i.appendChild(a)}this.demoIndex++,(this._noLoadDelay||!o)&&this._loadDemo()}}},new e}),define("util",["DemoManager"],function(e){function i(e){var i="";if("object"==typeof e){var o=[];for(key in e)o[o.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);i=o.join("&").replace(/%20/g,"+")}else i=e;return i}var o={};o.XHR=function(e){function o(){c>l?t():log("XHR Failed to retry - reached max retry limit")}function t(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200===!e.status&&(e.retry=o),r(e))},m&&p?e.open(s.toUpperCase(),n,!0,m,p):e.open(s.toUpperCase(),n,!0),d)for(var t in d)e.setRequestHeader(t,d[t]);if(a){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var c=i(a);e.send(c)}else e.send()}var n=e.url,s=e.type,r=e.cb,a=e.data,d=e.headers,c=e.retries||3,l=0,m=e.username,p=e.password;t()},o.sendEvent=function(e,i,t){if(window.ga)try{ga("send","event",e,i,"LandingPage",t)}catch(n){o.reporError(n)}},o.reportError=function(){},window.sendToAppStore=function(i,t){e.isMobile()&&e.OS&&(i=e.OS);var n;switch(i){case OSNames.Android:n="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:n="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:n="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8";break;case OSNames.Windows:}n&&(o.sendEvent("AppStore",i+"_"+t),window.location.href=n)};var t={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,i){var n;switch(e){case t.Facebook:n="http://facebook.com/MooDoApp";break;case t.Twitter:n="http://twitter.com/MooDoApp";break;case t.Google:n="http://google.com/+MooDoApp";break;case t.Email:n="mailto:contact@moo.do"}n&&(o.sendEvent("Social",e+"_"+i),window.open(n,"_blank"))},o}),define("auth",["util"],function(e){function i(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return i.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),i=JSON.parse(e),o=i.activeUser;return o}catch(t){log("Error getting app user: ",t)}return void 0},requestAuthorization:function(){var e=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident")?this.sendToApp():this.authenticate(!1,function(e){e?this.getEmailAddr(function(e){var i=this.getCurrentAppUser();i===e.email?this.sendToApp():this.sendToApp(e.email)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp()},sendToApp:function(e){window.location.href=e?window.location.protocol+"//"+window.location.host+"/app/#user="+encodeURIComponent(e):window.location.protocol+"//"+window.location.host+"/app/#login=true"},authenticate:function(e,i){var o={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},t=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=t||this.isMobro();n&&!e&&(o.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(o,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),i&&i(this.isLoggedIn)}.bind(this))},getEmailAddr:function(i){var o=gapi.auth.getToken();if(o){var t="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+o.access_token;e.XHR({type:"GET",url:t,retries:2,cb:function(e){if(200===e.status){var o={};try{o=JSON.parse(e.responseText)}catch(t){log("Error: ",t)}i(o)}else e.retry?e.retry():i()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(i){errorName=i.name}try{e=!!new ActiveXObject("htmlfile")}catch(i){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new i});var rqConfig={paths:{util:"/landing/js/util",auth:"/landing/js/auth",DemoManager:"/landing/js/DemoManager"},waitSeconds:0};require.config(rqConfig),requirejs(["auth","DemoManager"],function(e,i){function o(e){var i="",o=["ms","webkit","moz","o"],t=document.body.style;if("string"==typeof t[e])i="";else for(var n=0;n<o.length;n++)if("string"==typeof t["-"+o[n]+"-"+e]){i=o[n];break}var s=i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return i?i+s:s}function t(e){return document.getElementById(e)}function n(){var e=40;if(i.isMobile())t("topBar").classList.add("pinned"),r=!0;else{var o=document.documentElement.scrollTop||document.body.scrollTop;o>e&&!r?(t("topBar").classList.add("pinned"),r=!0):e>o&&r&&(t("topBar").classList.remove("pinned"),r=!1)}}var s=o("transition");window.__demos&&(window.__config?i.config(window.__config):i.isLegacyBrowser()&&i.config({preferImages:!0,noDelayLoad:!0}),i.registerDemos(window.__demos),i.beginLoading());var r=!1;i.isMobile()&&(document.documentElement.classList.add("mobile"),t("topBar").classList.add("pinned"),r=!0),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,requestAnimationFrame(function(){t("topBar").style[s]="opacity 200ms",t("topBar").style.opacity=1,requestAnimationFrame(function(){t("logoWrapper").style[s]="all 400ms",t("logoSubtitle").style[s]="all 300ms"})}),document.onscroll=n,n(),window.requestAuthorization=function(i){e.requestAuthorization(),util.sendEvent("Menu","Login_"+i)}}),define("blog",function(){});