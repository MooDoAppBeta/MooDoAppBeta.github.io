"use strict";(self.webpackChunkLegend=self.webpackChunkLegend||[]).push([[425],{8294:function(e,r,t){!function(e){function r(){}function t(){}var n=String.fromCharCode,o={}.toString,i=o.call(e.SharedArrayBuffer),a=o(),f=e.Uint8Array,c=f||Array,s=f?ArrayBuffer:c,u=s.isView||function(e){return e&&"length"in e},l=o.call(s.prototype);s=t.prototype;var d=e.TextEncoder,h=new(f?Uint16Array:c)(32);r.prototype.decode=function(e){if(!u(e)){var r=o.call(e);if(r!==l&&r!==i&&r!==a)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");e=f?new c(e):e||[]}for(var t,s,d,y=r="",p=0,v=0|e.length,g=v-32|0,w=0,A=0,k=0,C=-1;p<v;){for(t=p<=g?32:v-p|0;k<t;p=p+1|0,k=k+1|0){switch((s=255&e[p])>>4){case 15:if(2!==(d=255&e[p=p+1|0])>>6||247<s){p=p-1|0;break}w=(7&s)<<6|63&d,A=5,s=256;case 14:w<<=6,w|=(15&s)<<6|63&(d=255&e[p=p+1|0]),A=2===d>>6?A+4|0:24,s=s+256&768;case 13:case 12:w<<=6,w|=(31&s)<<6|63&(d=255&e[p=p+1|0]),A=A+7|0,p<v&&2===d>>6&&w>>A&&1114112>w?(s=w,0<=(w=w-65536|0)&&(C=55296+(w>>10)|0,s=56320+(1023&w)|0,31>k?(h[k]=C,k=k+1|0,C=-1):(d=C,C=s,s=d))):(p=p-(s>>=8)-1|0,s=65533),w=A=0,t=p<=g?32:v-p|0;default:h[k]=s;continue;case 11:case 10:case 9:case 8:}h[k]=65533}if(y+=n(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13],h[14],h[15],h[16],h[17],h[18],h[19],h[20],h[21],h[22],h[23],h[24],h[25],h[26],h[27],h[28],h[29],h[30],h[31]),32>k&&(y=y.slice(0,k-32|0)),p<v){if(h[0]=C,k=~C>>>31,C=-1,y.length<r.length)continue}else-1!==C&&(y+=n(C));r+=y,y=""}return r},s.encode=function(e){var r,t=0|(e=void 0===e?"":""+e).length,n=new c(8+(t<<1)|0),o=0,i=!f;for(r=0;r<t;r=r+1|0,o=o+1|0){var a=0|e.charCodeAt(r);if(127>=a)n[o]=a;else{if(2047>=a)n[o]=192|a>>6;else{e:{if(55296<=a)if(56319>=a){var s=0|e.charCodeAt(r=r+1|0);if(56320<=s&&57343>=s){if(65535<(a=(a<<10)+s-56613888|0)){n[o]=240|a>>18,n[o=o+1|0]=128|a>>12&63,n[o=o+1|0]=128|a>>6&63,n[o=o+1|0]=128|63&a;continue}break e}a=65533}else 57343>=a&&(a=65533);!i&&r<<1<o&&r<<1<(o-7|0)&&(i=!0,(s=new c(3*t)).set(n),n=s)}n[o]=224|a>>12,n[o=o+1|0]=128|a>>6&63}n[o=o+1|0]=128|63&a}}return f?n.subarray(0,o):n.slice(0,o)},d||(e.TextDecoder=r,e.TextEncoder=t)}(""+void 0==typeof t.g?""+void 0==typeof self?this:self:t.g)}}]);
