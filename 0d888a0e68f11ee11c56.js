webpackJsonp([74],{1100:function(e,t,o){var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal-item",{attrs:{header:"标题",footer:!0,confirm:e.confirm.bind(this),transition:e.transition}},[o("template",{slot:"header"},[e._v("My Header")]),[o("p",[e._v(e._s(e.bodyMsg))]),e._v(e._s(e.msg)),o("br"),o("button",{staticClass:"btn btn-theme-primary",on:{click:e.reverseMsg}},[e._v("Reverse Msg")])]],2)},r=[];e.exports=function(e){return e=e||{},e.render=n,e.staticRenderFns=r,e}},563:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o(565),s=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o(566)({name:"modal-item",props:{id:[Number,String],header:[Boolean,String],disabled:Boolean,footer:Boolean,border:{type:Boolean,default:!0},full:Boolean,transition:[Boolean,String],close:Function,confirm:Function,confirmText:String,cancelText:String,beforeEnter:Function,afterEnter:Function,enterCancelled:Function,beforeLeave:Function,afterLeave:Function,leaveCancelled:Function},data:function(){return{classes:s.default}},computed:{label:function(){var e=this.header;return(0,n.isBlankStr)(e)?"&nbsp;":e}},methods:{closeModal:function(){this.close?this.close.apply(this,arguments):this.$modal.close(this.id||(0,n.warn)("there is no modal id found, then the current modal will be close!"))},confirmModal:function(){this.footer&&this.disabled||(this.confirm?this.confirm.apply(this,arguments):(0,n.error)("you should handle the click event on the confirm btn by yourself!"))}}}),e.exports=t.default},564:function(e,t,o){t=e.exports=o(60)(!1),t.push([e.i,".modal-open{overflow:hidden}.modal-open ._1vYhyyh2j-sWpshW8OtYcE{overflow-x:hidden;overflow-y:auto}._1vYhyyh2j-sWpshW8OtYcE{position:fixed;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:1050;-webkit-overflow-scrolling:touch;pointer-events:none;outline:0}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-content{border:0;border-radius:0;box-shadow:none}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-body,._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-header{padding:0}._1vYhyyh2j-sWpshW8OtYcE._100HYkVk34Y065AS1QwPI1 .modal-body{overflow-y:auto}._1vYhyyh2j-sWpshW8OtYcE .modal-dialog{position:relative;width:auto;margin:0 auto;pointer-events:auto;max-width:64rem}._1vYhyyh2j-sWpshW8OtYcE .modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:.375rem;box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}._1vYhyyh2j-sWpshW8OtYcE .modal-header{padding:.625rem;border-bottom:1px solid #e5e5e5}._1vYhyyh2j-sWpshW8OtYcE .modal-header .close{position:relative;z-index:10;margin-top:-.125rem}._1vYhyyh2j-sWpshW8OtYcE .modal-title{margin:0;line-height:1.428571428571429}._1vYhyyh2j-sWpshW8OtYcE .modal-body{position:relative;padding:.625rem}._1vYhyyh2j-sWpshW8OtYcE .modal-footer{padding:.625rem;display:-webkit-box;display:flex}._1vYhyyh2j-sWpshW8OtYcE .modal-footer .btn{-webkit-box-flex:1;flex:1;font-size:1.25rem}._1vYhyyh2j-sWpshW8OtYcE .modal-footer .btn+.btn{margin-left:.625rem}",""]),t.locals={modal:"_1vYhyyh2j-sWpshW8OtYcE",full:"_100HYkVk34Y065AS1QwPI1"}},565:function(e,t,o){var n=o(564);"string"==typeof n&&(n=[[e.i,n,""]]);o(154)(n,{});n.locals&&(e.exports=n.locals)},566:function(e,t,o){var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:!0===e.transition?"bounce":e.transition||void 0},on:{"before-enter":function(t){return e.beforeEnter&&e.beforeEnter(t)},"after-enter":function(t){return e.afterEnter&&e.afterEnter(t)},"enter-cancelled":function(t){return e.enterCancelled&&e.enterCancelled(t)},"before-leave":function(t){return e.beforeLeave&&e.beforeLeave(t)},"after-leave":function(t){return e.afterLeave&&e.afterLeave(t)},"leave-cancelled":function(t){return e.leaveCancelled&&e.leaveCancelled(t)}}},[o("div",{class:[e.classes.modal,(n={},n[e.classes.full]=e.full,n)],attrs:{id:e.id}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[e.$slots.header?o("div",{staticClass:"modal-header",class:(r={},r["border-b"]=e.border,r)},[e._t("header")],2):e.label?o("div",{staticClass:"modal-header",class:(s={},s["border-b"]=e.border,s)},[o("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closeModal}},[o("span",{attrs:{"aria-hidden":"true"}},[e._v("×")]),o("span",{staticClass:"sr-only"},[e._v("关闭")])]),o("h4",{staticClass:"modal-title",domProps:{innerHTML:e._s(e.label)}})]):e._e(),e.$slots.body?e._t("body"):o("div",{staticClass:"modal-body"},[e._t("default")],2),e.$slots.footer?o("div",{staticClass:"modal-footer",class:(a={},a["border-t"]=e.border,a)},[e._t("footer")],2):e.footer?o("div",{staticClass:"modal-footer",class:(i={},i["border-t"]=e.border,i)},[o("div",{staticClass:"btn btn-theme-default",on:{click:e.closeModal}},[e._v(e._s(e.cancelText||"取消"))]),o("div",{staticClass:"btn",class:e.disabled?"btn-disabled-primary":"btn-theme-primary",on:{click:e.confirmModal}},[e._v(e._s(e.confirmText||"确定"))])]):e._e()],2)])])]);var n,r,s,a,i},r=[];e.exports=function(e){return e=e||{},e.render=n,e.staticRenderFns=r,e}},733:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(563),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=o(1),a=void 0;t.default=o(1100)({props:{bodyMsg:{type:String,required:!0},transition:[Boolean,String]},data:function(){return{msg:"My name is msg"}},components:{ModalItem:r.default},methods:{confirm:function(){a=this.$modal.open({id:a,component:new Promise(function(e){Promise.resolve().then(function(t){e(o(733))}.bind(null,o)).catch(o.oe)}),options:{backdrop:!0,destroy:!0,show:!0},props:{bodyMsg:(0,s.reverse)(this.bodyMsg),transition:this.transition}})},reverseMsg:function(){this.msg=(0,s.reverse)(this.msg)}}}),e.exports=t.default}});