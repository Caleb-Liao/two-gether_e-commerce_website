(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dae5e97"],{"1dde":function(t,e,a){var r=a("d039"),o=a("b622"),s=a("2d00"),n=o("species");t.exports=function(t){return s>=51||!r((function(){var e=[],a=e.constructor={};return a[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21bb":function(t,e,a){"use strict";var r=a("2dad"),o=a.n(r);o.a},"2dad":function(t,e,a){},3118:function(t,e,a){t.exports=a.p+"img/cartWhite.794f741e.svg"},6318:function(t,e,a){t.exports=a.p+"img/keyboard.7ecf7246.svg"},"65f0":function(t,e,a){var r=a("861d"),o=a("e8b5"),s=a("b622"),n=s("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?r(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var r=a("c04e"),o=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var n=r(e);n in t?o.f(t,n,s(0,a)):t[n]=a}},"99af":function(t,e,a){"use strict";var r=a("23e7"),o=a("d039"),s=a("e8b5"),n=a("861d"),i=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),v=a("2d00"),b=f("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=v>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),h=d("concat"),_=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:s(t)},y=!g||!h;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,r,o,s,n=i(this),d=u(n,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?n:arguments[e],_(s)){if(o=c(s.length),f+o>m)throw TypeError(p);for(a=0;a<o;a++,f++)a in s&&l(d,f,s[a])}else{if(f>=m)throw TypeError(p);l(d,f++,s)}return d.length=f,d}})},b48b:function(t,e,a){"use strict";var r=a("e50c"),o=a.n(r);o.a},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("button",{staticClass:"sidebarBtn",class:{sidebarBtn_open:1==t.sidebarMobileClose},on:{click:function(e){t.sidebarMobileClose=!1}}},[t._v("open")]),r("transition",{attrs:{name:"sidebar"}},[r("div",{staticClass:"sidebar",class:{sidebarMobile:t.sidebarMobileClose}},[r("button",{staticClass:"sidebarBtn",class:{sidebarBtn_close:0==t.sidebarMobileClose},on:{click:function(e){t.sidebarMobileClose=!0}}},[t._v("close")]),r("div",{staticClass:"logo"},[r("div",{staticStyle:{display:"flex"}},[r("div",[r("img",{attrs:{src:a("cf05"),alt:""}})]),r("h1",[t._v("Two - "),r("br"),t._v("Gether")])]),r("el-badge",{staticStyle:{float:"right"},attrs:{value:t.cartNum}},[r("router-link",{staticClass:"cartBtn",attrs:{to:"/cart"}},[t._v("我的購物車 "),r("img",{attrs:{src:a("e0f8"),alt:""}}),r("img",{attrs:{src:a("3118"),alt:""}})])],1)],1),r("div",{staticClass:"menu"},[r("ul",[r("li",[r("router-link",{attrs:{to:"/",exact:""}},[t._v("首頁")]),r("h5",[t._v("Home Page")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("關於我們")]),r("h5",[t._v("About Us")])],1),r("li",{staticClass:"products",on:{click:function(e){return t.$bus.$emit("reshowImg")}}},[r("router-link",{attrs:{to:"/products/all"}},[t._v("服務項目")]),r("h5",[t._v("Our Service")]),r("ul",{staticClass:"product"},t._l(t.categories,(function(e){return r("li",{key:e.name,attrs:{to:"/products"}},[r("router-link",{attrs:{to:"/products/"+e.value}},[t._v("/ "+t._s(e.name))])],1)})),0)],1),r("li",[r("router-link",{attrs:{to:"/order"}},[t._v("我的訂單")]),r("h5",[t._v("My Order")])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){t.drawer=!0}}},[t._v("線上客服")]),r("h5",[t._v("Customer Service")])])])]),r("div",{staticClass:"information"},[r("ul",{staticClass:"icon"},[r("li",[r("a",{attrs:{href:"https://github.com/Caleb-Liao/two-gether_e-commerce_website"}},[r("i",{staticClass:"fab fa-github fa-lg"})])]),r("li",[r("a",{attrs:{href:""}},[r("i",{staticClass:"fab fa-facebook fa-lg"})])]),r("li",[r("a",{attrs:{href:""}},[r("i",{staticClass:"fab fa-instagram fa-lg"})])])]),r("ul",[r("li",[r("a",{attrs:{href:"tel:0234567890"}},[r("i",{staticClass:"fas fa-phone-alt"}),t._v(" 02-34567890")])]),r("li",[r("a",{attrs:{href:"mailto:two_gether222@gmail.com"}},[r("i",{staticClass:"far fa-envelope"}),t._v(" two_gether222@gmail.com")])])]),r("p",[t._v("© 2020 TwoGether公司 版權所有")])])])]),r("div",{staticClass:"container"},[r("router-view")],1),r("chatmodal",{attrs:{drawer:t.drawer},on:{"close-modal":function(e){t.drawer=!1}}})],1)},o=[],s=(a("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-drawer",{attrs:{title:"智慧線上客服笨笨^_^",visible:t.drawer,"before-close":t.closeModal,size:"100%"},on:{"update:visible":function(e){t.drawer=e}}},[r("div",[r("p",[r("span",[t._v("笨笨：")])]),r("p",[t._v("Two-Gether慶開幕！結帳時輸入優惠碼「luv-2-gether」立即享９折優惠！！ "),r("br"),t._v("您好請問有什麼我可以幫助您的地方嗎？😄 ")]),t._l(t.msgBox,(function(e,a){return r("div",{key:e+a},[r("p",[r("span",[t._v("我：")]),r("br"),t._v(t._s(e.customerMsg))]),r("p",{domProps:{innerHTML:t._s(e.computerMsg)}})])}))],2),0==t.keyboardBtn?r("el-input",{staticClass:"messengeBox",attrs:{type:"textarea"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.sendMsg(e)}},model:{value:t.tempMsg,callback:function(e){t.tempMsg=e},expression:"tempMsg"}}):t._e(),1==t.keyboardBtn?r("div",{staticClass:"keyboard",on:{click:function(e){t.keyboardBtn=!1}}},[r("img",{attrs:{src:a("6318"),alt:""}})]):t._e()],1)}),n=[],i={data:function(){return{tempMsg:"",msgBox:[],keyboardBtn:!0}},props:{drawer:{type:Boolean,required:!0}},updated:function(){var t=document.querySelector(".el-drawer__body");t.scrollTop=t.scrollHeight},methods:{sendMsg:function(){var t=this;this.msgBox.push({customerMsg:this.tempMsg}),this.tempMsg="",setTimeout((function(){t.$set(t.msgBox[t.msgBox.length-1],"computerMsg","...輸入訊息中")}),500),setTimeout((function(){t.$set(t.msgBox[t.msgBox.length-1],"computerMsg","<span>笨笨：</span><br>不好意思笨笨在睡覺了&#128564;<br>再麻煩您撥打電話或寄信給我們喔～")}),2e3)},closeModal:function(){this.$emit("close-modal"),this.keyboardBtn=!0}}},c=i,l=(a("b48b"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,null,null),d=u.exports,f={components:{chatmodal:d},data:function(){return{drawer:!1,categories:[{name:"運動",value:"exercise"},{name:"吃飯",value:"eatout"},{name:"出遊",value:"hangout"},{name:"看電影",value:"movie"},{name:"玩桌遊",value:"boardgame"},{name:"加購區",value:"others"}],cartNum:0,sidebarMobileClose:!0}},created:function(){var t=this;this.getCartNum(),this.$bus.$on("updateCartNum",(function(){return t.getCartNum()}))},methods:{getCartNum:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9999,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("f6274412-caf4-4237-aca4-557a5d22b124","/ec/shopping?paged=").concat(e);this.axios.get(a).then((function(e){t.cartNum=e.data.data.length})).catch((function(t){console.log(t)}))}}},v=f,b=(a("21bb"),Object(l["a"])(v,r,o,!1,null,null,null));e["default"]=b.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.3671d307.png"},e0f8:function(t,e,a){t.exports=a.p+"img/cart.46a2dd4c.svg"},e50c:function(t,e,a){},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-7dae5e97.02e4ab02.js.map