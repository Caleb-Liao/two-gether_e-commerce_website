(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65f6a0cc"],{"159b":function(t,e,a){var o=a("da84"),r=a("fdbc"),c=a("17c2"),i=a("9112");for(var n in r){var l=o[n],s=l&&l.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(u){s.forEach=c}}},"17c2":function(t,e,a){"use strict";var o=a("b727").forEach,r=a("a640"),c=a("ae40"),i=r("forEach"),n=c("forEach");t.exports=i&&n?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var o=a("d039"),r=a("b622"),c=a("2d00"),i=r("species");t.exports=function(t){return c>=51||!o((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3895:function(t,e,a){},4160:function(t,e,a){"use strict";var o=a("23e7"),r=a("17c2");o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"65f0":function(t,e,a){var o=a("861d"),r=a("e8b5"),c=a("b622"),i=c("species");t.exports=function(t,e){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?o(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"6d09":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backendProducts"},[a("div",{staticClass:"productsTopBtn"},[a("div",{staticClass:"categoryBtn"},[a("span",[t._v("類別：")]),t._l(t.category,(function(e){return a("span",{key:e.value,staticClass:"category",class:{category_active:t.productsList===t.data[e.value]},on:{click:function(a){t.productsList=t.data[e.value]}}},[t._v(t._s(e.name))])}))],2),a("el-button",{on:{click:function(e){return t.openModal("new")}}},[t._v("新增產品")])],1),a("productmodal",{ref:"productModal",attrs:{"dialog-visible":t.dialogVisible,"is-new":t.isNew},on:{"dialog-cancel":function(e){t.dialogVisible=!1},update:t.getProducts}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.productsList}},[a("el-table-column",{attrs:{label:"圖片",width:"50"},scopedSlots:t._u([{key:"default",fn:function(t){return a("div",{},[a("el-image",{staticStyle:{width:"100%"},attrs:{src:t.row.imageUrl[0],"preview-src-list":t.row.imageUrl}})],1)}}])}),a("el-table-column",{attrs:{label:"名稱",prop:"title",width:"180",align:"center"}}),a("el-table-column",{attrs:{label:"性別",prop:"options.gender",width:"80",align:"center",sortable:""}}),a("el-table-column",{attrs:{label:"類別",prop:"category",align:"center",sortable:""}}),a("el-table-column",{attrs:{label:"地區",prop:"options.area",align:"center",sortable:""}}),a("el-table-column",{attrs:{label:"價格",prop:"price",width:"80",align:"right",sortable:""}}),a("el-table-column",{attrs:{label:"是否啟用",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[e.row.enabled?a("span",{staticStyle:{color:"#c02c38"}},[t._v("啟用")]):a("span",[t._v("未啟用")])])}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{click:function(a){return t.openModal("edit",e.row.id)}}},[t._v("編輯")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.deleteItem(e.row)}}},[t._v("刪除")])]}}])})],1)],1)},r=[],c=(a("99af"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"新增產品",visible:t.dialogVisible,top:"0","before-close":t.cancel},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"產品名稱"}},[a("el-input",{model:{value:t.tempProduct.title,callback:function(e){t.$set(t.tempProduct,"title",e)},expression:"tempProduct.title"}})],1),a("el-form-item",{attrs:{label:"產品類別"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"請選擇類別"},model:{value:t.tempProduct.category,callback:function(e){t.$set(t.tempProduct,"category",e)},expression:"tempProduct.category"}},t._l(t.category,(function(t){return a("el-option",{key:t.interest,attrs:{label:t.interest,value:t.interest}})})),1)],1),a("el-form-item",{attrs:{label:"性別"}},[a("el-radio-group",{model:{value:t.tempProduct.options.gender,callback:function(e){t.$set(t.tempProduct.options,"gender",e)},expression:"tempProduct.options.gender"}},t._l(t.gender,(function(t){return a("el-radio",{key:t.gender,attrs:{label:t.gender}})})),1)],1),a("el-form-item",{attrs:{label:"地區"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"請選擇地區"},model:{value:t.tempProduct.options.area,callback:function(e){t.$set(t.tempProduct.options,"area",e)},expression:"tempProduct.options.area"}},t._l(t.area,(function(t){return a("el-option",{key:t.city,attrs:{label:t.city,value:t.city}})})),1)],1),a("el-form-item",{attrs:{label:"售價"}},[a("el-input",{model:{value:t.tempProduct.price,callback:function(e){t.$set(t.tempProduct,"price",t._n(e))},expression:"tempProduct.price"}})],1),a("el-form-item",{attrs:{label:"產品內容"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tempProduct.content,callback:function(e){t.$set(t.tempProduct,"content",e)},expression:"tempProduct.content"}})],1),a("el-form-item",{attrs:{label:"產品描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tempProduct.description,callback:function(e){t.$set(t.tempProduct,"description",e)},expression:"tempProduct.description"}})],1),a("el-form-item",{attrs:{label:"上傳圖片"}},[a("el-image",{staticStyle:{width:"75%",height:"250px"},attrs:{src:t.tempProduct.imageUrl[0],"preview-src-list":t.tempProduct.imageUrl}}),a("el-input",{attrs:{placeholder:"請輸入圖片網址"},model:{value:t.tempProduct.imageUrl[0],callback:function(e){t.$set(t.tempProduct.imageUrl,0,e)},expression:"tempProduct.imageUrl[0]"}})],1),a("el-form-item",{attrs:{label:"是否啟用"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.tempProduct.enabled,callback:function(e){t.$set(t.tempProduct,"enabled",e)},expression:"tempProduct.enabled"}})],1),a("el-form-item",{staticClass:"productModalBtn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.updateProduct}},[t._v("儲存")]),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)}),i=[],n={data:function(){return{tempProduct:{title:"",category:"",content:"",description:"",price:"",options:{area:"",gender:""},enabled:!0,imageUrl:[]},category:[{interest:"運動"},{interest:"吃飯"},{interest:"出遊"},{interest:"玩桌遊"},{interest:"看電影"},{interest:"加購區"}],gender:[{gender:"男"},{gender:"女"}],area:[{city:"基隆市"},{city:"臺北市"},{city:"新北市"},{city:"桃園市"},{city:"新竹縣市"},{city:"苗栗縣"},{city:"臺中市"},{city:"彰化縣"},{city:"南投縣"},{city:"雲林縣"},{city:"嘉義縣市"},{city:"臺南市"},{city:"高雄市"},{city:"屏東縣"},{city:"宜蘭縣"},{city:"花蓮縣"},{city:"臺東縣"}]}},props:{dialogVisible:{type:Boolean,required:!0},isNew:{type:Boolean,required:!0}},methods:{cancel:function(){this.$emit("dialog-cancel")},getProduct:function(t){var e=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/admin/ec/product/").concat(t);this.axios.get(a).then((function(t){e.tempProduct=t.data.data})).catch((function(t){console.log("錯誤:",t)}))},updateProduct:function(){var t=this,e="",a="";this.isNew?(e="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/admin/ec/product"),a="post"):this.isNew||(e="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/admin/ec/product/").concat(this.tempProduct.id),a="patch"),this.axios[a](e,this.tempProduct).then((function(){t.cancel(),t.$emit("update")})).catch((function(t){console.log("錯誤:",t)}))}}},l=n,s=(a("6e34"),a("2877")),u=Object(s["a"])(l,c,i,!1,null,null,null),d=u.exports,p={name:"backendProducts",components:{productmodal:d},data:function(){return{dialogVisible:!1,productsList:[],isNew:!0,loading:!1,category:[{name:"全部",value:"all"},{name:"運動",value:"exercise"},{name:"吃飯",value:"eatout"},{name:"出遊",value:"hangout"},{name:"玩桌遊",value:"boardgame"},{name:"看電影",value:"movie"},{name:"加購區",value:"others"}],data:{all:[],exercise:[],eatout:[],hangout:[],boardgame:[],movie:[],others:[]}}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:99999;this.loading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/admin/ec/products?paged=").concat(e);this.axios.get(a).then((function(e){t.data.all=e.data.data,t.data.all.forEach((function(e){var a=e.category;switch(a){case"運動":a="exercise";break;case"吃飯":a="eatout";break;case"出遊":a="hangout";break;case"玩桌遊":a="boardgame";break;case"看電影":a="movie";break;case"加購區":a="others";break;default:break}t.data[a].push(e)})),t.productsList=t.data.all,t.loading=!1})).catch((function(t){console.log("錯誤:",t)}))},openModal:function(t,e){var a=this;switch(t){case"new":this.$refs.productModal.tempProduct={options:{area:"",gender:""},imageUrl:[]},this.isNew=!0,this.dialogVisible=!0;break;case"edit":this.$refs.productModal.getProduct(e),this.isNew=!1,this.loading=!0,setTimeout((function(){a.dialogVisible=!0,a.loading=!1}),1500);break;default:break}},deleteItem:function(t){var e=this;this.$confirm("確定要刪除 ".concat(t.title," 嗎？"),"提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"刪除成功!"}),e.loading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/admin/ec/product/").concat(t.id);e.axios.delete(a).then((function(){e.getProducts()}))})).catch((function(){}))}}},f=p,m=(a("b6f1"),Object(s["a"])(f,o,r,!1,null,null,null));e["default"]=m.exports},"6e34":function(t,e,a){"use strict";var o=a("3895"),r=a.n(o);r.a},8418:function(t,e,a){"use strict";var o=a("c04e"),r=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var i=o(e);i in t?r.f(t,i,c(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var o=a("23e7"),r=a("d039"),c=a("e8b5"),i=a("861d"),n=a("7b0b"),l=a("50c4"),s=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),f=a("2d00"),m=p("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:c(t)},P=!g||!v;o({target:"Array",proto:!0,forced:P},{concat:function(t){var e,a,o,r,c,i=n(this),d=u(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(c=-1===e?i:arguments[e],y(c)){if(r=l(c.length),p+r>b)throw TypeError(h);for(a=0;a<r;a++,p++)a in c&&s(d,p,c[a])}else{if(p>=b)throw TypeError(h);s(d,p++,c)}return d.length=p,d}})},a640:function(t,e,a){"use strict";var o=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&o((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var o=a("83ab"),r=a("d039"),c=a("5135"),i=Object.defineProperty,n={},l=function(t){throw t};t.exports=function(t,e){if(c(n,t))return n[t];e||(e={});var a=[][t],s=!!c(e,"ACCESSORS")&&e.ACCESSORS,u=c(e,0)?e[0]:l,d=c(e,1)?e[1]:void 0;return n[t]=!!a&&!r((function(){if(s&&!o)return!0;var t={length:-1};s?i(t,1,{enumerable:!0,get:l}):t[1]=1,a.call(t,u,d)}))}},b44c:function(t,e,a){},b6f1:function(t,e,a){"use strict";var o=a("b44c"),r=a.n(o);r.a},b727:function(t,e,a){var o=a("0366"),r=a("44ad"),c=a("7b0b"),i=a("50c4"),n=a("65f0"),l=[].push,s=function(t){var e=1==t,a=2==t,s=3==t,u=4==t,d=6==t,p=5==t||d;return function(f,m,b,h){for(var g,v,y=c(f),P=r(y),x=o(m,b,3),w=i(P.length),k=0,S=h||n,L=e?S(f,w):a?S(f,0):void 0;w>k;k++)if((p||k in P)&&(g=P[k],v=x(g,k,y),t))if(e)L[k]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:l.call(L,g)}else if(u)return!1;return d?-1:s||u?u:L}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},e8b5:function(t,e,a){var o=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-65f6a0cc.66a0db8b.js.map