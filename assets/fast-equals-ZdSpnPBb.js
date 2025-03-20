var x=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty;function w(r,e){return function(a,u,n){return r(a,u,n)&&e(a,u,n)}}function j(r){return function(t,a,u){if(!t||!a||typeof t!="object"||typeof a!="object")return r(t,a,u);var n=u.cache,l=n.get(t),i=n.get(a);if(l&&i)return l===a&&i===t;n.set(t,a),n.set(a,t);var o=r(t,a,u);return n.delete(t),n.delete(a),o}}function T(r){return x(r).concat(B(r))}var _=Object.hasOwn||function(r,e){return M.call(r,e)};function y(r,e){return r===e||!r&&!e&&r!==r&&e!==e}var D="__v",U="__o",W="_owner",R=Object.getOwnPropertyDescriptor,C=Object.keys;function I(r,e,t){var a=r.length;if(e.length!==a)return!1;for(;a-- >0;)if(!t.equals(r[a],e[a],a,a,r,e,t))return!1;return!0}function z(r,e){return y(r.getTime(),e.getTime())}function F(r,e){return r.name===e.name&&r.message===e.message&&r.cause===e.cause&&r.stack===e.stack}function V(r,e){return r===e}function S(r,e,t){var a=r.size;if(a!==e.size)return!1;if(!a)return!0;for(var u=new Array(a),n=r.entries(),l,i,o=0;(l=n.next())&&!l.done;){for(var E=e.entries(),v=!1,p=0;(i=E.next())&&!i.done;){if(u[p]){p++;continue}var g=l.value,A=i.value;if(t.equals(g[0],A[0],o,p,r,e,t)&&t.equals(g[1],A[1],g[0],A[0],r,e,t)){v=u[p]=!0;break}p++}if(!v)return!1;o++}return!0}var $=y;function L(r,e,t){var a=C(r),u=a.length;if(C(e).length!==u)return!1;for(;u-- >0;)if(!k(r,e,t,a[u]))return!1;return!0}function O(r,e,t){var a=T(r),u=a.length;if(T(e).length!==u)return!1;for(var n,l,i;u-- >0;)if(n=a[u],!k(r,e,t,n)||(l=R(r,n),i=R(e,n),(l||i)&&(!l||!i||l.configurable!==i.configurable||l.enumerable!==i.enumerable||l.writable!==i.writable)))return!1;return!0}function K(r,e){return y(r.valueOf(),e.valueOf())}function J(r,e){return r.source===e.source&&r.flags===e.flags}function P(r,e,t){var a=r.size;if(a!==e.size)return!1;if(!a)return!0;for(var u=new Array(a),n=r.values(),l,i;(l=n.next())&&!l.done;){for(var o=e.values(),E=!1,v=0;(i=o.next())&&!i.done;){if(!u[v]&&t.equals(l.value,i.value,l.value,i.value,r,e,t)){E=u[v]=!0;break}v++}if(!E)return!1}return!0}function X(r,e){var t=r.length;if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}function Z(r,e){return r.hostname===e.hostname&&r.pathname===e.pathname&&r.protocol===e.protocol&&r.port===e.port&&r.hash===e.hash&&r.username===e.username&&r.password===e.password}function k(r,e,t,a){return(a===W||a===U||a===D)&&(r.$$typeof||e.$$typeof)?!0:_(e,a)&&t.equals(r[a],e[a],a,a,r,e,t)}var H="[object Arguments]",Q="[object Boolean]",Y="[object Date]",b="[object Error]",rr="[object Map]",er="[object Number]",ar="[object Object]",tr="[object RegExp]",ur="[object Set]",nr="[object String]",ir="[object URL]",lr=Array.isArray,G=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,N=Object.assign,cr=Object.prototype.toString.call.bind(Object.prototype.toString);function sr(r){var e=r.areArraysEqual,t=r.areDatesEqual,a=r.areErrorsEqual,u=r.areFunctionsEqual,n=r.areMapsEqual,l=r.areNumbersEqual,i=r.areObjectsEqual,o=r.arePrimitiveWrappersEqual,E=r.areRegExpsEqual,v=r.areSetsEqual,p=r.areTypedArraysEqual,g=r.areUrlsEqual;return function(c,s,f){if(c===s)return!0;if(c==null||s==null)return!1;var h=typeof c;if(h!==typeof s)return!1;if(h!=="object")return h==="number"?l(c,s,f):h==="function"?u(c,s,f):!1;var d=c.constructor;if(d!==s.constructor)return!1;if(d===Object)return i(c,s,f);if(lr(c))return e(c,s,f);if(G!=null&&G(c))return p(c,s,f);if(d===Date)return t(c,s,f);if(d===RegExp)return E(c,s,f);if(d===Map)return n(c,s,f);if(d===Set)return v(c,s,f);var q=cr(c);return q===Y?t(c,s,f):q===tr?E(c,s,f):q===rr?n(c,s,f):q===ur?v(c,s,f):q===ar?typeof c.then!="function"&&typeof s.then!="function"&&i(c,s,f):q===ir?g(c,s,f):q===b?a(c,s,f):q===H?i(c,s,f):q===Q||q===er||q===nr?o(c,s,f):!1}}function or(r){var e=r.circular,t=r.createCustomConfig,a=r.strict,u={areArraysEqual:a?O:I,areDatesEqual:z,areErrorsEqual:F,areFunctionsEqual:V,areMapsEqual:a?w(S,O):S,areNumbersEqual:$,areObjectsEqual:a?O:L,arePrimitiveWrappersEqual:K,areRegExpsEqual:J,areSetsEqual:a?w(P,O):P,areTypedArraysEqual:a?O:X,areUrlsEqual:Z};if(t&&(u=N({},u,t(u))),e){var n=j(u.areArraysEqual),l=j(u.areMapsEqual),i=j(u.areObjectsEqual),o=j(u.areSetsEqual);u=N({},u,{areArraysEqual:n,areMapsEqual:l,areObjectsEqual:i,areSetsEqual:o})}return u}function fr(r){return function(e,t,a,u,n,l,i){return r(e,t,i)}}function Er(r){var e=r.circular,t=r.comparator,a=r.createState,u=r.equals,n=r.strict;if(a)return function(o,E){var v=a(),p=v.cache,g=p===void 0?e?new WeakMap:void 0:p,A=v.meta;return t(o,E,{cache:g,equals:u,meta:A,strict:n})};if(e)return function(o,E){return t(o,E,{cache:new WeakMap,equals:u,meta:void 0,strict:n})};var l={cache:void 0,equals:u,meta:void 0,strict:n};return function(o,E){return t(o,E,l)}}var vr=m();m({strict:!0});m({circular:!0});m({circular:!0,strict:!0});m({createInternalComparator:function(){return y}});m({strict:!0,createInternalComparator:function(){return y}});m({circular:!0,createInternalComparator:function(){return y}});m({circular:!0,createInternalComparator:function(){return y},strict:!0});function m(r){r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,a=r.createInternalComparator,u=r.createState,n=r.strict,l=n===void 0?!1:n,i=or(r),o=sr(i),E=a?a(o):fr(o);return Er({circular:t,comparator:o,createState:u,equals:E,strict:l})}export{vr as d};
