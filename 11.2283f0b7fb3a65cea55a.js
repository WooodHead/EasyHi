webpackJsonp([11],{636:function(t,e,n){var o,a;o=n(655);var d=n(705);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=d.render,a.staticRenderFns=d.staticRenderFns,t.exports=o},655:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=void 0;e.default={data:function(){return{options:{backdrop:!1,fade:!0,show:!0}}},methods:{addModal:function(){o=this.$modal.open({id:o,component:n.e(14).then(n.bind(null,638)),options:this.options})},clearModal:function(){this.$modal.clear()}}},t.exports=e.default},705:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("button",{staticClass:"btn btn-theme-primary",on:{click:t.addModal}},["Add modal"])," ",t._h("button",{staticClass:"btn btn-theme-default",on:{click:t.clearModal}},["Clear modal"])])},staticRenderFns:[]}}});