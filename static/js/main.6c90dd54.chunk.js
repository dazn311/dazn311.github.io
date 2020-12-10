(this["webpackJsonpmonds-react"]=this["webpackJsonpmonds-react"]||[]).push([[0],{43:function(e,t,a){e.exports=a(58)},48:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(48),a(19)),l=a(5),u=(a(49),a(61)),s=a(63),m=a(62),v=a(39),f=a(60),E=function(){return r.a.createElement(u.a,{bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,null,"ReactApp"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(i.b,{className:"nav-link",to:"/fav"},"Favorite")),r.a.createElement(m.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(f.a,{variant:"outline-success"},"Search"))))},d=a(11),p=r.a.createContext(),b=a(7),O=a.n(b),g=a(12);function j(e){var t=e.item,a=e.value,c=e.icon_url,o=Object(n.useState)(!1),i=Object(d.a)(o,2),l=i[0],u=i[1],s=Object(n.useContext)(p),m=s.addFavorite,v=s.removeFavorite;Object(n.useEffect)((function(){u(t.isFavorite)}),[]);var f=l?"gold":"gray";return r.a.createElement("li",{className:["animate__animated","animate__backInLeft"].join(" "),style:h.li},r.a.createElement("img",{src:c,alt:""}),r.a.createElement("strong",null,a),r.a.createElement("button",{onClick:function(){return t.id,l?v(t.id):m(Object(g.a)(Object(g.a)({},t),{},{isFavorite:!0})),void u(!l)},style:h.span2},r.a.createElement("i",{style:{color:f},className:"fas fa-star"})))}j.protoTypes={item:O.a.object.isRequired,value:O.a.string,icon_url:O.a.string};var h={li:{padding:"5px 10px",border:"1px solid #ccc",borderRadius:"4px",marginBottom:"5px",display:"flex",justifyContent:"space-between"},span:{marginRight:"3px"},span2:{marginLeft:"3px"}};function _(e){var t=e.items,a=r.a.createElement("ul",{style:F.ul},t.map((function(e,t){return r.a.createElement(j,{index:t,item:e,value:e.value||"not data",icon_url:e.icon_url,key:e.id+t})}))),n=r.a.createElement("div",{className:"loader"},"Loading...");return t.length?a:n}_.propTypes={items:O.a.arrayOf(O.a.object).isRequired};var F={ul:{listStyle:"none",margin:0,padding:0}},x=_;a(56);var y=function(e){var t=e.eventButton,a=e.captionButton;return r.a.createElement(f.a,{onClick:t},a)},L=a(32),R=a.n(L),A=a(40),T=a(41),k=function e(){var t=this;Object(T.a)(this,e),this.transformDataR=function(e){return{id:e.id,value:e.value,icon_url:e.icon_url,isFavorite:!1}},this.getResource=function(){var e=Object(A.a)(R.a.mark((function e(a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("could not fetch"+a+", received: ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getProductAll=function(){return t.getResource("/random")},this.getProductById=function(e){return t.getResource("/".concat(e))},this._apiBase="https://api.chucknorris.io/jokes"},B=[],w=-1;function I(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=r.a.useState(B),i=Object(d.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)(!1),m=Object(d.a)(s,2),v=m[0],f=m[1],E=Object(n.useContext)(p),b=E.state,O=E.setFavoriteToLocal,g=new k,j=function(){c({isLoading:!0}),g.getProductAll().then((function(e){var t=g.transformDataR(e);c({isLoading:!1}),u([t])}))};Object(n.useEffect)((function(){j(),console.log("useEFf")}),[]),Object(n.useEffect)((function(){O()}),[b.favList]);var h=function(){clearInterval(w)};Object(n.useEffect)((function(){return v?w=setInterval((function(){j()}),3e3):h(),function(){h()}}),[v]);var _=v?"stop loop":"loop",F=r.a.createElement("div",{className:"buttonGroup"},r.a.createElement(y,{eventButton:j,captionButton:"next"}),r.a.createElement(y,{eventButton:function(){f(!v)},captionButton:_}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement(x,{items:l,loading:a}),F)}function S(){var e=Object(n.useContext)(p),t=e.removeFavoriteAll,a=e.getFavorite,c=Object(n.useState)([]),o=Object(d.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)(!1),s=Object(d.a)(u,2),m=s[0],v=s[1];Object(n.useEffect)((function(){var e=a();l(e)}),[]),Object(n.useEffect)((function(){console.log("fav loading",m),v(!0)}),[i]);var f=r.a.createElement("div",{className:"buttonGroup"},r.a.createElement(y,{eventButton:t,captionButton:"Remove Favorite All"}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Fav Page"),r.a.createElement(x,{items:i,loading:m}),f)}var N,V=a(16),C=a(33),D=(N={},Object(V.a)(N,"ADD_TO_FAVORITE",(function(e,t){var a=t.item;return Object(g.a)(Object(g.a)({},e),{},{favList:[].concat(Object(C.a)(e.favList),[a])})})),Object(V.a)(N,"REMOVE_TO_FAVORITE",(function(e,t){var a=t.id;return Object(g.a)(Object(g.a)({},e),{},{favList:Object(C.a)(e.favList.filter((function(e){return e.id!==a})))})})),Object(V.a)(N,"REMOVE_ALL_TO_FAVORITE",(function(e){return Object(g.a)(Object(g.a)({},e),{},{favList:[]})})),Object(V.a)(N,"DEFAULT",(function(e){return e})),N),P=function(e,t){return(D[t.type]||D.DEFAULT)(e,t)},J={favList:JSON.parse(localStorage.getItem("favoritesElements"))||[]},M=function(e){var t=e.children,a=Object(n.useReducer)(P,J),c=Object(d.a)(a,2),o=c[0],i=c[1];return r.a.createElement(p.Provider,{value:{state:o,addFavorite:function(e){i({type:"ADD_TO_FAVORITE",item:e})},removeFavorite:function(e){return i({type:"REMOVE_TO_FAVORITE",id:e})},removeFavoriteAll:function(e){return i({type:"REMOVE_ALL_TO_FAVORITE"})},getFavorite:function(){return o.favList},setFavoriteToLocal:function(){localStorage.setItem("favoritesElements",JSON.stringify(o.favList))}}},t)};var q=function(){return r.a.createElement(M,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:I}),r.a.createElement(l.a,{exact:!0,path:"/fav",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6c90dd54.chunk.js.map