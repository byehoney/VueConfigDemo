webpackJsonp([2],{IRSO:function(t,e){},g2wA:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Gu7T"),o=s.n(a),i={name:"TabBar",props:{tabList:{type:Array}},data:function(){return{currentIndex:0}},mounted:function(){this.activeThis(0)},methods:{activeThis:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.$emit("back",t))}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"tabBar"},t._l(t.tabList,function(e,a){return s("li",{key:e.title,class:{active:t.currentIndex==a},on:{click:function(e){t.activeThis(a)}}},[s("div",{staticClass:"tabTitle"},[t._v(t._s(e.title))]),t._v(" "),t.currentIndex==a?s("span",{staticClass:"activeBar"}):t._e()])}))},staticRenderFns:[]};var l={name:"MessageCenter",components:{Tab:s("VU/8")(i,n,!1,function(t){s("IRSO")},"data-v-d9a65722",null).exports},data:function(){return{tabList:[{title:"我的消息"},{title:"平台公告"},{title:"项目公告"}],type:2,topStatus:"",bottomStatus:"",allLoaded:!1,page:1,rows:10,messageList:[],numLen:0}},mounted:function(){this.getList();var t=document.getElementById("listBox");t.style.height=document.documentElement.clientHeight-t.offsetTop+"px"},filters:{fmt:function(t){var e=new Date(t.replace(/-/g,"/")),s=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),i=e.getHours(),n=e.getMinutes(),l=e.getSeconds();return s+"年"+(a>10?a:"0"+a)+"月"+(o>10?o:"0"+o)+"日  "+(i>10?i:"0"+i)+":"+(n>10?n:"0"+n)+":"+(l>10?l:"0"+l)}},methods:{getType:function(t){this.type=0==t?2:1==t?1:3,this.page=1,this.allLoaded=!1,this.messageList=[],this.getList()},goDetailById:function(t,e){this.$router.push("/message/messageDetail?id="+t+"&type="+e)},loadBottom:function(){!1===this.allLoaded&&(this.page++,this.getList())},loadTop:function(){this.page=1,this.messageList=[],this.allLoaded=!1,this.getList()},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.bottomStatus=t},getList:function(){var t=this;this.$axios.post("/app/other/queryMessages.shtml",{page:this.page,rows:this.rows,type:this.type,token:this.$route.query.token}).then(function(e){t.messageList=[].concat(o()(t.messageList),o()(e.data.result)),t.numLen=e.data.result.length,1==t.page?t.$refs.loadmore.onTopLoaded():(t.$refs.loadmore.onBottomLoaded(),0==e.data.result.length&&(t.allLoaded=!0))})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("div",{staticClass:"barBox"},[s("Tab",{attrs:{tabList:t.tabList},on:{back:t.getType}})],1),t._v(" "),s("div",{staticClass:"loadModule",attrs:{id:"listBox"}},[s("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,autoFill:!1,topDistance:50,bottomDistance:50},on:{"bottom-status-change":t.handleBottomChange,"top-status-change":t.handleTopChange}},[s("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},["loading"==t.topStatus?s("div",{staticClass:"toptext"},[t._v("加载中...")]):t._e(),t._v(" "),"drop"==t.topStatus?s("div",{staticClass:"toptext"},[t._v("下拉刷新")]):t._e()]),t._v(" "),0==t.numLen&&1==t.page?s("div",{staticClass:"noData"},[t._v("暂无信息")]):s("ul",{staticClass:"messageItem"},t._l(t.messageList,function(e){return s("li",{key:e.id,class:{hasRead:1==e.isRead},on:{click:function(s){t.goDetailById(e.id,t.type)}}},[s("div",{staticClass:"messageTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"messageTime"},[t._v(t._s(t._f("fmt")(e.createTime)))])])})),t._v(" "),s("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},["loading"==t.bottomStatus?s("div",{staticClass:"toptext"},[t._v("加载中...")]):t._e(),t._v(" "),"drop"==t.bottomStatus?s("div",{staticClass:"toptext"},[t._v("上拉加载")]):t._e()]),t._v(" "),t.allLoaded?s("div",{class:["hasEnd",2==t.page?"sticker":""]},[t._v("--------没有更多了哦--------")]):t._e()])],1)])},staticRenderFns:[]};var r=s("VU/8")(l,d,!1,function(t){s("kZJ7")},"data-v-518df314",null);e.default=r.exports},kZJ7:function(t,e){}});