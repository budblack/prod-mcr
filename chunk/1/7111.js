webpackJsonp([1],{27:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});const d=c(36),e=c(72),f=c(73),g=c(74);let h,i,j,k=d.default.event.Emiter,l=d.default.graph.scene,m=d.default.graph.camera,n=d.default.controller.ToolController;b.default={}},36:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});const d=c(45);class e{}let f=new class{constructor(){this.graph=new e}};f.sandbox=new class{constructor(){this.faces=[],this.lines=[],this.labels=[],this.models=[]}},f.option=new class{constructor(){this.mode=0,this.afk=!1}},f.controller=new class{constructor(){this.CameraController=null,this.DownloadController=null,this.SceneController=null,this.AnimaController=null,this.PlatformController=null,this.ToolController=null,this.PlatformController=new d.PlatformController}},f.graph=new e,f.event=new class{constructor(){this.Emiter=null}},window.mcr=f,b.default=f},45:function(a,b){"use strict";function c(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}Object.defineProperty(b,"__esModule",{value:!0});b.PlatformController=class{constructor(){this._exp=document.createElement("a")}displayResetSize(){return c(function*(){})()}displayFullScreen(){return c(function*(){})()}exportFileUtf8(a="",b="\u672A\u547D\u540D\u5BFC\u51FA",d="text/plain"){var e=this;return c(function*(){let c=e._exp;c.href=`data:${d};charset=utf-8,\ufeff`+encodeURIComponent(a),c.download=b,c.click()})()}exportFileDataURL(a="",b="\u672A\u547D\u540D\u5BFC\u51FA"){var d=this;return c(function*(){let c=d._exp;c.href=a,c.download=b,c.click()})()}}},72:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});b._SceneListener=class{constructor(a){this.scene=a}}},73:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});b._CameraListener=class{constructor(a){this.camera=a}}},74:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});const d=c(0);b._ToolLitener=class{constructor(a){d.default.emit("event/log/trace",{step:"\u521D\u59CB\u5316_ToolLitener"}),this.toolController=a}}}});