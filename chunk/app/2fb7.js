webpackJsonp([0],{117:function(a,b){"use strict";var c=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"mcr",attrs:{mcr:""},on:{mouseover:a.onContainerMouseover,touchstart:a.onContainerMouseover,mouseleave:a.onContainerMouseout,touchend:a.onContainerMouseout}},[c("transition",{attrs:{name:"fade",mcr:""}},[c("layer-graph",{attrs:{mcr:""}})],1),a._v(" "),c("transition",{attrs:{name:"fade",mcr:""}},[c("layer-tracking",{attrs:{mcr:""}})],1)],1)};c._withStripped=!0;b.a={render:c,staticRenderFns:[]},!1},28:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(41),e=c(117),f=c(3),g=f(d.a,e.a,!1,function(){!1||c(39)},"data-v-5ef48958",null);g.options.__file="src/app.vue",g.esModule&&Object.keys(g.esModule).some(function(a){return"default"!==a&&"__"!==a.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),!1,b["default"]=g.exports},39:function(a,b,c){var d=c(40);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(2)("4eb0d22a",d,!1)},40:function(a,b,c){b=a.exports=c(1)(void 0),b.push([a.i,"\n.mcr[data-v-5ef48958] {\n    position: relative;\n}\n.fade-enter-active[data-v-5ef48958], .fade-leave-active[data-v-5ef48958] {\n    transition: opacity .5s;\n}\n.fade-enter[data-v-5ef48958], .fade-leave-to[data-v-5ef48958] /* .fade-leave-active below version 2.1.8 */\n{\n    opacity: 0;\n}\n",""])},41:function(a,b,c){"use strict";var d=c(0),e=c.n(d),f=c(42);c.e(3).then(c.bind(null,43)),c.e(3).then(c.bind(null,45)),c.e(3).then(c.bind(null,53)),c.e(3).then(c.bind(null,55)),c.e(3).then(c.bind(null,59));const g=c.e(4).then(c.bind(null,61)),h=c.e(4).then(c.bind(null,77)),i=c.e(4).then(c.bind(null,82));b.a={filters:{},data(){return{}},components:{LayerGraph:()=>g,LayerTracking:()=>i},created(){},mounted(){},computed:Object(f.a)({onelist:(a)=>a.onelist}),methods:{onContainerMouseout(){e.a.emit("request/scene",{action:"set",arg:{afk:!0}}),e.a.emit("event/log/trace",{step:`请求终止渲染`})},onContainerMouseover(){e.a.emit("request/scene",{action:"set",arg:{afk:!1}}),e.a.emit("event/log/trace",{step:`请求启动渲染`})}}}},42:function(a,b,c){"use strict";(function(a){function d(a){C&&(a._devtoolHook=C,C.emit("vuex:init",a),C.on("vuex:travel-to-state",function(b){a.replaceState(b)}),a.subscribe(function(a,b){C.emit("vuex:mutation",a,b)}))}function e(a,b){Object.keys(a).forEach(function(c){return b(a[c],c)})}function f(a){return null!==a&&"object"==typeof a}function g(a){return a&&"function"==typeof a.then}function h(a,b){if(!a)throw new Error("[vuex] "+b)}function i(b,c,d){if("production"!==a.env.NODE_ENV&&j(b,d),c.update(d),d.modules)for(var e in d.modules){if(!c.getChild(e))return void("production"!==a.env.NODE_ENV&&console.warn("[vuex] trying to add a new module '"+e+"' on hot reloading, manual reload is needed"));i(b.concat(e),c.getChild(e),d.modules[e])}}function j(a,b){Object.keys(I).forEach(function(c){if(b[c]){var d=I[c];e(b[c],function(b,e){h(d.assert(b),k(a,c,e,b,d.expected))})}})}function k(a,b,c,d,e){var f=b+" should be "+e+" but \""+b+"."+c+"\"";return 0<a.length&&(f+=" in module \""+a.join(".")+"\""),f+=" is "+JSON.stringify(d)+".",f}function l(a,b){return 0>b.indexOf(a)&&b.push(a),function(){var c=b.indexOf(a);-1<c&&b.splice(c,1)}}function m(a,b){a._actions=Object.create(null),a._mutations=Object.create(null),a._wrappedGetters=Object.create(null),a._modulesNamespaceMap=Object.create(null);var c=a.state;o(a,c,[],a._modules.root,!0),n(a,c,b)}function n(a,b,c){var d=a._vm;a.getters={};var f=a._wrappedGetters,g={};e(f,function(b,c){g[c]=function(){return b(a)},Object.defineProperty(a.getters,c,{get:function(){return a._vm[c]},enumerable:!0})});var h=G.config.silent;G.config.silent=!0,a._vm=new G({data:{$$state:b},computed:g}),G.config.silent=h,a.strict&&u(a),d&&(c&&a._withCommit(function(){d._data.$$state=null}),G.nextTick(function(){return d.$destroy()}))}function o(a,b,c,d,e){var f=!c.length,g=a._modules.getNamespace(c);if(d.namespaced&&(a._modulesNamespaceMap[g]=d),!f&&!e){var h=v(b,c.slice(0,-1)),i=c[c.length-1];a._withCommit(function(){G.set(h,i,d.state)})}var j=d.context=p(a,g,c);d.forEachMutation(function(b,c){r(a,g+c,b,j)}),d.forEachAction(function(b,c){var d=b.root?c:g+c,e=b.handler||b;s(a,d,e,j)}),d.forEachGetter(function(b,c){t(a,g+c,b,j)}),d.forEachChild(function(d,f){o(a,b,c.concat(f),d,e)})}function p(b,c,d){var e=""===c,f={dispatch:e?b.dispatch:function(d,e,f){var g=w(d,e,f),h=g.payload,i=g.options,j=g.type;return i&&i.root||(j=c+j,"production"===a.env.NODE_ENV||b._actions[j])?b.dispatch(j,h):void console.error("[vuex] unknown local action type: "+g.type+", global type: "+j)},commit:e?b.commit:function(d,e,f){var g=w(d,e,f),h=g.payload,i=g.options,j=g.type;return i&&i.root||(j=c+j,"production"===a.env.NODE_ENV||b._mutations[j])?void b.commit(j,h,i):void console.error("[vuex] unknown local mutation type: "+g.type+", global type: "+j)}};return Object.defineProperties(f,{getters:{get:e?function(){return b.getters}:function(){return q(b,c)}},state:{get:function(){return v(b.state,d)}}}),f}function q(a,b){var c={},d=b.length;return Object.keys(a.getters).forEach(function(e){if(e.slice(0,d)===b){var f=e.slice(d);Object.defineProperty(c,f,{get:function(){return a.getters[e]},enumerable:!0})}}),c}function r(a,b,c,d){var e=a._mutations[b]||(a._mutations[b]=[]);e.push(function(b){c.call(a,d.state,b)})}function s(a,b,c,d){var e=a._actions[b]||(a._actions[b]=[]);e.push(function(b,e){var f=c.call(a,{dispatch:d.dispatch,commit:d.commit,getters:d.getters,state:d.state,rootGetters:a.getters,rootState:a.state},b,e);return g(f)||(f=Promise.resolve(f)),a._devtoolHook?f.catch(function(b){throw a._devtoolHook.emit("vuex:error",b),b}):f})}function t(b,c,d,e){return b._wrappedGetters[c]?void("production"!==a.env.NODE_ENV&&console.error("[vuex] duplicate getter key: "+c)):void(b._wrappedGetters[c]=function(a){return d(e.state,e.getters,a.state,a.getters)})}function u(b){b._vm.$watch(function(){return this._data.$$state},function(){"production"!==a.env.NODE_ENV&&h(b._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function v(a,b){return b.length?b.reduce(function(a,b){return a[b]},a):a}function w(b,c,d){return f(b)&&b.type&&(d=c,c=b,b=b.type),"production"!==a.env.NODE_ENV&&h("string"==typeof b,"Expects string as the type, but found "+typeof b+"."),{type:b,payload:c,options:d}}function x(b){return G&&b===G?void("production"!==a.env.NODE_ENV&&console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.")):void(G=b,B(G))}function y(a){return Array.isArray(a)?a.map(function(a){return{key:a,val:a}}):Object.keys(a).map(function(b){return{key:b,val:a[b]}})}function z(a){return function(b,c){return"string"==typeof b?"/"!==b.charAt(b.length-1)&&(b+="/"):(c=b,b=""),a(b,c)}}function A(b,c,d){var e=b._modulesNamespaceMap[d];return"production"===a.env.NODE_ENV||e||console.error("[vuex] module namespace not found in "+c+"(): "+d),e}c.d(b,"a",function(){return L});/**
 * vuex v2.5.0
 * (c) 2017 Evan You
 * @license MIT
 */var B=function(a){function b(){var a=this.$options;a.store?this.$store="function"==typeof a.store?a.store():a.store:a.parent&&a.parent.$store&&(this.$store=a.parent.$store)}var c=+a.version.split(".")[0];if(2<=c)a.mixin({beforeCreate:b});else{var d=a.prototype._init;a.prototype._init=function(a){void 0===a&&(a={}),a.init=a.init?[b].concat(a.init):b,d.call(this,a)}}},C="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,D=function(a,b){this.runtime=b,this._children=Object.create(null),this._rawModule=a;var c=a.state;this.state=("function"==typeof c?c():c)||{}},E={namespaced:{configurable:!0}};E.namespaced.get=function(){return!!this._rawModule.namespaced},D.prototype.addChild=function(a,b){this._children[a]=b},D.prototype.removeChild=function(a){delete this._children[a]},D.prototype.getChild=function(a){return this._children[a]},D.prototype.update=function(a){this._rawModule.namespaced=a.namespaced,a.actions&&(this._rawModule.actions=a.actions),a.mutations&&(this._rawModule.mutations=a.mutations),a.getters&&(this._rawModule.getters=a.getters)},D.prototype.forEachChild=function(a){e(this._children,a)},D.prototype.forEachGetter=function(a){this._rawModule.getters&&e(this._rawModule.getters,a)},D.prototype.forEachAction=function(a){this._rawModule.actions&&e(this._rawModule.actions,a)},D.prototype.forEachMutation=function(a){this._rawModule.mutations&&e(this._rawModule.mutations,a)},Object.defineProperties(D.prototype,E);var F=function(a){this.register([],a,!1)};F.prototype.get=function(a){return a.reduce(function(a,b){return a.getChild(b)},this.root)},F.prototype.getNamespace=function(a){var b=this.root;return a.reduce(function(a,c){return b=b.getChild(c),a+(b.namespaced?c+"/":"")},"")},F.prototype.update=function(a){i([],this.root,a)},F.prototype.register=function(b,c,d){var f=this;void 0===d&&(d=!0),"production"!==a.env.NODE_ENV&&j(b,c);var g=new D(c,d);if(0===b.length)this.root=g;else{var h=this.get(b.slice(0,-1));h.addChild(b[b.length-1],g)}c.modules&&e(c.modules,function(a,c){f.register(b.concat(c),a,d)})},F.prototype.unregister=function(a){var b=this.get(a.slice(0,-1)),c=a[a.length-1];b.getChild(c).runtime&&b.removeChild(c)};var G,H={assert:function(a){return"function"==typeof a},expected:"function"},I={getters:H,mutations:H,actions:{assert:function(a){return"function"==typeof a||"object"==typeof a&&"function"==typeof a.handler},expected:"function or object with \"handler\" function"}},J=function b(c){var e=this;void 0===c&&(c={}),!G&&"undefined"!=typeof window&&window.Vue&&x(window.Vue),"production"!==a.env.NODE_ENV&&(h(G,"must call Vue.use(Vuex) before creating a store instance."),h("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser."),h(this instanceof b,"Store must be called with the new operator."));var f=c.plugins;void 0===f&&(f=[]);var g=c.strict;void 0===g&&(g=!1);var i=c.state;void 0===i&&(i={}),"function"==typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new F(c),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new G;var j=this,k=this,l=k.dispatch,m=k.commit;this.dispatch=function(a,b){return l.call(j,a,b)},this.commit=function(a,b,c){return m.call(j,a,b,c)},this.strict=g,o(this,i,[],this._modules.root),n(this,i),f.forEach(function(a){return a(e)}),G.config.devtools&&d(this)},K={state:{configurable:!0}};K.state.get=function(){return this._vm._data.$$state},K.state.set=function(){"production"!==a.env.NODE_ENV&&h(!1,"Use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(b,c,d){var e=this,f=w(b,c,d),g=f.type,h=f.payload,i=f.options,j={type:g,payload:h},k=this._mutations[g];return k?void(this._withCommit(function(){k.forEach(function(a){a(h)})}),this._subscribers.forEach(function(a){return a(j,e.state)}),"production"!==a.env.NODE_ENV&&i&&i.silent&&console.warn("[vuex] mutation type: "+g+". Silent option has been removed. Use the filter functionality in the vue-devtools")):void("production"!==a.env.NODE_ENV&&console.error("[vuex] unknown mutation type: "+g))},J.prototype.dispatch=function(b,c){var d=this,e=w(b,c),f=e.type,g=e.payload,h={type:f,payload:g},i=this._actions[f];return i?(this._actionSubscribers.forEach(function(a){return a(h,d.state)}),1<i.length?Promise.all(i.map(function(a){return a(g)})):i[0](g)):void("production"!==a.env.NODE_ENV&&console.error("[vuex] unknown action type: "+f))},J.prototype.subscribe=function(a){return l(a,this._subscribers)},J.prototype.subscribeAction=function(a){return l(a,this._actionSubscribers)},J.prototype.watch=function(b,c,d){var e=this;return"production"!==a.env.NODE_ENV&&h("function"==typeof b,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return b(e.state,e.getters)},c,d)},J.prototype.replaceState=function(a){var b=this;this._withCommit(function(){b._vm._data.$$state=a})},J.prototype.registerModule=function(b,c,d){void 0===d&&(d={}),"string"==typeof b&&(b=[b]),"production"!==a.env.NODE_ENV&&(h(Array.isArray(b),"module path must be a string or an Array."),h(0<b.length,"cannot register the root module by using registerModule.")),this._modules.register(b,c),o(this,this.state,b,this._modules.get(b),d.preserveState),n(this,this.state)},J.prototype.unregisterModule=function(b){var c=this;"string"==typeof b&&(b=[b]),"production"!==a.env.NODE_ENV&&h(Array.isArray(b),"module path must be a string or an Array."),this._modules.unregister(b),this._withCommit(function(){var a=v(c.state,b.slice(0,-1));G.delete(a,b[b.length-1])}),m(this)},J.prototype.hotUpdate=function(a){this._modules.update(a),m(this,!0)},J.prototype._withCommit=function(a){var b=this._committing;this._committing=!0,a(),this._committing=b},Object.defineProperties(J.prototype,K);var L=z(function(a,b){var c={};return y(b).forEach(function(b){var d=b.key,e=b.val;c[d]=function(){var b=this.$store.state,c=this.$store.getters;if(a){var d=A(this.$store,"mapState",a);if(!d)return;b=d.context.state,c=d.context.getters}return"function"==typeof e?e.call(this,b,c):b[e]},c[d].vuex=!0}),c}),M=z(function(a,b){var c={};return y(b).forEach(function(b){var d=b.key,e=b.val;c[d]=function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];var d=this.$store.commit;if(a){var f=A(this.$store,"mapMutations",a);if(!f)return;d=f.context.commit}return"function"==typeof e?e.apply(this,[d].concat(b)):d.apply(this.$store,[e].concat(b))}}),c}),N=z(function(b,c){var d={};return y(c).forEach(function(c){var e=c.key,f=c.val;f=b+f,d[e]=function(){return b&&!A(this.$store,"mapGetters",b)?void 0:"production"===a.env.NODE_ENV||f in this.$store.getters?this.$store.getters[f]:void console.error("[vuex] unknown getter: "+f)},d[e].vuex=!0}),d}),O=z(function(a,b){var c={};return y(b).forEach(function(b){var d=b.key,e=b.val;c[d]=function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];var d=this.$store.dispatch;if(a){var f=A(this.$store,"mapActions",a);if(!f)return;d=f.context.dispatch}return"function"==typeof e?e.apply(this,[d].concat(b)):d.apply(this.$store,[e].concat(b))}}),c})}).call(b,c(4))}});