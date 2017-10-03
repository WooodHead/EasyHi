webpackJsonp([50],{545:function(e,t,i){"use strict";function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,i){function o(n,r){try{var a=t[n](r),s=a.value}catch(e){return void i(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=i(55),a=i(1),s=i(861),l=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=i(863)({data:function(){return{classes:l.default,editing:!1,newMobile:""}},computed:n({},(0,r.mapGetters)(["mobile","hasMerchantRole"])),deactivated:function(){this.newMobile="",this.editing=!1},methods:n({},(0,r.mapActions)(["setMobile","resetRole"]),{edit:function(){this.editing=!this.hasMerchantRole},clearMobile:function(){this.newMobile="",this.$refs.mobile.focus()},validateMobile:function(){var e=this;if(!this.$v.newMobile.$error){if(this.mobile===this.newMobile)return(0,a.alert)("手机号码与原手机号相同，请重新输入!");var t=this.newMobile;this.$modal.open({id:"mobile-modal",options:{destroy:!0,show:!0,backdrop:!0},props:{mobile:t,confirm:function(){e.setMobile(t),e.$modal.close(),e.editing=!1}},component:new Promise(function(e){i.e(67).then(function(t){e(i(864))}.bind(null,i)).catch(i.oe)})})}},logout:function(){var e=this,t=this;(0,a.confirm)({tipText:"确定退出登录?",confirm:function(){var i=o(regeneratorRuntime.mark(function i(){var o,n,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("/membercenter/log-out");case 2:if(o=e.sent,n=o.data,r=n.code,s=n.desc,!+r){e.next=8;break}return e.abrupt("return",(0,a.toast)(s));case 8:t.resetRole(),t.$router.push("/");case 10:case"end":return e.stop()}},i,e)}));return function(){return i.apply(this,arguments)}}()})}}),validator:{auto:!0,rules:{newMobile:{mobile:!0}}}}),e.exports=t.default},861:function(e,t,i){var o=i(862);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0};n.transform=void 0;i(160)(o,n);o.locals&&(e.exports=o.locals)},862:function(e,t,i){t=e.exports=i(61)(!1),t.push([e.i,".onieq3mCgfvUfIbUBO2A7 .media{padding:.9375rem;margin-bottom:1.25rem;background-color:#fff}.onieq3mCgfvUfIbUBO2A7 .fixed-bottom{text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:.9375rem}.Z0jHcb4X7YCMyJ1kpKCBI{color:#b7b7b7;-webkit-transform:scale(.857142857142857);-ms-transform:scale(.857142857142857);transform:scale(.857142857142857);-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left}",""]),t.locals={container:"onieq3mCgfvUfIbUBO2A7",tips:"Z0jHcb4X7YCMyJ1kpKCBI"}},863:function(e,t,i){var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes.container},[e.editing?[i("div",{staticClass:"media border-b"},[i("div",{staticClass:"media-body"},[i("div",{staticClass:"input-group"},[i("label",{staticClass:"input-group-addon",attrs:{for:"mobile"}},[e._v("新手机号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newMobile,expression:"newMobile"}],ref:"mobile",staticClass:"form-control",attrs:{id:"mobile",type:"number"},domProps:{value:e.newMobile},on:{input:function(t){t.target.composing||(e.newMobile=t.target.value)}}}),e.newMobile?i("span",{staticClass:"input-group-addon",on:{click:e.clearMobile}},[i("span",{staticClass:"iconfont icon-remove"})]):e._e()])])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn",class:e.$v.newMobile.$error?"btn-disabled-primary":"btn-theme-primary",on:{click:e.validateMobile}},[e._v("验证手机号")])])]:[i("div",{staticClass:"media border-b",on:{click:e.edit}},[i("div",{staticClass:"media-body"},[i("div",{staticClass:"media-heading"},[e._v(e._s(e.hasMerchantRole?"手机号码":"更换手机号")),i("span",{staticClass:"theme-color pull-right"},[e._v(e._s(e.hasMerchantRole?e.mobile:e.$util.hide(e.mobile)))])]),e.hasMerchantRole?e._e():i("div",{class:e.classes.tips},[e._v("*若您的验证手机丢失或停用，请立即修改更换")])]),e.hasMerchantRole?e._e():i("div",{staticClass:"media-right media-middle"},[i("span",{staticClass:"iconfont icon-arrow-right remark-color"})])]),i("div",{staticClass:"fixed-bottom theme-color border-t",on:{click:e.logout}},[e._v("退出登录")])]],2)},n=[];e.exports=function(e){return e=e||{},e.render=o,e.staticRenderFns=n,e}}});