webpackJsonp([10],{550:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(601),r=s(i),o={data:function(){return{text:"",classes:r.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};e.default=n(622)({name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:o,classes:r.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var t=this.$refs.component.$children[0].text,e=Function.call(null,"return "+t);e&&(this.comps=e())}catch(t){this.$util.error(t),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(t){this.built=!t}}}),t.exports=e.default},587:function(t,e,n){e=t.exports=n(174)(),e.push([t.i,".U7XntStLGFwUJDyX04GQ0,._37IfmKMqkIM7ok_xJbW_IX{margin-top:.625rem}._37IfmKMqkIM7ok_xJbW_IX{width:100%;height:31.25rem}",""]),e.locals={btn:"U7XntStLGFwUJDyX04GQ0",btn:"U7XntStLGFwUJDyX04GQ0",text:"_37IfmKMqkIM7ok_xJbW_IX",text:"_37IfmKMqkIM7ok_xJbW_IX"}},601:function(t,e,n){var s=n(587);"string"==typeof s&&(s=[[t.i,s,""]]);n(175)(s,{});s.locals&&(t.exports=s.locals)},622:function(t,e,n){var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn",class:t.classes.btn,on:{click:t.rebuild}},[t._v(t._s(t.built?"Clear":"Rebuild")+" your own view")])]),n("hr"),n("dynamic",{ref:"component",attrs:{comps:t.comps,emptyView:t.emptyView},on:{built:t.compBuilt}})])},i=[];t.exports=function(t){return t.render=s,t.staticRenderFns=i,t}}});