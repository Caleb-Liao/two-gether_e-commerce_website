(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a46c15a"],{1876:function(t,e,o){},"1dde":function(t,e,o){var a=o("d039"),i=o("b622"),c=o("2d00"),n=i("species");t.exports=function(t){return c>=51||!a((function(){var e=[],o=e.constructor={};return o[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4955:function(t,e,o){t.exports=o.p+"img/creditcard.3810a155.svg"},5789:function(t,e,o){t.exports=o.p+"img/cart2.25e64b59.svg"},"65f0":function(t,e,o){var a=o("861d"),i=o("e8b5"),c=o("b622"),n=c("species");t.exports=function(t,e){var o;return i(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?a(o)&&(o=o[n],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"6fe5":function(t,e,o){"use strict";var a=o("1876"),i=o.n(a);i.a},8418:function(t,e,o){"use strict";var a=o("c04e"),i=o("9bf2"),c=o("5c6c");t.exports=function(t,e,o){var n=a(e);n in t?i.f(t,n,c(0,o)):t[n]=o}},"99af":function(t,e,o){"use strict";var a=o("23e7"),i=o("d039"),c=o("e8b5"),n=o("861d"),r=o("7b0b"),s=o("50c4"),l=o("8418"),u=o("65f0"),d=o("1dde"),p=o("b622"),f=o("2d00"),m=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=f>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),y=function(t){if(!n(t))return!1;var e=t[m];return void 0!==e?!!e:c(t)},_=!g||!b;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,o,a,i,c,n=r(this),d=u(n,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(c=-1===e?n:arguments[e],y(c)){if(i=s(c.length),p+i>v)throw TypeError(h);for(o=0;o<i;o++,p++)o in c&&l(d,p,c[o])}else{if(p>=v)throw TypeError(h);l(d,p++,c)}return d.length=p,d}})},b441:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontendProductModal"},[a("el-dialog",{attrs:{visible:t.dialogVisible,width:"900px",top:"10vh","before-close":t.closeModal},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",{staticClass:"Modal"},[a("el-col",{attrs:{span:11,xs:24}},[a("div",{staticClass:"imgCircle"},[a("img",{staticClass:"productImg",attrs:{src:t.product.imageUrl[0],alt:""}})])]),a("el-col",{attrs:{span:13,xs:24}},[a("h3",[t._v(t._s(t.product.title))]),a("div",{staticClass:"basicInformation"},[a("h5",[t._v("基本資訊")]),a("p",[t._v("產品類別："+t._s(t.product.category))]),a("p",[t._v("性別："+t._s(t.product.options.gender))]),a("p",[t._v("地區："+t._s(t.product.options.area))]),a("p",[t._v("價錢："+t._s(t.product.price)+" $")])]),a("div",{staticClass:"line"}),a("div",{staticClass:"productInformation"},[a("h5",[t._v("產品資訊")]),a("div",{staticStyle:{display:"flex"}},[a("p",{staticStyle:{width:"22%"}},[t._v("產品內容：")]),a("p",{staticStyle:{width:"75%"}},[t._v(t._s(t.product.content))])]),a("div",{staticStyle:{display:"flex"}},[a("p",{staticStyle:{width:"22%"}},[t._v("產品描述：")]),a("p",{staticStyle:{width:"75%"}},[t._v(t._s(t.product.description))])])]),a("div",{staticClass:"button"},[a("el-button",{on:{click:function(e){return t.addToCart(t.product.id,"buy")}}},[t._v("直接購買"),a("img",{attrs:{src:o("4955"),alt:""}})]),a("el-button",{on:{click:function(e){return t.addToCart(t.product.id,"add")}}},[t._v("加入購物車"),a("img",{attrs:{src:o("5789"),alt:""}})])],1)])],1),a("div",{staticClass:"closeIcon",on:{click:t.closeModal}},[a("img",{attrs:{src:o("e67b"),alt:""}})])],1)],1)},i=[],c=(o("99af"),{data:function(){return{product:{imageUrl:[],options:{}}}},props:{dialogVisible:{type:Boolean,required:!0}},methods:{closeModal:function(){this.$emit("close-modal")},getProduct:function(t){var e=this,o="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/product/").concat(t);this.axios.get(o).then((function(t){e.product=t.data.data})).catch((function(t){console.log(t)}))},addToCart:function(t,e){var o=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping");this.axios.post(a,{product:t,quantity:1}).then((function(t){o.$bus.$emit("updateCartNum"),o.$notify({title:"恭喜～",message:"商品已經加入購物車囉ヽ(●´∀`●)ﾉ",offset:150}),"buy"===e&&o.$router.push({name:"Cart"})})).catch((function(){o.$notify({title:"咦～",message:"商品已經在購物車裡囉(｡◕∀◕｡)",offset:150})}))}}}),n=c,r=(o("f956"),o("2877")),s=Object(r["a"])(n,a,i,!1,null,null,null);e["a"]=s.exports},b789:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cartPage"},[t._m(0),a("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[a("el-step",{directives:[{name:"show",rawName:"v-show",value:0==t.active,expression:"active == 0"}],attrs:{title:"您的商品"}},[a("template",{slot:"description"},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"請輸入優惠碼",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendCouponCode(e)}},model:{value:t.couponCode,callback:function(e){t.couponCode=e},expression:"couponCode"}}),0==t.couponStatus?a("span",{staticStyle:{color:"red"}},[a("i",{staticClass:"el-icon-warning-outline"},[t._v("您的折扣碼已失效，請重新輸入")])]):t._e(),a("el-button",{on:{click:t.deleteAll}},[t._v("清空購物車")]),a("el-table",{attrs:{data:t.cart}},[a("el-table-column",{attrs:{width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("el-image",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{src:e.row.product.imageUrl[0]},on:{click:function(o){return t.openModal(e.row.product.id)}}})],1)}}])}),a("el-table-column",{attrs:{prop:"product.title",label:"品名",width:"500",align:"center"}}),a("el-table-column",{attrs:{prop:"product.category",label:"類別",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"product.price",label:"小計",align:"center"}}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer","font-size":"20px"},on:{click:function(o){return t.deleteItem(e.row.product.id)}}})])}}])})],1),a("el-button",{on:{click:function(e){t.active++}}},[t._v("前往結帳"),a("img",{attrs:{src:o("4955"),alt:""}})]),a("p",[t._v("運費:0")]),a("p",[t._v("優惠碼折扣:-666(-20%)")]),a("p",[t._v("共計:1234$")])],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:1==t.active,expression:"active == 1"}],staticStyle:{height:"80vh"},attrs:{title:"請填寫資料"}},[a("template",{slot:"description"},[a("el-form",{ref:"ruleForm",staticStyle:{margin:"5% 0 0 20%"},attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"請填寫當日活動者"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"電話",prop:"tel"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"0912-345-678"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{staticClass:"input",attrs:{placeholder:"abc123999@gmail.com"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"付款方式",prop:"payment"}},[a("el-select",{attrs:{placeholder:"請選擇付款方式"},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}},t._l(t.payment,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{attrs:{label:"備註(非必填)"}},[a("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"小提示：可以在我們聯絡您之前，先簡單告訴我們您的需求唷！ "},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),a("el-form-item",[a("el-button",{staticStyle:{margin:"10px 0 0 20px"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("下一步")]),a("el-button",{staticStyle:{"margin-top":"10px"},on:{click:function(e){t.active--}}},[t._v("返回")])],1)],1)],1)],2),a("el-step",{directives:[{name:"show",rawName:"v-show",value:2==t.active,expression:"active == 2"}],staticStyle:{height:"80vh"},attrs:{title:"訂單已完成"}},[a("template",{slot:"description"},[a("h2",[t._v("恭喜您已完成訂單，您的訂單編號為：")]),a("p",[t._v("我們會在活動當天前"),a("span",[t._v("七天")]),t._v("聯絡您討論當天內容，若是有需要的話也可以直接連絡我們唷！")]),a("p",[t._v("您可以在"),a("span",[t._v("我的訂單")]),t._v("中查詢您的訂單，若是要修改或刪除訂單請直接連絡我們。")]),a("ul",[a("p",[t._v("以下有幾點注意事項要提醒您：")]),a("li",[t._v("我們不會向邊友透漏您的個資")]),a("li",[t._v("在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費")]),a("li",[t._v("如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%")])])])],2)],1),a("productmodal",{ref:"frontendProductModal",attrs:{"dialog-visible":t.dialogVisible},on:{"close-modal":function(e){t.dialogVisible=!1}}})],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticClass:"title"},[o("mark",{staticClass:"mark"},[t._v("我的購物車")])])}],c=(o("99af"),o("b441")),n={components:{productmodal:c["a"]},data:function(){return{cart:[],active:0,couponCode:"",coupon:{},couponStatus:null,payment:["WebATM","ATM","CVS","Barcode","Credit","ApplePay","GooglePay"],form:{name:"",email:"",tel:"",payment:"",message:""},rules:{name:[{required:!0,message:"請輸入姓名",trigger:"blur"}],tel:[{required:!0,message:"請輸入電話",trigger:"blur"}],email:[{required:!0,message:"請輸入email",trigger:"blur"},{type:"email",message:"請輸入正確的email格式",trigger:"blur"}],payment:[{required:!0,message:"請選擇付款方式",trigger:"change"}]},dialogVisible:!1,loading:!1}},created:function(){this.getCart()},methods:{getCart:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9999;this.loading=!0;var o="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping?paged=").concat(e);this.axios.get(o).then((function(e){t.cart=e.data.data,t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t?e.active++:console.log("error submit!!")}))},sendCouponCode:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/coupon/search");this.axios.post(e,{code:this.couponCode}).then((function(e){t.coupon=e.data.data,t.couponCode="",t.$notify({title:"恭喜～",message:"優惠券已存入購物車囉ヽ(●´∀`●)ﾉ",offset:150})})).catch((function(e){console.log(e),t.couponStatus=!1}))},deleteItem:function(t){var e=this;this.loading=!0;var o="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping/").concat(t);this.axios.delete(o).then((function(t){e.getCart(),e.$bus.$emit("updateCartNum")})).catch((function(t){console.log(t),e.loading=!1}))},deleteAll:function(){var t=this;this.loading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping/all/product");this.axios.delete(e).then((function(e){t.getCart(),t.$bus.$emit("updateCartNum")})).catch((function(e){console.log(e),t.loading=!1}))},openModal:function(t){var e=this;this.loading=!0,this.$refs.frontendProductModal.getProduct(t),setTimeout((function(){e.dialogVisible=!0,e.loading=!1}),1e3)}}},r=n,s=(o("6fe5"),o("2877")),l=Object(s["a"])(r,a,i,!1,null,null,null);e["default"]=l.exports},e67b:function(t,e,o){t.exports=o.p+"img/close.1e7ec9c9.svg"},e8b5:function(t,e,o){var a=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f2ac:function(t,e,o){},f956:function(t,e,o){"use strict";var a=o("f2ac"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-3a46c15a.390238b3.js.map