(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){"use strict";r.d(t,"a",function(){return _});var _={addition:"+",subtraction:"-",multiplication:"\xd7",division:"\xf7"}},20:function(e,t,r){"use strict";var _=r(4),i=r(8),n={addition:"+",subtraction:"-",multiplication:"*",division:"/"},o=r(14);r.d(t,"a",function(){return a});var a=function(){function e(t){Object(_.a)(this,e),this.type=t}return Object(i.a)(e,[{key:"displayValue",get:function(){return o.a[this.type]}},{key:"evalValue",get:function(){return n[this.type]}}]),e}()},26:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var _=r(4),i=r(8),n=function(){function e(t){Object(_.a)(this,e),this.number=t}return Object(i.a)(e,[{key:"displayValue",get:function(){return this.number.toString()}},{key:"evalValue",get:function(){return this.number.toString()}}]),e}()},27:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var _,i,n,o=r(12),a=r(4),s=r(8),c=r(3),l=(r(24),r(2)),p=r(21),u=(_=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"digits",i,this),Object(o.a)(this,"isNegative",n,this)}return Object(s.a)(e,[{key:"addDigit",value:function(e){this.digits.push(e)}},{key:"removeDigit",value:function(){this.digits.pop()}},{key:"clear",value:function(){this.digits=[],this.isNegative=!1}},{key:"negate",value:function(){this.isNegative=!this.isNegative}},{key:"digitsAsNumber",get:function(){var e=this.digits.join("");if(Object(p.a)(e))return 0;var t=parseInt(e);return this.isNegative?-t:t},set:function(e){var t=Math.abs(e);this.isNegative=function(e){return e<0}(e),this.digits=t.toString().split("").map(function(e){return parseInt(e)})}}]),e}(),i=Object(c.a)(_.prototype,"digits",[l.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),n=Object(c.a)(_.prototype,"isNegative",[l.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(c.a)(_.prototype,"addDigit",[l.b],Object.getOwnPropertyDescriptor(_.prototype,"addDigit"),_.prototype),Object(c.a)(_.prototype,"removeDigit",[l.b],Object.getOwnPropertyDescriptor(_.prototype,"removeDigit"),_.prototype),Object(c.a)(_.prototype,"clear",[l.b],Object.getOwnPropertyDescriptor(_.prototype,"clear"),_.prototype),Object(c.a)(_.prototype,"negate",[l.b],Object.getOwnPropertyDescriptor(_.prototype,"negate"),_.prototype),Object(c.a)(_.prototype,"digitsAsNumber",[l.c],Object.getOwnPropertyDescriptor(_.prototype,"digitsAsNumber"),_.prototype),_)},30:function(e,t,r){e.exports=r(36)},36:function(e,t,r){"use strict";r.r(t);var _,i=r(1),n=r(2),o=r(0),a=r.n(o),s=r(25),c=r.n(s),l='"Montserrat", sans-serif',p="monospace",u="500px",b={mobile:"(max-width: ".concat(u,")"),desktop:"(min-width: ".concat(u,")")},d=r(7),O=r(11),D=r(13),m=r(5),h=Object(O.a)(function(){var e=m.a.expression.map(function(e){return e.displayValue}).join(" ");return Object(i.c)("div",{css:g.container},Object(i.c)("p",{css:g.expression},e,"\xa0"),Object(i.c)("p",{css:g.currentDigits},m.a.currentDigitsAsNumber))}),g={container:{name:"1drp4fj",styles:"background-color:#3e4c4e;padding:20px;"},expression:Object(d.a)("margin-bottom:5px;color:",Object(D.a)("white",.7),";font-weight:500;font-size:14px;text-align:right;"),currentDigits:Object(d.a)("color:",Object(D.a)("white",.7),";font-weight:600;font-size:22px;text-align:right;")},E=r(4),f=r(18),y=r(17),w=r(19),v=function e(t,r){Object(E.a)(this,e),this.label=t,this.action=r},P=function(e){function t(e){var r;return Object(E.a)(this,t),(r=Object(f.a)(this,Object(y.a)(t).call(this,e))).digit=e,r.action=function(){return m.a.addDigit(r.digit)},r}return Object(w.a)(t,e),t}(v),j=r(8),C=r(3),M=r(14),x=(_=function(e){function t(e){var r;return Object(E.a)(this,t),(r=Object(f.a)(this,Object(y.a)(t).call(this,M.a[e]))).type=e,r.action=function(){return m.a.addOperator(r.type)},r.isMonospace=!0,r}return Object(w.a)(t,e),Object(j.a)(t,[{key:"isActive",get:function(){return m.a.currentlySettingOperator===this.type}}]),t}(v),Object(C.a)(_.prototype,"isActive",[n.c],Object.getOwnPropertyDescriptor(_.prototype,"isActive"),_.prototype),_),A=r(28),W=r.n(A),L=Object(O.a)(function(e){var t=e.model,r=t.label,_=t.action,n=t.isActive,o=t.isMonospace,a=W()({isActive:n,isMonospace:o});return Object(i.c)("button",{onClick:_,css:k.container},Object(i.c)("span",{className:a,css:k.inner},r))}),k={container:{name:"1sq7p9v",styles:"position:relative;padding-bottom:100%;border:none;background:none;outline:none;cursor:pointer;"},inner:Object(d.a)("position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;color:",Object(D.a)("white",.8),";font-weight:400;border:3px solid #2dabbc;border-radius:50%;transition:transform 50ms ease-in-out,background-color 100ms ease-in-out;&:active{transform:scale(0.9);}&.isActive{background-color:#2dabbc;}&.isMonospace{font-family:",p,";line-height:1px;}@media ",b.mobile,"{font-size:6vw;svg{height:6vw;}}@media ",b.desktop,"{font-size:18px;svg{height:18px;}&:hover,&:focus{background-color:#2dabbc;}}")},I=[new v("CE",function(){return m.a.clearCurrentDigits()}),new v("C",function(){return m.a.clearEverything()}),new v(Object(i.c)(function(){return Object(i.c)("svg",{style:{marginLeft:-2},viewBox:"0 0 24 24"},Object(i.c)("path",{fill:"currentColor",d:"M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12L19,15.59M22,3A2,2 0 0,1 24,5V19A2,2 0 0,1 22,21H7C6.31,21 5.77,20.64 5.41,20.11L0,12L5.41,3.88C5.77,3.35 6.31,3 7,3H22M22,5H7L2.28,12L7,19H22V5Z"}))},null),function(){return m.a.removeDigit()}),new x("division"),new P(7),new P(8),new P(9),new x("multiplication"),new P(4),new P(5),new P(6),new x("subtraction"),new P(1),new P(2),new P(3),new x("addition"),new v("\xb1",function(){return m.a.negateCurrentDigits()}),new P(0),new v(",",function(){}),new v("=",function(){return m.a.calculate()})],B=function(){var e=I.map(function(e,t){return Object(i.c)(L,{key:t,model:e})});return Object(i.c)("div",{css:K.container},e)},K={container:{name:"nl5ouf",styles:"display:grid;grid-template-columns:repeat(4,1fr);grid-gap:20px;padding:20px;background-color:#334446;"}},R=Object(O.a)(function(){return Object(i.c)("div",{css:T.container},Object(i.c)(h,null),Object(i.c)(B,null))}),T={container:Object(d.a)("width:100%;border-radius:4px;overflow:hidden;margin:auto;@media ",b.mobile,"{max-width:calc(100% - 20px);}@media ",b.desktop,"{width:300px;}")},U={container:{name:"1r6xfx4",styles:"display:flex;flex-direction:column;min-height:100vh;background-color:#212c2d;"}},N=Object(i.b)(".js-focus-visible *:focus:not(.focus-visible){outline:none;}*{box-sizing:border-box;margin:0;padding:0;text-decoration:inherit;color:inherit;font-family:inherit;}body{background-color:hsl(0,0%,93%);overflow-y:scroll;}h1,h2,h3,h4,h5,h6{font-weight:500;}html,body{font-family:",l,";font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}");Object(n.d)({enforceActions:"always"}),c.a.render(Object(i.c)(function(){return Object(i.c)(a.a.Fragment,null,Object(i.c)("div",{css:U.container},Object(i.c)(R,null)),Object(i.c)(i.a,{styles:N}))},null),document.getElementById("root"))},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return calculatorStore});var C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),mobx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),ramda__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21),ramda__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(37),_classes_NumberExpressionPart__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(26),_classes_OperatorExpressionPart__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),_models_DigitListModel__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(27),_class,_descriptor,_temp,CalculatorStore=(_temp=function(){function CalculatorStore(){Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,CalculatorStore),this.finishedWithCurrentExpression=!1,this.currentDigits=new _models_DigitListModel__WEBPACK_IMPORTED_MODULE_10__.a,Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(this,"expression",_descriptor,this)}return Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorStore,[{key:"addDigit",value:function(e){this.finishedWithCurrentExpression&&(this.clearCurrentDigits(),this.finishedWithCurrentExpression=!1),this.currentDigits.addDigit(e)}},{key:"removeDigit",value:function(){this.currentDigits.removeDigit()}},{key:"clearCurrentDigits",value:function(){this.currentDigits.clear()}},{key:"negateCurrentDigits",value:function(){this.currentDigits.negate()}},{key:"clearExpression",value:function(){this.expression=[]}},{key:"clearEverything",value:function(){this.clearCurrentDigits(),this.clearExpression()}},{key:"flushExpressionChanges",value:function(){Object(ramda__WEBPACK_IMPORTED_MODULE_6__.a)(this.currentDigits.digits)||this.expression.push(new _classes_NumberExpressionPart__WEBPACK_IMPORTED_MODULE_8__.a(this.currentDigits.digitsAsNumber))}},{key:"addOperator",value:function(e){(this.canAddOperator||this.currentlySettingOperator)&&(this.currentlySettingOperator&&this.expression.pop(),this.flushExpressionChanges(),this.clearCurrentDigits(),this.expression.push(new _classes_OperatorExpressionPart__WEBPACK_IMPORTED_MODULE_9__.a(e)),this.finishedWithCurrentExpression=!1)}},{key:"calculate",value:function calculate(){if(this.canAddOperator){this.flushExpressionChanges();var evalExpression=this.expression.map(function(e){return e.evalValue}).join(" "),result=eval(evalExpression);this.currentDigits.digitsAsNumber=result,this.clearExpression(),this.finishedWithCurrentExpression=!0}}},{key:"currentDigitsAsNumber",get:function(){return this.currentDigits.digitsAsNumber}},{key:"currentlySettingOperator",get:function(){var e=Object(ramda__WEBPACK_IMPORTED_MODULE_7__.a)(this.expression);if(e instanceof _classes_OperatorExpressionPart__WEBPACK_IMPORTED_MODULE_9__.a)return e.type}},{key:"canAddOperator",get:function(){return!Object(ramda__WEBPACK_IMPORTED_MODULE_6__.a)(this.currentDigits.digits)}}]),CalculatorStore}(),_class=_temp,Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"currentDigitsAsNumber",[mobx__WEBPACK_IMPORTED_MODULE_5__.c],Object.getOwnPropertyDescriptor(_class.prototype,"currentDigitsAsNumber"),_class.prototype),_descriptor=Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"expression",[mobx__WEBPACK_IMPORTED_MODULE_5__.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"currentlySettingOperator",[mobx__WEBPACK_IMPORTED_MODULE_5__.c],Object.getOwnPropertyDescriptor(_class.prototype,"currentlySettingOperator"),_class.prototype),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"clearExpression",[mobx__WEBPACK_IMPORTED_MODULE_5__.b],Object.getOwnPropertyDescriptor(_class.prototype,"clearExpression"),_class.prototype),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"canAddOperator",[mobx__WEBPACK_IMPORTED_MODULE_5__.c],Object.getOwnPropertyDescriptor(_class.prototype,"canAddOperator"),_class.prototype),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"flushExpressionChanges",[mobx__WEBPACK_IMPORTED_MODULE_5__.b],Object.getOwnPropertyDescriptor(_class.prototype,"flushExpressionChanges"),_class.prototype),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"addOperator",[mobx__WEBPACK_IMPORTED_MODULE_5__.b],Object.getOwnPropertyDescriptor(_class.prototype,"addOperator"),_class.prototype),Object(C_WebDev_calculator_new_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__.a)(_class.prototype,"calculate",[mobx__WEBPACK_IMPORTED_MODULE_5__.b],Object.getOwnPropertyDescriptor(_class.prototype,"calculate"),_class.prototype),_class),calculatorStore=new CalculatorStore}},[[30,1,2]]]);
//# sourceMappingURL=main.13dd760c.chunk.js.map