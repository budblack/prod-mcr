webpackJsonpmsign([7],{418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(26),e=c(8),f=c(419);e.default.emit("event/log/trace",{step:"\u521D\u59CB\u5316\u6269\u5C55, module_clipper"});var g=new f.ModelClipper;d.default.modules.instClipper=g,b.default={},b.InstClipper=g},419:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=c(3),f=d(e),g=c(45),h=d(g);Object.defineProperty(b,"__esModule",{value:!0});var i=c(149),j=c(26);c(420);var k=function(){function a(){0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;(0,f.default)(this,a),this._isEditOn=!1}return(0,h.default)(a,[{key:"editOn",value:function(){return this._isEditOn=!0,this}},{key:"editOff",value:function(){return this._isEditOn=!1,this}},{key:"createPlan",value:function(){return this}},{key:"Plans",get:function(){return this._plans}},{key:"Meshs",get:function(){return this._meshs}}]),a}();b.ModelClipper=function a(){(0,f.default)(this,a);var b=j.default.graph.scene;if(!b)throw"\u573A\u666F\u4E3A\u521D\u59CB\u5316"}},420:function(a,b,c){"use strict";(function(a){var b=c(135),d=function(a){return a&&a.__esModule?a:{default:a}}(b);a.DragControls=function(b,c,d){function e(){d.addEventListener("mousemove",g,!1),d.addEventListener("mousedown",h,!1),d.addEventListener("mouseup",i,!1),d.addEventListener("mouseleave",i,!1),d.addEventListener("touchmove",j,!1),d.addEventListener("touchstart",k,!1),d.addEventListener("touchend",l,!1)}function f(){d.removeEventListener("mousemove",g,!1),d.removeEventListener("mousedown",h,!1),d.removeEventListener("mouseup",i,!1),d.removeEventListener("mouseleave",i,!1),d.removeEventListener("touchmove",j,!1),d.removeEventListener("touchstart",k,!1),d.removeEventListener("touchend",l,!1)}function g(a){a.preventDefault();var e=d.getBoundingClientRect();if(p.x=2*((a.clientX-e.left)/e.width)-1,p.y=2*-((a.clientY-e.top)/e.height)+1,o.setFromCamera(p,c),s&&u.enabled)return o.ray.intersectPlane(n,r)&&s.position.copy(r.sub(q)),void u.dispatchEvent({type:"drag",object:s});o.setFromCamera(p,c);var f=o.intersectObjects(b);if(0<f.length){var g=f[0].object;n.setFromNormalAndCoplanarPoint(c.getWorldDirection(n.normal),g.position),t!==g&&(u.dispatchEvent({type:"hoveron",object:g}),d.style.cursor="pointer",t=g)}else null!=t&&(u.dispatchEvent({type:"hoveroff",object:t}),d.style.cursor="auto",t=null)}function h(a){a.preventDefault(),o.setFromCamera(p,c);var e=o.intersectObjects(b);0<e.length&&(s=e[0].object,o.ray.intersectPlane(n,r)&&q.copy(r).sub(s.position),d.style.cursor="move",u.dispatchEvent({type:"dragstart",object:s}))}function i(a){a.preventDefault(),s&&(u.dispatchEvent({type:"dragend",object:s}),s=null),d.style.cursor="auto"}function j(a){a.preventDefault(),a=a.changedTouches[0];var b=d.getBoundingClientRect();if(p.x=2*((a.clientX-b.left)/b.width)-1,p.y=2*-((a.clientY-b.top)/b.height)+1,o.setFromCamera(p,c),s&&u.enabled)return o.ray.intersectPlane(n,r)&&s.position.copy(r.sub(q)),void u.dispatchEvent({type:"drag",object:s})}function k(a){a.preventDefault(),a=a.changedTouches[0];var e=d.getBoundingClientRect();p.x=2*((a.clientX-e.left)/e.width)-1,p.y=2*-((a.clientY-e.top)/e.height)+1,o.setFromCamera(p,c);var f=o.intersectObjects(b);0<f.length&&(s=f[0].object,n.setFromNormalAndCoplanarPoint(c.getWorldDirection(n.normal),s.position),o.ray.intersectPlane(n,r)&&q.copy(r).sub(s.position),d.style.cursor="move",u.dispatchEvent({type:"dragstart",object:s}))}function l(a){a.preventDefault(),s&&(u.dispatchEvent({type:"dragend",object:s}),s=null),d.style.cursor="auto"}if(b instanceof a.Camera){console.warn("THREE.DragControls: Constructor now expects ( objects, camera, domElement )");var m=b;b=c,c=m}var n=new a.Plane,o=new a.Raycaster,p=new a.Vector2,q=new a.Vector3,r=new a.Vector3,s=null,t=null,u=this;e(),this.enabled=!0,this.activate=e,this.deactivate=f,this.dispose=function(){f()},this.setObjects=function(){console.error("THREE.DragControls: setObjects() has been removed.")},this.on=function(a,b){console.warn("THREE.DragControls: on() has been deprecated. Use addEventListener() instead."),u.addEventListener(a,b)},this.off=function(a,b){console.warn("THREE.DragControls: off() has been deprecated. Use removeEventListener() instead."),u.removeEventListener(a,b)},this.notify=function(a){console.error("THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead."),u.dispatchEvent({type:a})}},a.DragControls.prototype=(0,d.default)(a.EventDispatcher.prototype),a.DragControls.prototype.constructor=a.DragControls}).call(b,c(115))}});