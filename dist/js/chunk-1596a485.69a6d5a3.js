(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1596a485"],{1876:function(e,t,a){},"1dde":function(e,t,a){var r=a("d039"),n=a("b622"),o=a("2d00"),l=n("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var r=a("861d"),n=a("e8b5"),o=a("b622"),l=o("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[l],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"6fe5":function(e,t,a){"use strict";var r=a("1876"),n=a.n(r);n.a},8418:function(e,t,a){"use strict";var r=a("c04e"),n=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var l=r(t);l in e?n.f(e,l,o(0,a)):e[l]=a}},"99af":function(e,t,a){"use strict";var r=a("23e7"),n=a("d039"),o=a("e8b5"),l=a("861d"),i=a("7b0b"),s=a("50c4"),c=a("8418"),u=a("65f0"),m=a("1dde"),p=a("b622"),f=a("2d00"),v=p("isConcatSpreadable"),d=9007199254740991,b="Maximum allowed index exceeded",g=f>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),h=m("concat"),y=function(e){if(!l(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},x=!g||!h;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,a,r,n,o,l=i(this),m=u(l,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?l:arguments[t],y(o)){if(n=s(o.length),p+n>d)throw TypeError(b);for(a=0;a<n;a++,p++)a in o&&c(m,p,o[a])}else{if(p>=d)throw TypeError(b);c(m,p++,o)}return m.length=p,m}})},b789:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cart"},[a("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[a("el-step",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}],attrs:{title:"我的購物車"}},[a("template",{slot:"description"},[a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"品名",width:"500",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"類別",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"小計",align:"center"}}),a("el-table-column")],1),a("el-button",{on:{click:function(t){e.active++}}},[e._v("前往結帳")])],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}],attrs:{title:"請填寫資料"}},[a("template",{slot:"description"},[a("el-form",{ref:"ruleForm",staticStyle:{margin:"5% 0 0 20%"},attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"請填寫當日活動者"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"電話",prop:"tel"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"0912-345-678"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"abc123999@gmail.com"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"付款方式",prop:"payment"}},[a("el-select",{attrs:{placeholder:"請選擇付款方式"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}},e._l(e.payment,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"備註(非必填)"}},[a("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"小提示：可以在我們聯絡您之前，先簡單告訴我們您的需求唷！ "},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),a("el-form-item",[a("el-button",{staticStyle:{margin:"10px 0 0 20px"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("下一步")]),a("el-button",{staticStyle:{"margin-top":"10px"},on:{click:function(t){e.active--}}},[e._v("返回")])],1)],1)],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}],attrs:{title:"完成訂單"}},[a("template",{slot:"description"},[a("h2",[e._v("恭喜您已完成訂單，您的訂單編號為：")]),a("p",[e._v("我們會在活動當天前"),a("span",[e._v("七天")]),e._v("聯絡您討論當天內容，若是有需要的話也可以直接連絡我們唷！")]),a("p",[e._v("您可以在"),a("span",[e._v("我的訂單")]),e._v("中查詢您的訂單，若是要修改或刪除訂單請直接連絡我們。")]),a("ul",[a("p",[e._v("以下有幾點注意事項要提醒您：")]),a("li",[e._v("我們不會向邊友透漏您的個資")]),a("li",[e._v("在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費")]),a("li",[e._v("如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%")])])])],2)],1)],1)},n=[],o=(a("99af"),{data:function(){return{cart:[],active:0,payment:["WebATM","ATM","CVS","Barcode","Credit","ApplePay","GooglePay"],form:{name:"",email:"",tel:"",payment:"",message:""},rules:{name:[{required:!0,message:"請輸入姓名",trigger:"blur"}],tel:[{required:!0,message:"請輸入電話",trigger:"blur"}],email:[{required:!0,message:"請輸入email",trigger:"blur"},{type:"email",message:"請輸入正確的email格式",trigger:"blur"}],payment:[{required:!0,message:"請選擇付款方式",trigger:"change"}]}}},created:function(){this.getCart()},methods:{getCart:function(){var e=this,t="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping");this.axios.get(t).then((function(t){e.cart=t.data.data})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e?t.active++:console.log("error submit!!")}))}}}),l=o,i=(a("6fe5"),a("2877")),s=Object(i["a"])(l,r,n,!1,null,null,null);t["default"]=s.exports},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-1596a485.69a6d5a3.js.map