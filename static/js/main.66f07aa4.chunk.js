(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n(14),i=n.n(a),r=(n(21),n(15)),j=n(6),l=(n(22),n(12)),d=n(30),h=n(31),o=n(29),b=n(26),u=n(27),O=n(28);function x(e){var t=e.setTitle,n=e.setPage;return Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Movie Title"})}),Object(c.jsx)(d.a.Body,{children:Object(c.jsx)("input",{onChange:function(e){t(e.target.value),n(1)},type:"text",id:"textInput",placeholder:"Please enter a search query with 3+ characters",className:"w-100 p-3",style:{width:"100%"}})})]})})}function m(e){var t=e.title,n=e.page,a=e.setNominated,i=e.nominated,O=e.setPage,x=Object(s.useState)(null),m=Object(j.a)(x,2),f=m[0],p=m[1],v=Object(s.useState)(!1),g=Object(j.a)(v,2),y=g[0],N=g[1],k=Object(s.useState)(null),w=Object(j.a)(k,2),C=w[0],S=w[1];if(Object(s.useEffect)((function(){t&&t.length>=3&&(N(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(n)).then((function(e){return e.json()})).then(p).then((function(){return N(!1)})).catch(S))}),[n,t]),t.length<3)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Results"})});if(y)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Loading..."})});if(C)return Object(c.jsx)("pre",{children:JSON.stringify(C,null,2)});if(!f)return null;if("False"===f.Response)return Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)("h5",{children:['No results for "',t,'"']})});var I=[];I.push(Object(c.jsx)(h.a.First,{disabled:1===n,onClick:function(){return O(1)}})),I.push(Object(c.jsx)(h.a.Prev,{disabled:1===n,onClick:function(){return O(n-1)}}));var H=Math.max(n-2,1),T=Math.ceil(f.totalResults/10),P=Math.min(T,H+4);P-n===1?H-=1:P-n===0&&(H-=2);for(var E=function(e){I.push(Object(c.jsx)(h.a.Item,{className:"text-secondary",onClick:function(){return O(e)},active:e===n,children:e},e))},F=H;F<=P;F++)E(F);return I.push(Object(c.jsx)(h.a.Next,{disabled:n===T,onClick:function(){return O(n+1)}})),I.push(Object(c.jsx)(h.a.Last,{disabled:n===T,onClick:function(){return O(T)}})),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)(d.a.Title,{children:['Results for "',t,'"']})}),Object(c.jsx)(d.a.Body,{style:{padding:"0"},children:Object(c.jsx)(o.a,{variant:"flush",children:f.Search.map((function(e){return Object(c.jsx)(o.a.Item,{action:!0,variant:"light",children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(l.a,{onClick:function(){i.list.length<5&&a({list:[].concat(Object(r.a)(i.list),[e])})},disabled:i.list.includes(e)||i.list.length>=5,variant:"secondary",size:"sm",name:"nominate",value:e,children:"Nominate"})}),Object(c.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})}),Object(c.jsx)(d.a.Footer,{children:Object(c.jsx)(b.a,{className:"justify-content-center",children:Object(c.jsx)(h.a,{children:I})})})]})}function f(e){var t=e.nominated,n=e.setNominated;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Nominations"})}),Object(c.jsx)(d.a.Body,{style:{minHeight:"0",padding:"0"},children:Object(c.jsx)(o.a,{variant:"flush",children:t.list.map((function(e){return Object(c.jsx)(o.a.Item,{action:!0,variant:"light",children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{md:"auto",children:Object(c.jsx)(l.a,{onClick:function(){return n({list:t.list.filter((function(t){return t!==e}))})},variant:"secondary",size:"sm",name:"remove",value:e.imdbID,children:"Remove"})}),Object(c.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})})]})})}var p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(1),r=Object(j.a)(i,2),l=r[0],h=r[1],o=Object(s.useState)({list:[]}),p=Object(j.a)(o,2),v=p[0],g=p[1];return document.body.style="background: #E9E9EC;",Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(b.a,{children:Object(c.jsxs)(u.a,{className:"py-3",children:[Object(c.jsx)("h2",{children:"The Shoppies"}),Object(c.jsx)(x,{setTitle:a,setPage:h})]})}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(d.a,{className:"w-100",children:Object(c.jsx)(m,{title:n,page:l,setPage:h,setNominated:g,nominated:v})})}),Object(c.jsx)("div",{className:"d-md-none w-100"}),Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(f,{nominated:v,setNominated:g})})]})]})})};n(23);i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.66f07aa4.chunk.js.map