"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{713:function(e,t,n){n.d(t,{Aj:function(){return s},HI:function(){return i},IQ:function(){return o},Jh:function(){return f},qF:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/trending/movie/day?api_key=9d2b0029c30fb6f0691793e32bc4db6f");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/movie/".concat(t,"?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/movie/".concat(t,"/credits?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/movie/".concat(t,"/reviews?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/search/movie?api_key=9d2b0029c30fb6f0691793e32bc4db6f&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},76:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(689),o=n(713),f="Cast_item__a0CDL",p="Cast_img__-isbW",d="Cast_name__6UbFm",l="Cast_text__P2vgu",b=n(184),v=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],v=n[1],h=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.IQ)(e);case 3:n=t.sent,v(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){h()}),[]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("ul",{children:c.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return(0,b.jsxs)("li",{className:f,children:[(0,b.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4X9PZ79pQtLSBLjyhQGLT2QHD1B8TJFw2G6rpULjpODvSybDvLYdsREaXw8-qefxr20&usqp=CAU",alt:"",className:p}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:d,children:n}),(0,b.jsxs)("p",{className:l,children:["Character: ",r]})]})]},t)}))})})}}}]);
//# sourceMappingURL=76.3a3ec026.chunk.js.map