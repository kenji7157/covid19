/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{431:function(t,e,o){var content=o(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("088dc89c",content,!0,{sourceMap:!1})},433:function(t,e,o){"use strict";o.d(e,"a",(function(){return k})),o.d(e,"c",(function(){return r.a})),o.d(e,"b",(function(){return R}));var r=o(2);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function l(t,e){y(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(o){y(t.prototype,e.prototype,o)})),Object.getOwnPropertyNames(e).forEach((function(o){y(t,e,o)}))}function y(t,e,o){(o?Reflect.getOwnMetadataKeys(e,o):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var n=o?Reflect.getOwnMetadata(r,e,o):Reflect.getOwnMetadata(r,e);o?Reflect.defineMetadata(r,n,t,o):Reflect.defineMetadata(r,n,t)}))}var v={__proto__:[]}instanceof Array;function h(t){return function(e,o,r){var n="function"==typeof e?e:e.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof r&&(r=void 0),n.__decorators__.push((function(e){return t(e,o,r)}))}}function m(t,e){var o=e.prototype._init;e.prototype._init=function(){var e=this,o=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||o.push(r);o.forEach((function(o){"_"!==o.charAt(0)&&Object.defineProperty(e,o,{get:function(){return t[o]},set:function(e){t[o]=e},configurable:!0})}))};var data=new e;e.prototype._init=o;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var o=t.prototype;Object.getOwnPropertyNames(o).forEach((function(t){if("constructor"!==t)if(_.indexOf(t)>-1)e[t]=o[t];else{var r=Object.getOwnPropertyDescriptor(o,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var n=t.__decorators__;n&&(n.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),y=f instanceof r.a?f.constructor:r.a,v=y.extend(e);return x(v,t,y),d()&&l(v,t),v}var O={prototype:!0,arguments:!0,callee:!0,caller:!0};function x(t,e,o){Object.getOwnPropertyNames(e).forEach((function(r){if(!O[r]){var c=Object.getOwnPropertyDescriptor(t,r);if(!c||c.configurable){var f,d,l=Object.getOwnPropertyDescriptor(e,r);if(!v){if("cid"===r)return;var y=Object.getOwnPropertyDescriptor(o,r);if(f=l.value,d=n(f),null!=f&&("object"===d||"function"===d)&&y&&y.value===l.value)return}0,Object.defineProperty(t,r,l)}}}))}function j(t){return"function"==typeof t?w(t):function(e){return w(e,t)}}j.registerHooks=function(t){_.push.apply(_,f(t))};var k=j;var C="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function P(t,e,o){C&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,o)))}function R(t){return void 0===t&&(t={}),function(e,o){P(t,e,o),h((function(e,o){(e.props||(e.props={}))[o]=t}))(e,o)}}},437:function(t,e,o){"use strict";var r=o(431);o.n(r).a},438:function(t,e,o){(e=o(12)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},442:function(t,e,o){"use strict";var r=o(19),n=o(23),c=o(27),f=o(28),d=o(21),l=o(433),y=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},v=function(t){function e(){return Object(r.a)(this,e),Object(n.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(f.a)(e,t),e}(l.c);y([Object(l.b)({default:"",required:!1})],v.prototype,"title",void 0),y([Object(l.b)({default:"",required:!1})],v.prototype,"link",void 0),y([Object(l.b)({default:"",required:!1})],v.prototype,"body",void 0);var h=v=y([l.a],v),m=(o(437),o(9)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"TextCard"},[t.title?o("h3",{staticClass:"TextCard-Heading"},[t.link?o("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(t.title)+"\n    ")]):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?o("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?o("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},470:function(t,e,o){var content=o(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("016f019c",content,!0,{sourceMap:!1})},545:function(t,e,o){"use strict";var r=o(470);o.n(r).a},546:function(t,e,o){(e=o(12)(!1)).push([t.i,".Worker-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}",""]),t.exports=e},633:function(t,e,o){"use strict";o.r(e);var r={components:{TextCard:o(442).a},data:function(){return{items:[{title:"新型コロナウイルス感染症対応緊急融資",link:"https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html",body:"新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急融資制度です。融資限度額は2億8千万円で、信用保証料を都が全額補助します。"},{title:"新型コロナウイルスによる経営課題に関する専門家派遣",link:"https://www.tokyo-kosha.or.jp/topics/2003/0001.html",body:"新型コロナウイルス感染症により経営面の影響を受けている中小企業を対象に、中小企業診断士等の専門家を無料で派遣し、経営改善等に向けたアドバイスを実施します（1社あたり4回まで・無料）。"},{title:"事業継続緊急対策（テレワーク）助成金",link:"https://www.shigotozaidan.or.jp/koyo-kankyo/joseikin/kinkyutaisaku.html",body:"都内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します（限度額250万円、助成率10/10）。ぜひご活用ください。"},{title:"中小企業者等特別相談窓口",link:"https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html",body:"資金繰りに関する相談、経営に関する相談（東京都産業労働局 報道発表）"},{title:"緊急労働相談ダイヤル",link:"https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html",body:"新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメントなどについての相談（東京都産業労働局 報道発表）"},{title:"新しいワークスタイルや企業活動の東京モデル「スムーズビズ」",link:"https://smooth-biz.metro.tokyo.lg.jp/",body:"テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。"}]}},head:function(){return{title:"企業の皆様・はたらく皆様へ"}}},n=(o(545),o(9)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Worker"},[o("h2",{staticClass:"Worker-Heading"},[t._v("\n    "+t._s(t.$t("企業の皆様・はたらく皆様へ"))+"\n  ")]),t._v(" "),t._l(t.items,(function(e,i){return o("div",{key:i},[o("TextCard",{attrs:{title:t.$t(e.title),link:e.link,body:t.$t(e.body)}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);