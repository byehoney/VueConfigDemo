webpackJsonp([12],{"5iwl":function(e,n){!function(e){var n=e.document,t=n.documentElement,a="orientationchange"in e?"orientationchange":"resize",o=function e(){var n=t.getBoundingClientRect().width;return t.style.fontSize=n/7.5+"px",e}();n.addEventListener&&(e.addEventListener(a,o,!1),n.addEventListener("DOMContentLoaded",o,!1))}(window)},"9sTJ":function(e,n){},MPzD:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i,r=t("VU/8")({name:"App"},o,!1,function(e){t("9sTJ")},null,null).exports,u=t("Gu7T"),l=t.n(u),c=t("/ocq"),s=[{path:"/message",name:"MessageIndex",component:function(){return t.e(10).then(t.bind(null,"7+/L"))},children:[{path:"/",name:"MessageCenter",component:function(){return t.e(2).then(t.bind(null,"g2wA"))},meta:{title:"消息中心"}},{path:"messageDetail",name:"messageDetail",component:function(){return t.e(4).then(t.bind(null,"6Udl"))},meta:{title:"消息详情"}}]}],d=[{path:"/",name:"HelloWorld",component:function(){return t.e(6).then(t.bind(null,"gORT"))},meta:{title:"启动页"}},{path:"/risk",name:"risk",component:function(){return t.e(0).then(t.bind(null,"bIgt"))},meta:{title:"出借人风险评测"}},{path:"/lockQuestion",name:"LockQuestionPage",component:function(){return t.e(3).then(t.bind(null,"foF6"))},meta:{title:"常见问题"}},{path:"/qianbao",component:function(){return t.e(7).then(t.bind(null,"EXZb"))},children:[{path:"/",component:function(){return t.e(8).then(t.bind(null,"U0lE"))},name:"QianbaoAll",meta:{title:"这个故事，涨知识"}},{path:"QianbaoDetail/:id",name:"QianbaoDetail",component:function(){return t.e(9).then(t.bind(null,"C7SQ"))}}]},{path:"/assetFundsIntro",name:"AssetFundsIntro",component:function(){return t.e(1).then(t.bind(null,"fGhv"))},meta:{title:"资产介绍"}}];(i=console).log.apply(i,l()(s));var p=[].concat(l()(s),l()(d),l()([]));a.default.use(c.a);var m=new c.a({mode:"history",routes:[].concat(l()(p),[{path:"*",name:"NotFound",component:function(){return t.e(5).then(t.bind(null,"YcJa"))},meta:{title:"聚有钱-页面丢失"}}])});m.beforeEach(function(e,n,t){e.meta.title?document.title=e.meta.title:document.title="聚有钱",t()});var f=m,h=t("mw3O"),b=t.n(h),g=t("mtWM"),w=t.n(g),v=(t("5iwl"),t("MPzD"),t("Au9i"));a.default.component(v.Loadmore.name,v.Loadmore),w.a.interceptors.response.use(function(e){return e.data}),w.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","Access-Control-Allow-Credentials":!0},w.a.defaults.transformRequest=[function(e){return b.a.stringify(e)}],w.a.defaults.baseURL="https://app.juyouqian.com/api",w.a.defaults.withCredentials=!0,a.default.prototype.$axios=w.a,a.default.config.productionTip=!1,new a.default({el:"#app",router:f,components:{App:r},template:"<App/>"})}},["NHnr"]);