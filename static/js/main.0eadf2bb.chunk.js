(this["webpackJsonpreact-essentials"]=this["webpackJsonpreact-essentials"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n(13),i=n.n(s),r=(n(20),n(14)),j=n(6),l=(n(21),n(9)),d=n(28),b=n(25),o=n(26),u=n(27);function O(e){var t=e.setTitle;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(e){t(e.target.value)},type:"text",id:"textInput",placeholder:"Search",className:"w-100 p-3",style:{width:"100%"}})})}function h(e){var t=e.title,n=e.page,s=e.setNominated,i=e.nominated,u=e.setPage,O=Object(a.useState)(null),h=Object(j.a)(O,2),m=h[0],x=h[1],p=Object(a.useState)(!1),f=Object(j.a)(p,2),g=f[0],v=f[1],y=Object(a.useState)(null),N=Object(j.a)(y,2),I=N[0],S=N[1];return Object(a.useEffect)((function(){t&&t.length>=3&&(v(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(n)).then((function(e){return e.json()})).then(x).then((function(){return v(!1)})).catch(S))}),[n,t]),t.length<3?Object(c.jsx)("p",{children:"Please enter a search query of at least 3 characters"}):g?Object(c.jsx)("p",{children:"Loading..."}):I?Object(c.jsx)("pre",{children:JSON.stringify(I,null,2)}):m?"False"===m.Response?Object(c.jsx)("p",{children:"Movie Not Found"}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(d.a,{className:"list-unstyled",children:[m.Search.map((function(e){return Object(c.jsx)(d.a.Item,{children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(o.a,{md:"auto",children:Object(c.jsx)(l.a,{onClick:function(){return s({arr:[].concat(Object(r.a)(i.arr),[e])})},variant:"outline-secondary",size:"sm",name:"imdbID",value:e.imdbID,children:"Nominate"})}),Object(c.jsxs)(o.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)})),Object(c.jsx)(d.a.Item,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)(o.a,{style:{textAlign:"center"},children:Object(c.jsx)(l.a,{style:{textAlign:"center"},size:"sm",variant:"outline-secondary",onClick:function(){return u(n+1)},children:"Next Page"})})})})]})}):null}function m(e){var t=e.nominated,n=e.setNominated;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.a,{className:"list-unstyled",children:t.arr.map((function(e){return Object(c.jsx)(d.a.Item,{children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(o.a,{md:"auto",children:Object(c.jsx)(l.a,{className:"align-middle",onClick:function(){return n({arr:t.arr.filter((function(t){return t!==e}))})},variant:"outline-secondary",size:"sm",name:"imdbID",value:e.imdbID,children:"Remove"})}),Object(c.jsxs)(o.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})})}var x=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(1),r=Object(j.a)(i,2),l=r[0],d=r[1],x=Object(a.useState)({arr:[]}),p=Object(j.a)(x,2),f=p[0],g=p[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{className:"bg-light",children:[Object(c.jsx)(b.a,{className:"py-5",children:Object(c.jsx)(o.a,{children:Object(c.jsx)(O,{setTitle:s})})}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(h,{title:n,page:l,setPage:d,setNominated:g,nominated:f})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(m,{nominated:f,setNominated:g})})]})]})})};n(22);i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0eadf2bb.chunk.js.map