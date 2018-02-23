!function(){function HelperFnsWrapper(){var e={fieldMapOut:{a:"isArchived",c:"dateCreated",d:"date",e:"duration",f:"formats",g:"durationText",h:"favorites",i:"items",k:"isNote",l:"modifiedOffline",m:"isCollapsed",n:"note",o:"modifiedOfflineText",p:"priority",q:"dateFormat",r:"repeatDate",s:"dateText",t:"text",u:"versionText",v:"version",x:"isDeleted",z:"isComplete",ai:"archivedItems",ad:"allDayDate",id:"id","*":"isStarred","^":"dateCompleted"},getMapping:function(e,a){var t={};for(var r in e)if(void 0!==e[r]&&null!==e[r]){var n=a[r];n?t[n]=e[r]:t[r]=e[r]}return t},translateObjOut:function(e){return this.getMapping(e,this.fieldMapOut)}};return e}function WorkerLoaderWrapper(){function e(e,a,t,r,n){postMessage({id:e,done:!!r,data:n,msg:a,stack:t})}function a(e,a){postMessage({id:e,done:!0,data:a})}onmessage=function(t){try{var r=t.data.name,n=t.data.type,o=indexedDB.open(r);o.onupgradeneeded=function(a){e(t.data.id,"No pre-existing DB",void 0,!0),o.transaction.abort()},o.onerror=function(a){a.target&&a.target.error&&a.target.error.code?20!==a.target.error.code&&e(t.data.id,"Error opening DB: "+a.target.error.code,void 0,!0):e(t.data.id,"Error opening DB: Unknown Error",void 0,!0)},o.onsuccess=function(r){var o,i=r.target.result;o="settings"===n?{}:[];var c=i.transaction(n,"readonly");c.oncomplete=function(){if(i.close(),"items"===n)try{for(var r=new Array(o.length),c=0;c<o.length;++c){var s=HelperFnsWrapper_.translateObjOut(o[c]);s?r[c]=s:e(t.data.id,"Failed to translate obj",void 0,!1,o[c])}a(t.data.id,r)}catch(d){e(t.data.id,d.message,d.stack,!0)}else"cache"!==n&&"settings"!==n||a(t.data.id,o)},c.onerror=function(){e(t.data.id,"Transaction error",void 0,!0)},c.onabort=function(){e(t.data.id,"Transaction abort",void 0,!0)};var s=c.objectStore(n);s?s.openCursor().onsuccess=function(e){var a=e.target.result;a&&("settings"===n?o[a.key]=a.value:o.push(a.value),a["continue"]())}:e(t.data.id,"No items store present",void 0,!0)}}catch(i){e(t.data.id,i.message,i.stack,!0)}}}function shouldRunWorkerPreload(){var e=!1,a=navigator.userAgent,t=a.indexOf("Chrome")!==-1||a.indexOf("CriOS")!==-1;return t&&a.indexOf("Edge")===-1&&(e=!0),e}function shouldRunSyncPreload(){var e=!1,a=navigator.userAgent;return a.indexOf("iPad")===-1&&a.indexOf("iPhone")===-1||(e=!0),e}function runPreload(){function e(e){i?console.log("Skipping second preload: ",e):(i=!0,o.onDataLoaded?o.onDataLoaded(e):o.dataResults=e||[])}function a(e,a){if(o.cacheCallbacks[e.name]){for(var t=0;t<o.cacheCallbacks.length;++t)try{o.cacheCallbacks[t](a)}catch(r){console.log("Error during cache preload callback: ",r)}o.cachePreloads.remove(e.name)}else o.cacheResults[e.name]=a}function t(e){o.settingsPreload=e}function r(e){for(var a=0;a<c.length;++a)if(c[a].id===e)return c[a]}function n(e){for(var a=0;a<c.length;++a)if(c[a].id===e)return c.splice(a,1)[0]}var o=window.__preload;if(!o.mainLoaded&&window.location.hash.indexOf("demo=true")<0&&window.location.hash.indexOf("forcesql=true")<0){var i=!1,c=[];if(shouldRunWorkerPreload()){var s=WorkerFns.createWorkerFromFnList([HelperFnsWrapper,WorkerLoaderWrapper],function(o){if(o.data.done){var i=n(o.data.id);if(i){var d;try{d=o.data.data}catch(l){console.log("Error parsing data returned from worker: ",l)}"items"===i.type?e(d):"cache"===i.type?a(i,d):"settings"===i.type&&t(d)}else console.log("Pending load consumed twice: ",o);0===c.length&&s.terminate()}else{var u=r(o.data.id);try{console.log("Worker reported error: ",JSON.stringify(o.data),JSON.stringify(u))}catch(l){console.log("Unable to stringify error: ")}var p=function(){var e={message:o.data.msg};o.data.stack&&(e.stack=o.data.stack),Rollbar.error(e,{raw:o.data.data,req:u})};window.Rollbar?p():setTimeout(p,5e3)}},function(a){console.log("Error in worker: ",a),e([])});if(s){var d=0,l={id:++d,name:"duchess",type:"items"};s.postMessage(l),c.push(l);var u={id:++d,name:"duchess",type:"settings"};s.postMessage(u),c.push(u),o.cachePreloads=[],o.cacheResults={},o.cacheCallbacks={};for(var p=0;p<cachePreloads.length;++p){var f={id:++d,name:cachePreloads[p],type:"cache"};s.postMessage(f),c.push(f),o.cachePreloads.push(cachePreloads[p])}o.runDataLoad=!0,o.worker=s}}else if(shouldRunSyncPreload()){o.runDataLoad=!0;try{WorkerFns.syncLoad(function(a){a.done?e(a.data):o.runDataLoad=!1})}catch(v){o.runDataLoad=!1}}}}window.Sca=function(){return{decycle:function(object,callback){function checkForCompletion(){0===queuedObjects.length&&returnCallback(derezObj)}function readBlobAsDataURL(e,a){var t=new FileReader;t.onloadend=function(t){var r=t.target.result,n="Blob";e instanceof File,updateEncodedBlob(r,a,n)},t.readAsDataURL(e)}function updateEncodedBlob(dataURL,path,blobtype){var encoded=queuedObjects.indexOf(path);path=path.replace("$","derezObj"),eval(path+'.$enc="'+dataURL+'"'),eval(path+'.$type="'+blobtype+'"'),queuedObjects.splice(encoded,1),checkForCompletion()}function derez(e,a){var t,r,n;if(!("object"!=typeof e||null===e||e instanceof Boolean||e instanceof Date||e instanceof Number||e instanceof RegExp||e instanceof Blob||e instanceof String)){for(t=0;t<objects.length;t+=1)if(objects[t]===e)return{$ref:paths[t]};if(objects.push(e),paths.push(a),"[object Array]"===Object.prototype.toString.apply(e))for(n=[],t=0;t<e.length;t+=1)n[t]=derez(e[t],a+"["+t+"]");else{n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=derez(e[r],a+"["+JSON.stringify(r)+"]"))}return n}return e instanceof Blob?(queuedObjects.push(a),readBlobAsDataURL(e,a)):e instanceof Boolean?e={$type:"Boolean",$enc:e.toString()}:e instanceof Date?e={$type:"Date",$enc:e.getTime()}:e instanceof Number?e={$type:"Number",$enc:e.toString()}:e instanceof RegExp?e={$type:"RegExp",$enc:e.toString()}:"number"==typeof e?e={$type:"number",$enc:e+""}:void 0===e&&(e={$type:"undefined"}),e}var objects=[],paths=[],queuedObjects=[],returnCallback=callback,derezObj=derez(object,"$");checkForCompletion()},retrocycle:function retrocycle($){function dataURLToBlob(e){var a,t,r,n=";base64,";if(e.indexOf(n)===-1)return t=e.split(","),a=t[0].split(":")[1],r=t[1],new Blob([r],{type:a});t=e.split(n),a=t[0].split(":")[1],r=window.atob(t[1]);for(var o=r.length,i=new Uint8Array(o),c=0;c<o;++c)i[c]=r.charCodeAt(c);return new Blob([i.buffer],{type:a})}function rez(value){var i,item,name,path;if(value&&"object"==typeof value)if("[object Array]"===Object.prototype.toString.apply(value))for(i=0;i<value.length;i+=1)item=value[i],item&&"object"==typeof item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[i]=eval(path):value[i]=rez(item));else if(void 0!==value.$type)switch(value.$type){case"Blob":case"File":value=dataURLToBlob(value.$enc);break;case"Boolean":value=Boolean("true"===value.$enc);break;case"Date":value=new Date(value.$enc);break;case"Number":value=Number(value.$enc);break;case"RegExp":value=eval(value.$enc);break;case"number":value=parseFloat(value.$enc);break;case"undefined":value=void 0}else for(name in value)"object"==typeof value[name]&&(item=value[name],item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[name]=eval(path):value[name]=rez(item)));return value}var px=/^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;return rez($)},encode:function(e,a){function t(e){a(JSON.stringify(e))}this.decycle(e,t)},decode:function(e){return this.retrocycle(JSON.parse(e))}}}();var WorkerFns={createWorkerFromObj:function(e,a,t){var r;try{r=new Worker(e),r.onmessage=a,r.onerror=t}catch(n){console.log("Exception during worker create: ",n)}return r},createWorkerFromFnList:function(e,a,t){var r=[];try{for(var n=0;n<e.length;++n)r.push(e[n].toString()),r.push(e[n].name+"_ = "+e[n].name+"();");return this.createWorkerFromStrings(r,a,t)}catch(o){console.log("Exception during worker source gen: ",o)}},createWorkerFromStrings:function(e,a,t){var r=window.URL||window.webkitURL,n=r.createObjectURL(new Blob(e,{type:"text/javascript"}));return this.createWorkerFromObj(n,a,t)},syncLoad:function(e){var a=2097152;try{var t=HelperFnsWrapper(),r=window.openDatabase("duchess",1,"duchess",a);r.readTransaction(function(a){a.executeSql("SELECT * FROM items",[],function(a,r){try{for(var n=new Array(r.rows.length),o=0;o<r.rows.length;++o)n[o]=t.translateObjOut(Sca.decode(r.rows.item(o).value))}catch(i){return e({done:!1,data:void 0,msg:i.message,stack:i.stack})}return e({done:!0,data:n})},function(a,t){return e({done:!1,data:void 0,msg:t.code+": "+t.message})})})}catch(n){return e({done:!1,data:void 0,msg:n.message,stack:n.stack})}}};window.__preload||(window.__preload={mainLoaded:!1});var cachePreloads=["Gmail","GCalendar"];runPreload()}();