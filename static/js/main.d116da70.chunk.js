(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n(15),i=n.n(a),r=(n(22),n(16)),j=n(6),l=(n(23),n(13)),d=n(34),o=n(35),h=n(33),b=n(29),u=n(30),O=n(31),x=n(32);function m(e){var t=e.setTitle,n=e.setPage;return Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Movie Title"})}),Object(c.jsx)(d.a.Body,{children:Object(c.jsx)("input",{onChange:function(e){t(e.target.value),n(1)},type:"text",id:"textInput",placeholder:"Please search with 3+ characters...",className:"w-100 p-3",style:{width:"100%"}})})]})})}function p(e){var t=e.title,n=e.page,a=e.setNominated,i=e.nominated,x=e.setPage,m=Object(s.useState)(null),p=Object(j.a)(m,2),f=p[0],g=p[1],v=Object(s.useState)(!1),y=Object(j.a)(v,2),N=y[0],w=y[1],S=Object(s.useState)(null),k=Object(j.a)(S,2),I=k[0],C=k[1];if(Object(s.useEffect)((function(){t&&t.length>=3&&(w(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(n)).then((function(e){return e.json()})).then(g).then((function(){return w(!1)})).catch(C))}),[n,t]),console.log(f),t.length<3)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Results"})});if(N)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Loading..."})});if(I)return Object(c.jsx)("pre",{children:JSON.stringify(I,null,2)});if(!f)return null;if("False"===f.Response)return Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)("h5",{children:['No results for "',t,'"']})});var P=[];P.push(Object(c.jsx)(o.a.First,{disabled:1===n,onClick:function(){return x(1)}},"first")),P.push(Object(c.jsx)(o.a.Prev,{disabled:1===n,onClick:function(){return x(n-1)}},"previous"));var H=Math.max(n-2,1),T=Math.ceil(f.totalResults/10),E=Math.min(T,H+4);H>=2&&E-n===1?H-=1:H>=3&&E-n===0&&(H-=2);for(var R=function(e){P.push(Object(c.jsx)(o.a.Item,{className:"text-secondary",onClick:function(){return x(e)},active:e===n,children:e},e))},F=H;F<=E;F++)R(F);return P.push(Object(c.jsx)(o.a.Next,{disabled:n===T,onClick:function(){return x(n+1)}},"next")),P.push(Object(c.jsx)(o.a.Last,{disabled:n===T,onClick:function(){return x(T)}},"last")),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)(d.a.Title,{children:['Results for "',t,'"']})}),Object(c.jsx)(d.a.Body,{style:{padding:"0"},children:Object(c.jsx)(h.a,{variant:"flush",children:f.Search.map((function(e){return Object(c.jsx)(h.a.Item,{children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(l.a,{onClick:function(){i.list.length<5&&a({list:[].concat(Object(r.a)(i.list),[e])})},disabled:i.list.includes(e)||i.list.length>=5,variant:"secondary",size:"sm",name:"nominate",value:e,children:"Nominate"})}),Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(O.a,{src:e.Poster,style:{height:"40px",width:"27px"},rounded:!0})}),Object(c.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})}),Object(c.jsx)(d.a.Footer,{children:Object(c.jsx)(b.a,{className:"justify-content-center",children:Object(c.jsx)(o.a,{children:P})})})]})}function f(e){var t=e.nominated,n=e.setNominated;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Nominations"})}),Object(c.jsx)(d.a.Body,{style:{minHeight:"0",padding:"0"},children:Object(c.jsx)(h.a,{variant:"flush",children:t.list.map((function(e){return Object(c.jsx)(h.a.Item,{children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(l.a,{onClick:function(){return n({list:t.list.filter((function(t){return t!==e}))})},variant:"secondary",size:"sm",name:"remove",value:e.imdbID,children:"Remove"})}),Object(c.jsxs)(u.a,{children:[Object(c.jsx)(O.a,{src:e.Poster,style:{height:"40px",paddingRight:"10px"},rounded:!0}),e.Title," (",e.Year,")"]})]})},e.imdbID)}))})})]})})}var g=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(1),r=Object(j.a)(i,2),l=r[0],o=r[1],h=JSON.parse(localStorage.getItem("nominated")),O=Object(s.useState)(h||{list:[]}),g=Object(j.a)(O,2),v=g[0],y=g[1];return Object(s.useEffect)((function(){localStorage.setItem("nominated",JSON.stringify(v))}),[v]),document.body.style="background: #E9E9EC;",Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(b.a,{children:Object(c.jsxs)(u.a,{className:"py-3",children:[Object(c.jsx)("h2",{children:"The Shoppies"}),Object(c.jsx)(m,{setTitle:a,setPage:o})]})}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(d.a,{className:"w-100",children:Object(c.jsx)(p,{title:n,page:l,setPage:o,setNominated:y,nominated:v})})}),Object(c.jsx)("div",{className:"d-md-none w-100"}),Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(f,{nominated:v,setNominated:y})})]})]})})};n(26);i.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d116da70.chunk.js.map