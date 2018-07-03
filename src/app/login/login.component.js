"use strict";var __decorate=this&&this.__decorate||function(e,t,o,n){var s,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;0<=l;l--)(s=e[l])&&(r=(i<3?s(r):3<i?s(t,o,r):s(t,o))||r);return 3<i&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),user_model_1=require("../models/user.model"),LoginComponent=function(){function e(e,t,o,n,s){this.qcs=e,this.lqs=t,this.api=o,this.auth=n,this.router=s,this.loginMessage="",this.loading=!1}return e.prototype.ngOnInit=function(){this.questions=this.lqs.getQuestions(),this.form=this.qcs.toFormGroup(this.questions)},e.prototype.onSubmit=function(){var t=this;this.loading=!0,this.payload=this.form.value,this.api.login(new user_model_1.User(this.payload)).subscribe(function(e){t.loginMessage=e.message,t.auth.setToken(e.token),t.loading=!1,t.router.navigate(["/contacts"])},function(e){t.loading=!1,t.loginMessage=e.error.error,setTimeout(function(){t.loginMessage=null},2e3)})},e=__decorate([core_1.Component({selector:"app-login",templateUrl:"./login.component.html",styleUrls:["./login.component.css"]})],e)}();exports.LoginComponent=LoginComponent;