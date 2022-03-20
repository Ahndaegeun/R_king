(function(e){function t(t){for(var o,c,a=t[0],i=t[1],l=t[2],m=0,f=[];m<a.length;m++)c=a[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},u=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"219c":function(e,t,n){"use strict";n("77cb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("cf05"),u=n.n(r),c=Object(o["f"])("img",{alt:"Vue logo",src:u.a},null,-1),a=Object(o["g"])("home"),i=Object(o["g"])("login"),l=Object(o["g"])("sign"),s=Object(o["g"])("admin");function m(e,t,n,r,u,m){var f=Object(o["u"])("router-view"),b=Object(o["u"])("router-link");return Object(o["q"])(),Object(o["e"])(o["a"],null,[c,Object(o["h"])(f),Object(o["f"])("ul",null,[Object(o["f"])("li",null,[Object(o["h"])(b,{to:"/"},{default:Object(o["z"])((function(){return[a]})),_:1})]),Object(o["f"])("li",null,[this.$store.state.userInfo.isLogin?(Object(o["q"])(),Object(o["e"])("button",{key:1,onClick:t[0]||(t[0]=function(){return m.logout&&m.logout.apply(m,arguments)})},"logout")):(Object(o["q"])(),Object(o["d"])(b,{key:0,to:"/login"},{default:Object(o["z"])((function(){return[i]})),_:1}))]),Object(o["f"])("li",null,[Object(o["h"])(b,{to:"/sign"},{default:Object(o["z"])((function(){return[l]})),_:1})]),Object(o["f"])("li",null,[Object(o["h"])(b,{to:"/admin"},{default:Object(o["z"])((function(){return[s]})),_:1})])])],64)}var f=n("5530"),b=n("bc3a"),p=n.n(b),d=n("5502"),O={name:"App",created:function(){var e=this;if(localStorage.getItem("vuex")){var t=new FormData,n=JSON.parse(localStorage.getItem("vuex")).userInfo.userToken;t.append("token",n),p.a.post("/valid/token",t).then((function(t){console.log(t),t.data.isLogin&&e.setIsLogin(!0)}))}},methods:Object(f["a"])(Object(f["a"])({},Object(d["b"])({setIsLogin:"userInfo/setIsLogin",userLogout:"userInfo/logout"})),{},{logout:function(){this.userLogout()}})},g=(n("219c"),n("6b0d")),j=n.n(g);const h=j()(O,[["render",m]]);var v=h,w=n("0e44"),y=n("1da1"),I=(n("96cf"),n("d3b7"),{namespaced:!0,state:{userToken:"",isLogin:!1},mutations:{setUserToken:function(e,t){e.userToken=t},setIsLogin:function(e,t){e.isLogin=t},logout:function(e){e.userToken="",e.isLogin=!1}},actions:{tokenValidate:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state.userToken,o=new FormData,o.append("token",n),r=!1,t.next=6,p.a.post("/user/token",o).then((function(t){e.commit("setUserToken",t.data.token),r=!0})).catch((function(){alert("인증되지 않은 사용자입니다.")}));case 6:return t.abrupt("return",new Promise((function(e,t){r?e():t()})));case 7:case"end":return t.stop()}}),t)})))()}}}),k=I,x=Object(d["a"])({namespace:!0,modules:{userInfo:k},plugins:[Object(w["a"])({paths:["userInfo"]})]}),L=x,P=n("6c02"),A={class:"hello"},S=Object(o["f"])("h1",null,"Login",-1),T=Object(o["g"])(" ID: "),U=Object(o["g"])(" PW: ");function V(e,t,n,r,u,c){return Object(o["q"])(),Object(o["e"])("div",A,[S,Object(o["f"])("div",null,[Object(o["f"])("label",null,[T,Object(o["A"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return u.userId=e})},null,512),[[o["x"],u.userId]])]),Object(o["f"])("label",null,[U,Object(o["A"])(Object(o["f"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.userPw=e})},null,512),[[o["x"],u.userPw]])]),Object(o["f"])("button",{type:"button",onClick:t[2]||(t[2]=function(){return c.onLogin&&c.onLogin.apply(c,arguments)})},"Login")])])}var _={name:"Login",data:function(){return{userId:"",userPw:""}},methods:Object(f["a"])(Object(f["a"])({},Object(d["b"])({setUserToken:"userInfo/setUserToken",setIsLogin:"userInfo/setIsLogin"})),{},{onLogin:function(){var e=this,t=new FormData;t.append("userId",this.userId),t.append("userPw",this.userPw),p.a.post("/member/login",t).then((function(t){var n=t.data.token;e.setUserToken(n),e.setIsLogin(!0)}))}})};const q=j()(_,[["render",V]]);var E=q;function N(e,t,n,r,u,c){return Object(o["q"])(),Object(o["e"])("div",null,"home")}var D={name:"Home"};const M=j()(D,[["render",N]]);var z=M,F=Object(o["g"])(" id: "),C=Object(o["f"])("br",null,null,-1),J=Object(o["g"])(" pw: "),H=Object(o["f"])("br",null,null,-1),R=Object(o["g"])(" name: "),$=Object(o["f"])("br",null,null,-1),W=Object(o["g"])(" email: "),B=Object(o["f"])("br",null,null,-1),G=Object(o["g"])(" age: "),K=Object(o["f"])("br",null,null,-1);function Q(e,t,n,r,u,c){return Object(o["q"])(),Object(o["e"])("div",null,[F,Object(o["A"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return u.memId=e})},null,512),[[o["x"],u.memId]]),C,J,Object(o["A"])(Object(o["f"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.memPw=e})},null,512),[[o["x"],u.memPw]]),H,R,Object(o["A"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.memNm=e})},null,512),[[o["x"],u.memNm]]),$,W,Object(o["A"])(Object(o["f"])("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return u.memEmail=e})},null,512),[[o["x"],u.memEmail]]),B,G,Object(o["A"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.memAge=e})},null,512),[[o["x"],u.memAge]]),K,Object(o["f"])("button",{onClick:t[5]||(t[5]=function(){return c.onSign&&c.onSign.apply(c,arguments)})},"sign")])}var X={name:"Sign",data:function(){return{memId:"",memPw:"",memNm:"",memEmail:"",memAge:""}},methods:{onSign:function(){var e=this,t=new FormData;t.append("memId",this.memId),t.append("memPw",this.memPw),t.append("memNm",this.memNm),t.append("memEmail",this.memEmail),t.append("age",this.memAge),p.a.post("/member/sign",t).then((function(t){console.log(t),e.$router.push({path:"/login"})}))}}};const Y=j()(X,[["render",Q]]);var Z=Y;function ee(e,t,n,r,u,c){return Object(o["q"])(),Object(o["e"])("h1",null,"Admin Page")}var te={name:"Admin"};const ne=j()(te,[["render",ee]]);var oe=ne,re=[{path:"/",name:"Home",component:z},{path:"/login",name:"Login",component:E},{path:"/sign",name:"Sign",component:Z},{path:"/admin",name:"Admin",component:oe,beforeEnter:function(e,t,n){L.dispatch("userInfo/tokenValidate",localStorage.getItem("")).then((function(){n()})).catch((function(){n("/")}))}},{path:"/:PathMatch(.*)*",redirect:"/"}],ue=Object(P["a"])({history:Object(P["b"])("/"),routes:re}),ce=ue,ae=Object(o["c"])(v);ae.use(ce).use(L).mount("#app")},"77cb":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0e4ba643.js.map