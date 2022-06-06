var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],a="start",s="end",f="clippingParents",c="viewport",p="popper",u="reference",l=i.reduce((function(e,t){return e.concat([t+"-start",t+"-"+s])}),[]),d=[].concat(i,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-"+s])}),[]),h="beforeRead",m="read",v="afterRead",g="beforeMain",y="main",b="afterMain",w="beforeWrite",x="write",O="afterWrite",j=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function E(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function A(e){return e instanceof D(e).Element||e instanceof Element}function L(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function M(e){return"undefined"!=typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}var P={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];L(o)&&E(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});L(r)&&E(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function k(e){return e.split("-")[0]}var W=Math.max,B=Math.min,R=Math.round;function H(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(L(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=R(n.width)/a||1),i>0&&(o=R(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function S(e){var t=H(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function T(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&M(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function C(e){return D(e).getComputedStyle(e)}function q(e){return["table","td","th"].indexOf(E(e))>=0}function V(e){return((A(e)?e.ownerDocument:e.document)||window.document).documentElement}function N(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(M(e)?e.host:null)||V(e)}function I(e){return L(e)&&"fixed"!==C(e).position?e.offsetParent:null}function F(e){for(var t=D(e),n=I(e);n&&q(n)&&"static"===C(n).position;)n=I(n);return n&&("html"===E(n)||"body"===E(n)&&"static"===C(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&L(e)&&"fixed"===C(e).position)return null;for(var n=N(e);L(n)&&["html","body"].indexOf(E(n))<0;){var r=C(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e,t,n){return W(e,B(t,n))}function _(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Y={name:"arrow",enabled:!0,phase:"main",fn:function(o){var a,s=o.state,f=o.name,c=o.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=k(s.placement),d=U(l),h=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return _("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,i))}(c.padding,s),v=S(p),g="y"===d?e:r,y="y"===d?t:n,b=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],w=u[d]-s.rects.reference[d],x=F(p),O=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,j=b/2-w/2,E=m[g],D=O-v[h]-m[y],A=O/2-v[h]/2+j,L=z(E,A,D),M=d;s.modifiersData[f]=((a={})[M]=L,a.centerOffset=L-A,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&T(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function G(e){return e.split("-")[1]}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(o){var i,a=o.popper,f=o.popperRect,c=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,h=o.adaptive,m=o.roundOffsets,v=o.isFixed,g=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:R(t*r)/r||0,y:R(n*r)/r||0}}(u):"function"==typeof m?m(u):u,y=g.x,b=void 0===y?0:y,w=g.y,x=void 0===w?0:w,O=u.hasOwnProperty("x"),j=u.hasOwnProperty("y"),E=r,A=e,L=window;if(h){var M=F(a),P="clientHeight",k="clientWidth";if(M===D(a)&&"static"!==C(M=V(a)).position&&"absolute"===l&&(P="scrollHeight",k="scrollWidth"),M=M,c===e||(c===r||c===n)&&p===s)A=t,x-=(v&&L.visualViewport?L.visualViewport.height:M[P])-f.height,x*=d?1:-1;if(c===r||(c===e||c===t)&&p===s)E=n,b-=(v&&L.visualViewport?L.visualViewport.width:M[k])-f.width,b*=d?1:-1}var W,B=Object.assign({position:l},h&&J);return d?Object.assign({},B,((W={})[A]=j?"0":"",W[E]=O?"0":"",W.transform=(L.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",W)):Object.assign({},B,((i={})[A]=j?x+"px":"",i[E]=O?b+"px":"",i.transform="",i))}var Q={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:k(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Z={passive:!0};var $={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=D(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,Z)})),s&&f.addEventListener("resize",n.update,Z),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Z)})),s&&f.removeEventListener("resize",n.update,Z)}},data:{}},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ie(e){return H(V(e)).left+oe(e).scrollLeft}function ae(e){var t=C(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function se(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:L(e)&&ae(e)?e:se(N(e))}function fe(e,t){var n;void 0===t&&(t=[]);var r=se(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=D(r),a=o?[i].concat(i.visualViewport||[],ae(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(fe(N(a)))}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t){return"viewport"===t?ce(function(e){var t=D(e),n=V(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+ie(e),y:s}}(e)):A(t)?function(e){var t=H(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ce(function(e){var t,n=V(e),r=oe(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=W(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=W(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+ie(e),f=-r.scrollTop;return"rtl"===C(o||n).direction&&(s+=W(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(V(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=fe(N(e)),n=["absolute","fixed"].indexOf(C(e).position)>=0,r=n&&L(e)?F(e):e;return A(r)?t.filter((function(e){return A(e)&&T(e,r)&&"body"!==E(e)&&(!n||"static"!==C(e).position)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=pe(e,n);return t.top=W(r.top,t.top),t.right=B(r.right,t.right),t.bottom=B(r.bottom,t.bottom),t.left=W(r.left,t.left),t}),pe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function le(o){var i,a=o.reference,f=o.element,c=o.placement,p=c?k(c):null,u=c?G(c):null,l=a.x+a.width/2-f.width/2,d=a.y+a.height/2-f.height/2;switch(p){case e:i={x:l,y:a.y-f.height};break;case t:i={x:l,y:a.y+a.height};break;case n:i={x:a.x+a.width,y:d};break;case r:i={x:a.x-f.width,y:d};break;default:i={x:a.x,y:a.y}}var h=p?U(p):null;if(null!=h){var m="y"===h?"height":"width";switch(u){case"start":i[h]=i[h]-(a[m]/2-f[m]/2);break;case s:i[h]=i[h]+(a[m]/2-f[m]/2)}}return i}function de(r,o){void 0===o&&(o={});var a=o,s=a.placement,f=void 0===s?r.placement:s,c=a.boundary,p=void 0===c?"clippingParents":c,u=a.rootBoundary,l=void 0===u?"viewport":u,d=a.elementContext,h=void 0===d?"popper":d,m=a.altBoundary,v=void 0!==m&&m,g=a.padding,y=void 0===g?0:g,b=_("number"!=typeof y?y:X(y,i)),w="popper"===h?"reference":"popper",x=r.rects.popper,O=r.elements[v?w:h],j=ue(A(O)?O:O.contextElement||V(r.elements.popper),p,l),E=H(r.elements.reference),D=le({reference:E,element:x,strategy:"absolute",placement:f}),L=ce(Object.assign({},x,D)),M="popper"===h?L:E,P={top:j.top-M.top+b.top,bottom:M.bottom-j.bottom+b.bottom,left:j.left-M.left+b.left,right:M.right-j.right+b.right},k=r.modifiersData.offset;if("popper"===h&&k){var W=k[f];Object.keys(P).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";P[r]+=W[i]*o}))}return P}function he(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?d:c,u=G(r),h=u?f?l:l.filter((function(e){return G(e)===u})):i,m=h.filter((function(e){return p.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=de(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[k(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}var me={name:"flip",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name;if(!i.modifiersData[s]._skip){for(var f=a.mainAxis,c=void 0===f||f,p=a.altAxis,u=void 0===p||p,l=a.fallbackPlacements,d=a.padding,h=a.boundary,m=a.rootBoundary,v=a.altBoundary,g=a.flipVariations,y=void 0===g||g,b=a.allowedAutoPlacements,w=i.options.placement,x=k(w),O=l||(x===w||!y?[te(w)]:function(e){if("auto"===k(e))return[];var t=te(e);return[re(e),t,re(t)]}(w)),j=[w].concat(O).reduce((function(e,t){return e.concat("auto"===k(t)?he(i,{placement:t,boundary:h,rootBoundary:m,padding:d,flipVariations:y,allowedAutoPlacements:b}):t)}),[]),E=i.rects.reference,D=i.rects.popper,A=new Map,L=!0,M=j[0],P=0;P<j.length;P++){var W=j[P],B=k(W),R="start"===G(W),H=[e,t].indexOf(B)>=0,S=H?"width":"height",T=de(i,{placement:W,boundary:h,rootBoundary:m,altBoundary:v,padding:d}),C=H?R?n:r:R?t:e;E[S]>D[S]&&(C=te(C));var q=te(C),V=[];if(c&&V.push(T[B]<=0),u&&V.push(T[C]<=0,T[q]<=0),V.every((function(e){return e}))){M=W,L=!1;break}A.set(W,V)}if(L)for(var N=function(e){var t=j.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},I=y?3:1;I>0;I--){if("break"===N(I))break}i.placement!==M&&(i.modifiersData[s]._skip=!0,i.placement=M,i.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ge(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}var ye={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=de(t,{elementContext:"reference"}),s=de(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ge(f),u=ge(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}};var be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,a=t.name,s=i.offset,f=void 0===s?[0,0]:s,c=d.reduce((function(t,i){return t[i]=function(t,o,i){var a=k(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,f),t}),{}),p=c[o.placement],u=p.x,l=p.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=u,o.modifiersData.popperOffsets.y+=l),o.modifiersData[a]=c}};var we={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=le({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name,f=a.mainAxis,c=void 0===f||f,p=a.altAxis,u=void 0!==p&&p,l=a.boundary,d=a.rootBoundary,h=a.altBoundary,m=a.padding,v=a.tether,g=void 0===v||v,y=a.tetherOffset,b=void 0===y?0:y,w=de(i,{boundary:l,rootBoundary:d,padding:m,altBoundary:h}),x=k(i.placement),O=G(i.placement),j=!O,E=U(x),D="x"===E?"y":"x",A=i.modifiersData.popperOffsets,L=i.rects.reference,M=i.rects.popper,P="function"==typeof b?b(Object.assign({},i.rects,{placement:i.placement})):b,R="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),H=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,T={x:0,y:0};if(A){if(c){var C,q="y"===E?e:r,V="y"===E?t:n,N="y"===E?"height":"width",I=A[E],_=I+w[q],X=I-w[V],Y=g?-M[N]/2:0,J="start"===O?L[N]:M[N],K="start"===O?-M[N]:-L[N],Q=i.elements.arrow,Z=g&&Q?S(Q):{width:0,height:0},$=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[q],te=$[V],ne=z(0,L[N],Z[N]),re=j?L[N]/2-Y-ne-ee-R.mainAxis:J-ne-ee-R.mainAxis,oe=j?-L[N]/2+Y+ne+te+R.mainAxis:K+ne+te+R.mainAxis,ie=i.elements.arrow&&F(i.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(C=null==H?void 0:H[E])?C:0,fe=I+oe-se,ce=z(g?B(_,I+re-se-ae):_,I,g?W(X,fe):X);A[E]=ce,T[E]=ce-I}if(u){var pe,ue="x"===E?e:r,le="x"===E?t:n,he=A[D],me="y"===D?"height":"width",ve=he+w[ue],ge=he-w[le],ye=-1!==[e,r].indexOf(x),be=null!=(pe=null==H?void 0:H[D])?pe:0,we=ye?ve:he-L[me]-M[me]-be+R.altAxis,xe=ye?he+L[me]+M[me]-be-R.altAxis:ge,Oe=g&&ye?function(e,t,n){var r=z(e,t,n);return r>n?n:r}(we,he,xe):z(g?we:ve,he,g?xe:ge);A[D]=Oe,T[D]=Oe-he}i.modifiersData[s]=T}},requiresIfExists:["offset"]};function Oe(e,t,n){void 0===n&&(n=!1);var r,o,i=L(t),a=L(t)&&function(e){var t=e.getBoundingClientRect(),n=R(t.width)/e.offsetWidth||1,r=R(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=V(t),f=H(e,a),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==E(t)||ae(s))&&(c=(r=t)!==D(r)&&L(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:oe(r)),L(t)?((p=H(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=ie(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}function je(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var Ee={placement:"bottom",modifiers:[],strategy:"absolute"};function De(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ae(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Ee:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:A(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)};var a,c,l=function(e){var t=je(e);return j.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(De(t,n)){s.rects={reference:Oe(t,F(n),"fixed"===s.options.strategy),popper:S(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),c=!0}};if(!De(e,t))return p;function u(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var Le=Ae(),Me=Ae({defaultModifiers:[$,we,Q,P]}),Pe=Ae({defaultModifiers:[$,we,Q,P,be,me,xe,Y,ye]});export{b as afterMain,v as afterRead,O as afterWrite,P as applyStyles,Y as arrow,o as auto,i as basePlacements,g as beforeMain,h as beforeRead,w as beforeWrite,t as bottom,f as clippingParents,Q as computeStyles,Pe as createPopper,Le as createPopperBase,Me as createPopperLite,de as detectOverflow,s as end,$ as eventListeners,me as flip,ye as hide,r as left,y as main,j as modifierPhases,be as offset,d as placements,p as popper,Ae as popperGenerator,we as popperOffsets,xe as preventOverflow,m as read,u as reference,n as right,a as start,e as top,l as variationPlacements,c as viewport,x as write};