(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c(14),i=c.n(a),r=(c(21),c(15)),j=c(6),l=(c(22),c(12)),d=c(30),h=c(31),o=c(29),b=c(26),u=c(27),O=c(28);function x(e){var t=e.setTitle,c=e.setPage;return Object(n.jsx)("div",{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Header,{children:Object(n.jsx)("h5",{children:"Movie Title"})}),Object(n.jsx)(d.a.Body,{children:Object(n.jsx)("input",{onChange:function(e){t(e.target.value),c(1)},type:"text",id:"textInput",placeholder:"Please enter a search query with 3+ characters",className:"w-100 p-3",style:{width:"100%"}})})]})})}function m(e){var t=e.title,c=e.page,a=e.setNominated,i=e.nominated,O=e.setPage,x=Object(s.useState)(null),m=Object(j.a)(x,2),p=m[0],f=m[1],g=Object(s.useState)(!1),v=Object(j.a)(g,2),y=v[0],N=v[1],w=Object(s.useState)(null),S=Object(j.a)(w,2),I=S[0],k=S[1];if(Object(s.useEffect)((function(){t&&t.length>=3&&(N(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(c)).then((function(e){return e.json()})).then(f).then((function(){return N(!1)})).catch(k))}),[c,t]),t.length<3)return Object(n.jsx)(d.a.Header,{children:Object(n.jsx)("h5",{children:"Results"})});if(y)return Object(n.jsx)(d.a.Header,{children:Object(n.jsx)("h5",{children:"Loading..."})});if(I)return Object(n.jsx)("pre",{children:JSON.stringify(I,null,2)});if(!p)return null;if("False"===p.Response)return Object(n.jsx)(d.a.Header,{children:Object(n.jsxs)("h5",{children:['No results for "',t,'"']})});var H=[];H.push(Object(n.jsx)(h.a.First,{style:{color:"text-secondary"}})),H.push(Object(n.jsx)(h.a.Prev,{}));for(var T=Math.max(c-2,1),P=Math.ceil(p.totalResults/10),C=function(e){H.push(Object(n.jsx)(h.a.Item,{className:"text-secondary",onClick:function(){return O(e)},active:e===c,children:e},e))},E=T;E<=Math.min(P,T+4);E++)C(E);return H.push(Object(n.jsx)(h.a.Next,{})),H.push(Object(n.jsx)(h.a.Last,{})),Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a.Header,{children:Object(n.jsxs)(d.a.Title,{children:['Results for "',t,'"']})}),Object(n.jsx)(d.a.Body,{style:{padding:"0"},children:Object(n.jsx)(o.a,{variant:"flush",children:p.Search.map((function(e){return Object(n.jsx)(o.a.Item,{action:!0,variant:"light",children:Object(n.jsxs)(b.a,{className:"align-items-center",children:[Object(n.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(n.jsx)(l.a,{onClick:function(){i.list.length<5&&a({list:[].concat(Object(r.a)(i.list),[e])})},disabled:i.list.includes(e)||i.list.length>=5,variant:"secondary",size:"sm",name:"nominate",value:e,children:"Nominate"})}),Object(n.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})}),Object(n.jsx)(d.a.Footer,{children:Object(n.jsx)(b.a,{className:"justify-content-center",children:Object(n.jsx)(h.a,{children:H})})})]})}function p(e){var t=e.nominated,c=e.setNominated;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(d.a.Header,{children:Object(n.jsx)("h5",{children:"Nominations"})}),Object(n.jsx)(d.a.Body,{style:{minHeight:"0",padding:"0"},children:Object(n.jsx)(o.a,{variant:"flush",children:t.list.map((function(e){return Object(n.jsx)(o.a.Item,{action:!0,variant:"light",children:Object(n.jsxs)(b.a,{className:"align-items-center",children:[Object(n.jsx)(u.a,{md:"auto",children:Object(n.jsx)(l.a,{onClick:function(){return c({list:t.list.filter((function(t){return t!==e}))})},variant:"secondary",size:"sm",name:"remove",value:e.imdbID,children:"Remove"})}),Object(n.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})})]})})}var f=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(1),r=Object(j.a)(i,2),l=r[0],h=r[1],o=Object(s.useState)({list:[]}),f=Object(j.a)(o,2),g=f[0],v=f[1];return document.body.style="background: #E9E9EC;",Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(u.a,{className:"py-3",children:[Object(n.jsx)("h2",{children:"The Shoppies"}),Object(n.jsx)(x,{setTitle:a,setPage:h})]})}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(u.a,{className:"py-3",children:Object(n.jsx)(d.a,{className:"w-100",children:Object(n.jsx)(m,{title:c,page:l,setPage:h,setNominated:v,nominated:g})})}),Object(n.jsx)("div",{className:"d-md-none w-100"}),Object(n.jsx)(u.a,{className:"py-3",children:Object(n.jsx)(p,{nominated:g,setNominated:v})})]})]})})};c(23);i.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.677f7ddd.chunk.js.map