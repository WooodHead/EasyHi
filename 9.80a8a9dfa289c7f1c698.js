webpackJsonp([9],{638:function(t,e,n){var i,s;i=n(657);var r=n(706);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},657:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),r=n(685),o=i(r),a={data:function(){return{text:"",classes:o.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};e.default={name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:a,classes:o.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var t=this.$refs.component.$children[0].text,e=Function.call(null,"return "+t);e&&(this.comps=e())}catch(t){(0,s.error)(t),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(t){this.built=!t}}},t.exports=e.default},672:function(t,e,n){e=t.exports=n(92)(),e.push([t.i,".index__btn___U7Xnt,.index__text___37Ifm{margin-top:.625rem}.index__text___37Ifm{width:100%;height:31.25rem}",""]),e.locals={btn:"index__btn___U7Xnt",btn:"index__btn___U7Xnt",text:"index__text___37Ifm",text:"index__text___37Ifm"}},685:function(t,e,n){var i=n(672);"string"==typeof i&&(i=[[t.i,i,""]]);n(631)(i,{});i.locals&&(t.exports=i.locals)},706:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("div",{staticClass:"text-center"},[t._h("button",{staticClass:"btn",class:t.classes.btn,on:{click:t.rebuild}},[t._s(t.built?"Clear":"Rebuild")+" your own view"])])," ",t._h("hr")," ",t._h("dynamic",{ref:"component",attrs:{comps:t.comps,emptyView:t.emptyView},on:{built:t.compBuilt}})])},staticRenderFns:[]}}});