(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{42:function(e,a,r){},43:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(19),s=r.n(c),n=r(6),i=Object(t.createContext)(),l=r(4),o="[auth] login",d="[auth] logout",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},j=r(10),b=r(2),m=r(26),u=r(22),p=r.n(u),O=r(23),x=r.n(O),v=r(1),g=function(e){var a=e.history,r=x()(p.a),c=localStorage.getItem("lastPath"),s=Object(t.useContext)(i).dispatch,n=Object(m.a)(),d=n.register,h=n.handleSubmit;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"sidenav animate__animated animate__fadeInLeft",children:[Object(v.jsx)("div",{className:"bg"}),Object(v.jsxs)("div",{className:"login-main-text",children:[Object(v.jsx)("h2",{children:" Heroes App "}),Object(v.jsx)("p",{children:"Introduce your credentials."})]})]}),Object(v.jsx)("div",{className:"main animate__animated animate__fadeInRight",children:Object(v.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(v.jsx)("div",{className:"login-form",children:Object(v.jsxs)("form",{onSubmit:h((function(e){"test"!==e.username||"test"!==e.password?r.fire({title:"Error!",text:'Incorrect credentials. Type "test"/"test" for this demo =)',icon:"error",confirmButtonText:"Ok!"}):(s({type:o,payload:{name:e.username}}),a.replace(c||"/"))})),children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"User Name"}),Object(v.jsx)("input",Object(l.a)(Object(l.a)({type:"text"},d("username")),{},{className:"form-control",placeholder:"User Name"}))]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",Object(l.a)(Object(l.a)({type:"password"},d("password")),{},{className:"form-control",placeholder:"Password"}))]}),Object(v.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Login"})]})})})})]})},f=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(b.g)();return Object(v.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(v.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Brands"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("div",{className:"navbar-nav",children:[Object(v.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(v.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(v.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(v.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(v.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(v.jsxs)("span",{className:"nav-item nav-link text-info mr-5",children:["Bienvenid@ ",a]}),Object(v.jsx)("button",{className:"btn nav-item nav-link",onClick:function(){r({type:d}),c.replace("/login")},children:"Logout"})]})})]})},N=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],C=function(e){var a=e.props;return Object(v.jsx)("div",{className:"card ms-3 animate__animated animate__fadeIn text-white bg-dark",style:{maxWidth:540},children:Object(v.jsxs)("div",{className:"row no-gutters",children:[Object(v.jsx)("div",{className:"col-md-4",children:Object(v.jsx)("img",{src:"./assets/heroes/".concat(a.id,".jpg"),className:"card-img",alt:a.superhero})}),Object(v.jsx)("div",{className:"col-md-8",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{className:"card-title",children:a.superhero}),Object(v.jsx)("p",{className:"card-text",children:a.alter_ego}),a.alter_ego!==a.characters&&Object(v.jsxs)("p",{className:"card-text",children:[" ",a.characters," "]}),Object(v.jsx)("p",{className:"card-text",children:Object(v.jsxs)("small",{className:"text-muted",children:[" ",a.first_appearance]})}),Object(v.jsx)(j.b,{to:"./hero/".concat(a.id),className:"btn btn-info",children:"More . . ."})]})})]})})},_=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return N.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(v.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(v.jsx)(C,{props:e},e.id)}))})},y=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Marvel Screen"}),Object(v.jsx)("hr",{}),Object(v.jsx)(_,{publisher:"Marvel Comics"})]})},k=function(e){var a=e.history,r=Object(b.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,N.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(v.jsx)(b.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(v.jsxs)("div",{className:"row mt-2 ml-2 mb-3",children:[Object(v.jsx)("div",{className:"col-4",children:Object(v.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(v.jsxs)("div",{className:"col-7 ml-3 text-white bg-dark",children:[Object(v.jsx)("h3",{className:"mt-5",children:s}),Object(v.jsxs)("ul",{className:"list-group list-group-flush text-white bg-dark rounded-lg",children:[Object(v.jsxs)("li",{className:"list-group-item text-white bg-dark",children:[Object(v.jsx)("b",{children:"Alter ego: "}),i]}),Object(v.jsxs)("li",{className:"list-group-item text-white bg-dark",children:[Object(v.jsx)("b",{children:"Publisher: "}),n]}),Object(v.jsxs)("li",{className:"list-group-item text-white bg-dark",children:[Object(v.jsx)("b",{children:"First Appereance: "}),l]}),Object(v.jsxs)("li",{className:"list-group-item text-white bg-dark",children:[Object(v.jsx)("b",{children:"Alter ego: "}),i]})]}),Object(v.jsx)("h5",{className:"mt-2",children:" Characters "}),Object(v.jsx)("p",{children:o}),Object(v.jsx)("button",{className:"btn btn-outline-info mb-3",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},w=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"DC Screen"}),Object(v.jsx)("hr",{}),Object(v.jsx)(_,{publisher:"DC Comics"})]})},S=r(25),M=r.n(S),D=r(11),A=function(e){var a=e.history,r=Object(b.h)(),c=M.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(D.a)({},a.name,a.value)))},function(){s(e)}]}({searchWord:s}),o=Object(n.a)(i,2),d=o[0],h=o[1],j=d.searchWord,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:N.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))}(s)}),[s]);return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-5",children:[Object(v.jsx)("h4",{children:"Search"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",name:"searchWord",autoComplete:"off",placeholder:"Find your hero",onChange:h,className:"form-control",value:j})}),Object(v.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search..."})]})]}),Object(v.jsxs)("div",{className:"col-7",children:[Object(v.jsx)("h4",{children:"Results"}),Object(v.jsx)("hr",{}),""===s&&Object(v.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(v.jsxs)("div",{className:"alert alert-info",children:["No results found with ",s]}),m.map((function(e){return Object(v.jsx)(C,{props:e},e.id)}))]})]})})},B=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f,{}),Object(v.jsx)("div",{className:"container mt-2",children:Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{exact:!0,path:"/marvel",component:y}),Object(v.jsx)(b.b,{exact:!0,path:"/hero/:heroeId",component:k}),Object(v.jsx)(b.b,{exact:!0,path:"/dc",component:w}),Object(v.jsx)(b.b,{exact:!0,path:"/search",component:A}),Object(v.jsx)(b.a,{to:"/marvel"})]})})]})},I=r(17),J=function(e){var a=e.isAuthenticated,r=e.component,t=Object(I.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(v.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(v.jsx)(r,Object(l.a)({},e)):Object(v.jsx)(b.a,{to:"/login"})}}))},T=function(e){var a=e.isAuthenticated,r=e.component,t=Object(I.a)(e,["isAuthenticated","component"]);return Object(v.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(v.jsx)(b.a,{to:"/"}):Object(v.jsx)(r,Object(l.a)({},e))}}))},F=function(){var e=Object(t.useContext)(i).user;return Object(v.jsx)(j.a,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(b.d,{children:[Object(v.jsx)(T,{exact:!0,path:"/login",isAuthenticated:e.logged,component:g}),Object(v.jsx)(J,{path:"/",isAuthenticated:e.logged,component:B})]})})})},P=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},R=function(){var e=Object(t.useReducer)(h,{},P),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(v.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(v.jsx)(F,{})})};r(42);s.a.render(Object(v.jsx)(R,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c413e968.chunk.js.map