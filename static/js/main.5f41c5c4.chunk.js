(this.webpackJsonpmovie_web=this.webpackJsonpmovie_web||[]).push([[0],{131:function(e,t,c){},132:function(e,t,c){},205:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c(0),s=c.n(a),i=c(16),r=c.n(i),j=(c(131),c(92)),l=c(49),o=(c(132),c(212)),b=c(213),d=c(209),h=c(210),u=c(66),O=c(42),x=c(215),f=c(208),p=c(214),g=c(211),m=(c(133),"39480f4a"),v=o.a.Header,y=o.a.Content,w=o.a.Footer,S=b.a.Search,A=d.a.Meta,D=h.a.Title,F=function(e){var t=e.searchHandler;return Object(n.jsx)(u.a,{children:Object(n.jsx)(O.a,{span:12,offset:6,children:Object(n.jsx)(S,{placeholder:"enter movie, series, episode name",enterButton:"Search",size:"large",onSearch:function(e){return t(e)}})})})},N=function(e){var t=e.Title,c=e.imdbID,a=e.Poster,s=e.Type,i=e.ShowDetail,r=e.DetailRequest,j=e.ActivateModal;return Object(n.jsx)(O.a,{style:{margin:"20px 0"},className:"gutter-row",span:4,children:Object(n.jsx)("div",{className:"gutter-box",children:Object(n.jsxs)(d.a,{style:{width:200},cover:Object(n.jsx)("img",{alt:t,src:"N/A"===a?"https://placehold.it/198x264&text=Image+Not+Found":a}),onClick:function(){return j(!0),r(!0),void fetch("http://www.omdbapi.com/?i=".concat(c,"&apikey=").concat(m)).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){r(!1),i(e)})).catch((function(e){e.message,r(!1)}))},children:[Object(n.jsx)(A,{title:t,description:!1}),Object(n.jsx)(u.a,{style:{marginTop:"10px"},className:"gutter-row",children:Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{color:"magenta",children:s})})})]})})})},T=function(e){var t=e.Title,c=e.Poster,a=e.imdbRating,s=e.Rated,i=e.Runtime,r=e.Genre,j=e.Plot;return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(O.a,{span:11,children:Object(n.jsx)("img",{src:"N/A"===c?"https://placehold.it/198x264&text=Image+Not+Found":c,alt:t})}),Object(n.jsxs)(O.a,{span:13,children:[Object(n.jsxs)(u.a,{children:[Object(n.jsx)(O.a,{span:21,children:Object(n.jsx)(D,{level:4,children:t})}),Object(n.jsx)(O.a,{span:3,style:{textAlign:"right"},children:Object(n.jsx)(D,{level:4,children:Object(n.jsx)("span",{style:{color:"#41A8F8"},children:a})})})]}),Object(n.jsx)(u.a,{style:{marginBottom:"20px"},children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{children:s}),Object(n.jsx)(x.a,{children:i}),Object(n.jsx)(x.a,{children:r})]})}),Object(n.jsx)(u.a,{children:Object(n.jsx)(O.a,{children:j})})]})]})},M=function(){return Object(n.jsx)("div",{style:{margin:"20px 0",textAlign:"center"},children:Object(n.jsx)(f.a,{})})};var R=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(null),r=Object(l.a)(i,2),b=r[0],d=r[1],h=Object(a.useState)(!1),O=Object(l.a)(h,2),x=O[0],f=O[1],S=Object(a.useState)("batman"),A=Object(l.a)(S,2),R=A[0],k=A[1],B=Object(a.useState)(!1),C=Object(l.a)(B,2),I=C[0],P=C[1],H=Object(a.useState)(!1),E=Object(l.a)(H,2),q=E[0],J=E[1],L=Object(a.useState)(!1),_=Object(l.a)(L,2),z=_[0],G=_[1];return Object(a.useEffect)((function(){f(!0),d(null),s(null),fetch("http://www.omdbapi.com/?s=".concat(R,"&apikey=").concat(m)).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){"False"===e.Response?d(e.Error):s(e.Search),f(!1)})).catch((function(e){var t=e.message;d(t),f(!1)}))}),[R]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.a,{className:"layout",children:[Object(n.jsx)(v,{children:Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)(D,{style:{color:"#ffffff",marginTop:"14px"},level:3,children:"OMDB API + React"})})}),Object(n.jsxs)(y,{style:{padding:"0 50px"},children:[Object(n.jsxs)("div",{style:{background:"#fff",padding:24,minHeight:280},children:[Object(n.jsx)(F,{searchHandler:k}),Object(n.jsx)("br",{}),Object(n.jsxs)(u.a,{gutter:16,type:"flex",justify:"center",children:[x&&Object(n.jsx)(M,{}),null!==b&&Object(n.jsx)("div",{style:{margin:"20px 0"},children:Object(n.jsx)(p.a,{message:b,type:"error"})}),null!==c&&c.length>0&&c.map((function(e,t){return Object(n.jsx)(N,Object(j.a)({ShowDetail:J,DetailRequest:G,ActivateModal:P},e),t)}))]})]}),Object(n.jsx)(g.a,{title:"Detail",centered:!0,visible:I,onCancel:function(){return P(!1)},footer:null,width:800,children:!1===z?Object(n.jsx)(T,Object(j.a)({},q)):Object(n.jsx)(M,{})})]}),Object(n.jsx)(w,{style:{textAlign:"center"},children:"OMDB Movies \xa92019"})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,216)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),k()}},[[205,1,2]]]);
//# sourceMappingURL=main.5f41c5c4.chunk.js.map