"use strict";var __decorate=this&&this.__decorate||function(t,o,e,n){var r,c=arguments.length,i=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;0<=a;a--)(r=t[a])&&(i=(c<3?r(i):3<c?r(o,e,i):r(o,e))||i);return 3<c&&i&&Object.defineProperty(o,e,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),contact_model_1=require("../models/contact.model"),fadeInOut_animcation_1=require("../animations/fadeInOut.animcation"),ContactFormComponent=function(){function t(t,o,e,n,r){this.cqs=t,this.qcs=o,this.apiService=e,this.authService=n,this.router=r,this.showState="show"}return t.prototype.ngOnInit=function(){this.pageTitle="Add Contact",this.questions=this.cqs.getAddQuestions(),this.form=this.qcs.toFormGroup(this.questions)},t.prototype.onSubmit=function(){var o=this;this.payload=this.form.value,this.apiService.addContact(new contact_model_1.Contact(this.payload)).subscribe(function(t){o.goToContacts()},function(t){console.log(t),o.addMessage=t.error.error,setTimeout(function(){o.addMessage=null,o.form.reset()},2e3)})},t.prototype.goToContacts=function(){this.router.navigate(["/contacts"])},t.prototype.logOff=function(){this.authService.logout(),this.router.navigate(["/login"])},t.prototype.onCancel=function(){this.goToContacts()},t=__decorate([core_1.Component({selector:"app-contact-form",templateUrl:"./contact-form.component.html",styleUrls:["./contact-form.component.css"],animations:[fadeInOut_animcation_1.FadeInOut]})],t)}();exports.ContactFormComponent=ContactFormComponent;