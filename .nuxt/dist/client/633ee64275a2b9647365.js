(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1068:function(t,e,r){var content=r(1108);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("0f722a22",content,!0,{sourceMap:!1})},1107:function(t,e,r){"use strict";var l=r(1068);r.n(l).a},1108:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".ft-200[data-v-920abecc]{font-weight:200}.post--item[data-v-920abecc]:hover{background:#f6f6f6}.post--item a[data-v-920abecc]{text-decoration:none}.flex-list.vertical[data-v-920abecc]{flex-direction:column}.flex-list li[data-v-920abecc]{display:flex;padding:15px 0;border-bottom:1px solid #eee}.flex-list li[data-v-920abecc]:last-child{border:none}.flexbox-centering[data-v-920abecc]{display:flex;justify-content:center;align-items:center}.image-scale[data-v-920abecc]:hover{-webkit-transform:scale(1.05);transform:scale(1.05);transition:.7s}",""])},1120:function(t,e,r){"use strict";var l=[{id:"150",product:"iPhone6",price:"$699",status:"processing"},{id:"151",product:"iPad Pro",price:"$299",status:"sent"},{id:"300",product:"Microsoft surface",price:"$1,699",status:"processing"},{id:"320",product:"Galaxy S7 edge",price:"$729",status:"processing"},{id:"501",product:"128G SD Card",price:"$699",status:"delivered"}],n={data:function(){return{headers:[{text:"#",align:"left",sortable:!1,value:"id"},{text:"Product",value:"deadline"},{text:"Price",value:"progress"},{text:"Status",value:"status"}],items:l,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{randomColor:function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t]}},methods:{getColorByStatus:function(t){return this.colors[t]}}},o=r(13),c=r(25),v=r.n(c),d=r(283),m=r(282),_=r(1046),h=r(1037),f=r(1488),x=r(1035),C=r(284),V=r(1044),y=r(285),T=r(1045),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Order")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[[r("v-data-table",{staticClass:"elevation-0 table-striped",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.id))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.product))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.price))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("v-chip",{attrs:{label:"",small:"",color:t.getColorByStatus(e.item.status),"text-color":"white"}},[t._v(t._s(e.item.status))])],1)]}}])})],t._v(" "),r("v-divider")],2)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardText:_.b,VChip:h.a,VDataTable:f.a,VDivider:x.a,VIcon:C.a,VSpacer:V.a,VToolbar:y.a,VToolbarTitle:T.b})},1122:function(t,e,r){"use strict";var l={props:{items:{type:[Array,Object]}},methods:{handleThumb:function(){},handleComment:function(){},handleFavorite:function(){}}},n=(r(1107),r(13)),o=r(25),c=r.n(o),v=r(283),d=r(282),m=r(1046),_=r(1035),h=r(284),f=r(1044),x=r(285),C=r(1045),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"post-card"},[r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",{staticClass:"subheading ft-200"},[t._v("Recent Posts")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"text--secondary"},[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("ul",{staticClass:"post--list flex-list vertical"},t._l(t.items,function(e,l){return r("li",{key:l,staticClass:"post--item"},[r("a",{staticClass:" post--link pa-4 layout row ma-0 text--primary",attrs:{href:"#"}},[r("div",{staticClass:"post--media"},[r("img",{staticClass:"image-scale",attrs:{src:e.featuredImage,alt:"",height:"100"}})]),t._v(" "),r("div",{staticClass:"post--content ml-3"},[r("h3",{staticClass:"title post--title"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("div",{staticClass:"post--desc py-2 text--secondary"},[t._v("\n              "+t._s(e.desc.substr(0,150)+"...")+"\n            ")]),t._v(" "),r("div",{staticClass:"post--meta o-flex justify-space-between"},[r("div",{staticClass:"post--author caption grey--text text--darken-1"},[r("span",[t._v(t._s(e.author))]),t._v(" "),r("time",{staticClass:"px-2"},[t._v(t._s(e.createdAt))])]),t._v(" "),r("div",{staticClass:"social"},[r("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleThumb}},[r("v-icon",{attrs:{small:""}},[t._v("thumb_up")]),t._v(" "),r("small",[t._v("100+")])],1),t._v(" "),r("a",{staticClass:"grey--text text--darken-1 mx-3",on:{click:t.handleComment}},[r("v-icon",{attrs:{small:""}},[t._v("mode_comment")]),t._v(" "),r("small",[t._v("12+")])],1),t._v(" "),r("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleFavorite}},[r("v-icon",{attrs:{small:""}},[t._v("favorite")]),t._v(" "),r("small",[t._v("50+")])],1)])])])])])}),0)])],1)},[],!1,null,"920abecc",null);e.a=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:m.b,VDivider:_.a,VIcon:h.a,VSpacer:f.a,VToolbar:x.a,VToolbarTitle:C.b})},1124:function(t,e,r){"use strict";var l=r(305),n={data:function(){return{headers:[{text:"",align:"center",sortable:!1,value:"avatar"},{text:"Name",align:"left",value:"name"},{text:"Deadline",value:"deadline"},{text:"Progress",value:"progress"},{text:"Action",value:"action",align:"right"}]}},computed:{projects:function(){return l.a}}},o=r(13),c=r(25),v=r.n(c),d=r(268),m=r(283),_=r(282),h=r(1046),f=r(1488),x=r(1035),C=r(284),V=r(281),y=r(1044),T=r(285),k=r(1045),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Project")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[[r("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.projects,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[r("v-avatar",{attrs:{size:"36px"}},[r("img",{attrs:{src:e.item.avatar,alt:e.item.username}})])],1),t._v(" "),r("td",[t._v(t._s(e.item.name))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.deadline))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("v-progress-linear",{attrs:{value:e.item.progress,height:"5",color:e.item.color}})],1),t._v(" "),r("td",{staticClass:"text-xs-right"},[r("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[r("v-icon",[t._v("edit")])],1),t._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[r("v-icon",[t._v("delete")])],1)],1)]}}])})],t._v(" "),r("v-divider")],2)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VAvatar:d.a,VBtn:m.a,VCard:_.a,VCardText:h.b,VDataTable:f.a,VDivider:x.a,VIcon:C.a,VProgressLinear:V.a,VSpacer:y.a,VToolbar:T.a,VToolbarTitle:k.b})},1476:function(t,e,r){"use strict";r.r(e);var l=r(340),n=[{avatar:"https://randomuser.me/api/portraits/men/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood ?"},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/3.jpg",title:"Oui oui",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/1.jpg",title:"Dash",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"}],o={data:function(){return{items:n}},methods:{handleClick:function(t){console.log(t)}}},c=r(13),v=r(25),d=r.n(v),m=r(283),_=r(282),h=r(1046),f=r(1035),x=r(269),C=r(270),V=r(286),y=r(1039),T=r(1036),k=r(285),w=r(1045),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Message")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[t._l(t.items,function(e,l){return[e.header?r("v-subheader",{key:e.header},[t._v(t._s(e.header))]):e.divider?r("v-divider",{key:l}):r("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:t.handleClick}},[r("v-list-tile-avatar",[r("img",{attrs:{src:e.avatar}})]),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2),t._v(" "),r("v-divider"),t._v(" "),r("v-btn",{staticClass:"ma-0",attrs:{block:"",flat:""}},[t._v("All")]),t._v(" "),r("v-divider")],1)],1)},[],!1,null,null,null),j=component.exports;d()(component,{VBtn:m.a,VCard:_.a,VCardText:h.b,VDivider:f.a,VList:x.a,VListTile:C.a,VListTileAvatar:V.a,VListTileContent:y.b,VListTileSubTitle:y.c,VListTileTitle:y.d,VSubheader:T.a,VToolbar:k.a,VToolbarTitle:w.b});var P=r(462),S=r(1124),L=r(1120),D={components:{PostListCard:r(1122).a,MessageList:j,NotificationList:P.a,PlainTable:S.a,PlainTableOrder:L.a},data:function(){return{}},computed:{posts:function(){return Object(l.a)()}},methods:{handleClick:function(t){console.log(t)}}},A=r(265),O=r(272),$=r(266),B=Object(c.a)(D,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"social"}},[e("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[e("message-list")],1),this._v(" "),e("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[e("notification-list")],1),this._v(" "),e("v-flex",{attrs:{lg7:"",sm12:"",xs12:""}},[e("plain-table")],1),this._v(" "),e("v-flex",{attrs:{lg5:"",sm12:"",xs12:""}},[e("plain-table-order")],1),this._v(" "),e("v-flex",{attrs:{lg12:"",sm12:"",xs12:""}},[e("post-list-card",{attrs:{items:this.posts}})],1)],1)],1)],1)},[],!1,null,null,null);e.default=B.exports;d()(B,{VContainer:A.a,VFlex:O.a,VLayout:$.a})}}]);