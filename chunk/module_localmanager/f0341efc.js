webpackJsonpmsign([8],{411:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=c(148),f=d(e),g=c(3),h=d(g),i=c(45),j=d(i);Object.defineProperty(b,"__esModule",{value:!0});var k=c(8),l=c(412),m=c(413),n=function(){function a(){(0,h.default)(this,a);var b=this.load();b?(b.usagecount+=1,b.lastuse=Date.now(),this.save()):(b=new m.default,b.usagecount=1,b.firstuse=Date.now(),b.lastuse=Date.now(),localStorage.setItem("msign:local",(0,f.default)(b)));var c=new l.EventStartup;c.firstuse=b.firstuse,c.lastuse=b.lastuse,c.usagecount=b.usagecount,c.currentime=b.lastuse,k.default.emit("localmanager/startup",c)}return(0,j.default)(a,[{key:"load",value:function(){return this.local=JSON.parse(localStorage.getItem("msign:local")),this.local}},{key:"save",value:function(){return localStorage.setItem("msign:local",(0,f.default)(this.local)),this.local}}]),a}();b.default=new n},412:function(a,b,c){"use strict";var d=c(3),e=function(a){return a&&a.__esModule?a:{default:a}}(d);Object.defineProperty(b,"__esModule",{value:!0});b.EventStartup=function a(){(0,e.default)(this,a)}},413:function(a,b,c){"use strict";var d=c(3),e=function(a){return a&&a.__esModule?a:{default:a}}(d);Object.defineProperty(b,"__esModule",{value:!0});b.default=function a(){(0,e.default)(this,a),this.firstuse=0,this.lastuse=0,this.usagecount=0}}});