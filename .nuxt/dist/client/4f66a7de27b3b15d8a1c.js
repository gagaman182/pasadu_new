(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1054:function(t,e,n){"use strict";var o={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},c=n(13),l=n(25),r=n.n(l),d=n(282),f=n(1046),v=n(1035),x=n(1044),m=n(285),h=n(1045),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;r()(component,{VCard:d.a,VCardText:f.b,VDivider:v.a,VSpacer:x.a,VToolbar:m.a,VToolbarTitle:h.b})},1177:function(t,e,n){var content=n(1445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6f65e45e",content,!0,{sourceMap:!1})},1444:function(t,e,n){"use strict";var o=n(1177);n.n(o).a},1445:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".demo-icons-list[data-v-3795f30c]{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0;font-size:32px}.demo-icons-list li[data-v-3795f30c]{display:flex;align-items:center;justify-content:center;margin-right:20px;margin-bottom:20px;width:72px;height:72px;text-align:center;cursor:pointer;transition:.1s}.demo-icons-list li .material-icons[data-v-3795f30c]{font-size:inherit}.demo-icons-list li [data-i8-icon][data-v-3795f30c]{margin:0 10px}.demo-icons-list li [data-provide~=emoji] svg[data-v-3795f30c]{width:32px;height:32px}.demo-icons-list li[data-v-3795f30c]:hover{background-color:#f7fafc}.demo-icons-list.icons-size-16px[data-v-3795f30c]{font-size:16px}.demo-icons-list.icons-size-16px li[data-v-3795f30c]{width:56px;height:56px}.demo-icons-list.icons-size-24px[data-v-3795f30c]{font-size:24px}.demo-icons-list.icons-size-24px li[data-v-3795f30c]{width:64px;height:64px}.demo-icons-list.icons-size-32px[data-v-3795f30c]{font-size:32px}.demo-icons-list.icons-size-32px li[data-v-3795f30c]{width:72px;height:72px}.demo-icons-list.icons-size-48px[data-v-3795f30c]{font-size:48px}.demo-icons-list.icons-size-48px li[data-v-3795f30c]{width:88px;height:88px}.demo-icons-list.icons-size-64px[data-v-3795f30c]{font-size:64px}.demo-icons-list.icons-size-64px li[data-v-3795f30c]{width:104px;height:104px}.demo-icons-list.icons-size-80px[data-v-3795f30c]{font-size:80px}.demo-icons-list.icons-size-80px li[data-v-3795f30c]{width:120px;height:120px}.demo-icons-list.icons-size-96px[data-v-3795f30c]{font-size:96px}.demo-icons-list.icons-size-96px li[data-v-3795f30c]{width:136px;height:136px}",""])},1508:function(t,e,n){"use strict";n.r(e);var o={components:{VWidget:n(1054).a},data:function(){return{selectedTab:null,tabs:null,material:null,ft:null}},computed:{},created:function(){var t=this;fetch("/data/material.json").then(function(t){return t.json()}).then(function(e){t.material=e.icons.splice(0,100)}),fetch("/data/font-awesome.json").then(function(t){return t.json()}).then(function(e){t.ft=e["4.7.0"].splice(0,100)})},methods:{}},c=(n(1444),n(13)),l=n(25),r=n.n(l),d=n(283),f=n(282),v=n(1046),x=n(265),m=n(272),h=n(266),w=n(1288),_=n(1470),z=n(1469),V=n(1145),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-icons"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{12:""}},[n("v-tabs",{attrs:{color:"grey lighten-3"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("v-tab",{attrs:{ripple:"",href:"#tab-1"}},[t._v("\n            Matrial Icons\n          ")]),t._v(" "),n("v-tab",{attrs:{ripple:"",href:"#tab-2"}},[t._v("\n            Font Awesome\n          ")]),t._v(" "),n("v-tabs-items",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("v-tab-item",{attrs:{id:"tab-1"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ul",{staticClass:"demo-icons-list"},t._l(t.material,function(e,o){return n("li",{key:o},[n("i",{staticClass:"icon material-icons"},[t._v(" "+t._s(e.ligature))])])}),0),t._v(" "),n("div",{staticClass:"text-sm-center"},[n("v-btn",{attrs:{href:"https://material.io/icons/",color:"primary",large:"",depressed:""}},[t._v("More")])],1)])],1)],1),t._v(" "),n("v-tab-item",{attrs:{id:"tab-2"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ul",{staticClass:"demo-icons-list"},t._l(t.ft,function(t,e){return n("li",{key:e},[n("i",{staticClass:"fa",class:t})])}),0),t._v(" "),n("div",{staticClass:"text-sm-center"},[n("v-btn",{attrs:{href:"https://fontawesome.com/icons?d=gallery",color:"primary",large:"",depressed:""}},[t._v("More")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,"3795f30c",null);e.default=component.exports;r()(component,{VBtn:d.a,VCard:f.a,VCardText:v.b,VContainer:x.a,VFlex:m.a,VLayout:h.a,VTab:w.a,VTabItem:_.a,VTabs:z.a,VTabsItems:V.a})}}]);