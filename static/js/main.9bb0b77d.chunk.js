(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(28),r=n(12),a=(n(37),n(38),n(4)),s=n(26),i=n(7),j=n(5),l=n(0),o=n(3),b=n(17),h=n.n(b);function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(39);var u=n(2),p=function(){return Object(u.jsx)("h1",{className:"title",children:"Home Page"})},x=(n(41),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.person;return Object(u.jsx)(r.b,{to:"#/people/".concat(t.slug),className:h()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.people,n=e.personSlug,c=function(e){return e.slug===n};return Object(u.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Sex"}),Object(u.jsx)("th",{children:"Born"}),Object(u.jsx)("th",{children:"Died"}),Object(u.jsx)("th",{children:"Mother"}),Object(u.jsx)("th",{children:"Father"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"person",className:c(e)?"has-background-warning":"",children:[Object(u.jsx)("td",{children:Object(u.jsx)(O,{person:e})}),Object(u.jsx)("td",{children:e.sex}),Object(u.jsx)("td",{children:e.born}),Object(u.jsx)("td",{children:e.died}),Object(u.jsx)("td",{children:e.mother?Object(u.jsx)(O,{person:e.mother}):e.motherName||"-"}),Object(u.jsx)("td",{children:e.father?Object(u.jsx)(O,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},f=function(e){var t=e.people,n=Object(o.p)().personSlug,c=void 0===n?"":n;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title",children:"People Page"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("div",{className:"box table-container",children:[0===t.length&&Object(u.jsx)(x,{}),!t&&Object(u.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(u.jsx)(m,{people:t,personSlug:c})]})})]})},v=function(){return Object(u.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){var e=Object(l.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],b=function(){var e=Object(i.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,n=t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){b()}),[]),Object(u.jsxs)("div",{"data-cy":"app",children:[Object(u.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"navbar-brand",children:[Object(u.jsx)(r.c,{className:function(e){var t=e.isActive;return h()("navbar-item ",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(u.jsx)(r.c,{className:function(e){var t=e.isActive;return h()("navbar-item ",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",element:Object(u.jsx)(p,{})}),Object(u.jsx)(o.b,{path:"home",element:Object(u.jsx)(o.a,{to:"/",replace:!0})}),Object(u.jsxs)(o.b,{path:"/people",children:[Object(u.jsx)(o.b,{index:!0,element:Object(u.jsx)(f,{people:n})}),Object(u.jsx)(o.b,{path:":personSlug",element:Object(u.jsx)(f,{people:n})})]}),Object(u.jsx)(o.b,{path:"*",element:Object(u.jsx)(v,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(u.jsx)(r.a,{children:Object(u.jsx)(g,{})}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9bb0b77d.chunk.js.map