(this["webpackJsonpreact-it-kamasutra-1"]=this["webpackJsonpreact-it-kamasutra-1"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(134),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"0e4a0c37-3872-48f9-9ae4-37fa140cd311"}}),o={follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status/",{status:e}).then((function(e){return e.data}))}},c={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login")}}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(44),a=n(5),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__3rdJM",item:"Navbar_item__2SG2l",activeLink:"Navbar_activeLink__z8W4M"}},133:function(e,t,n){e.exports=n.p+"static/media/user.129ab51c.png"},135:function(e,t,n){e.exports=n.p+"static/media/96x96.3b544cc7.gif"},163:function(e,t,n){e.exports=n(289)},168:function(e,t,n){},169:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(65),u=n.n(o),c=(n(168),n(35)),i=n(36),s=n(38),l=n(37),f=(n(169),n(13)),m=n.n(f),d=n(14),p=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/news",activeClassName:m.a.activeLink},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")))},g=n(9),h=function(e){return a.a.createElement("div",null,"News")},b=function(e){return a.a.createElement("div",null,"Music")},E=function(e){return a.a.createElement("div",null,"Settings")},v=n(17),O=n(55),w=n(67),_=n.n(w),S=n(68),j=n(129),P=n(71),C=n.n(P),y=n(132),I=n.n(y),k=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/i),d=Object(r.useState)(1),p=Object(j.a)(d,2),g=p[0],h=p[1],b=(g-1)*i+1,E=g*i;return a.a.createElement("div",{className:C.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREVIOUS"),l.filter((function(e){return e>=b&&e<=E})).map((function(e){return a.a.createElement("span",{key:e,className:I()(Object(S.a)({},C.a.selectedPage,o===e),C.a.pageNumber),onClick:function(t){u(e)}},e)})),m>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},N=n(133),T=n.n(N),L=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:t.photos.small?t.photos.small:T.a,className:_.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"location.country"),a.a.createElement("div",null,"location.city"))))},U=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,u=e.users,c=Object(O.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return a.a.createElement("div",{className:_.a.user},a.a.createElement(k,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:o}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(L,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow,key:e.id})}))))},x=n(10),A=n.n(x),F=n(22),z=n(44),G=n(5),R=n(12),M=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(G.a)(Object(G.a)({},e),r):e}))},D={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:"FOLLOW",userId:e}},H=function(e){return{type:"UNFOLLOW",userId:e}},Y=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},B=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},q=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(F.a)(A.a.mark((function e(t,n,r,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(G.a)(Object(G.a)({},e),{},{users:M(e.users,t.userId,"Id",{followed:!0})});case"UNFOLLOW":return Object(G.a)(Object(G.a)({},e),{},{users:M(e.users,t.userId,"Id",{followed:!1})});case"SET_USERS":return Object(G.a)(Object(G.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(G.a)(Object(G.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(G.a)(Object(G.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(G.a)(Object(G.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(G.a)(Object(G.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},J=n(40),K=n(8),Z=function(e){return e.usersPage.users},Q=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.totalUsersCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingInProgress},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(J.a,null):null,a.a.createElement(U,{follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),ae=Object(K.d)(Object(v.b)((function(e){return{users:Z(e),pageSize:Q(e),totalUsersCount:$(e),currentPage:ee(e),isFetching:te(e),followingInProgress:ne(e)}}),{follow:function(e){return function(t){V(t,e,R.c.follow.bind(R.c),W)}},unfollow:function(e){return function(t){V(t,e,R.c.unfollow.bind(R.c),H)}},setCurrentPage:Y,getUsers:function(e,t){return function(){var n=Object(F.a)(A.a.mark((function n(r){var a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),r(Y(e)),n.next=4,R.c.getUsers(e,t);case 4:a=n.sent,r(B(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",totalCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(re),oe=n(93),ue=n.n(oe),ce=function(e){return a.a.createElement("header",{className:ue.a.header},a.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRznz1PWxWmvGz-iYdgOaxtiLu2TFaMhqbQ5wqx7MEqwHO4CDeg&usqp=CAU"}),a.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(d.b,{to:"/login"},"Login")))},ie=n(33),se="samurai-network/auth/SET_USER_DATA",le={userId:null,email:null,login:null,isAuth:!1},fe=function(e,t,n,r){return{type:se,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(F.a)(A.a.mark((function e(t){var n,r,a,o,u;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,o=r.email,u=r.login,t(fe(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},pe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(ce,this.props)}}]),n}(a.a.Component),ge=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(F.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logout();case 2:0===e.sent.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(pe),he=n(128),be=n(32),Ee=n(56),ve=n(52),Oe=n.n(ve),we=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(be.c)("Login","email",[Ee.b],be.a),Object(be.c)("Password","password",[Ee.b],be.a,{type:"password"}),Object(be.c)(null,"rememberMe",null,be.a,{type:"checkbox"}," Remember me"),n&&a.a.createElement("div",{className:Oe.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),_e=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(F.a)(A.a.mark((function r(a){var o,u;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R.a.login(e,t,n);case 2:0===(o=r.sent).resultCode?a(me()):(u=o.messages.length>0?o.messages[0]:"Some error",a(Object(ie.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Se={initialized:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{initialized:!0});default:return e}},Pe={},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return e},ye=n(96),Ie=n(127),ke=n(137),Ne=n(130),Te=Object(K.c)({profilePage:ye.b,dialogsPage:Ie.b,sidebar:Ce,usersPage:X,auth:de,form:Ne.a,app:je}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,Ue=Object(K.e)(Te,Le(Object(K.a)(ke.a)));window._store_=Ue;var xe=Ue,Ae=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(J.a,null)},a.a.createElement(e,t))}},Fe=a.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),ze=a.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),Ge=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ge,null),a.a.createElement(p,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/dialogs",render:Ae(Fe)}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Ae(ze)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(_e,null)}}),a.a.createElement(g.b,{path:"/news",render:h}),a.a.createElement(g.b,{path:"/music",render:b}),a.a.createElement(g.b,{path:"/settings",render:E}))):a.a.createElement(J.a,null)}}]),n}(r.Component),Re=Object(K.d)(g.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ge),Me=function(e){return a.a.createElement(d.a,{basename:"/social_network"},a.a.createElement(v.a,{store:xe},a.a.createElement(Re,null)))};u.a.render(a.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(55),a=n(0),o=n.n(a),u=n(52),c=n.n(u),i=n(89),s=(n(56),function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=r&&n;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))}),l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),u)}},40:function(e,t,n){"use strict";var r=n(135),a=n.n(r),o=n(0),u=n.n(o);t.a=function(e){return u.a.createElement("div",null,u.a.createElement("img",{src:a.a}))}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2_Svi",error:"FormsControls_error__mVyHK",formSummaryError:"FormsControls_formSummaryError__1FvpC"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols!")}}},67:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3SWeD",user:"users_user__2FbvY"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__2zXmv",selectedPage:"Paginator_selectedPage__27vGn",pageNumber:"Paginator_pageNumber__2MFcx"}},93:function(e,t,n){e.exports={header:"Header_header__UzeGr",loginBlock:"Header_loginBlock__9jYvT"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p}));var r=n(10),a=n.n(r),o=n(22),u=n(44),c=n(5),i=n(12),s={posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"It's my first post.",likesCount:15},{id:3,message:"Yo.",likesCount:15},{id:4,message:"Yo.",likesCount:15}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0},r=Object(c.a)({},e);return r.posts=Object(u.a)(e.posts),r.posts.push(n),r;case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.0c026589.chunk.js.map