"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,a=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;0<=p;p--)(r=t[p])&&(a=(c<3?r(a):3<c?r(e,o,a):r(e,o))||a);return 3<c&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),environment_1=require("../../../environments/environment"),ContactComponent=function(){function t(){}return t.prototype.ngOnInit=function(){this.contact.photoUrl=""+environment_1.environment.apiUrl+this.contact.photoUrl},__decorate([core_1.Input()],t.prototype,"contact",void 0),t=__decorate([core_1.Component({selector:"app-contact",templateUrl:"./contact.component.html",styleUrls:["./contact.component.css"]})],t)}();exports.ContactComponent=ContactComponent;