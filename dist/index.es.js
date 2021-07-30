import n from"react";import o from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t(n,o){return Object.defineProperty?Object.defineProperty(n,"raw",{value:o}):n.raw=o,n}var e,r,d,i,a,u,l={Container:o.div(e||(e=t(["\n    position:relative;\n    display:inline-block;\n    background-color:",";\n    padding:4px;\n    width:150px;\n    border-style:dashed;\n    border-color:",";;\n    border-width:1px;\n    "],["\n    position:relative;\n    display:inline-block;\n    background-color:",";\n    padding:4px;\n    width:150px;\n    border-style:dashed;\n    border-color:",";;\n    border-width:1px;\n    "])),(function(n){return"undefined"!==n.backgroundColor?n.backgroundColor:"transparent"}),(function(n){return"undefined"!==n.borderColor?n.borderColor:"#ddd"})),DotOne:o.div(r||(r=t(["\n    top:0;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "],["\n    top:0;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "])),(function(n){return"undefined"!==n.dotColor?n.dotColor:"#ddd"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"})),DotTwo:o.div(d||(d=t(["\n    top:0;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "],["\n    top:0;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "])),(function(n){return"undefined"!==n.dotColor?n.dotColor:"#ddd"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"})),DotThree:o.div(i||(i=t(["\n    top:100%;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "],["\n    top:100%;\n    left:0;\n    transform:translate(-50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "])),(function(n){return"undefined"!==n.dotColor?n.dotColor:"#ddd"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"})),DotFour:o.div(a||(a=t(["\n    top:100%;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "],["\n    top:100%;\n    right:0;\n    transform:translate(50%,-50%);\n    position: absolute;\n    background-color:",";\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    "])),(function(n){return"undefined"!==n.dotColor?n.dotColor:"#ddd"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"}),(function(n){return void 0!==n.dotSize?n.dotSize+"px":"8px"}))},s=o.span(u||(u=t(["\ncolor:",";\ndisplay:flex;\njustify-content:center;\n"],["\ncolor:",";\ndisplay:flex;\njustify-content:center;\n"])),(function(n){return"undefined"!==n.textColor?n.textColor:"inherit"}));function c(o){var t=o.texts,e=o.backgroundColor,r=o.textColor,d=o.borderColor,i=o.dotColor,a=o.dotSize,u=n.useState(t[0]),c=u[0],f=u[1],p=n.useState(0),h=p[0],b=p[1],x=n.useState("fade-in"),g=x[0],C=x[1];return n.useEffect((function(){var n=setInterval((function(){"fade-in"===g?C("fade-out"):(C("fade-in"),h<t.length-1?b(h+1):b(0),f((function(){return t[h]})))}),1e3);return function(){return clearInterval(n)}}),[g,h,t]),n.createElement(l.Container,{backgroundColor:""+e,borderColor:""+d},n.createElement(l.DotOne,{dotSize:a,dotColor:""+i}),n.createElement(l.DotTwo,{dotSize:a,dotColor:""+i}),n.createElement(l.DotThree,{dotSize:a,dotColor:""+i}),n.createElement(l.DotFour,{dotSize:a,dotColor:""+i}),n.createElement(s,{className:g,textColor:""+r},c))}!function(n,o){void 0===o&&(o={});var t=o.insertAt;if(n&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}(".fade-in {\n    transition: opacity 1s ease;\n}\n\n.fade-out {\n    opacity: 0;\n    transition: opacity 1s ease;\n}");export default c;
//# sourceMappingURL=index.es.js.map
