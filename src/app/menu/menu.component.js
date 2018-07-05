"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var c,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;0<=p;p--)(c=t[p])&&(i=(r<3?c(i):3<r?c(e,o,i):c(e,o))||i);return 3<r&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),MenuComponent=function(){function t(){this.contactsClick=new core_1.EventEmitter,this.addClick=new core_1.EventEmitter,this.logOutClick=new core_1.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.handleContactsClick=function(){this.contactsClick.emit()},t.prototype.handleAddClick=function(){this.addClick.emit()},t.prototype.handleLogOutClick=function(){this.logOutClick.emit()},__decorate([core_1.Input()],t.prototype,"title",void 0),__decorate([core_1.Output()],t.prototype,"contactsClick",void 0),__decorate([core_1.Output()],t.prototype,"addClick",void 0),__decorate([core_1.Output()],t.prototype,"logOutClick",void 0),t=__decorate([core_1.Component({selector:"app-menu",templateUrl:"./menu.component.html",styleUrls:["./menu.component.css"]})],t)}();exports.MenuComponent=MenuComponent;