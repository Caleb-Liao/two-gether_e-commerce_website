(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1596a485"],{1876:function(e,t,a){},"1dde":function(e,t,a){var o=a("d039"),r=a("b622"),n=a("2d00"),l=r("species");e.exports=function(e){return n>=51||!o((function(){var t=[],a=t.constructor={};return a[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var o=a("861d"),r=a("e8b5"),n=a("b622"),l=n("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?o(a)&&(a=a[l],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"6fe5":function(e,t,a){"use strict";var o=a("1876"),r=a.n(o);r.a},8418:function(e,t,a){"use strict";var o=a("c04e"),r=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var l=o(t);l in e?r.f(e,l,n(0,a)):e[l]=a}},"99af":function(e,t,a){"use strict";var o=a("23e7"),r=a("d039"),n=a("e8b5"),l=a("861d"),i=a("7b0b"),c=a("50c4"),s=a("8418"),u=a("65f0"),p=a("1dde"),m=a("b622"),f=a("2d00"),d=m("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",h=f>=51||!r((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),g=p("concat"),y=function(e){if(!l(e))return!1;var t=e[d];return void 0!==t?!!t:n(e)},x=!h||!g;o({target:"Array",proto:!0,forced:x},{concat:function(e){var t,a,o,r,n,l=i(this),p=u(l,0),m=0;for(t=-1,o=arguments.length;t<o;t++)if(n=-1===t?l:arguments[t],y(n)){if(r=c(n.length),m+r>v)throw TypeError(b);for(a=0;a<r;a++,m++)a in n&&s(p,m,n[a])}else{if(m>=v)throw TypeError(b);s(p,m++,n)}return p.length=m,p}})},b789:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cart"},[a("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[a("el-step",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}],attrs:{title:"我的購物車"}},[a("template",{slot:"description"},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"請輸入優惠碼",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendCouponCode(t)}},model:{value:e.couponCode,callback:function(t){e.couponCode=t},expression:"couponCode"}}),0==e.couponStatus?a("span",{staticStyle:{color:"red"}},[a("i",{staticClass:"el-icon-warning-outline"},[e._v("您的折扣碼已失效，請重新輸入")])]):e._e(),a("el-table",{attrs:{data:e.cart}},[a("el-table-column",{attrs:{prop:"date",label:"品名",width:"500",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"類別",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"小計",align:"center"}}),a("el-table-column")],1),a("el-button",{on:{click:function(t){e.active++}}},[e._v("前往結帳")])],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}],attrs:{title:"請填寫資料"}},[a("template",{slot:"description"},[a("el-form",{ref:"ruleForm",staticStyle:{margin:"5% 0 0 20%"},attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"請填寫當日活動者"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"電話",prop:"tel"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"0912-345-678"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"abc123999@gmail.com"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"付款方式",prop:"payment"}},[a("el-select",{attrs:{placeholder:"請選擇付款方式"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}},e._l(e.payment,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"備註(非必填)"}},[a("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"小提示：可以在我們聯絡您之前，先簡單告訴我們您的需求唷！ "},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),a("el-form-item",[a("el-button",{staticStyle:{margin:"10px 0 0 20px"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("下一步")]),a("el-button",{staticStyle:{"margin-top":"10px"},on:{click:function(t){e.active--}}},[e._v("返回")])],1)],1)],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],attrs:{title:"完成訂單"}},[a("template",{slot:"description"},[a("h2",[e._v("恭喜您已完成訂單，您的訂單編號為：")]),a("p",[e._v("我們會在活動當天前"),a("span",[e._v("七天")]),e._v("聯絡您討論當天內容，若是有需要的話也可以直接連絡我們唷！")]),a("p",[e._v("您可以在"),a("span",[e._v("我的訂單")]),e._v("中查詢您的訂單，若是要修改或刪除訂單請直接連絡我們。")]),a("ul",[a("p",[e._v("以下有幾點注意事項要提醒您：")]),a("li",[e._v("我們不會向邊友透漏您的個資")]),a("li",[e._v("在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費")]),a("li",[e._v("如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%")])])])],2)],1)],1)},r=[],n=(a("99af"),{data:function(){return{cart:[],active:0,couponCode:"",coupon:{},couponStatus:null,payment:["WebATM","ATM","CVS","Barcode","Credit","ApplePay","GooglePay"],form:{name:"",email:"",tel:"",payment:"",message:""},rules:{name:[{required:!0,message:"請輸入姓名",trigger:"blur"}],tel:[{required:!0,message:"請輸入電話",trigger:"blur"}],email:[{required:!0,message:"請輸入email",trigger:"blur"},{type:"email",message:"請輸入正確的email格式",trigger:"blur"}],payment:[{required:!0,message:"請選擇付款方式",trigger:"change"}]}}},created:function(){this.getCart()},methods:{getCart:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9999;console.log(this.$refs);var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping?paged=").concat(t);this.axios.get(a).then((function(t){e.cart=t.data.data})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e?t.active++:console.log("error submit!!")}))},sendCouponCode:function(){var e=this;console.log(123);var t="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/coupon/search");this.axios.post(t,{code:this.couponCode}).then((function(t){e.coupon=t.data.data,e.couponCode=""})).catch((function(t){console.log(t),e.couponStatus=!1}))}}}),l=n,i=(a("6fe5"),a("2877")),c=Object(i["a"])(l,o,r,!1,null,null,null);t["default"]=c.exports},e8b5:function(e,t,a){var o=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-1596a485.ea8d2ef4.js.map