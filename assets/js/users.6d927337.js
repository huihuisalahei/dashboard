(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var a=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"159b":function(t,e,n){var a=n("da84"),s=n("fdbc"),i=n("17c2"),r=n("9112");for(var l in s){var o=a[l],c=o&&o.prototype;if(c&&c.forEach!==i)try{r(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,s=n("b301");t.exports=s("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},3783:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[t._v("Permissions")])]),n("p",[t._v("Not yet!")])])}],i={name:"permissions"},r=i,l=n("2877"),o=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},"3a25":function(t,e,n){"use strict";var a=n("b10a"),s=n.n(a);s.a},"4c7a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[t.selections.length?n("h1",{staticClass:"title"},[t._v(t._s(t.selections.length)+" 个被选中")]):n("h1",{staticClass:"title"},[t._v(t._s(t.total)+" 个用户")]),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.selections.length,expression:"selections.length"}],staticClass:"action"},[n("li",[n("a",{staticClass:"icon-before icon-checkmark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleToggleSelection(!0)}}})]),n("li",[n("a",{staticClass:"icon-before icon-blocked",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleToggleSelection(!1)}}})]),n("li",[n("a",{staticClass:"icon-before icon-bin",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleDeleteSelection(e)}}})])])]),n("form",{staticClass:"search icon-before icon-search",on:{submit:function(e){return e.preventDefault(),t.handleSearch(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"}},[t._v("Add user")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.users,"element-loading-text":"Loading..."},on:{"selection-change":t.handleSelectionChange,"filter-change":t.handleFilterChange,"sort-change":t.handleSortChange}},[n("el-table-column",{attrs:{type:"selection"}}),n("el-table-column",{attrs:{prop:"username",label:"Username","min-width":"180",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"user-info"},[n("img",{attrs:{src:e.row.meta.avatar,alt:"scope.row.name"}}),n("div",{staticClass:"names"},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(e.row.username))]),n("span",[t._v(t._s(e.row.name))])],1)])]}}])}),n("el-table-column",{attrs:{prop:"status",label:"Status",width:"120",align:"center",filters:t.filters.status,"column-key":"status"},scopedSlots:t._u([{key:"default",fn:function(e){return["activated"===e.row.status?n("i",{staticClass:"status status-primary",attrs:{title:"Activated"},on:{click:function(n){return t.handleToggleStatus(e.row)}}}):"email-unactivated"===e.row.status?n("i",{staticClass:"status status-warning",attrs:{title:"Email Unactivated"}}):"phone-unactivated"===e.row.status?n("i",{staticClass:"status status-warning",attrs:{title:"Phone Unactivated"}}):"forbidden"===e.row.status?n("i",{staticClass:"status status-danger",attrs:{title:"Forbidden"},on:{click:function(n){return t.handleToggleStatus(e.row)}}}):t._e()]}}])}),n("el-table-column",{attrs:{prop:"email",label:"Email",width:"200",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"phone",label:"Mobile",width:"140",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"roles",label:"Role",width:"240",filters:t.filters.roles,"column-key":"roles"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.roles,(function(e){return n("el-tag",{key:e,attrs:{type:"success"}},[t._v(t._s(e))])}))}}])})],1),n("el-pagination",{attrs:{total:t.total,"page-size":t.size,"current-page":t.page,"page-sizes":[20,30,50],layout:"total, sizes, prev, pager, next"},on:{"size-change":t.handlePageSizeChange,"current-change":t.handleCurrentPageChange}})],1)},s=[],i=(n("4de4"),n("d81d"),n("4e82"),n("ac1f"),n("841c"),n("159b"),{name:"users",data:function(){var t={status:[{text:"已激活",value:"activated"},{text:"邮箱未激活",value:"email-unactivated"},{text:"手机未激活",value:"phone-unactivated"},{text:"已禁用",value:"forbidden"}],roles:[{text:"管理员",value:"administrator"},{text:"作者",value:"author"},{text:"编辑",value:"editor"},{text:"协同者",value:"contributor"},{text:"订阅者",value:"subscriber"}]};return{users:[],selections:[],total:0,size:20,page:1,search:"",sort:"",order:"",filter:{},filters:t,loading:!1}},created:function(){this.loadUsers()},methods:{loadUsers:function(){var t=this;this.loading=!0;var e={_page:this.page,_limit:this.size};return this.sort&&(e._sort=this.sort),this.order&&(e._order=this.order),this.search&&(e.q=this.search),Object.assign(e,this.filter),this.$services.user.get({params:e}).then((function(e){t.users=e.data,t.total=e.headers["x-total-count"]-0,t.loading=!1})).catch((function(e){console.error(e),t.loading=!1}))},handleCurrentPageChange:function(t){this.page=t,this.loadUsers()},handlePageSizeChange:function(t){this.size=t,this.loadUsers()},handleSortChange:function(t){this.sort=t.prop,t.order&&(this.order="ascending"===t.order?"ASC":"DESC"),this.loadUsers()},handleFilterChange:function(t){Object.assign(this.filter,t),this.loadUsers()},handleSearch:function(){this.loadUsers()},handleToggleStatus:function(t){var e="forbidden"===t.status?"activated":"forbidden";this.$services.user.patch(t.id,{status:e}).then((function(e){return Object.assign(t,e.data)}))},handleDeleteSelection:function(){var t=this;this.$confirm("此操作将永久删除选中用户, 是否继续?").then((function(){return t.selections.map((function(e){return t.$services.user.delete(e.id)}))})).then((function(){return t.loadUsers()})).catch((function(t){return console.error(t)}))},handleToggleSelection:function(t){var e=this,n=t?"activated":"forbidden";this.selections.forEach((function(t){return e.$services.user.patch(t.id,{status:n}).then((function(e){return Object.assign(t,e.data)}))}))},handleSelectionChange:function(t){this.selections=t}}}),r=i,l=(n("3a25"),n("2877")),o=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},"4de4":function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").filter,i=n("d039"),r=n("1dde"),l=r("filter"),o=l&&!i((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));a({target:"Array",proto:!0,forced:!l||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,n){"use strict";var a=n("23e7"),s=n("1c0b"),i=n("7b0b"),r=n("d039"),l=n("b301"),o=[],c=o.sort,u=r((function(){o.sort(void 0)})),d=r((function(){o.sort(null)})),h=l("sort"),f=u||!d||h;a({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),s(t))}})},"841c":function(t,e,n){"use strict";var a=n("d784"),s=n("825a"),i=n("1d80"),r=n("129f"),l=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var i=s(t),o=String(this),c=i.lastIndex;r(c,0)||(i.lastIndex=0);var u=l(i,o);return r(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var a=n("ad6d"),s=n("9f7f"),i=RegExp.prototype.exec,r=String.prototype.replace,l=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var e,n,s,l,d=this,h=c&&d.sticky,f=a.call(d),v=d.source,p=0,g=t;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,p++),n=new RegExp("^(?:"+v+")",f)),u&&(n=new RegExp("^"+v+"$(?!\\s)",f)),o&&(e=d.lastIndex),s=i.call(h?n:d,g),h?s?(s.input=s.input.slice(p),s[0]=s[0].slice(p),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:o&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&r.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),t.exports=l},"9f7f":function(t,e,n){"use strict";var a=n("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a76d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[t._v("Roles")])]),n("p",[t._v("Not yet!")])])}],i={name:"roles"},r=i,l=n("2877"),o=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},ac1f:function(t,e,n){"use strict";var a=n("23e7"),s=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b10a:function(t,e,n){},b3b1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page"},[n("hgroup",[n("h1",{staticClass:"title"},[n("a",{attrs:{href:"#",title:"我的个人资料"}},[t._v("我的个人资料")])]),n("h2",{staticClass:"heading"},[t._v("十年专业锅炉工程师（请勿当真，just for fun！）")])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("基本资料")]),n("div",{staticClass:"content"},[n("ul",{staticClass:"two-column"},[n("li",[t._v("姓名：汪磊")]),n("li",[t._v("工作经验：十年")]),n("li",[t._v("联系邮箱："),n("a",{attrs:{href:"mailto:w@zce.me"}},[t._v("w@zce.me")])]),n("li",[t._v("联系电话：138-8888-8888")])])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("专业技能")]),n("div",{staticClass:"content"},[n("ol",[n("li",[t._v("精通 Firework、Dreamweaver、Illustrator 、Photoshop、Flash 等设计相关软件；")]),n("li",[t._v("精通 W3C 标准及规范，熟练使用 XHTML / CSS 独立完成整站开发；")])])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("项目经验")]),n("div",{staticClass:"content"},[n("ol",[n("li",[n("h3",[t._v("XXX项目（"),n("time",[t._v("2014/03--2014/04")]),t._v("）")]),n("ul",[n("li",[n("h5",[t._v("项目介绍")]),n("p",[t._v("很牛叉的项目，翔天商贸是国际物流行业一家专门从事进出口服饰贸易的公司。公司总部位香港，业务遍及欧美。随着公司不断发展壮大，旧的信息系统已无法满足公司的快速发展需求，妨碍公司成长，在此背景下，公司领导决定研发《翔天商贸综合管理平台》。 《翔天商贸综合管理平台》分三期完成。一期完成仓储管理（包括：采购单、仓库、货物、条形码、入库、出库、退货、盘点、库存、库存上限报警、统计查询）和展会管理（包括：展会管理、出单管理），形成货物统一数字化管理。二期完成货运全流程管理，包括购销合同、出货表统计、出口报运单、装箱单、委托书、发票、财务统计等。三期完成决策分析（包括：成本分析图、销售情况统计、重点客户、经营情况同期比对统计、工作绩效），为公司经营决策提供数据支持。 ")])]),n("li",[n("h5",[t._v("开发环境")]),n("p",[t._v("Windows 7、Visual Studio 2010、MySQL、SVN、NuGet")])]),n("li",[n("h5",[t._v("技术选型")]),n("p",[t._v("ASP.NET MVC、Unity、Entity Framework、NLog、Memcache、WCF、WebAPI、SignalR、Dapper、HTML5、ZeptoJS、jQuery、AngularJS")])]),n("li",[n("h5",[t._v("职责领域")]),n("ul",[n("li",[t._v("锅炉1")]),n("li",[t._v("锅炉2")]),n("li",[t._v("锅炉3")]),n("li",[t._v("锅炉4")]),n("li",[t._v("锅炉5")])])]),n("li",[n("h5",[t._v("相关链接")]),n("p",[t._v("项目线上地址：http://www.wedn.net")])])])])])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("工作经历")]),n("div",{staticClass:"content"},[n("ol",[n("li",[n("span",[t._v("2012/05 -- 至今")]),n("span",[t._v("阿里巴巴")]),n("span",[t._v("烧锅炉")])]),n("li",[n("span",[t._v("2011/07 -- 2012/04")]),n("span",[t._v("腾讯")]),n("span",[t._v("保安")])]),n("li",[n("span",[t._v("2000/01 -- 2005/01")]),n("span",[t._v("百度")]),n("span",[t._v("保洁")])])])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("Follow me")]),n("div",{staticClass:"content"},[n("ul",[n("li",[n("strong",[t._v("GitHub")]),t._v("：https://github.com/zce")]),n("li",[n("strong",[t._v("Blog")]),t._v("：https://blog.zce.me")]),n("li",[n("strong",[t._v("etc...")])])])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("我的态度")]),n("div",{staticClass:"content"},[n("p",[t._v("致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列...")])])]),n("section",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v("最想做的事儿")]),n("div",{staticClass:"content"},[n("ol",[n("li",[t._v("个人知识体系建设及分享；")]),n("li",[t._v("放开视野，提高层面，为未来投资；")])])])])])}],i={name:"profile"},r=i,l=(n("fb00"),n("2877")),o=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=o.exports},d784:function(t,e,n){"use strict";var a=n("6eeb"),s=n("d039"),i=n("b622"),r=n("9263"),l=n("9112"),o=i("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var f=i(t),v=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=v&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!v||!p||"replace"===t&&(!c||!u)||"split"===t&&!d){var g=/./[f],_=n(f,""[t],(function(t,e,n,a,s){return e.exec===r?v&&!s?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),m=_[0],b=_[1];a(String.prototype,t,m),a(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}h&&l(RegExp.prototype[f],"sham",!0)}},f022:function(t,e,n){},fb00:function(t,e,n){"use strict";var a=n("f022"),s=n.n(a);s.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);