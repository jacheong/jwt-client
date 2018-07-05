"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;0<=c;c--)(i=t[c])&&(a=(r<3?i(a):3<r?i(e,o,a):i(e,o))||a);return 3<r&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),contact_model_1=require("../models/contact.model"),fadeInOut_animcation_1=require("../animations/fadeInOut.animcation"),EditFormComponent=function(){function t(t,e,o,n,i,r){this.cqs=t,this.qcs=e,this.apiService=o,this.authService=n,this.router=i,this.activatedRoute=r,this.showState="show"}return t.prototype.ngOnInit=function(){var e=this;this.pageTitle="Edit Contact",this.apiService.getContact(this.activatedRoute.snapshot.params.id).subscribe(function(t){e.contact=t,e.questions=e.cqs.getEditQuestions(e.contact),e.form=e.qcs.toFormGroup(e.questions)})},t.prototype.onSubmit=function(){var e=this;this.payload=this.form.value,this.payload._id=this.contact._id,this.apiService.updateContact(new contact_model_1.Contact(this.payload)).subscribe(function(t){e.goToContacts()},function(t){console.log(t),e.editMessage=t.error.error,setTimeout(function(){e.editMessage=null,e.form.reset()},2e3)})},t.prototype.goToContacts=function(){this.router.navigate(["/contacts"])},t.prototype.logOff=function(){this.authService.logout(),this.router.navigate(["/login"])},t.prototype.onCancel=function(){this.goToContacts()},t=__decorate([core_1.Component({selector:"app-edit-form",templateUrl:"./edit-form.component.html",styleUrls:["./edit-form.component.css"],animations:[fadeInOut_animcation_1.FadeInOut]})],t)}();exports.EditFormComponent=EditFormComponent;