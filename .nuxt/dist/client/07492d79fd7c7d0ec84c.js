(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1091:function(t,e,r){"use strict";var l={props:{icon:String,title:String,subTitle:String,color:String}},n=r(13),c=r(25),o=r.n(c),v=r(282),d=r(1046),_=r(265),f=r(284),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-text",{staticClass:"pa-0"},[r("v-container",{staticClass:"pa-0"},[r("div",{staticClass:"layout row ma-0"},[r("div",{staticClass:"sm6 xs6 flex"},[r("div",{staticClass:"layout column ma-0 justify-center align-center"},[r("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),r("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text ",class:t.color},[r("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)},[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardText:d.b,VContainer:_.a,VIcon:f.a})},1126:function(t,e,r){"use strict";r(20);var l={props:{icon:String,title:String,subTitle:String,caption:String,value:Number,color:String}},n=r(13),c=r(25),o=r.n(c),v=r(282),d=r(1046),_=r(279),f=r(1035),m=r(284),h=r(213),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[r("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"icon"},[r("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.icon))])],1)])]),t._v(" "),r("v-card-text",[r("div",{staticClass:"justify-center row layout ma-0"},[r("v-progress-circular",{attrs:{size:150,width:15,rotate:-90,value:t.value,color:t.color}},[t._v("\n        "+t._s(t.value)+"\n      ")])],1)]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("div",{staticClass:"headline"},[t._v(t._s(t.subTitle))]),t._v(" "),r("div",{staticClass:"caption"},[t._v(t._s(t.caption))])])],1)},[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardActions:d.a,VCardText:d.b,VCardTitle:_.a,VDivider:f.a,VIcon:m.a,VProgressCircular:h.a})},1127:function(t,e,r){"use strict";r(20);var l={props:{icon:String,title:String,subTitle:String,value:Number,color:String},computed:{caption:function(){return this.value+"% "+this.subTitle}}},n=r(13),c=r(25),o=r.n(c),v=r(282),d=r(1046),_=r(279),f=r(284),m=r(281),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("div",{staticClass:"layout row ma-0 justify-space-between pb-1"},[r("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"icon"},[r("v-icon",{attrs:{mini:"",color:t.color}},[t._v(t._s(t.icon))])],1)])]),t._v(" "),r("v-card-text",{staticClass:"pt-2"},[r("h3",{staticClass:"headline"},[t._v(t._s(t.subTitle))]),t._v(" "),r("v-progress-linear",{attrs:{value:t.value,height:"5",color:t.color}}),t._v(" "),r("span",{staticClass:"caption"},[t._v(t._s(t.caption))])],1)],1)},[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardText:d.b,VCardTitle:_.a,VIcon:f.a,VProgressLinear:m.a})},1526:function(t,e,r){"use strict";r.r(e);var l=r(1091),n=r(1127),c={components:{CircleStatistic:r(1126).a,MiniStatistic:l.a,LinearStatistic:n.a},data:function(){return{trending:[{subheading:"Sales",headline:"2,55",caption:"increase",percent:15,icon:{label:"trending_up",color:"success"},linear:{value:15,color:"success"}},{subheading:"Revenue",headline:"6,553",caption:"increase",percent:10,icon:{label:"trending_down",color:"error"},linear:{value:15,color:"error"}},{subheading:"Orders",headline:"5,00",caption:"increase",percent:50,icon:{label:"arrow_upward",color:"info"},linear:{value:50,color:"info"}}],trending2:[{subheading:"Email",headline:"15+",caption:"email opens",percent:15,icon:{label:"email",color:"info"},linear:{value:15,color:"info"}},{subheading:"Tasks",headline:"90%",caption:"tasks completed.",percent:90,icon:{label:"list",color:"primary"},linear:{value:90,color:"success"}},{subheading:"Issues",headline:"100%",caption:"issues fixed.",percent:100,icon:{label:"bug_report",color:"primary"},linear:{value:100,color:"error"}}]}}},o=r(13),v=r(25),d=r.n(v),_=r(265),f=r(272),m=r(266),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-statistic"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Social")])]),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[r("mini-statistic",{attrs:{icon:"fa fa-facebook",title:"100+","sub-title":"Likes",color:"indigo"}})],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[r("mini-statistic",{attrs:{icon:"fa fa-google",title:"150+","sub-title":"Connections",color:"red"}})],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[r("mini-statistic",{attrs:{icon:"fa fa-twitter",title:"200+","sub-title":"Followers",color:"light-blue"}})],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[r("mini-statistic",{attrs:{icon:"fa fa-instagram",title:"50+","sub-title":"Shots",color:"purple"}})],1),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Linear Trending")])]),t._v(" "),t._l(t.trending,function(t,e){return r("v-flex",{key:"trending"+e,attrs:{lg4:"",sm12:""}},[r("linear-statistic",{attrs:{title:t.subheading,"sub-title":t.caption,icon:t.icon.label,color:t.icon.color,value:t.linear.value}})],1)}),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Circle Trending")])]),t._v(" "),t._l(t.trending2,function(t,e){return r("v-flex",{key:"c-trending"+e,attrs:{lg4:"",sm12:""}},[r("circle-statistic",{attrs:{title:t.subheading,"sub-title":t.headline,caption:t.caption,icon:t.icon.label,color:t.linear.color,value:t.linear.value}})],1)})],2)],1)],1)},[],!1,null,"75bf0298",null);e.default=component.exports;d()(component,{VContainer:_.a,VFlex:f.a,VLayout:m.a})}}]);