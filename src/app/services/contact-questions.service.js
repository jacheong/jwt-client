"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,u=arguments.length,d=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;0<=i;i--)(n=e[i])&&(d=(u<3?n(d):3<u?n(t,o,d):n(t,o))||d);return 3<u&&d&&Object.defineProperty(t,o,d),d};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),question_textbox_model_1=require("../models/question-textbox.model"),ContactQuestionService=function(){function e(){}return e.prototype.getAddQuestions=function(){return[new question_textbox_model_1.TextboxQuestion({key:"name",label:"Name",type:"text",required:!0,order:1}),new question_textbox_model_1.TextboxQuestion({key:"address",label:"Address",type:"text",required:!0,order:2}),new question_textbox_model_1.TextboxQuestion({key:"phone",label:"Phone Number",type:"text",required:!1,order:1})].sort(function(e,t){return e.order-t.order})},e.prototype.getEditQuestions=function(e){return[new question_textbox_model_1.TextboxQuestion({value:e.name,key:"name",label:"Name",type:"text",required:!0,order:1}),new question_textbox_model_1.TextboxQuestion({value:e.address,key:"address",label:"Address",type:"text",required:!0,order:2}),new question_textbox_model_1.TextboxQuestion({value:e.phone,key:"phone",label:"Phone Number",type:"text",required:!1,order:1})].sort(function(e,t){return e.order-t.order})},e=__decorate([core_1.Injectable()],e)}();exports.ContactQuestionService=ContactQuestionService;