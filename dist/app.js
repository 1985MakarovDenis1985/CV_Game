!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){$(".slider").slick({infinite:!1,dots:!0,dotsClass:"maindots",slidesToShow:3,slidesToScroll:1,cssEase:"linear",arrows:!0,responsive:[{breakpoint:769,settings:{slidesToShow:1}}],prevArrow:'<button class="arrow_left" type="button"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button class="arrow_right" type="button"><i class="fas fa-chevron-right"></i></button>'})},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,l=0,s=[],f=r(4);function p(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],e))}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(g(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:c}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function d(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=s[s.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),s.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),d(t,e),e}function v(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function g(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;r=u||(u=b(e)),n=O.bind(null,r,a,!1),o=O.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),d(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,r,e),o=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){y(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return p(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(c=i[a.id]).refs--,n.push(c)}t&&p(h(t,e),e);for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var w,m=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function O(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){var n,o;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
!function(i,a){"use strict";void 0===(o="function"==typeof(n=function(){var t,e,r,n,o=Function.call,i=Object.prototype,a=o.bind(i.hasOwnProperty),c=o.bind(i.propertyIsEnumerable),u=o.bind(i.toString),l=a(i,"__defineGetter__");l&&(t=o.bind(i.__defineGetter__),e=o.bind(i.__defineSetter__),r=o.bind(i.__lookupGetter__),n=o.bind(i.__lookupSetter__));var s=function(t){return null==t||"object"!=typeof t&&"function"!=typeof t};Object.getPrototypeOf||(Object.getPrototypeOf=function(t){var e=t.__proto__;return e||null===e?e:"[object Function]"===u(t.constructor)?t.constructor.prototype:t instanceof Object?i:null});var f=function(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){return!1}};if(Object.defineProperty){var p=f({}),h="undefined"==typeof document||f(document.createElement("div"));if(!h||!p)var d=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||d){Object.getOwnPropertyDescriptor=function(t,e){if(s(t))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(d)try{return d.call(Object,t,e)}catch(t){}var o;if(!a(t,e))return o;if(o={enumerable:c(t,e),configurable:!0},l){var u=t.__proto__,f=t!==i;f&&(t.__proto__=i);var p=r(t,e),h=n(t,e);if(f&&(t.__proto__=u),p||h)return p&&(o.get=p),h&&(o.set=h),o}return o.value=t[e],o.writable=!0,o}}Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)});if(!Object.create){var y,b=!({__proto__:null}instanceof Object);y=b||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var t=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(t){return!1}}()?function(){var t,e;e=new ActiveXObject("htmlfile");var r="script";return e.write("<"+r+"></"+r+">"),e.close(),t=e.parentWindow.Object.prototype,e=null,t}():function(){var t,e=document.createElement("iframe"),r=document.body||document.documentElement;return e.style.display="none",r.appendChild(e),e.src="javascript:",t=e.contentWindow.Object.prototype,r.removeChild(e),e=null,t}();delete t.constructor,delete t.hasOwnProperty,delete t.propertyIsEnumerable,delete t.isPrototypeOf,delete t.toLocaleString,delete t.toString,delete t.valueOf;var e=function(){};return e.prototype=t,y=function(){return new e},new e},Object.create=function(t,e){var r,n=function(){};if(null===t)r=y();else{if(null!==t&&s(t))throw new TypeError("Object prototype may only be an Object or null");n.prototype=t,(r=new n).__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r}}var v=function(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(t){return!1}};if(Object.defineProperty){var g=v({}),w="undefined"==typeof document||v(document.createElement("div"));if(!g||!w)var m=Object.defineProperty,O=Object.defineProperties}if(!Object.defineProperty||m){Object.defineProperty=function(o,a,c){if(s(o))throw new TypeError("Object.defineProperty called on non-object: "+o);if(s(c))throw new TypeError("Property description must be an object: "+c);if(m)try{return m.call(Object,o,a,c)}catch(t){}if("value"in c)if(l&&(r(o,a)||n(o,a))){var u=o.__proto__;o.__proto__=i,delete o[a],o[a]=c.value,o.__proto__=u}else o[a]=c.value;else{var f="get"in c,p="set"in c;if(!l&&(f||p))throw new TypeError("getters & setters can not be defined on this javascript engine");f&&t(o,a,c.get),p&&e(o,a,c.set)}return o}}Object.defineProperties&&!O||(Object.defineProperties=function(t,e){if(O)try{return O.call(Object,t,e)}catch(t){}return Object.keys(e).forEach(function(r){"__proto__"!==r&&Object.defineProperty(t,r,e[r])}),t});Object.seal||(Object.seal=function(t){if(Object(t)!==t)throw new TypeError("Object.seal can only be called on Objects.");return t});Object.freeze||(Object.freeze=function(t){if(Object(t)!==t)throw new TypeError("Object.freeze can only be called on Objects.");return t});try{Object.freeze(function(){})}catch(t){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){if(Object(t)!==t)throw new TypeError("Object.preventExtensions can only be called on Objects.");return t});Object.isSealed||(Object.isSealed=function(t){if(Object(t)!==t)throw new TypeError("Object.isSealed can only be called on Objects.");return!1});Object.isFrozen||(Object.isFrozen=function(t){if(Object(t)!==t)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1});Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var e="";a(t,e);)e+="?";t[e]=!0;var r=a(t,e);return delete t[e],r})})?n.call(e,r,e,t):n)||(t.exports=o)}()},function(t,e,r){var n,o;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
!function(i,a){"use strict";void 0===(o="function"==typeof(n=function(){var t,e,r=Array,n=r.prototype,o=Object,i=o.prototype,a=Function,c=a.prototype,u=String,l=u.prototype,s=Number,f=s.prototype,p=n.slice,h=n.splice,d=n.push,y=n.unshift,b=n.concat,v=n.join,g=c.call,w=c.apply,m=Math.max,O=Math.min,j=i.toString,T="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,E=Function.prototype.toString,x=/^\s*class /,S=function(t){try{var e=E.call(t),r=e.replace(/\/\/.*\n/g,""),n=r.replace(/\/\*[.\s\S]*\*\//g,""),o=n.replace(/\n/gm," ").replace(/ {2}/g," ");return x.test(o)}catch(t){return!1}},D=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(T)return function(t){try{return!S(t)&&(E.call(t),!0)}catch(t){return!1}}(t);if(S(t))return!1;var e=j.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e},_=RegExp.prototype.exec;t=function(t){return"object"==typeof t&&(T?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===j.call(t))};var M=String.prototype.valueOf;e=function(t){return"string"==typeof t||"object"==typeof t&&(T?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object String]"===j.call(t))};var I=o.defineProperty&&function(){try{var t={};for(var e in o.defineProperty(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),U=function(t){var e;return e=I?function(t,e,r,n){!n&&e in t||o.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(i.hasOwnProperty),P=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},C=s.isNaN||function(t){return t!=t},N={ToInteger:function(t){var e=+t;return C(e)?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(t){var e,r,n;if(P(t))return t;if(r=t.valueOf,D(r)&&(e=r.call(t),P(e)))return e;if(n=t.toString,D(n)&&(e=n.call(t),P(e)))return e;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return o(t)},ToUint32:function(t){return t>>>0}},k=function(){};U(c,{bind:function(t){var e=this;if(!D(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,n=p.call(arguments,1),i=m(0,e.length-n.length),c=[],u=0;u<i;u++)d.call(c,"$"+u);return r=a("binder","return function ("+v.call(c,",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof r){var i=w.call(e,this,b.call(n,p.call(arguments)));return o(i)===i?i:this}return w.call(e,t,b.call(n,p.call(arguments)))}),e.prototype&&(k.prototype=e.prototype,r.prototype=new k,k.prototype=null),r}});var A=g.bind(i.hasOwnProperty),F=g.bind(i.toString),R=g.bind(p),$=w.bind(p);if("object"==typeof document&&document&&document.documentElement)try{R(document.documentElement.childNodes)}catch(t){var L=R,z=$;R=function(t){for(var e=[],r=t.length;r-- >0;)e[r]=t[r];return z(e,L(arguments,1))},$=function(t,e){return z(R(t),e)}}var B=g.bind(l.slice),J=g.bind(l.split),G=g.bind(l.indexOf),Z=g.bind(d),Y=g.bind(i.propertyIsEnumerable),H=g.bind(n.sort),W=r.isArray||function(t){return"[object Array]"===F(t)},q=1!==[].unshift(0);U(n,{unshift:function(){return y.apply(this,arguments),this.length}},q),U(r,{isArray:W});var X=o("a"),K="a"!==X[0]||!(0 in X),Q=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){r="string"==typeof this},"x")}catch(t){n=!0}return!!t&&!n&&e&&r};U(n,{forEach:function(t){var r,n=N.ToObject(this),o=K&&e(this)?J(this,""):n,i=-1,a=N.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!D(t))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&(void 0===r?t(o[i],i,n):t.call(r,o[i],i,n))}},!Q(n.forEach)),U(n,{map:function(t){var n,o=N.ToObject(this),i=K&&e(this)?J(this,""):o,a=N.ToUint32(i.length),c=r(a);if(arguments.length>1&&(n=arguments[1]),!D(t))throw new TypeError("Array.prototype.map callback must be a function");for(var u=0;u<a;u++)u in i&&(c[u]=void 0===n?t(i[u],u,o):t.call(n,i[u],u,o));return c}},!Q(n.map)),U(n,{filter:function(t){var r,n,o=N.ToObject(this),i=K&&e(this)?J(this,""):o,a=N.ToUint32(i.length),c=[];if(arguments.length>1&&(n=arguments[1]),!D(t))throw new TypeError("Array.prototype.filter callback must be a function");for(var u=0;u<a;u++)u in i&&(r=i[u],(void 0===n?t(r,u,o):t.call(n,r,u,o))&&Z(c,r));return c}},!Q(n.filter)),U(n,{every:function(t){var r,n=N.ToObject(this),o=K&&e(this)?J(this,""):n,i=N.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!D(t))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;a<i;a++)if(a in o&&!(void 0===r?t(o[a],a,n):t.call(r,o[a],a,n)))return!1;return!0}},!Q(n.every)),U(n,{some:function(t){var r,n=N.ToObject(this),o=K&&e(this)?J(this,""):n,i=N.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!D(t))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;a<i;a++)if(a in o&&(void 0===r?t(o[a],a,n):t.call(r,o[a],a,n)))return!0;return!1}},!Q(n.some));var V=!1;n.reduce&&(V="object"==typeof n.reduce.call("es5",function(t,e,r,n){return n}));U(n,{reduce:function(t){var r=N.ToObject(this),n=K&&e(this)?J(this,""):r,o=N.ToUint32(n.length);if(!D(t))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;a<o;a++)a in n&&(i=t(i,n[a],a,r));return i}},!V);var tt=!1;n.reduceRight&&(tt="object"==typeof n.reduceRight.call("es5",function(t,e,r,n){return n}));U(n,{reduceRight:function(t){var r,n=N.ToObject(this),o=K&&e(this)?J(this,""):n,i=N.ToUint32(o.length);if(!D(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===i&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var a=i-1;if(arguments.length>=2)r=arguments[1];else for(;;){if(a in o){r=o[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(a<0)return r;do{a in o&&(r=t(r,o[a],a,n))}while(a--);return r}},!tt);var et=n.indexOf&&-1!==[0,1].indexOf(1,2);U(n,{indexOf:function(t){var r=K&&e(this)?J(this,""):N.ToObject(this),n=N.ToUint32(r.length);if(0===n)return-1;var o=0;for(arguments.length>1&&(o=N.ToInteger(arguments[1])),o=o>=0?o:m(0,n+o);o<n;o++)if(o in r&&r[o]===t)return o;return-1}},et);var rt=n.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);U(n,{lastIndexOf:function(t){var r=K&&e(this)?J(this,""):N.ToObject(this),n=N.ToUint32(r.length);if(0===n)return-1;var o=n-1;for(arguments.length>1&&(o=O(o,N.ToInteger(arguments[1]))),o=o>=0?o:n-Math.abs(o);o>=0;o--)if(o in r&&t===r[o])return o;return-1}},rt);var nt=function(){var t=[1,2],e=t.splice();return 2===t.length&&W(e)&&0===e.length}();U(n,{splice:function(t,e){return 0===arguments.length?[]:h.apply(this,arguments)}},!nt);var ot=function(){var t={};return n.splice.call(t,0,0,1),1===t.length}();U(n,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=m(N.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&((r=R(arguments)).length<2?Z(r,this.length-t):r[1]=N.ToInteger(e)),h.apply(this,r)}},!ot);var it=function(){var t=new r(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),at=function(){var t=[];return t[256]="a",t.splice(257,0,"b"),"a"===t[256]}();U(n,{splice:function(t,e){for(var r,n=N.ToObject(this),o=[],i=N.ToUint32(n.length),a=N.ToInteger(t),c=a<0?m(i+a,0):O(a,i),l=O(m(N.ToInteger(e),0),i-c),s=0;s<l;)r=u(c+s),A(n,r)&&(o[s]=n[r]),s+=1;var f,p=R(arguments,2),h=p.length;if(h<l){s=c;for(var d=i-l;s<d;)r=u(s+l),f=u(s+h),A(n,r)?n[f]=n[r]:delete n[f],s+=1;s=i;for(var y=i-l+h;s>y;)delete n[s-1],s-=1}else if(h>l)for(s=i-l;s>c;)r=u(s+l-1),f=u(s+h-1),A(n,r)?n[f]=n[r]:delete n[f],s-=1;s=c;for(var b=0;b<p.length;++b)n[s]=p[b],s+=1;return n.length=i-l+h,o}},!it||!at);var ct,ut=n.join;try{ct="1,2,3"!==Array.prototype.join.call("123",",")}catch(t){ct=!0}ct&&U(n,{join:function(t){var r=void 0===t?",":t;return ut.call(e(this)?J(this,""):this,r)}},ct);var lt="1,2"!==[1,2].join(void 0);lt&&U(n,{join:function(t){var e=void 0===t?",":t;return ut.call(this,e)}},lt);var st=function(t){for(var e=N.ToObject(this),r=N.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},ft=function(){var t={},e=Array.prototype.push.call(t,void 0);return 1!==e||1!==t.length||void 0!==t[0]||!A(t,0)}();U(n,{push:function(t){return W(this)?d.apply(this,arguments):st.apply(this,arguments)}},ft);var pt=function(){var t=[],e=t.push(void 0);return 1!==e||1!==t.length||void 0!==t[0]||!A(t,0)}();U(n,{push:st},pt),U(n,{slice:function(t,r){var n=e(this)?J(this,""):this;return $(n,arguments)}},K);var ht=function(){try{[1,2].sort(null)}catch(t){try{[1,2].sort({})}catch(t){return!1}}return!0}(),dt=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),yt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();U(n,{sort:function(t){if(void 0===t)return H(this);if(!D(t))throw new TypeError("Array.prototype.sort callback must be a function");return H(this,t)}},ht||!yt||!dt);var bt=!Y({toString:null},"toString"),vt=Y(function(){},"prototype"),gt=!A("x","0"),wt=function(t){var e=t.constructor;return e&&e.prototype===t},mt={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0,$width:!0,$height:!0,$top:!0,$localStorage:!0},Ot=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!mt["$"+t]&&A(window,t)&&null!==window[t]&&"object"==typeof window[t]&&wt(window[t])}catch(t){return!0}return!1}(),jt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Tt=jt.length,Et=function(t){return"[object Arguments]"===F(t)},xt=Et(arguments)?Et:function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&!W(t)&&D(t.callee)};U(o,{keys:function(t){var r=D(t),n=xt(t),o=null!==t&&"object"==typeof t,i=o&&e(t);if(!o&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],c=vt&&r;if(i&&gt||n)for(var l=0;l<t.length;++l)Z(a,u(l));if(!n)for(var s in t)c&&"prototype"===s||!A(t,s)||Z(a,u(s));if(bt)for(var f=function(t){if("undefined"==typeof window||!Ot)return wt(t);try{return wt(t)}catch(t){return!1}}(t),p=0;p<Tt;p++){var h=jt[p];f&&"constructor"===h||!A(t,h)||Z(a,h)}return a}});var St=o.keys&&function(){return 2===o.keys(arguments).length}(1,2),Dt=o.keys&&function(){var t=o.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),_t=o.keys;U(o,{keys:function(t){return xt(t)?_t(R(t)):_t(t)}},!St||Dt);var Mt,It,Ut=0!==new Date(-0xc782b5b342b24).getUTCMonth(),Pt=new Date(-0x55d318d56a724),Ct=new Date(14496624e5),Nt="Mon, 01 Jan -45875 11:59:59 GMT"!==Pt.toUTCString();Pt.getTimezoneOffset()<-720?(Mt="Tue Jan 02 -45875"!==Pt.toDateString(),It=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Ct))):(Mt="Mon Jan 01 -45875"!==Pt.toDateString(),It=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Ct)));var kt=g.bind(Date.prototype.getFullYear),At=g.bind(Date.prototype.getMonth),Ft=g.bind(Date.prototype.getDate),Rt=g.bind(Date.prototype.getUTCFullYear),$t=g.bind(Date.prototype.getUTCMonth),Lt=g.bind(Date.prototype.getUTCDate),zt=g.bind(Date.prototype.getUTCDay),Bt=g.bind(Date.prototype.getUTCHours),Jt=g.bind(Date.prototype.getUTCMinutes),Gt=g.bind(Date.prototype.getUTCSeconds),Zt=g.bind(Date.prototype.getUTCMilliseconds),Yt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ht=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Wt=function(t,e){return Ft(new Date(e,t,0))};U(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=kt(this);return t<0&&At(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=kt(this),e=At(this);return t<0&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=kt(this),e=At(this),r=Ft(this);return t<0&&e>11?12===e?r:Wt(0,t+1)-r+1:r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this);return t<0&&$t(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this),e=$t(this);return t<0&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Rt(this),e=$t(this),r=Lt(this);return t<0&&e>11?12===e?r:Wt(0,t+1)-r+1:r}},Ut),U(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=zt(this),e=Lt(this),r=$t(this),n=Rt(this),o=Bt(this),i=Jt(this),a=Gt(this);return Yt[t]+", "+(e<10?"0"+e:e)+" "+Ht[r]+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"}},Ut||Nt),U(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return Yt[t]+" "+Ht[r]+" "+(e<10?"0"+e:e)+" "+n}},Ut||Mt),(Ut||It)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),c=this.getTimezoneOffset(),u=Math.floor(Math.abs(c)/60),l=Math.floor(Math.abs(c)%60);return Yt[t]+" "+Ht[r]+" "+(e<10?"0"+e:e)+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"+(c>0?"-":"+")+(u<10?"0"+u:u)+(l<10?"0"+l:l)},I&&o.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var qt=-621987552e5,Xt="-000001",Kt=Date.prototype.toISOString&&-1===new Date(qt).toISOString().indexOf(Xt),Qt=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),Vt=g.bind(Date.prototype.getTime);U(Date.prototype,{toISOString:function(){if(!isFinite(this)||!isFinite(Vt(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Rt(this),e=$t(this);t+=Math.floor(e/12);var r=[1+(e=(e%12+12)%12),Lt(this),Bt(this),Jt(this),Gt(this)];t=(t<0?"-":t>9999?"+":"")+B("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<r.length;++n)r[n]=B("00"+r[n],-2);return t+"-"+R(r,0,2).join("-")+"T"+R(r,2).join(":")+"."+B("000"+Zt(this),-3)+"Z"}},Kt||Qt),function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(qt).toJSON().indexOf(Xt)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}()||(Date.prototype.toJSON=function(t){var e=o(this),r=N.ToPrimitive(e);if("number"==typeof r&&!isFinite(r))return null;var n=e.toISOString;if(!D(n))throw new TypeError("toISOString property is not callable");return n.call(e)});var te=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ee=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));if(isNaN(Date.parse("2000-01-01T00:00:00.000Z"))||ee||!te){var re=Math.pow(2,31)-1,ne=C(new Date(1970,0,1,0,0,0,re+1).getTime());Date=function(t){var e=function(r,n,o,i,a,c,l){var s,f=arguments.length;if(this instanceof t){var p=c,h=l;if(ne&&f>=7&&l>re){var d=Math.floor(l/re)*re,y=Math.floor(d/1e3);p+=y,h-=1e3*y}s=1===f&&u(r)===r?new t(e.parse(r)):f>=7?new t(r,n,o,i,a,p,h):f>=6?new t(r,n,o,i,a,p):f>=5?new t(r,n,o,i,a):f>=4?new t(r,n,o,i):f>=3?new t(r,n,o):f>=2?new t(r,n):f>=1?new t(r instanceof t?+r:r):new t}else s=t.apply(this,arguments);return P(s)||U(s,{constructor:e},!0),s},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)};for(var i in t)A(t,i)&&(e[i]=t[i]);U(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,U(e.prototype,{constructor:e},!0);return U(e,{parse:function(e){var n=r.exec(e);if(n){var i,a=s(n[1]),c=s(n[2]||1)-1,u=s(n[3]||1)-1,l=s(n[4]||0),f=s(n[5]||0),p=s(n[6]||0),h=Math.floor(1e3*s(n[7]||0)),d=Boolean(n[4]&&!n[8]),y="-"===n[9]?1:-1,b=s(n[10]||0),v=s(n[11]||0),g=f>0||p>0||h>0;return l<(g?24:25)&&f<60&&p<60&&h<1e3&&c>-1&&c<12&&b<24&&v<60&&u>-1&&u<o(a,c+1)-o(a,c)&&(i=1e3*(60*((i=60*(24*(o(a,c)+u)+l+b*y))+f+v*y)+p)+h,d&&(i=function(e){var r=0,n=e;if(ne&&n>re){var o=Math.floor(n/re)*re,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return s(new t(1970,0,1,0,0,r,n))}(i)),-864e13<=i&&i<=864e13)?i:NaN}return t.parse.apply(this,arguments)}}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var oe=f.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),ie={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<ie.size;)n+=t*ie.data[r],ie.data[r]=n%ie.base,n=Math.floor(n/ie.base)},divide:function(t){for(var e=ie.size,r=0;--e>=0;)r+=ie.data[e],ie.data[e]=Math.floor(r/t),r=r%t*ie.base},numToString:function(){for(var t=ie.size,e="";--t>=0;)if(""!==e||0===t||0!==ie.data[t]){var r=u(ie.data[t]);""===e?e=r:e+=B("0000000",0,7-r.length)+r}return e},pow:function t(e,r,n){return 0===r?n:r%2==1?t(e,r-1,n*e):t(e*e,r/2,n)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}};U(f,{toFixed:function(t){var e,r,n,o,i,a,c,l;if(e=s(t),(e=C(e)?0:Math.floor(e))<0||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=s(this),C(r))return"NaN";if(r<=-1e21||r>=1e21)return u(r);n="",r<0&&(n="-",r=-r);if(o="0",r>1e-21)if(i=ie.log(r*ie.pow(2,69,1))-69,a=i<0?r*ie.pow(2,-i,1):r/ie.pow(2,i,1),a*=4503599627370496,(i=52-i)>0){for(ie.multiply(0,a),c=e;c>=7;)ie.multiply(1e7,0),c-=7;for(ie.multiply(ie.pow(10,c,1),0),c=i-1;c>=23;)ie.divide(1<<23),c-=23;ie.divide(1<<c),ie.multiply(1,1),ie.divide(2),o=ie.numToString()}else ie.multiply(0,a),ie.multiply(1<<-i,0),o=ie.numToString()+B("0.00000000000000000000",2,2+e);e>0?(l=o.length,o=l<=e?n+B("0.0000000000000000000",0,e-l+2)+o:n+B(o,0,l-e)+"."+B(o,l-e)):o=n+o;return o}},oe);var ae=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),ce=f.toPrecision;U(f,{toPrecision:function(t){return void 0===t?ce.call(this):ce.call(this,t)}},ae),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var e=void 0===/()??/.exec("")[1],r=Math.pow(2,32)-1;l.split=function(n,o){var i=String(this);if(void 0===n&&0===o)return[];if(!t(n))return J(this,n,o);var a,c,u,l,s=[],f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),p=0,h=new RegExp(n.source,f+"g");e||(a=new RegExp("^"+h.source+"$(?!\\s)",f));var y=void 0===o?r:N.ToUint32(o);for(c=h.exec(i);c&&!((u=c.index+c[0].length)>p&&(Z(s,B(i,p,c.index)),!e&&c.length>1&&c[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(c[t]=void 0)}),c.length>1&&c.index<i.length&&d.apply(s,R(c,1)),l=c[0].length,p=u,s.length>=y));)h.lastIndex===c.index&&h.lastIndex++,c=h.exec(i);return p===i.length?!l&&h.test("")||Z(s,""):Z(s,B(i,p)),s.length>y?R(s,0,y):s}}():"0".split(void 0,0).length&&(l.split=function(t,e){return void 0===t&&0===e?[]:J(this,t,e)});var ue=l.replace;(function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){Z(t,r)}),1===t.length&&void 0===t[0]})()||(l.replace=function(e,r){var n=D(r),o=t(e)&&/\)[*?]/.test(e.source);if(n&&o){return ue.call(this,e,function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,Z(i,arguments[n-2],arguments[n-1]),r.apply(this,i)})}return ue.call(this,e,r)});var le=l.substr,se="".substr&&"b"!=="0b".substr(-1);U(l,{substr:function(t,e){var r=t;return t<0&&(r=m(this.length+t,0)),le.call(this,r,e)}},se);var fe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",pe="["+fe+"]",he=new RegExp("^"+pe+pe+"*"),de=new RegExp(pe+pe+"*$"),ye=l.trim&&(fe.trim()||!"​".trim());U(l,{trim:function(){if(null==this)throw new TypeError("can't convert "+this+" to object");return u(this).replace(he,"").replace(de,"")}},ye);var be=g.bind(String.prototype.trim),ve=l.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);U(l,{lastIndexOf:function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");for(var e=u(this),r=u(t),n=arguments.length>1?s(arguments[1]):NaN,o=C(n)?1/0:N.ToInteger(n),i=O(m(o,0),e.length),a=r.length,c=i+a;c>0;){c=m(0,c-a);var l=G(B(e,c,i+a),r);if(-1!==l)return c+l}return-1}},ve);var ge=l.lastIndexOf;U(l,{lastIndexOf:function(t){return ge.apply(this,arguments)}},1!==l.lastIndexOf.length),(8!==parseInt(fe+"08")||22!==parseInt(fe+"0x16"))&&(parseInt=function(t){var e=/^[-+]?0[xX]/;return function(r,n){var o=be(String(r)),i=s(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt));1/parseFloat("-0")!=-1/0&&(parseFloat=function(t){return function(e){var r=be(String(e)),n=t(r);return 0===n&&"-"===B(r,0,1)?-0:n}}(parseFloat));if("RangeError: test"!==String(new RangeError("test"))){Error.prototype.toString=function(){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=this.name;void 0===t?t="Error":"string"!=typeof t&&(t=u(t));var e=this.message;void 0===e?e="":"string"!=typeof e&&(e=u(e));if(!t)return e;if(!e)return t;return t+": "+e}}if(I){var we=function(t,e){if(Y(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.configurable&&(r.enumerable=!1,Object.defineProperty(t,e,r))}};we(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),we(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){RegExp.prototype.toString=function(){var t="/"+this.source+"/";this.global&&(t+="g");this.ignoreCase&&(t+="i");this.multiline&&(t+="m");return t}}})?n.call(e,r,e,t):n)||(t.exports=o)}()},function(t,e,r){"use strict";r.r(e);class n{static createNewElement(t,e=null,r=null,n=null){let o=document.createElement(t);return o.className=e||"",o.innerHTML=r||"",n&&n.map(t=>o.setAttribute(t.name,t.value)),o}static appChild(t,e){return e.map(e=>{t.appendChild(e)}),t}createCards(t){return n.createNewElement("div","card",t.damage)}}let o=[{name:"Mach1",damage:5},{name:"Mach2",damage:3},{name:"Mach3",damage:7},{name:"Mach4",damage:2},{name:"Mach5",damage:6},{name:"Mach6",damage:5},{name:"Mach7",damage:3},{name:"Mach8",damage:8},{name:"Mach9",damage:7},{name:"Mach10",damage:6}];!function(){o=o.sort(function(t,e){return Math.random()-.5})}();let i=new n,a=document.getElementById("comp_cards");console.log(a);let c,u,l=[],s=[];function f(t){let e=[];return t.map(t=>{e.push(t.damage)}),e=e.reduce(function(t,e){return t+e})}document.getElementById("button").addEventListener("click",t=>{if(0==o.length)console.log("jhjhjkhkh"),c=f(l),u=f(s),function(){switch(c<u){case!0:console.log("Win You");break;case!1:console.log("Win Comp")}}();else{a.innerHTML="",l.push(o[+o.length-1]),o.pop(),s.push(o[+o.length-1]),o.pop();for(let t=0;t<s.length;t++){let e=i.createCards(s[t]);a.appendChild(e)}}});r(0),r(1),r(5),r(6)}]);