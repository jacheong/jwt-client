"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var animations_1=require("@angular/animations");exports.StaggerAnimation=animations_1.trigger("listAnimation",[animations_1.transition("* => *",[animations_1.query(":enter",animations_1.style({opacity:0}),{optional:!0}),animations_1.query(":enter",animations_1.stagger("50ms",[animations_1.animate("1000ms ease-in",animations_1.keyframes([animations_1.style({opacity:0,transform:"translateY(-75px)",offset:0}),animations_1.style({opacity:.5,transform:"translateY(35px)",offset:.3}),animations_1.style({opacity:1,transform:"translateY(0)",offset:1})]))]),{optional:!0})])]);