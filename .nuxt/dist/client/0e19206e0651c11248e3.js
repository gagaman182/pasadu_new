(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1075:function(t,e,r){var content=r(1076);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("1dd68dec",content,!0,{sourceMap:!1})},1076:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}",""])},1083:function(t,e,r){"use strict";r(209),r(1084);var o=r(1086),n=r.n(o);e.a={mixins:[n.a],props:{text:String,small:Boolean,large:Boolean,medium:Boolean,dot:Boolean,pill:Boolean,ring:Boolean},computed:{classes:function(){var t={"circle-sm":this.small,"circle-lg":this.medium,"circle-xl":this.large,"circle-ring":this.ring,"circle-dot":this.dot,"circle-pill":this.pill,"theme--light":this.light,"theme--dark":this.dark};return t}},render:function(t){return t("span",{staticClass:"circle",class:this.classes,attrs:{tabindex:this.disabled?-1:0},on:this.$listeners},[this.$slots.default])}}},1084:function(t,e,r){var content=r(1085);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("7810e80c",content,!0,{sourceMap:!1})},1085:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,'.circle{border-radius:3px;padding:.25em .4em;font-weight:400;line-height:1.3;font-size:85%}.circle:empty{display:inline-block;vertical-align:inherit}.circle-pill{color:#fff;padding-right:.6em;padding-left:.6em;border-radius:10rem}.circle-sm{line-height:1.2;padding-top:1px;padding-bottom:2px;font-size:75%}.circle-lg{line-height:1.5;padding:5px 7px;font-size:95%}.circle-xl{line-height:1.7;padding:7px 9px;font-size:100%}.circle-dot{width:8px;height:8px;padding:0;border-radius:100%;vertical-align:middle}.circle-dot.circle-sm{width:6px;height:6px}.circle-dot.circle-lg{width:10px;height:10px}.circle-dot.circle-xl{width:12px;height:12px}.circle-ring{position:relative;width:10px;height:10px;padding:0;border-radius:100%;vertical-align:middle}.circle-ring:after{content:"";position:absolute;top:2px;left:2px;width:6px;height:6px;border-radius:50%;background-color:#fff;-webkit-transform:scale(1);transform:scale(1);transition:.3s}.circle-ring.circle-sm{width:8px;height:8px}.circle-ring.circle-sm:after{width:4px;height:4px}.circle-ring.circle-lg{width:12px;height:12px}.circle-ring.circle-lg:after{width:8px;height:8px}.circle-ring.circle-xl{width:14px;height:14px}.circle-ring.circle-xl:after{width:10px;height:10px}.circle-ring.fill:after{-webkit-transform:scale(0);transform:scale(0)}.circle-bold{text-transform:uppercase;font-weight:500;letter-spacing:1px}',""])},1086:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],r=!0,o=!1,n=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done)&&(e.push(l.value),!i||e.length!==i);r=!0);}catch(t){o=!0,n=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},c=r(4),h=(o=c)&&o.__esModule?o:{default:o};function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}e.default=h.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(t)?data.style=l({},data.style,{"background-color":""+t,"border-color":""+t}):t&&(data.class=l({},data.class,d({},t,!0))),data},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(v(t))data.style=l({},data.style,{color:""+t,"caret-color":""+t});else if(t){var e=t.toString().trim().split(" ",2),r=n(e,2),o=r[0],c=r[1];data.class=l({},data.class,d({},o+"--text",!0)),c&&(data.class["text--"+c]=!0)}return data}}})},1121:function(t,e,r){"use strict";r(12);var o=r(165),n=r(74),l=r(160),c={components:{VuePerfectScrollbar:r.n(l).a},props:{uuid:{type:String,default:""},height:{type:String,default:null}},computed:{chat:function(){var t=Object(o.c)(this.$route.params.uuid);return Object.assign({title:"Chat",users:[],messages:[]},t)},computeHeight:function(){return{height:this.height||""}}},methods:{getAvatar:function(t){return Object(n.c)(t).avatar}}},h=r(13),d=r(25),v=r.n(d),f=r(268),m=r(283),x=r(282),_=r(1046),y=r(284),w=r(1044),C=r(1053),T=r(285),V=r(1045),S=r(1130),component=Object(h.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"chat-room"},[r("v-toolbar",{staticClass:"white chat-room--toolbar",attrs:{card:"",dense:"",flat:"",light:""}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"text--secondary"}},[t._v("keyboard_arrow_left")])],1),t._v(" "),t.chat.users?t._l(t.chat.users,function(e,o){return r("v-avatar",{key:o,staticClass:"avatar-stack",attrs:{size:"32"}},[r("img",{attrs:{src:t.getAvatar(e),alt:""}})])}):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-title",[r("h4",[t._v("Chat Channel")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""}},[r("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[r("v-icon",{attrs:{color:"text--secondary"}},[t._v("add")])],1),t._v(" "),r("span",[t._v("Add user")])],1)],2),t._v(" "),r("vue-perfect-scrollbar",{staticClass:"chat-room--scrollbar grey lighten-5",style:t.computeHeight},[r("v-card-text",{staticClass:"chat-room--list pa-3"},[t._l(t.chat.messages,function(e,o){return[r("div",{key:o,staticClass:"messaging-item layout row my-4",class:[o%2==0?"reverse":""]},[r("v-avatar",{staticClass:"indigo mx-1",attrs:{size:"40"}},[r("img",{attrs:{src:e.user.avatar,alt:""}})]),t._v(" "),r("div",{staticClass:"messaging--body layout column mx-2"},[r("p",{staticClass:"pa-2",class:[o%2==0?"primary white--text":"white"],attrs:{value:!0}},[t._v("\n              "+t._s(e.text)+"\n            ")]),t._v(" "),r("div",{staticClass:"caption px-2 text--secondary"},[t._v(t._s(new Date(e.created_at).toLocaleString()))])]),t._v(" "),r("v-spacer")],1)]})],2)],1),t._v(" "),r("v-card-actions",[r("v-text-field",{attrs:{"full-width":"",flat:"",clearable:"",solo:"","append-icon":"send",label:"Type some message here"}},[r("v-icon",{attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("send")]),t._v(" "),r("v-icon",{staticClass:"mx-2",attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("photo")]),t._v(" "),r("v-icon",{attrs:{slot:"append-icon"},slot:"append-icon"},[t._v("face")])],1)],1)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VAvatar:f.a,VBtn:m.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VIcon:y.a,VSpacer:w.a,VTextField:C.a,VToolbar:T.a,VToolbarTitle:V.b,VTooltip:S.a})},1130:function(t,e,r){"use strict";r(20),r(1075);var o=r(17),n=r(299),l=r(112),c=r(162),h=r(300),d=r(41),v=r(3);function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={name:"v-tooltip",mixins:[o.a,n.a,l.a,c.a,h.a,d.a],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),o=this.isAttached?e.offsetLeft:e.left,n=0;return this.top||this.bottom||r?n=o+e.width/2-content.width/2:(this.left||this.right)&&(n=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=this.isAttached?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=r+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),this.calcYOverflow(o+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.c)(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},watch:{positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if(this.$scopedSlots.activator){var r=this.$scopedSlots.activator({on:e});return this.activatorNode=r,r}if(this.$slots.activator)return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,r=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},f(e,this.contentClass,!0),f(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[r]),this.genActivator()])}}},1478:function(t,e,r){"use strict";r.r(e);var o=r(165),n=r(74),l=r(1083),c=r(485),h=r(160),d={components:{VuePerfectScrollbar:r.n(h).a,VCircle:l.a},data:function(){return{chats:o.a}},methods:{chatRoute:function(t){return"/chat/messaging/"+t},firstLetter:function(title){return title.charAt(0)},formatChatTime:function(s){return new Date(s).toLocaleDateString()},computeTitle:function(t){var e=1===t.users.length?Object(n.c)(t.users[0]).username:"";return 1===t.users.length?e:t.title},randomAvatarColor:function(t){return 1===t.users.length?"":c.a.randomElement(["blue","indigo","success","error","pink"])},chatStatusColor:function(t){return c.a.randomElement(["blue","indigo","success","error","pink"])}}},v=r(13),f=r(25),m=r.n(f),x=r(1035),_=r(269),y=r(270),w=r(275),C=r(1039),T=r(286),V=r(1036),S=r(1053),A=r(285),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chat-history"},[r("v-toolbar",{staticClass:"chat-history-toolbar",attrs:{dense:""}},[r("v-text-field",{attrs:{flat:"",solo:"","full-width":"",clearable:"","prepend-icon":"search",label:"Search"}})],1),t._v(" "),r("vue-perfect-scrollbar",{staticClass:"chat-history--scrollbar"},[r("v-divider"),t._v(" "),r("v-list",{staticClass:"chat-history--list",attrs:{"two-line":""}},[r("v-subheader",[t._v("History")]),t._v(" "),t._l(t.chats,function(e,o){return[r("v-divider",{key:o}),t._v(" "),r("v-list-tile",{key:e.title+o,staticClass:"chat-list",attrs:{avatar:"",to:t.chatRoute(e.uuid)}},[r("v-list-tile-avatar",{attrs:{color:t.randomAvatarColor(e)}},[1===e.users.length?r("img",{attrs:{src:e.user.avatar}}):r("span",{staticClass:"white--text headline"},[t._v(t._s(t.firstLetter(e.title)))])]),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(" "+t._s(t.computeTitle(e)))]),t._v(" "),r("v-list-tile-sub-title",[t._v("Some Latest message")])],1),t._v(" "),r("v-list-tile-action",[r("v-list-tile-action-text",[t._v("\n              "+t._s(t.formatChatTime(e.created_at))+"\n            ")]),t._v(" "),r("v-circle",{attrs:{dot:"",small:"",color:t.chatStatusColor(e)}})],1)],1)]})],2)],1)],1)},[],!1,null,null,null),k=component.exports;m()(component,{VDivider:x.a,VList:_.a,VListTile:y.a,VListTileAction:w.a,VListTileActionText:C.a,VListTileAvatar:T.a,VListTileContent:C.b,VListTileSubTitle:C.c,VListTileTitle:C.d,VSubheader:V.a,VTextField:S.a,VToolbar:A.a});var L={components:{ChatHistory:k,ChatWindow:r(1121).a},data:function(){return{}},computed:{showSidebar:function(){return void 0===this.$route.params.uuid},showWindow:function(){return void 0!==this.$route.params.uuid}}},O=r(265),$=r(272),j=r(266),B=Object(v.a)(L,function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"fill-height pa-0 ma-0 messaging fluid",attrs:{id:"messaging"}},[this.$vuetify.breakpoint.smAndDown?[e("v-layout",{attrs:{column:""}},[this.showSidebar?e("v-flex",{staticClass:"white",attrs:{sm12:""}},[e("chat-history")],1):this._e(),this._v(" "),this.showWindow?e("v-flex",{attrs:{sm12:""}},[e("chat-window")],1):this._e()],1)]:[e("v-layout",{attrs:{row:""}},[e("v-flex",{staticClass:"white",attrs:{lg3:""}},[e("chat-history")],1),this._v(" "),e("v-flex",{attrs:{lg9:""}},[e("chat-window")],1)],1)]],2)},[],!1,null,null,null);e.default=B.exports;m()(B,{VContainer:O.a,VFlex:$.a,VLayout:j.a})}}]);