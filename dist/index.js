"use strict";var n=require("react/jsx-runtime"),e=require("react"),t=require("styled-components");function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=r(e),i=r(t),a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};function d(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n");var s,l,u,p,c,f,h={Container:i.default.div(s||(s=d(["\n    position:relative;\n    display:inline-block;\n    background:white;\n    padding:4px;\n    width:150px;\n    border-style:dashed;\n    border-color:blue;\n    border-width:1px;\n    "],["\n    position:relative;\n    display:inline-block;\n    background:white;\n    padding:4px;\n    width:150px;\n    border-style:dashed;\n    border-color:blue;\n    border-width:1px;\n    "]))),DotOne:i.default.div(l||(l=d(["\n    top:0;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "],["\n    top:0;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "]))),DotTwo:i.default.div(u||(u=d(["\n    top:0;\n    right:0;\n    transform:translate(50%,-50%);\n    \n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "],["\n    top:0;\n    right:0;\n    transform:translate(50%,-50%);\n    \n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "]))),DotThree:i.default.div(p||(p=d(["\n    top:100%;\n    left:0;\n    transform:translate(-50%,-50%);\n    \n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "],["\n    top:100%;\n    left:0;\n    transform:translate(-50%,-50%);\n    \n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "]))),DotFour:i.default.div(c||(c=d(["\n    top:100%;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "],["\n    top:100%;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background: blue;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    "])))},b=i.default.span(f||(f=d(["\ncolor:blue;\ndisplay:flex;\njustify-content:center;\n"],["\ncolor:blue;\ndisplay:flex;\njustify-content:center;\n"])));module.exports=function(e){var t=e.texts,r=o.default.useState("Buy"),i=r[0],d=r[1],s=o.default.useState(0),l=s[0],u=s[1],p=o.default.useState("fade-in"),c=p[0],f=p[1];return o.default.useEffect((function(){var n=setInterval((function(){"fade-in"===c?f("fade-out"):(f("fade-in"),l<t.length-1?u(l+1):u(0),d((function(){return t[l]})))}),1e3);return function(){return clearInterval(n)}}),[c,l,t]),n.jsxs(h.Container,{children:[n.jsx(h.DotOne,{},void 0),n.jsx(h.DotTwo,{},void 0),n.jsx(h.DotThree,{},void 0),n.jsx(h.DotFour,{},void 0),n.jsx(b,a({className:c},{children:i}),void 0)]},void 0)};
//# sourceMappingURL=index.js.map