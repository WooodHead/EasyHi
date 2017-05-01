webpackJsonp([68],{1072:function(e,t,r){var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal-item",{class:e.classes.content,attrs:{footer:!0,disabled:!e.confirmable,confirmText:"生成"+(e.typeIndex?"现金":"体验")+"券",full:!0,transition:!0,confirm:e.confirmModal}},[r("div",{staticClass:"modal-body",style:{height:e.height},slot:"body"},[r("ul",{staticClass:"list-unstyled"},[r("li",{class:{"has-error":e.$v.voucherName.$error}},[r("div",{staticClass:"input-group input-group-primary"},[r("div",{staticClass:"input-group-addon required"},[e._v(e._s(e.voucherTypeName)+"名称")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.voucherName,expression:"voucherName"}],staticClass:"form-control",attrs:{placeholder:"不超过8个字"},domProps:{value:e.voucherName},on:{input:function(t){t.target.composing||(e.voucherName=t.target.value)}}})]),r("div",{staticClass:"form-control-static"},[e._v("请输入正确的券名称")])]),r("li",{class:{"has-error":e.$v.voucherValue.$error}},[r("div",{staticClass:"input-group input-group-primary"},[r("div",{staticClass:"input-group-addon required"},[e._v(e._s(e.voucherTypeName)+"面值")]),r("input",{directives:[{name:"money",rawName:"v-money",value:e.voucherValue,expression:"voucherValue"}],staticClass:"form-control",attrs:{placeholder:"不超过100000"}}),r("div",{staticClass:"input-group-addon"},[e._v("元")])]),r("div",{staticClass:"form-control-static"},[e._v("请输入正确的券面值")])]),e.typeIndex?r("li",{class:{"has-error":e.$v.miniConsume.$error}},[r("div",{staticClass:"input-group input-group-primary"},[r("div",{staticClass:"input-group-addon required"},[e._v("最低消费限制")]),r("input",{directives:[{name:"money",rawName:"v-money",value:e.miniConsume,expression:"miniConsume"}],staticClass:"form-control",attrs:{placeholder:"不超过100000"}}),r("div",{staticClass:"input-group-addon"},[e._v("元")])]),r("div",{staticClass:"form-control-static"},[e._v("请输入正确的券消费限制")])]):[r("li",{class:{"has-error":e.$v.voucherTimes.$error}},[r("div",{staticClass:"input-group input-group-primary"},[r("div",{staticClass:"input-group-addon required"},[e._v("体验券次数")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.voucherTimes,expression:"voucherTimes"}],staticClass:"form-control",attrs:{placeholder:"1-100内的整数"},domProps:{value:e.voucherTimes},on:{input:function(t){t.target.composing||(e.voucherTimes=t.target.value)}}}),r("div",{staticClass:"input-group-addon"},[e._v("元")])]),r("div",{staticClass:"form-control-static"},[e._v("请输入正确的体验券次数")])]),r("li",{class:{"has-error":e.$v.voucherExpiredLimit.$error}},[r("div",{staticClass:"input-group input-group-primary",class:e.classes.expire},[r("div",[r("div",{staticClass:"input-group-addon required"},[e._v("适用课程")])]),r("div",[r("ul",{staticClass:"list-unstyled",class:e.classes.courses},[r("li",[r("button",{staticClass:"btn",class:"btn-theme-"+(e.activeAllCourses?"primary":"default"),on:{click:e.toggleAllCourses}},[e._v("全部课程")])]),e._l(e.courses,function(t){var o=t.courseId,i=t.courseName;return r("li",[r("button",{staticClass:"btn",class:"btn-theme-"+(e.applicableCourses.includes(o)?"primary":"default"),on:{click:function(t){e.toggleActiveCourse(o)}}},[e._v(e._s(i))])])})],2)])]),r("div",{staticClass:"form-control-static"},[e._v("券有效期应是1-100的整数")])])],r("li",{class:{"has-error":e.$v.voucherExpiredLimit.$error}},[r("div",{staticClass:"input-group input-group-primary",class:e.classes.expire},[r("div",[r("div",{staticClass:"input-group-addon required"},[e._v("券有效期")])]),r("div",[e.voucherExpiredType?r("span",{on:{click:function(t){(e.picking=!0)&&e.chooseExpiredDates()}}},[e._v(e._s(e.expiredRange))]):r("span",[e._v("有效期"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.voucherExpiredLimit,expression:"voucherExpiredLimit"}],staticClass:"border-b",attrs:{type:"number"},domProps:{value:e.voucherExpiredLimit},on:{input:function(t){t.target.composing||(e.voucherExpiredLimit=t.target.value)},blur:function(t){e.$forceUpdate()}}}),e._v("天")]),r("span",{staticClass:"pull-right",on:{click:e.changeExpired}},[e._v(e._s(e.voucherExpiredType?"指定有效期":"从领券成功开始计算")),r("span",{staticClass:"iconfont icon-arrow-down remark-color"})])])]),r("div",{staticClass:"form-control-static"},[e._v("券有效期应是1-100的整数")])])],2)])])},i=[];e.exports=function(e){return e=e||{},e.render=o,e.staticRenderFns=i,e}},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(565),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=r(566)({name:"modal-item",props:{id:[Number,String],header:[Boolean,String],disabled:Boolean,footer:Boolean,border:{type:Boolean,default:!0},full:Boolean,transition:[Boolean,String],close:Function,confirm:Function,confirmText:String,cancelText:String,beforeEnter:Function,afterEnter:Function,enterCancelled:Function,beforeLeave:Function,afterLeave:Function,leaveCancelled:Function},data:function(){return{classes:s.default}},computed:{label:function(){var e=this.header;return(0,o.isBlankStr)(e)?"&nbsp;":e}},methods:{closeModal:function(){this.close?this.close.apply(this,arguments):this.$modal.close(this.id||(0,o.warn)("there is no modal id found, then the current modal will be close!"))},confirmModal:function(){this.footer&&this.disabled||(this.confirm?this.confirm.apply(this,arguments):(0,o.error)("you should handle the click event on the confirm btn by yourself!"))}}}),e.exports=t.default},564:function(e,t,r){t=e.exports=r(60)(!1),t.push([e.i,".modal-open{overflow:hidden}.modal-open ._1vYhyyh2j-sWpshW8OtYcE{overflow-x:hidden;overflow-y:auto}._1vYhyyh2j-sWpshW8OtYcE{position:fixed;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:1050;-webkit-overflow-scrolling:touch;pointer-events:none;outline:0}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-content{border:0;border-radius:0;box-shadow:none}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-body,._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-header{padding:0}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-body{overflow-y:auto}._1vYhyyh2j-sWpshW8OtYcE .modal-dialog{position:relative;width:auto;margin:0 auto;pointer-events:auto;max-width:64rem}._1vYhyyh2j-sWpshW8OtYcE .modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:.375rem;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}._1vYhyyh2j-sWpshW8OtYcE .modal-header{padding:.625rem;border-bottom:1px solid #e5e5e5}._1vYhyyh2j-sWpshW8OtYcE .modal-header .close{position:relative;z-index:10;margin-top:-.125rem}._1vYhyyh2j-sWpshW8OtYcE .modal-title{margin:0;line-height:1.428571428571429}._1vYhyyh2j-sWpshW8OtYcE .modal-body{position:relative;padding:.625rem}._1vYhyyh2j-sWpshW8OtYcE .modal-footer{padding:.625rem;display:-webkit-box;display:flex}._1vYhyyh2j-sWpshW8OtYcE .modal-footer .btn{-webkit-box-flex:1;flex:1;font-size:1.25rem}._1vYhyyh2j-sWpshW8OtYcE .modal-footer .btn+.btn{margin-left:.625rem}",""]),t.locals={modal:"_1vYhyyh2j-sWpshW8OtYcE",full:"_100HYkVk34Y065AS1QwPI1"}},565:function(e,t,r){var o=r(564);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;r(153)(o,i);o.locals&&(e.exports=o.locals)},566:function(e,t,r){var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:!0===e.transition?"bounce":e.transition||void 0},on:{"before-enter":function(t){return e.beforeEnter&&e.beforeEnter(t)},"after-enter":function(t){return e.afterEnter&&e.afterEnter(t)},"enter-cancelled":function(t){return e.enterCancelled&&e.enterCancelled(t)},"before-leave":function(t){return e.beforeLeave&&e.beforeLeave(t)},"after-leave":function(t){return e.afterLeave&&e.afterLeave(t)},"leave-cancelled":function(t){return e.leaveCancelled&&e.leaveCancelled(t)}}},[r("div",{class:[e.classes.modal,(o={},o[e.classes.full]=e.full,o)],attrs:{id:e.id}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[e.$slots.header?r("div",{staticClass:"modal-header",class:(i={},i["border-b"]=e.border,i)},[e._t("header")],2):e.label?r("div",{staticClass:"modal-header",class:(s={},s["border-b"]=e.border,s)},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closeModal}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")]),r("span",{staticClass:"sr-only"},[e._v("关闭")])]),r("h4",{staticClass:"modal-title",domProps:{innerHTML:e._s(e.label)}})]):e._e(),e.$slots.body?e._t("body"):r("div",{staticClass:"modal-body"},[e._t("default")],2),e.$slots.footer?r("div",{staticClass:"modal-footer",class:(n={},n["border-t"]=e.border,n)},[e._t("footer")],2):e.footer?r("div",{staticClass:"modal-footer",class:(a={},a["border-t"]=e.border,a)},[r("div",{staticClass:"btn btn-theme-default",on:{click:e.closeModal}},[e._v(e._s(e.cancelText||"取消"))]),r("div",{staticClass:"btn",class:e.disabled?"btn-disabled-primary":"btn-theme-primary",on:{click:e.confirmModal}},[e._v(e._s(e.confirmText||"确定"))])]):e._e()],2)])])]);var o,i,s,n,a},i=[];e.exports=function(e){return e=e||{},e.render=o,e.staticRenderFns=i,e}},789:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function o(i,s){try{var n=t[i](s),a=n.value}catch(e){return void r(e)}if(!n.done)return Promise.resolve(a).then(function(e){o("next",e)},function(e){o("throw",e)});e(a)}return o("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(37),l=o(a),c=r(48),u=r(563),d=o(u),p=r(1),h=r(963),v=o(h);t.default=r(1072)({props:{confirm:Function,courses:Array,typeIndex:Number},data:function(){return{classes:v.default,voucherName:null,voucherValue:null,voucherTimes:null,miniConsume:this.typeIndex?null:0,voucherExpiredType:!1,voucherExpiredLimit:7,voucherExpiredRange:[],applicableCourses:[],picking:!1}},computed:n({},(0,c.mapGetters)(["rem","winHeight"]),{height:function(){return this.winHeight-64*this.rem+"px"},expiredRange:function(){return this.voucherExpiredRange.map(function(e){return(0,p.formatDate)(e,p.DATE_FORMAT2)}).join("至")},confirmable:function(){return this.voucherName&&this.voucherValue&&(this.typeIndex?this.miniConsume:this.voucherTimes&&this.applicableCourses.length)},activeAllCourses:function(){return this.applicableCourses.length===this.courses.length},voucherTypeName:function(){return(this.typeIndex?"现金":"体验")+"券"}}),methods:{toggleAllCourses:function(){this.applicableCourses=this.activeAllCourses?[]:this.courses.map(function(e){return e.courseId})},toggleActiveCourse:function(e){(0,p.remove)(this.applicableCourses,e)||this.applicableCourses.push(e)},changeExpired:function(){var e=this;(0,p.picker)({pickers:[{defaultIndex:+this.voucherExpiredType,values:["从领券成功开始计算","指定有效期"]}],close:function(){e.picking=!1,e.$modal.close(p.PICKER_ID)},confirm:function(t){e.$modal.close(p.PICKER_ID);var r=2===e.voucherExpiredRange.length;(e.picking=t&&!r)||e.expiredChanged(t)}},{destroyed:this.chooseExpiredDates})},chooseExpiredDates:function(){var e=this;this.picking&&(0,p.datePicker)({pickerTabs:!0,confirm:function(t,r){if(!(0,p.isAfterToday)((0,l.default)(t).add(1,"milliseconds"))||t>r)return(0,p.alert)("请选择正确的起止日期");e.$modal.close(p.PICKER_ID),e.voucherExpiredRange=[t,r],e.expiredChanged(!0)}},this.voucherExpiredRange[0])},expiredChanged:function(e){this.voucherExpiredType=e},confirmModal:function(){function e(){return t.apply(this,arguments)}var t=s(regeneratorRuntime.mark(function e(){var t,r,o,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.voucherExpiredType&&this.$v.voucherExpiredLimit.$reset(),this.typeIndex?this.$v.voucherTimes.reset():this.$v.miniConsume.$reset(),!this.$v.$error){e.next=5;break}return e.abrupt("return");case 5:return t=void 0,this.typeIndex||(t="面值"+this.voucherTimes+"元, 适用于"+this.courses.filter(function(e){var t=e.courseId;return s.applicableCourses.includes(t)}).map(function(e){return e.courseName}).join("、")+"。"),r=p.pick.apply(void 0,[this,"voucherName","voucherValue","voucherExpiredType","voucherExpiredLimit","voucherExpiredRange"].concat(i(this.typeIndex?["miniConsume"]:["voucherTimes","applicableCourses"]))),o=this.typeIndex?"/cash-coupon/create-cash-coupon":"/experience-voucher/add-experience-voucher",e.next=11,this.$http.post(o,n({},r,{voucherDescription:t}));case 11:r.voucherId=e.sent.data,this.confirm&&this.confirm(r);case 13:case"end":return e.stop()}},e,this)}));return e}()},components:{ModalItem:d.default},validator:{miniConsume:{min:p.MIN_MONEY,max:p.MAX_MONEY},voucherName:{maxLength:8},voucherTimes:{integer:!0,maxLength:3,min:1,max:100},voucherExpiredLimit:{integer:!0,maxLength:3,min:1,max:100},voucherValue:{min:p.MIN_MONEY,max:p.MAX_MONEY}}}),e.exports=t.default},834:function(e,t,r){t=e.exports=r(60)(!1),t.push([e.i,"._1gPe-2uav677ifuzQSvamF .modal-body{background-color:#f8f8f8}._1gPe-2uav677ifuzQSvamF .modal-body>ul{padding:.625rem}._1gPe-2uav677ifuzQSvamF .modal-body>ul li .form-control-static{display:none;padding-left:1.5rem}._1gPe-2uav677ifuzQSvamF .modal-body>ul li.has-error .form-control-static{display:block}._1gPe-2uav677ifuzQSvamF .modal-body>ul li+li{margin-top:.625rem}._1ZXuWq46lqIGdtysG2-YnZ{width:100%}._1ZXuWq46lqIGdtysG2-YnZ>div:first-child{padding-top:.375rem}._1ZXuWq46lqIGdtysG2-YnZ>div:first-child .input-group-addon{text-align:left}._1ZXuWq46lqIGdtysG2-YnZ>div:last-child{padding-left:1.5625rem;padding-right:.75rem;padding-bottom:.375rem}._1ZXuWq46lqIGdtysG2-YnZ>div:last-child input{border:0;outline:0;display:inline-block;width:2rem;text-align:center}._21fG-kfYPuiO_oZ6RwTUv6{padding:0;font-size:0;margin-bottom:.625rem}._21fG-kfYPuiO_oZ6RwTUv6>li{display:inline-block;font-size:.875rem;width:9.375rem;margin-left:.625rem}@media (max-width:768px){._21fG-kfYPuiO_oZ6RwTUv6>li:nth-child(odd){margin-left:0}}._21fG-kfYPuiO_oZ6RwTUv6>li button{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.locals={content:"_1gPe-2uav677ifuzQSvamF",expire:"_1ZXuWq46lqIGdtysG2-YnZ",courses:"_21fG-kfYPuiO_oZ6RwTUv6"}},963:function(e,t,r){var o=r(834);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;r(153)(o,i);o.locals&&(e.exports=o.locals)}});