(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf02103e"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,E=x?"$":"$0";return[function(n,r){var i=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!x&&m||"string"===typeof r&&-1===r.indexOf(E)){var a=n(e,t,this,r);if(a.done)return a.value}var s=i(t),p=String(this),h="function"===typeof r;h||(r=String(r));var v=s.global;if(v){var _=s.unicode;s.lastIndex=0}var w=[];while(1){var R=u(s,p);if(null===R)break;if(w.push(R),!v)break;var $=String(R[0]);""===$&&(s.lastIndex=l(p,o(s.lastIndex),_))}for(var S="",k=0,C=0;C<w.length;C++){R=w[C];for(var y=String(R[0]),A=d(f(c(R.index),p.length),0),I=[],P=1;P<R.length;P++)I.push(g(R[P]));var T=R.groups;if(h){var U=[y].concat(I,A,p);void 0!==T&&U.push(T);var O=String(r.apply(void 0,U))}else O=b(y,p,A,I,T,r);A>=k&&(S+=p.slice(k,A)+O,k=A+y.length)}return S+p.slice(k)}];function b(t,n,r,i,o,c){var s=r+t.length,l=i.length,u=v;return void 0!==o&&(o=a(o),u=h),e.call(c,u,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):e}c=i[u-1]}return void 0===c?"":c}))}}))},"5c3a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("el-container",[n("el-container",[n("el-aside",[n("navmenu",{on:{signout:t.signout}})],1),n("el-main",[n("router-view")],1)],1)],1)],1)},i=[],a=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navmenu"},[n("el-col",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,collapse:t.windowWidth<1200,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("div",[n("el-menu-item",{attrs:{index:"/admin"}},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 首頁 ")])]),n("el-menu-item",{attrs:{index:"/admin/products"}},[n("i",{staticClass:"el-icon-folder"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 產品列表 ")])]),n("el-menu-item",{attrs:{index:"/admin/coupons"}},[n("i",{staticClass:"el-icon-star-on"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 優惠券 ")])]),n("el-menu-item",{attrs:{index:"/admin/orders"}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 訂單列表 ")])]),n("el-menu-item",{attrs:{index:"/admin/test"}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 模擬下單系統 ")])])],1),n("div",[n("el-menu-item",{on:{click:t.signout}},[n("i",{staticClass:"el-icon-switch-button"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 登出 ")])])],1)])],1)],1)}),o=[],c={name:"navmenu",data:function(){return{windowWidth:window.innerWidth}},mounted:function(){var t=this;window.onresize=function(){t.windowWidth=window.innerWidth}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},signout:function(){this.$emit("signout")}}},s=c,l=(n("a01c"),n("2877")),u=Object(l["a"])(s,a,o,!1,null,null,null),d=u.exports,f={name:"dashboard",components:{navmenu:d},data:function(){return{token:"",checkSuccess:!1}},created:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token);var e="".concat("https://course-ec-api.hexschool.io","/api/auth/check");this.axios.post(e,{api_token:this.token}).then((function(e){e.data.success&&(t.checkSuccess=!0)})).catch((function(e){console.log(e),t.$router.push("/login")}))},methods:{signout:function(){document.cookie="token=;expires=;path=/",this.$router.push("/login")}}},p=f,h=(n("99db"),Object(l["a"])(p,r,i,!1,null,null,null));e["default"]=h.exports},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(c=function(t){var e,n,i,c,d=this,f=l&&d.sticky,p=r.call(d),h=d.source,v=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),s&&(e=d.lastIndex),i=a.call(f?n:d,g),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:s&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"99db":function(t,e,n){"use strict";var r=n("a03b"),i=n.n(r);i.a},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a01c:function(t,e,n){"use strict";var r=n("fa16"),i=n.n(r);i.a},a03b:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=a(t),v=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var x=/./[h],m=n(h,""[t],(function(t,e,n,r,i){return e.exec===o?v&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=m[0],b=m[1];r(String.prototype,t,E),r(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&c(RegExp.prototype[h],"sham",!0)}},fa16:function(t,e,n){}}]);
//# sourceMappingURL=chunk-bf02103e.3abe9c25.js.map