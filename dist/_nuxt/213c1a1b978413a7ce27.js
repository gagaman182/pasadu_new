(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1109:function(t,e,r){t.exports=r.p+"img/05f8b68.jpg"},1123:function(t,e,r){"use strict";var n={},l=r(13),o=r(25),v=r.n(o),c=r(283),_=r(282),m=r(279),d=r(1035),f=r(284),h=r(470),x=r(266),C=r(269),y=r(270),V=r(275),w=r(1039),k=r(1044),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-img",{attrs:{src:r(1109),height:"390"}},[n("v-layout",{staticClass:"media ma-0",attrs:{column:""}},[n("v-card-title",[n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[t._v("chevron_left")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:""}},[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-title",{staticClass:"white--text pl-5 pt-5"},[n("div",{staticClass:"display-1 pl-5 pt-5"},[t._v("Ali Conners")])])],1)],1),t._v(" "),n("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[n("v-list-tile",{attrs:{href:"#"}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("phone")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("(650) 555-1234")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Mobile")])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v("chat")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{href:"#"}},[n("v-list-tile-action"),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("(323) 555-6789")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Work")])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v("chat")])],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",{attrs:{href:"#"}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("mail")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("aliconnors@example.com")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Personal")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{href:"#"}},[n("v-list-tile-action"),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("ali_connors@example.com")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Work")])],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",{attrs:{href:"#"}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("1400 Main Street")]),t._v(" "),n("v-list-tile-sub-title",[t._v("Orlando, FL 79938")])],1)],1)],1)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:c.a,VCard:_.a,VCardTitle:m.a,VDivider:d.a,VIcon:f.a,VImg:h.a,VLayout:x.a,VList:C.a,VListTile:y.a,VListTileAction:V.a,VListTileContent:w.b,VListTileSubTitle:w.c,VListTileTitle:w.d,VSpacer:k.a})},1183:function(t,e,r){var content=r(1462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("5d24a799",content,!0,{sourceMap:!1})},1461:function(t,e,r){"use strict";var n=r(1183);r.n(n).a},1462:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".caption[data-v-2caad64e],.subheading[data-v-2caad64e]{font-weight:200}",""])},1480:function(t,e,r){"use strict";r.r(e);var n={props:{name:{type:String,default:""},avatar:{type:Object,default:null},jobTitle:{type:String,default:""},cardBgImage:{type:String},color:{type:String,default:""},dark:{type:Boolean,default:!1},bottomNav:{type:Boolean,default:!1},topNav:{type:Boolean,default:!1},mini:{type:Boolean,default:!1}},data:function(){return{}},computed:{computeCardLayout:function(){return this.mini?"row":"column"},computeTextAlgin:function(){return this.mini?"text-sm-right":"text-sm-center"},computeAvatarSize:function(){return this.mini?"48":"96"},showAvatar:function(){return null!==this.avatar&&this.avatar.src},showBottomNav:function(){return!1===this.mini&&this.bottomNav},showTopNav:function(){return!1===this.mini&&this.topNav}},methods:{}},l=(r(1461),r(13)),o=r(25),v=r.n(o),c=r(268),_=r(1042),m=r(283),d=r(282),f=r(277),h=r(1046),x=r(272),C=r(284),y=r(266),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"name-card"},[r("v-card",{ref:"card",attrs:{color:t.color,dark:t.dark,img:t.cardBgImage}},[t.showTopNav?r("v-card-media",[r("v-layout",{staticClass:"ma-0",attrs:{row:"","justify-space-between":""}},[r("v-flex",{attrs:{xs2:""}},[r("v-icon",{attrs:{color:"pink"}},[t._v("favorite")])],1),t._v(" "),r("v-flex",{staticClass:"text-sm-right",attrs:{xs2:""}},[r("v-icon",[t._v("more_vert")])],1)],1)],1):t._e(),t._v(" "),r("v-card-text",[r("div",{staticClass:"layout ma-0 align-center",class:t.computeCardLayout},[r("v-avatar",{attrs:{size:t.computeAvatarSize,color:"primary"}},[t.showAvatar?r("img",{attrs:{src:t.avatar.src,alt:t.name}}):r("span",{staticClass:"white--text headline"},[t._v(t._s(t.name.charAt(0)))])]),t._v(" "),r("div",{staticClass:"flex",class:t.computeTextAlgin},[r("div",{staticClass:"subheading"},[t._v(t._s(t.name))]),t._v(" "),r("span",{staticClass:"caption"},[t._v(t._s(t.jobTitle))])])],1)])],1),t._v(" "),t.showBottomNav?r("v-bottom-nav",{attrs:{value:!0,color:"transparent",height:64}},[r("v-btn",{attrs:{flat:"",color:"teal",value:"recent"}},[r("span",[t._v("Recent")]),t._v(" "),r("v-icon",[t._v("history")])],1),t._v(" "),r("v-btn",{attrs:{flat:"",color:"teal",value:"favorites"}},[r("span",[t._v("Favorites")]),t._v(" "),r("v-icon",[t._v("favorite")])],1),t._v(" "),r("v-btn",{attrs:{flat:"",color:"teal",value:"nearby"}},[r("span",[t._v("Nearby")]),t._v(" "),r("v-icon",[t._v("place")])],1)],1):t._e()],1)},[],!1,null,"2caad64e",null),V=component.exports;v()(component,{VAvatar:c.a,VBottomNav:_.a,VBtn:m.a,VCard:d.a,VCardMedia:f.a,VCardText:h.b,VFlex:x.a,VIcon:C.a,VLayout:y.a});var w={components:{NameCard:V,ProfileCard:r(1123).a},data:function(){return{users:[{jobTitle:"Web Developer",name:"Michael Wang",avatar:{src:"https://randomuser.me/api/portraits/men/1.jpg",size:"36"}},{jobTitle:"Web Designer",name:"Jessie J",color:"pink",dark:!0,avatar:{src:"https://randomuser.me/api/portraits/women/1.jpg",size:"36"}},{jobTitle:"Web Developer",name:"Jim J",color:"teal",dark:!0,avatar:{src:"https://randomuser.me/api/portraits/men/10.jpg",size:"36"}},{jobTitle:"Product Manager",name:"John Doe",dark:!0,cardBgImage:r(499),avatar:{src:"https://randomuser.me/api/portraits/men/5.jpg",size:"36"}}]}}},k=r(265),T=Object(l.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"social"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Mini Name Card")])]),t._v(" "),t._l(t.users,function(e,n){return r("v-flex",{key:"mini"+n,attrs:{lg3:"",sm12:""}},[r("name-card",t._b({attrs:{mini:""}},"name-card",e,!1))],1)}),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Basic Name Card")])]),t._v(" "),t._l(t.users,function(e,n){return r("v-flex",{key:"basic"+n,attrs:{lg3:"",sm12:""}},[r("name-card",t._b({},"name-card",e,!1))],1)}),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Basic Name Card with top nav")])]),t._v(" "),t._l(t.users,function(e,n){return r("v-flex",{key:"basic-top-nav"+n,attrs:{lg3:"",sm12:""}},[r("name-card",t._b({attrs:{"top-nav":""}},"name-card",e,!1))],1)}),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Bottom Nav Name Card")])]),t._v(" "),t._l(t.users,function(e,n){return r("v-flex",{key:"bottom-nav"+n,attrs:{lg3:"",sm12:""}},[r("name-card",t._b({attrs:{"bottom-nav":""}},"name-card",e,!1))],1)}),t._v(" "),r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Contact Card")])]),t._v(" "),r("v-flex",{attrs:{lg4:"",sm12:""}},[r("profile-card")],1)],2)],1)],1)},[],!1,null,null,null);e.default=T.exports;v()(T,{VContainer:k.a,VFlex:x.a,VLayout:y.a})}}]);