!function(){var t={963:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},328:function(t){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},7:function(t,n,e){var r=e(286);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},488:function(t,n,e){var r=e(32),o=e(314)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},32:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},645:function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},741:function(t,n,e){var r=e(963);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},57:function(t,n,e){t.exports=!e(688)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},457:function(t,n,e){var r=e(286),o=e(816).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},985:function(t,n,e){var r=e(816),o=e(645),i=e(728),c=e(234),u=e(741),a=function(t,n,e){var f,s,l,p,v=t&a.F,h=t&a.G,d=t&a.S,y=t&a.P,m=t&a.B,g=h?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,x=h?o:o[n]||(o[n]={}),_=x.prototype||(x.prototype={});for(f in h&&(e=n),e)l=((s=!v&&g&&void 0!==g[f])?g:e)[f],p=m&&s?u(l,r):y&&"function"==typeof l?u(Function.call,l):l,g&&c(g,f,l,t&a.U),x[f]!=l&&i(x,f,p),y&&_[f]!=l&&(_[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},688:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},531:function(t,n,e){var r=e(741),o=e(197),i=e(555),c=e(7),u=e(875),a=e(2),f={},s={},l=t.exports=function(t,n,e,l,p){var v,h,d,y,m=p?function(){return t}:a(t),g=r(e,l,n?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=u(t.length);v>x;x++)if((y=n?g(c(h=t[x])[0],h[1]):g(t[x]))===f||y===s)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,g,h.value,n))===f||y===s)return y};l.BREAK=f,l.RETURN=s},18:function(t,n,e){t.exports=e(825)("native-function-to-string",Function.toString)},816:function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},181:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},728:function(t,n,e){var r=e(275),o=e(681);t.exports=e(57)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},639:function(t,n,e){var r=e(816).document;t.exports=r&&r.documentElement},734:function(t,n,e){t.exports=!e(57)&&!e(688)((function(){return 7!=Object.defineProperty(e(457)("div"),"a",{get:function(){return 7}}).a}))},242:function(t){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},555:function(t,n,e){var r=e(803),o=e(314)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},286:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},197:function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},462:function(t,n,e){var r=e(314)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},803:function(t){t.exports={}},461:function(t){t.exports=!1},351:function(t,n,e){var r=e(816),o=e(193).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(32)(c);t.exports=function(){var t,n,e,f=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var s=u.resolve(void 0);e=function(){s.then(f)}}else e=function(){o.call(r,f)};else{var l=!0,p=document.createTextNode("");new i(f).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},499:function(t,n,e){"use strict";var r=e(963);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},275:function(t,n,e){var r=e(7),o=e(734),i=e(689),c=Object.defineProperty;n.f=e(57)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},188:function(t){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},94:function(t,n,e){var r=e(7),o=e(286),i=e(499);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},681:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},408:function(t,n,e){var r=e(234);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},234:function(t,n,e){var r=e(816),o=e(728),i=e(181),c=e(953)("src"),u=e(18),a="toString",f=(""+u).split(a);e(645).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,c)||o(e,c,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,a,(function(){return"function"==typeof this&&this[c]||u.call(this)}))},974:function(t,n,e){"use strict";var r=e(816),o=e(275),i=e(57),c=e(314)("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},943:function(t,n,e){var r=e(275).f,o=e(181),i=e(314)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},825:function(t,n,e){var r=e(645),o=e(816),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},364:function(t,n,e){var r=e(7),o=e(963),i=e(314)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},193:function(t,n,e){var r,o,i,c=e(741),u=e(242),a=e(639),f=e(457),s=e(816),l=s.process,p=s.setImmediate,v=s.clearImmediate,h=s.MessageChannel,d=s.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},x=function(t){g.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(32)(l)?r=function(t){l.nextTick(c(g,t,1))}:d&&d.now?r=function(t){d.now(c(g,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=x,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):r="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:p,clear:v}},467:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},875:function(t,n,e){var r=e(467),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},689:function(t,n,e){var r=e(286);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},953:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+e).toString(36))}},575:function(t,n,e){var r=e(816).navigator;t.exports=r&&r.userAgent||""},314:function(t,n,e){var r=e(825)("wks"),o=e(953),i=e(816).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},2:function(t,n,e){var r=e(488),o=e(314)("iterator"),i=e(803);t.exports=e(645).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},253:function(t,n,e){"use strict";var r=e(488),o={};o[e(314)("toStringTag")]="z",o+""!="[object z]"&&e(234)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},851:function(t,n,e){"use strict";var r,o,i,c,u=e(461),a=e(816),f=e(741),s=e(488),l=e(985),p=e(286),v=e(963),h=e(328),d=e(531),y=e(364),m=e(193).set,g=e(351)(),x=e(499),_=e(188),w=e(575),b=e(94),j="Promise",S=a.TypeError,P=a.process,E=P&&P.versions,T=E&&E.v8||"",O=a.Promise,M="process"==s(P),k=function(){},F=o=x.f,C=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[e(314)("species")]=function(t){t(k,k)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n&&0!==T.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},B=function(t,n){if(!t._n){t._n=!0;var e=t._c;g((function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{u?(o||(2==t._h&&U(t),t._h=1),!0===u?e=r:(s&&s.enter(),e=u(r),s&&(s.exit(),c=!0)),e===n.promise?f(S("Promise-chain cycle")):(i=A(e))?i.call(e,a,f):a(e)):f(r)}catch(t){s&&!c&&s.exit(),f(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&N(t)}))}},N=function(t){m.call(a,(function(){var n,e,r,o=t._v,i=R(t);if(i&&(n=_((function(){M?P.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=M||R(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){m.call(a,(function(){var n;M?P.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})}))},$=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),B(n,!0))},z=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=A(t))?g((function(){var r={_w:e,_d:!1};try{n.call(t,f(z,r,1),f($,r,1))}catch(t){$.call(r,t)}})):(e._v=t,e._s=1,B(e,!1))}catch(t){$.call({_w:e,_d:!1},t)}}};C||(O=function(t){h(this,O,j,"_h"),v(t),r.call(this);try{t(f(z,this,1),f($,this,1))}catch(t){$.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(408)(O.prototype,{then:function(t,n){var e=F(y(this,O));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=M?P.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&B(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(z,t,1),this.reject=f($,t,1)},x.f=F=function(t){return t===O||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:O}),e(943)(O,j),e(974)(j),c=e(645).Promise,l(l.S+l.F*!C,j,{reject:function(t){var n=F(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!C),j,{resolve:function(t){return b(u&&this===c?O:this,t)}}),l(l.S+l.F*!(C&&e(462)((function(t){O.all(t).catch(k)}))),j,{all:function(t){var n=this,e=F(n),r=e.resolve,o=e.reject,i=_((function(){var e=[],i=0,c=1;d(t,!1,(function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then((function(t){a||(a=!0,e[u]=t,--c||r(e))}),o)})),--c||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=F(n),r=e.reject,o=_((function(){d(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"}(),function(){"use strict";e(253),e(851);var t=e.p+"images/img2.jpg";function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o=function(){function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"color","cadetblue"),r(this,"showColor",(function(){console.log(n.element.style.backgroundColor)})),this.element=document.createElement("div"),this.element.style.height="100px",document.body.appendChild(this.element)}var e,o;return e=t,(o=[{key:"addBgc",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color;this.element.style.backgroundColor=t}}])&&n(e.prototype,o),t}();console.log("ok"),$("h1").append("<img src=".concat(t,">")),(new o).addBgc("red"),(new o).addBgc("pink"),(new o).showColor(),new Promise((function(t,n){t(ok)}))}()}();