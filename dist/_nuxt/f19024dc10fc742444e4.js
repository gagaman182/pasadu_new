(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1054:function(e,t,n){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=n(13),d=n(25),o=n.n(d),c=n(282),m=n(1046),v=n(1035),f=n(1044),_=n(285),x=n(1045),component=Object(r.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[e.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer"),e._v(" "),e._t("widget-header-action")],2):e._e(),e._v(" "),e.enableHeader?n("v-divider"):e._e(),e._v(" "),n("v-card-text",{class:e.contentBg},[e._t("widget-content")],2)],1)],1)},[],!1,null,null,null);t.a=component.exports;o()(component,{VCard:c.a,VCardText:m.b,VDivider:v.a,VSpacer:f.a,VToolbar:_.a,VToolbarTitle:x.b})},1058:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var l=n(1069),r=n(1070),d=function(){function e(){Object(l.a)(this,e)}return Object(r.a)(e,[{key:"getBaseUrl",value:function(){return"http://192.168.5.1/pasaduweb/backend/"}}]),e}()},1481:function(e,t,n){"use strict";n.r(t);n(37),n(159);var l=n(42),r=n(1054),d=n(335),o=n(1058),c=n(1078),m=n.n(c),v=(new o.a,{data:function(){return Object(d.a)({typegroup:[{id:"1",name:"คอมพิวเตอร์"},{id:"2",name:"จอมอนิเตอร์"},{id:"3",name:"โน๊ตบุ๊ค"},{id:"5",name:"ออนอินวัน"},{id:"6",name:"ปริ้นเตอร์"},{id:"7",name:"ปริ้นเตอร์เทอมอล"},{id:"8",name:"สแกนเนอร์"},{id:"9",name:"สำรองไฟ"},{id:"10",name:"อื่นๆ"},{id:"11",name:"เซิฟเวอร์"}],status:[{id:"1",name:"ใช้งานปกติ"},{id:"2",name:"แทงชำรุดแล้ว"},{id:"3",name:"รอแทงชำรุด"},{id:"4",name:"รอจำหน่าย"},{id:"5",name:"ตรวจสอบข้อมูล"},{id:"6",name:"จำหน่ายแล้ว"}],message:null,formData:null},"message","Hi")},props:{pasadu:[],status_name:{type:String},status_name2:{type:String}},mounted:function(){},methods:{update_pasadu:function(){this.$emit("update-pasadu",{pasadu:this.pasadu})},delete_pasadu:function(){this.$emit("delete-pasadu",{pasadu_id:this.pasadu[0].pasaduid})},back_pasadu:function(){$nuxt._router.push("/".concat(this.pasadu[0].type_group))}}}),f=n(13),_=n(25),x=n.n(_),h=n(283),y=n(282),k=n(1046),w=n(1482),$=n(272),V=n(1129),T=n(266),B=n(1038),C=n(1098),O=n(1044),j=n(1053),D=n(285),S=n(1045),component=Object(f.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{card:"",prominent:"",extended:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticClass:"body-2"},[e._v("รายละเอียด - "+e._s(e.pasadu[0].typegroup_name))]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg6:"",sm12:""}},[n("v-text-field",{attrs:{label:"เลขไอดี",name:"title"},model:{value:e.pasadu[0].pasaduid,callback:function(t){e.$set(e.pasadu[0],"pasaduid",t)},expression:"pasadu[0].pasaduid"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"เลขพัสดุ",name:"title"},model:{value:e.pasadu[0].noid,callback:function(t){e.$set(e.pasadu[0],"noid",t)},expression:"pasadu[0].noid"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"รายการ",name:"title"},model:{value:e.pasadu[0].name,callback:function(t){e.$set(e.pasadu[0],"name",t)},expression:"pasadu[0].name"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"ยี่ห้อ",name:"title"},model:{value:e.pasadu[0].modem,callback:function(t){e.$set(e.pasadu[0],"modem",t)},expression:"pasadu[0].modem"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"เลขซีเรียล",name:"title"},model:{value:e.pasadu[0].serialno,callback:function(t){e.$set(e.pasadu[0],"serialno",t)},expression:"pasadu[0].serialno"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"บริษัท",name:"title"},model:{value:e.pasadu[0].company,callback:function(t){e.$set(e.pasadu[0],"company",t)},expression:"pasadu[0].company"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"ประเภทครุภัณฑ์",name:"title"},model:{value:e.pasadu[0].type,callback:function(t){e.$set(e.pasadu[0],"type",t)},expression:"pasadu[0].type"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"สถานที่",name:"title"},model:{value:e.pasadu[0].place,callback:function(t){e.$set(e.pasadu[0],"place",t)},expression:"pasadu[0].place"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-menu",{ref:"statDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"max-width":"290px"}},[n("v-text-field",{attrs:{slot:"activator",label:"วันที่รับสินค้า","append-icon":"event",readonly:""},slot:"activator",model:{value:e.pasadu[0].receive,callback:function(t){e.$set(e.pasadu[0],"receive",t)},expression:"pasadu[0].receive"}}),e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.pasadu[0].receive,callback:function(t){e.$set(e.pasadu[0],"receive",t)},expression:"pasadu[0].receive"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.startDateMenu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.statDate.save(e.pasadu[0].receive)}}},[e._v("OK")])],1)],1)],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"ราคา",name:"title"},model:{value:e.pasadu[0].perunit,callback:function(t){e.$set(e.pasadu[0],"perunit",t)},expression:"pasadu[0].perunit"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"ประเภทงบประมาณ",name:"title"},model:{value:e.pasadu[0].kmoney,callback:function(t){e.$set(e.pasadu[0],"kmoney",t)},expression:"pasadu[0].kmoney"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg6:""}},[n("v-text-field",{attrs:{label:"ประเภทการจัดซื้อ",name:"title"},model:{value:e.pasadu[0].tmoney,callback:function(t){e.$set(e.pasadu[0],"tmoney",t)},expression:"pasadu[0].tmoney"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg4:""}},[n("v-text-field",{attrs:{label:"ขออนุมัติ",name:"title"},model:{value:e.pasadu[0].engname,callback:function(t){e.$set(e.pasadu[0],"engname",t)},expression:"pasadu[0].engname"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg4:""}},[n("v-select",{attrs:{items:e.status,label:"สถานะ",auto:"",required:"","item-text":"name","item-value":"name"},model:{value:e.pasadu[0].status,callback:function(t){e.$set(e.pasadu[0],"status",t)},expression:"pasadu[0].status"}})],1),e._v(" "),n("v-flex",{attrs:{sm12:"",lg4:""}},[n("v-select",{attrs:{items:e.typegroup,label:"หมวดหมู่",auto:"",required:"","item-text":"name","item-value":"id"},model:{value:e.pasadu[0].type_group,callback:function(t){e.$set(e.pasadu[0],"type_group",t)},expression:"pasadu[0].type_group"}})],1),e._v(" "),n("v-spacer")],1)],1)],1),e._v(" "),n("v-card-actions",{staticClass:"pb-3"},[n("v-btn",{attrs:{color:"primary"},on:{click:e.back_pasadu}},[e._v("กลับ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:e.update_pasadu}},[e._v(e._s(e.status_name))]),e._v(" "),n("v-btn",{attrs:{color:"error"},on:{click:e.delete_pasadu}},[e._v(e._s(e.status_name2))])],1)],1)},[],!1,null,null,null),F=component.exports;x()(component,{VBtn:h.a,VCard:y.a,VCardActions:k.a,VCardText:k.b,VDatePicker:w.a,VFlex:$.a,VForm:V.a,VLayout:T.a,VMenu:B.a,VSelect:C.a,VSpacer:O.a,VTextField:j.a,VToolbar:D.a,VToolbarTitle:S.b});var H=n(1199),U=n.n(H),E=new o.a,z={layout:"dashboard",components:{VWidget:r.a,PasaduDetail:F},data:function(){return{pasadu:[{pasaduid:"",noid:"",name:"",modem:"",serialno:"",company:"",type:"",place:"",receive:"",perunit:"",kmoney:"",tmoney:"",engname:"",status:"",type_group:""}],message:"",status_name:"แก้ไข",status_name2:"ลบ",pasadu_delete:"",group_type_params:this.$route.params.pid}},mounted:function(){this.fetch_pasadu()},methods:{fetch_pasadu:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(E.getBaseUrl(),"pasadu_detail.php"),{params:{pasaduid:this.$route.params.pid}}).then(function(e){t.pasadu=e.data});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),setpasadu:function(){var e=this;m.a.put("".concat(E.getBaseUrl(),"update_pasadu.php"),{pasaduid:this.pasadu[0].pasaduid,noid:this.pasadu[0].noid,name:this.pasadu[0].name,modem:this.pasadu[0].modem,serialno:this.pasadu[0].serialno,company:this.pasadu[0].company,type:this.pasadu[0].type,place:this.pasadu[0].place,receive:this.pasadu[0].receive,perunit:this.pasadu[0].perunit,kmoney:this.pasadu[0].kmoney,tmoney:this.pasadu[0].tmoney,engname:this.pasadu[0].engname,status:this.pasadu[0].status,type_group:this.pasadu[0].type_group},{"Content-type":"application/x-www-form-urlencoded"}).then(function(t){e.message=t.data,"อัพเดทข้อมูลสำเร็จ"==e.message[0].message?U.a.fire({title:"สถานะอัพเดท",text:e.message[0].message,icon:"success",confirmButtonText:"ตกลง"}):(U.a.fire({title:"สถานะอัพเดท",text:e.message[0].message,icon:"error",confirmButtonText:"ตกลง"}),$nuxt._router.push("/dashboard"))})},deletepasadu:function(e){var t=this;this.pasadu_delete=e.pasadu_id,m.a.post("".concat(E.getBaseUrl(),"delete_pasadu.php"),{pasaduid:this.pasadu_delete},{"Content-type":"application/x-www-form-urlencoded"}).then(function(e){t.message=e.data,"ลบข้อมูลสำเร็จ"==t.message[0].message?(U.a.fire({title:"สถานะลบ",text:t.message[0].message,icon:"success",confirmButtonText:"ตกลง"}),$nuxt._router.push("/dashboard")):(U.a.fire({title:"สถานะลบ",text:t.message[0].message,icon:"error",confirmButtonText:"ตกลง"}),$nuxt._router.push("/dashboard"))})}}},J=n(265),L=Object(f.a)(z,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"page-forms"}},[t("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{lg12:""}},[t("pasadu-detail",{attrs:{pasadu:this.pasadu,status_name:this.status_name,status_name2:this.status_name2},on:{"update-pasadu":this.setpasadu,"delete-pasadu":this.deletepasadu}})],1)],1)],1)],1)},[],!1,null,null,null);t.default=L.exports;x()(L,{VContainer:J.a,VFlex:$.a,VLayout:T.a})}}]);