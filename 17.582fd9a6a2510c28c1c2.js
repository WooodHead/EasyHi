webpackJsonp([17],{561:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(643),o=i(r),a=n(741),s=i(a),u={data:function(){return{text:"",classes:s.default}},template:'<div class="container">For example: (Just the part of js)\n<a href="https://jsfiddle.net/JounQin/87sv5beu/embedded/" target="_blank">JsFiddle</a><br>\nMore complex:\n<a href="https://jsfiddle.net/JounQin/aq0yjj7L/embedded" target="_blank">JsFiddle</a>\n<textarea :class="classes.text" v-model="text"/></div>'};e.default=n(808)({name:"website-edit",data:function(){return{built:!1,comps:null,emptyView:u,classes:s.default}},created:function(){this.comps=this.$route.meta.data},methods:{rebuild:function(){if(this.built)return this.comps=null;try{var t=this.$refs.component.$children[0].text,e=Function.call(null,"return "+t);e&&(this.comps=e())}catch(t){this.$util.error(t),alert("请确认输入的内容是合法的模版数组")}},compBuilt:function(t){this.built=!t}},components:{Dynamic:o.default}}),t.exports=e.default},643:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(86),o=i(r),a=n(14),s=i(a),u=n(85),l=i(u),c=n(7),d=function(t){var e=[],n=!0,i=!1,r=void 0;try{for(var a,u=(0,l.default)(t)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var d=(0,o.default)(a.value,2),f=d[0],m=d[1];(0,c.isObject)(m)&&e.push((0,s.default)(m,{name:f}))}}catch(t){i=!0,r=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw r}}return e},f=function(t){return(0,c.warn)("invalid "+t+" will be ignored!")},m=function(t){return(0,c.warn)("no "+t+" found thus it will be ignored!")},p=function t(e,n){if(e){if((0,c.isObject)(e))e=d(e);else if(!(0,c.isArray)(e))return f("components");if(!e.length)return m("components");var i="",r={},a=0;if(e.forEach(function(e,n){var s=e.name,u=void 0===s?"_"+n:s,d=e.template,p=e.data,h=e.methods,v=e.components;if(!d)return m("template");i+="<"+u+"/>";var y=r[u]={template:d};if((0,c.isObject)(h)){var b={},_=!0,w=!1,g=void 0;try{for(var x,j=(0,l.default)(h)[Symbol.iterator]();!(_=(x=j.next()).done);_=!0){var O=(0,o.default)(x.value,2),F=O[0],V=O[1];b[F]=(0,c.isFunction)(V)?V:Function[(0,c.isArray)(V)?"apply":"call"](null,V)}}catch(t){w=!0,g=t}finally{try{!_&&j.return&&j.return()}finally{if(w)throw g}}y.methods=b}else if(h)return f("methods");p&&(y.data=(0,c.isFunction)(p)?p:function(){return p}),v&&(y.components=t(v,!0)),a++}),a)return n?r:{name:"Dynamic--Root",template:1===a?i:"<div>"+i+"</div>",components:r}}};e.default={name:"dynamic",template:'<comment :is="view"/>',props:{comps:{validator:function(t){return!t||(0,c.isArray)(t)||(0,c.isObject)(t)}},emptyView:{required:!0,validator:function(t){return(0,c.isObject)(t)}}},data:function(){return{view:this.emptyView}},created:function(){this.reBuild()},watch:{comps:function(){this.reBuild()}},methods:{reBuild:function(){var t=p(this.comps);this.view=t||this.emptyView,this.$emit("built",this.view===this.emptyView)}}},t.exports=e.default},669:function(t,e,n){e=t.exports=n(109)(),e.push([t.i,"._2om7VI0y001KfGJk3cnNdT a{color:#add8e6}._3Ggu39_3jbYI9fpoCHshOH{margin-top:.625rem}._1qOyahz1ofSP6C-Ggg0Fho{width:100%;height:31.25rem;margin-top:.625rem}",""]),e.locals={container:"_2om7VI0y001KfGJk3cnNdT",container:"_2om7VI0y001KfGJk3cnNdT",btn:"_3Ggu39_3jbYI9fpoCHshOH",btn:"_3Ggu39_3jbYI9fpoCHshOH",text:"_1qOyahz1ofSP6C-Ggg0Fho",text:"_1qOyahz1ofSP6C-Ggg0Fho"}},741:function(t,e,n){var i=n(669);"string"==typeof i&&(i=[[t.i,i,""]]);n(110)(i,{});i.locals&&(t.exports=i.locals)},808:function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes.container},[n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn",class:t.classes.btn,on:{click:t.rebuild}},[t._v(t._s(t.built?"Clear":"Rebuild")+" your own view")])]),n("hr"),n("dynamic",{ref:"component",attrs:{comps:t.comps,emptyView:t.emptyView},on:{built:t.compBuilt}})],1)},r=[];t.exports=function(t){return t=t||{},t.render=i,t.staticRenderFns=r,t}}});