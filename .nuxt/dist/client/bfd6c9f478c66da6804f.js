(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1054:function(t,e,l){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=l(13),c=l(25),o=l.n(c),v=l(282),d=l(1046),h=l(1035),_=l(1044),f=l(285),m=l(1045),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"v-widget"}},[l("v-card",[t.enableHeader?l("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[l("v-toolbar-title",[l("h4",[t._v(t._s(t.title))])]),t._v(" "),l("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?l("v-divider"):t._e(),t._v(" "),l("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardText:d.b,VDivider:h.a,VSpacer:_.a,VToolbar:f.a,VToolbarTitle:m.b})},1058:function(t,e,l){"use strict";l.d(e,"a",function(){return c});var n=l(1069),r=l(1070),c=function(){function t(){Object(n.a)(this,t)}return Object(r.a)(t,[{key:"getBaseUrl",value:function(){return"http://localhost/tee/pasaduweb/backend/"}}]),t}()},1069:function(t,e,l){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}l.d(e,"a",function(){return n})},1070:function(t,e,l){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function r(t,e,l){return e&&n(t.prototype,e),l&&n(t,l),t}l.d(e,"a",function(){return r})},1091:function(t,e,l){"use strict";var n={props:{icon:String,title:String,subTitle:String,color:String}},r=l(13),c=l(25),o=l.n(c),v=l(282),d=l(1046),h=l(265),_=l(284),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text ",class:t.color},[l("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),l("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)},[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardText:d.b,VContainer:h.a,VIcon:_.a})},1146:function(t,e,l){var content=l(1290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("51690fa2",content,!0,{sourceMap:!1})},1289:function(t,e,l){"use strict";var n=l(1146);l.n(n).a},1290:function(t,e,l){(t.exports=l(7)(!1)).push([t.i,".chart{width:100%;height:300px}.chart_line_landscape{width:100%;height:700px}",""])},1490:function(t,e,l){"use strict";l.r(e);l(159);var n=l(42),r=l(1091),c=l(1054),o=l(292),v=l.n(o),d=(l(92),l(1058)),h=l(1078),_=l.n(h),f=new d.a,m={layout:"dashboard",components:{VWidget:c.a,MiniStatistic:r.a},data:function(){return{user:"",chart_pie:[{name:"คอมพิวเตอร์",value:763},{name:"จอ",value:411},{name:"โน๊ตบุ๊ค",value:223},{name:"ออนอินวัน",value:46},{name:"ปริ้นเตอร์",value:1139},{name:"ปริ้นเตอร์เทอมอล",value:210},{name:"สแกนเนอร์",value:130},{name:"สำรองไฟ",value:720},{name:"อื่นๆ",value:857},{name:"เซิฟเวอร์",value:19}],chart_bar:[{name:"ประเภท",data:[{label:"คอมพิวเตอร์",value:763},{label:"จอ",value:411},{label:"โน๊ตบุ๊ค",value:223},{label:"ออนอินวัน",value:46},{label:"ปริ้นเตอร์",value:1139},{label:"ปริ้นเตอร์เทอมอล",value:210},{label:"สแกนเนอร์",value:130},{label:"สำรองไฟ",value:720},{label:"อื่นๆ",value:857},{label:"เซิฟเวอร์",value:19}]}],chart_line:[{name:"จำนวน",data:[{label:"1975",value:1},{label:"1993",value:1},{label:"1994",value:3},{label:"1995",value:9},{label:"1996",value:17},{label:"1997",value:31},{label:"1998",value:111},{label:"1999",value:40},{label:"2000",value:51},{label:"2001",value:153},{label:"2002",value:43},{label:"2003",value:17},{label:"2004",value:27},{label:"2005",value:30},{label:"2006",value:58},{label:"2007",value:45},{label:"2008",value:96},{label:"2009",value:213},{label:"2010",value:174},{label:"2011",value:220},{label:"2012",value:286},{label:"2013",value:264},{label:"2014",value:278},{label:"2015",value:430},{label:"2016",value:313},{label:"2017",value:54},{label:"2018",value:112},{label:"2019",value:145},{label:"2020",value:116}]}],chart_line_landscape:[{name:"จำนวน",data:[{label:"ตกลงราคา",value:3079},{label:"สอบราคา",value:445},{label:"บริจาค",value:365},{label:"เฉพาะเจาะจง",value:192},{label:"ได้มาพร้อมกับได้มาพร้อมกับเครื่องไมโครคอมพิวเตอร์",value:80},{label:"ได้มาพร้อมกับเครื่องคอมพิวเตอร์ราคารวมกับเครื่อง",value:60},{label:"ได้มาจากการสำรวจ ปี 61",value:58},{label:"ประกวดราคา",value:46},{label:"ได้มาจากการสำรวจปี 2562",value:23},{label:"ได้มาพร้อมอาคารรังสีรักษา (นาหม่อม)",value:16}]}],chart_line_landscape_money:[{name:"จำนวน",data:[{label:"เงินบำรุง",value:3002},{label:"เงินบริจาค",value:314},{label:"เงินประกันสังคม",value:254},{label:"เงินงบประมาณศูนย์แพทย์",value:193},{label:"ได้มาจากการสำรวจ",value:91},{label:"เงินงบประมาณ",value:90},{label:"เงินบำรุงศูนย์แพทย์",value:80},{label:"เงินงบสำนักงานประกันสุขภาพแห่งชาติ",value:78},{label:"เงินงบประมาณศูนย์แพทยศาสตรชั้นคลินิกศึกษา",value:46},{label:"เงินนอกงบประมาณ",value:34}]}],color:v.a}},mounted:function(){this.fetch_chart_pie(),this.fetch_chart_bar(),this.fetch_chart_line(),this.fetch_chart_line_landscape(),this.fetch_chart_line_landscape_money()},methods:{fetch_chart_pie:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("".concat(f.getBaseUrl(),"pasadu_chart_pie.php")).then(function(t){e.chart_pie=t.data});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),fetch_chart_bar:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("".concat(f.getBaseUrl(),"pasadu_chart_bar.php")).then(function(t){e.chart_bar=t.data});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),fetch_chart_line:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("".concat(f.getBaseUrl(),"pasadu_chart_line.php")).then(function(t){e.chart_line=t.data});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),fetch_chart_line_landscape:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("".concat(f.getBaseUrl(),"pasadu_chart_line_landscape.php")).then(function(t){e.chart_line_landscape=t.data});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),fetch_chart_line_landscape_money:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("".concat(f.getBaseUrl(),"pasadu_chart_line_landscape_money.php")).then(function(t){e.chart_line_landscape_money=t.data});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},x=(l(1289),l(13)),w=l(25),C=l.n(w),y=l(282),V=l(1046),j=l(265),k=l(272),O=l(284),R=l(266),component=Object(x.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"pageDashboard"}},[l("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:"indigo"}},[t._v("fa-server ")])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 indigo white--text "},[l("div",{staticClass:"headline"},[l("span",[t._v(" "+t._s(this.chart_bar[0].data[2].value)+" ")])]),t._v(" "),l("span",{staticClass:"caption"},[t._v("คอมพิวเตอร์")])])])])],1)],1)],1),t._v(" "),l("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:"red"}},[t._v("fa-print")])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 red white--text "},[l("div",{staticClass:"headline"},[l("span",[t._v(" "+t._s(this.chart_bar[0].data[0].value)+" ")])]),t._v(" "),l("span",{staticClass:"caption"},[t._v("ปริ้นเตอร์")])])])])],1)],1)],1),t._v(" "),l("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:"light-blue"}},[t._v("fa-television\n                    ")])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 light-blue white--text "},[l("div",{staticClass:"headline"},[l("span",[t._v(" "+t._s(this.chart_bar[0].data[4].value)+" ")])]),t._v(" "),l("span",{staticClass:"caption"},[t._v("จอมอนิเตอร์")])])])])],1)],1)],1),t._v(" "),l("v-flex",{attrs:{lg3:"",sm6:"",xs12:""}},[l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:"purple darken-2"}},[t._v("fa-code-fork")])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 purple darken-2 white--text "},[l("div",{staticClass:"headline"},[l("span",[t._v(" "+t._s(this.chart_bar[0].data[3].value)+" ")])]),t._v(" "),l("span",{staticClass:"caption"},[t._v("สำรองไฟ")])])])])],1)],1)],1),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[l("v-widget",{attrs:{title:"ครุภัณฑ์คอมพิวเตอร์จำแนกตามประเภท","content-bg":"white"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("div",{staticClass:"chart"},[l("bar-chart",{attrs:{data:this.chart_bar,"label-rotate":"",rainbow:"","x-name":"ประเภท","y-name":""}})],1)])])],1),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[l("v-widget",{attrs:{title:"ครุภัณฑ์คอมพิวเตอร์จำแนกสถานะการใช้งาน","content-bg":"white"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("div",{staticClass:"chart"},[l("pie-chart",{attrs:{data:this.chart_pie,"label-position":"center",legend:""}})],1)])])],1),t._v(" "),l("v-flex",{attrs:{lg12:"",sm12:"",xs12:""}},[l("v-widget",{attrs:{title:"ครุภัณฑ์คอมพิวเตอร์สถานะแสดงตามช่วงปี","content-bg":"white"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("div",{staticClass:"chart"},[l("line-chart",{attrs:{data:this.chart_line,colors:"GOLD"}})],1)])])],1),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[l("v-widget",{attrs:{title:"10 อันดับ ครุภัณฑ์คอมพิวเตอร์จำแนกประเภทการจัดซื้อ","content-bg":"white"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("div",{staticClass:"chart_line_landscape\n            "},[l("bar-chart",{attrs:{data:this.chart_line_landscape,horizontal:"",zoom:"","y-name":"การจัดซื้อ","x-name":"จำนวน",colors:"MEDIUMPURPLE"}})],1)])])],1),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[l("v-widget",{attrs:{title:"10 อันดับ ครุภัณฑ์คอมพิวเตอร์จำแนกประเภทงบประมาณ","content-bg":"white"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("div",{staticClass:"chart_line_landscape\n            "},[l("bar-chart",{attrs:{data:this.chart_line_landscape_money,horizontal:"",zoom:"","y-name":"'งบประมาณ","x-name":"จำนวน",colors:"SALMON"}})],1)])])],1),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}}),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}}),t._v(" "),l("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}})],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;C()(component,{VCard:y.a,VCardText:V.b,VContainer:j.a,VFlex:k.a,VIcon:O.a,VLayout:R.a})}}]);