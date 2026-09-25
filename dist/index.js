"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=d(function(x,n){
var a=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),q=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),c=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/blas-ext-base-dlogspace/dist').ndarray;function l(e){var r,i,u,v,t;return t=e[0],i=a(e[1]),u=a(e[2]),v=a(e[3]),r=a(e[4]),g(q(t,0),i,u,v,r,p(t),o(t,0),c(t)),t}n.exports=l
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
