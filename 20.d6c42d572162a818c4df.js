webpackJsonp([20],{254:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(43),o=function(t){var e=[],n=!0,o=!1,a=void 0;try{for(var s,c=Object.entries(t)[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=r(s.value,2),l=u[0],d=u[1];(0,i.isObject)(d)&&e.push(Object.assign(d,{name:l}))}}catch(t){o=!0,a=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}return e},a=function(t){return(0,i.warn)("invalid "+t+" will be ignored!")},s=function(t){return(0,i.warn)("no "+t+" found thus it will be ignored!")},c=function t(e,n){if(e){if((0,i.isObject)(e))e=o(e);else if(!(0,i.isArray)(e))return a("components");if(!e.length)return s("components");var c="",u={},l=0;if(e.forEach(function(e,n){var o=e.name,d=void 0===o?"_"+n:o,f=e.template,m=e.data,p=e.methods,h=e.components;if(!f)return s("template");c+="<"+d+"/>";var y=u[d]={template:f};if((0,i.isObject)(p)){var v={},b=!0,w=!1,_=void 0;try{for(var g,j=Object.entries(p)[Symbol.iterator]();!(b=(g=j.next()).done);b=!0){var x=r(g.value,2),O=x[0],F=x[1];v[O]=(0,i.isFunction)(F)?F:Function[(0,i.isArray)(F)?"apply":"call"](null,F)}}catch(t){w=!0,_=t}finally{try{!b&&j.return&&j.return()}finally{if(w)throw _}}y.methods=v}else if(p)return a("methods");m&&(y.data=(0,i.isFunction)(m)?m:function(){return m}),h&&(y.components=t(h,!0)),l++}),l)return n?u:{name:"Dynamic--Root",template:1===l?c:"<div>"+c+"</div>",components:u}}};e.default={name:"dynamic",template:'<comment :is="view"/>',props:{comps:{validator:function(t){return!t||(0,i.isArray)(t)||(0,i.isObject)(t)}},emptyView:{required:!0,validator:function(t){return(0,i.isObject)(t)}}},data:function(){return{view:this.emptyView}},created:function(){this.reBuild()},watch:{comps:function(){this.reBuild()}},methods:{reBuild:function(){var t=c(this.comps);this.view=t||this.emptyView,this.$emit("built",this.view===this.emptyView)}}},t.exports=e.default},322:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(254),o=r(i),a=n(598),s=r(a),c={data:function(){return{text:"",classes:s.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/" target="_blank">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded" target="_blank">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};e.default=n(674)({name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:c,classes:s.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var t=this.$refs.component.$children[0].text,e=Function.call(null,"return "+t);e&&(this.comps=e())}catch(t){this.$util.error(t),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(t){this.built=!t}},components:{Dynamic:o.default}}),t.exports=e.default},523:function(t,e,n){e=t.exports=n(39)(),e.push([t.i,"._2om7VI0y001KfGJk3cnNdT a{color:#add8e6}._3Ggu39_3jbYI9fpoCHshOH{margin-top:.625rem}._1qOyahz1ofSP6C-Ggg0Fho{width:100%;height:31.25rem;margin-top:.625rem}",""]),e.locals={container:"_2om7VI0y001KfGJk3cnNdT",container:"_2om7VI0y001KfGJk3cnNdT",btn:"_3Ggu39_3jbYI9fpoCHshOH",btn:"_3Ggu39_3jbYI9fpoCHshOH",text:"_1qOyahz1ofSP6C-Ggg0Fho",text:"_1qOyahz1ofSP6C-Ggg0Fho"}},598:function(t,e,n){var r=n(523);"string"==typeof r&&(r=[[t.i,r,""]]);n(40)(r,{});r.locals&&(t.exports=r.locals)},674:function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes.container},[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn",class:t.classes.btn,on:{click:t.rebuild}},[t._v(t._s(t.built?"Clear":"Rebuild")+" your own view")])]),n("hr"),n("dynamic",{ref:"component",attrs:{comps:t.comps,emptyView:t.emptyView},on:{built:t.compBuilt}})],1)},i=[];t.exports=function(t){return t=t||{},t.render=r,t.staticRenderFns=i,t}}});