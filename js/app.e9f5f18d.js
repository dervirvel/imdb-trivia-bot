(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/imdb-trivia-bot/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},1:function(e,t){},"1e3e":function(e,t,r){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"mainContainer"},[r("div",{staticClass:"mainContent"},[e._m(0),r("chat")],1)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"logoWrapper"},[n("img",{staticClass:"logoImg",attrs:{src:r("7f78")}}),n("h1",[e._v("-Bot")])]),n("p",{staticClass:"description"},[e._v("IMDB-BOT is a simple project which fetches trivia about actors and movies.")])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chatContainer"},[r("div",{staticClass:"chatContent"},[r("transition-group",{staticClass:"flexContainer",attrs:{name:"fadein",tag:"p"}},e._l(e.messages,(function(t,n){return r("div",{key:t.text+n,staticClass:"row",class:{question:!t.isAnswer,answer:t.isAnswer}},[e._v(e._s(t.text))])})),0)],1),r("div",{staticClass:"chatActions"},[r("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"insert actor name here"},domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addMessage(e.message)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),r("md-button",{staticClass:"md-fab md-primary",on:{click:function(t){return e.addMessage(e.message)}}},[r("md-icon",[e._v("send")])],1)],1)])},o=[],c=(r("7db0"),r("caad"),r("ac1f"),r("5319"),r("1276"),r("498a"),r("96cf"),r("1da1")),u={name:"Chat",data:function(){return{lastMessage:"",message:"",messages:[],answer:"",scrapeType:"",id:"",corsUrl:"https://cors-anywhere.herokuapp.com/",cheerio:r("e363"),triviaList:[],pHolder:[]}},directives:{focus:{inserted:function(e){e.focus}}},created:function(){this.addMessage("About which actor/actress or movie would you like to get trivia? 👏",!0)},methods:{addMessage:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n,s,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=a.length>1&&void 0!==a[1]&&a[1],t){e.next=3;break}return e.abrupt("return");case 3:if(this.message.trim(),n={text:t,isAnswer:r},this.messages.push(n),this.lastMessage=this.message,this.message="",r){e.next=23;break}return e.prev=9,e.next=12,this.scrapeUrl();case 12:s=e.sent,console.log(s),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](9),console.error(e.t0),this.addMessage("⛔",!0),this.scrollToEnd();case 21:this.addMessage(s,!0),setTimeout(this.scrollToEnd,100);case 23:case"end":return e.stop()}}),e,this,[[9,16]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchUrl:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get(t,{headers:{"X-Requested-With":"XMLHttpRequest"}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0),console.error("ERROR: An error occurred while trying to fetch the url:"+t);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),scrapeUrl:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.corsUrl+"https://m.imdb.com/find?q="+this.lastMessage.replace(" ","+")+"&ref_=nv_sr_sm",e.next=3,this.fetchUrl(t);case 3:return r=e.sent,n=this.cheerio.load(r),this.scrapeType=n(".col-xs-12").find(".findSectionHeader").find("a").attr("name"),s=n(".col-md-6").find("a").attr("href"),this.id=s.split("/")[2],e.abrupt("return",this.scrapeId(this.id));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),scrapeId:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="nm"==this.scrapeType?this.corsUrl+"https://m.imdb.com/name/"+this.id+"/trivia?ref_=m_nm_dyk_trv":this.corsUrl+"https://m.imdb.com/title/"+this.id+"/trivia?ref_=fn_al_tt_0",e.next=3,this.fetchUrl(t);case 3:return r=e.sent,n=this.cheerio.load(r),n(".list").children().find("p").each((function(e,t){e%5!=0||["Edit","Report This"].includes(n(t).text())||s.triviaList.push(n(t).text())})),e.abrupt("return",this.triviaList.pop());case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),focusInput:function(){this.$refs.input.focus()},scrollToEnd:function(){var e=this.$el.querySelector(".chatContent");e.scrollTop=e.scrollHeight+50}},props:{msg:String}},l=u,p=(r("f196"),r("2877")),f=Object(p["a"])(l,i,o,!1,null,null,null),d=f.exports,h={name:"App",components:{Chat:d}},m=h,v=(r("034f"),Object(p["a"])(m,s,a,!1,null,null,null)),g=v.exports,b=r("bc3a"),y=r.n(b),w=r("a7fe"),x=r.n(w),_=r("e363"),k=r.n(_),C=r("0036"),O=r.n(C);r("c02c"),r("4d00");n["a"].use(O.a),n["a"].use(x.a,y.a),n["a"].use(k.a),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"7f78":function(e,t,r){e.exports=r.p+"img/imdb.0163dbec.png"},"85ec":function(e,t,r){},f196:function(e,t,r){"use strict";var n=r("1e3e"),s=r.n(n);s.a}});
//# sourceMappingURL=app.e9f5f18d.js.map