(function(e){function t(t){for(var o,i,l=t[0],d=t[1],c=t[2],s=0,p=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,l=1;l<a.length;l++){var d=a[l];0!==n[d]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},n={app:0},r=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0448":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap);"]),t.push([e.i,"*,:after,:before{margin:0;padding:0;border:0;outline:0;box-sizing:border-box}body{padding:10px;background:#e5e5e5;font-family:IBM Plex Sans;font-size:16px;line-height:21px}h1{font-weight:700;font-size:34px;line-height:44px;color:#2c2738}a{text-decoration:none;line-height:22px;color:#0880ae}.invalid{display:block;margin-top:8px;font-size:14px;line-height:18px;color:#ff7171;opacity:0;visibility:hidden;transition:all .2s ease-in}.invalid--show{opacity:1;visibility:visible}",""]),e.exports=t},"19bf":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".registration[data-v-73afba20]{padding:40px 30px;background:#fff;box-shadow:0 12px 24px rgba(44,39,56,.02),0 32px 64px rgba(44,39,56,.04);border-radius:24px}.registration__login[data-v-73afba20]{margin-top:8px;line-height:22px;color:#2c2738}.registration__form[data-v-73afba20]{margin-top:56px}",""]),e.exports=t},2649:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".button[data-v-f3d95960]{width:100%;height:56px;background:#0880ae;box-shadow:0 2px 4px rgba(44,39,56,.08),0 4px 8px rgba(44,39,56,.08);border-radius:6px;font-family:IBM Plex Sans;font-weight:500;font-size:16px;color:#ebf4f8;transition:all .2s ease-out;cursor:pointer}.button[data-v-f3d95960]:hover{box-shadow:0 12px 24px rgba(44,39,56,.08),0 24px 48px rgba(44,39,56,.16)}.button[data-v-f3d95960]:active{border:2px solid rgba(44,39,56,.86);box-shadow:0 2px 4px rgba(44,39,56,.0001),0 4px 8px rgba(44,39,56,.08)}.button[disabled][data-v-f3d95960]{background:#dbe2ea;border:0;box-shadow:0 4px 8px rgba(44,39,56,.08);color:#2c2738;opacity:.5;cursor:default}",""]),e.exports=t},"276f":function(e,t,a){"use strict";a("e44c")},"2c9c":function(e,t,a){var o=a("19bf");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("42938e32",o,!0,{sourceMap:!1,shadowMode:!1})},"4a60":function(e,t,a){"use strict";a("2c9c")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function n(e,t,a,n,r,i){var l=Object(o["q"])("Registration");return Object(o["j"])(),Object(o["d"])(l)}a("b0c0");var r=function(e){return Object(o["l"])("data-v-73afba20"),e=e(),Object(o["k"])(),e},i={class:"registration"},l=r((function(){return Object(o["f"])("h1",{class:"registration__title"},"Регистрация",-1)})),d=r((function(){return Object(o["f"])("p",{class:"registration__login"},[Object(o["g"])(" Уже есть аккаунт? "),Object(o["f"])("a",{href:"#"},"Войти")],-1)})),c=Object(o["g"])(" Принимаю "),u=r((function(){return Object(o["f"])("a",{href:"#"},"условия",-1)})),s=Object(o["g"])(" использования "),p=Object(o["g"])("Зарегистрироваться");function f(e,t,a,n,r,f){var b=Object(o["q"])("TextField"),v=Object(o["q"])("DropDown"),x=Object(o["q"])("CheckBox"),h=Object(o["q"])("Btn");return Object(o["j"])(),Object(o["e"])("div",i,[l,d,Object(o["f"])("form",{class:"registration__form",onSubmit:t[5]||(t[5]=Object(o["w"])((function(){}),["prevent"]))},[Object(o["h"])(b,{label:"Имя",type:"text",placeholder:"Введите Ваше имя",modelValue:n.form.name.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.form.name.value=e}),field:n.form.name},null,8,["modelValue","field"]),Object(o["h"])(b,{label:"Email",type:"email",placeholder:"Введите Ваш email",modelValue:n.form.email.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.form.email.value=e}),field:n.form.email},null,8,["modelValue","field"]),Object(o["h"])(b,{label:"Номер телефона",type:"tel",placeholder:"Введите номер телефона",modelValue:n.form.phone.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.form.phone.value=e}),field:n.form.phone},null,8,["modelValue","field"]),Object(o["h"])(v,{label:"Язык",items:["Русский","English"],modelValue:n.form.language.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.form.language.value=e}),field:n.form.language},null,8,["modelValue","field"]),Object(o["h"])(x,{modelValue:n.form.agree.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.form.agree.value=e})},{default:Object(o["u"])((function(){return[c,u,s]})),_:1},8,["modelValue"]),Object(o["h"])(h,{type:"submit",disabled:!n.form.valid},{default:Object(o["u"])((function(){return[p]})),_:1},8,["disabled"])],32)])}var b={class:"textfield"},v={class:"textfield__label"},x=["type","placeholder","value"];function h(e,t,a,n,r,i){return Object(o["j"])(),Object(o["e"])("label",b,[Object(o["f"])("span",v,Object(o["r"])(a.label),1),Object(o["f"])("input",{class:"textfield__input",type:a.type,placeholder:a.placeholder,value:a.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),onBlur:t[1]||(t[1]=function(){var e;return a.field.blur&&(e=a.field).blur.apply(e,arguments)})},null,40,x),Object(o["f"])("small",{class:Object(o["i"])(["invalid",{"invalid--show":!a.field.valid&&a.field.touched}])},"Введено не корректное значение",2)])}var g={name:"TextField",props:{field:Object,modelValue:String,label:String,placeholder:String,type:{type:String,default:"text"}}},m=(a("8ad1"),a("6b0d")),_=a.n(m);const j=_()(g,[["render",h],["__scopeId","data-v-10aac5e2"]]);var O=j,w=function(e){return Object(o["l"])("data-v-f0e9bd40"),e=e(),Object(o["k"])(),e},y=["data-state"],k={class:"dropdown__content",ref:"options"},M=["onClick"],V=w((function(){return Object(o["f"])("input",{class:"dropdown__input",type:"radio"},null,-1)}));function z(e,t,a,n,r,i){return Object(o["j"])(),Object(o["e"])("div",{class:"dropdown","data-state":e.state},[Object(o["f"])("span",{class:"dropdown__label",onClick:t[0]||(t[0]=function(){return i.toggleMenu&&i.toggleMenu.apply(i,arguments)})},Object(o["r"])(a.label),1),Object(o["f"])("div",{tabindex:"0",class:"dropdown__title",onClick:t[1]||(t[1]=function(){return i.toggleMenu&&i.toggleMenu.apply(i,arguments)}),onBlur:t[2]||(t[2]=function(){var e;return a.field.blur&&(e=a.field).blur.apply(e,arguments)}),ref:"title"},Object(o["r"])(e.current),545),Object(o["f"])("div",k,[(Object(o["j"])(!0),Object(o["e"])(o["a"],null,Object(o["o"])(a.items,(function(t,a){return Object(o["j"])(),Object(o["e"])("label",{class:Object(o["i"])(["dropdown__option",{"dropdown__option--active":e.current===t}]),onClick:function(e){return i.setCurrent(t)},key:a},[V,Object(o["f"])("span",null,Object(o["r"])(t),1)],10,M)})),128))],512),Object(o["f"])("small",{class:Object(o["i"])(["invalid",{"invalid--show":!a.field.valid&&a.field.touched}])},"Введено не корректное значение",2)],8,y)}var S={name:"DropDown",props:{field:Object,modelValue:String,label:String,items:Array},data:function(){return{state:"",current:""}},mounted:function(){this.current=this.modelValue||this.label,window.addEventListener("click",this.handleClickWindow)},destroyed:function(){window.removeEventListener("click",this.handleClickWindow)},methods:{toggleMenu:function(e){this.$refs.title.focus(),this.state=this.state?"":"active"},setCurrent:function(e){this.current=e,this.state="",this.$emit("update:modelValue",e)},handleClickWindow:function(e){!this.$el.contains(e.target)&&(this.state="")}}};a("dc0e");const B=_()(S,[["render",z],["__scopeId","data-v-f0e9bd40"]]);var C=B,P=function(e){return Object(o["l"])("data-v-79c7c847"),e=e(),Object(o["k"])(),e},I={class:"checkbox"},A=P((function(){return Object(o["f"])("span",{class:"checkbox__custom"},null,-1)})),$={class:"checkbox__label"};function q(e,t,a,n,r,i){return Object(o["j"])(),Object(o["e"])("label",I,[Object(o["v"])(Object(o["f"])("input",{class:"checkbox__input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.modelValue=e}),onChange:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.checked)})},null,544),[[o["s"],a.modelValue]]),A,Object(o["f"])("span",$,[Object(o["p"])(e.$slots,"default",{},void 0,!0)])])}var F={name:"CheckBox",props:{modelValue:Boolean}};a("276f");const D=_()(F,[["render",q],["__scopeId","data-v-79c7c847"]]);var Z=D,U=["type","disabled"];function E(e,t,a,n,r,i){return Object(o["j"])(),Object(o["e"])("button",{class:"button",type:a.type,disabled:a.disabled},[Object(o["p"])(e.$slots,"default",{},void 0,!0)],8,U)}var T={name:"Button",props:{type:{type:String,default:"button"},disabled:{type:Boolean,default:!1}}};a("f412");const R=_()(T,[["render",E],["__scopeId","data-v-f3d95960"]]);var W=R,J=a("3835"),L=(a("4fad"),a("4de4"),a("b64b"),a("d81d"),function(e){return!e});function G(e){var t=Object(o["n"])(!0),a=Object(o["n"])(e.value),n=Object(o["n"])(!1),r=Object(o["m"])({}),i=function(a){var o;t.value=!0,Object.keys(null!==(o=e.validators)&&void 0!==o?o:{}).map((function(o){var n=e.validators[o](a);r[o]=L(n),L(n)&&(t.value=!1)}))};return Object(o["t"])(a,i,{immediate:!0}),{valid:t,value:a,errors:r,touched:n,blur:function(){return n.value=!0}}}function H(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o["m"])({}),a="valid",n=0,r=Object.entries(e);n<r.length;n++){var i=Object(J["a"])(r[n],2),l=i[0],d=i[1];t[l]=G(d)}var c=function(e){return e!==a};return t[a]=Object(o["b"])((function(){return Object.keys(t).filter(c).reduce((function(e,a){return e=e&&t[a].valid,e}),!0)})),t}var K=function(e){return!!e},N=function(e){return function(t){return e.test(t)}},Q={name:"Registration",setup:function(){var e=H({name:{value:"",validators:{required:K,pattern:N(/^[\t-\r \x2D\xA0\u0401\u0410-\u044F\u0451\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/)}},email:{value:"",validators:{required:K,pattern:N(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)}},phone:{value:"",validators:{required:K,pattern:N(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)}},language:{value:"",validators:{required:K}},agree:{value:!1,validators:{required:K}}});function t(){}return{form:e,submit:t}},components:{TextField:O,DropDown:C,CheckBox:Z,Btn:W}};a("4a60");const X=_()(Q,[["render",f],["__scopeId","data-v-73afba20"]]);var Y=X,ee={name:"App",components:{Registration:Y}};a("8331");const te=_()(ee,[["render",n]]);var ae=te;Object(o["c"])(ae).mount("#app")},"66ae":function(e,t,a){var o=a("0448");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("7a77a6c8",o,!0,{sourceMap:!1,shadowMode:!1})},8331:function(e,t,a){"use strict";a("66ae")},"8ad1":function(e,t,a){"use strict";a("df35")},"9b47":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".textfield[data-v-10aac5e2]{display:block;margin-bottom:7px}.textfield__label[data-v-10aac5e2]{display:block;font-weight:500;color:#756f86}.textfield__input[data-v-10aac5e2]{width:100%;height:52px;margin-top:8px;padding:0 16px;background:#fff;border:1px solid #dbe2ea;box-shadow:0 4px 8px rgba(44,39,56,.04);border-radius:6px;font-size:16px;color:#2c2738;transition:.2s}.textfield__input[data-v-10aac5e2]::-webkit-input-placeholder{font-family:IBM Plex Sans;font-size:16px;line-height:21px;color:#7c9cbf}.textfield__input[data-v-10aac5e2]:-moz-placeholder,.textfield__input[data-v-10aac5e2]::-moz-placeholder{font-family:IBM Plex Sans;font-size:16px;line-height:21px;color:#7c9cbf}.textfield__input[data-v-10aac5e2]:-ms-input-placeholder{font-family:IBM Plex Sans;font-size:16px;line-height:21px;color:#7c9cbf}.textfield__input[data-v-10aac5e2]:focus{border:2px solid #0880ae}",""]),e.exports=t},"9b4d":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'.dropdown[data-v-f0e9bd40]{position:relative;width:100%;margin-bottom:6px}.dropdown[data-state=active] .dropdown__title[data-v-f0e9bd40]:before{transform:translate(-3px,-50%) rotate(-45deg)}.dropdown[data-state=active] .dropdown__title[data-v-f0e9bd40]:after{transform:translate(3px,-50%) rotate(45deg)}.dropdown[data-state=active] .dropdown__content[data-v-f0e9bd40]{display:flex}.dropdown[data-state=active] .dropdown__option[data-v-f0e9bd40]{height:45px}.dropdown__label[data-v-f0e9bd40]{display:block;font-weight:500;color:#756f86;cursor:default}.dropdown__title[data-v-f0e9bd40]{position:relative;width:100%;height:52px;margin-top:8px;padding:16px;background:#fff;border:1px solid #dbe2ea;box-shadow:0 4px 8px rgba(44,39,56,.04);border-radius:6px;display:flex;align-items:center;cursor:pointer}.dropdown__title[data-v-f0e9bd40]:after,.dropdown__title[data-v-f0e9bd40]:before{position:absolute;top:50%;right:16px;content:"";display:block;width:10px;height:2px;background:#0880ae;transition:all .3s ease-out;transform:translate(-3px,-50%) rotate(45deg)}.dropdown__title[data-v-f0e9bd40]:after{transform:translate(3px,-50%) rotate(-45deg)}.dropdown__title[data-v-f0e9bd40]:focus{border:2px solid #0880ae}.dropdown__content[data-v-f0e9bd40]{display:none;flex-direction:column;position:absolute;top:85px;z-index:8;width:100%;padding:12px 0;background:#fff;border:1px solid #dbe2ea;box-shadow:0 4px 8px rgba(44,39,56,.04),0 20px 20px rgba(44,39,56,.04);border-radius:6px}.dropdown__option[data-v-f0e9bd40]{display:flex;align-items:center;width:100%;height:0;padding:0 15px;transition:all .2s ease-out;cursor:pointer;color:#756f86}.dropdown__option--active[data-v-f0e9bd40]{background:#ebf4f8}.dropdown__input[data-v-f0e9bd40]{display:none}',""]),e.exports=t},aea3:function(e,t,a){var o=a("24fb"),n=a("1de5"),r=a("f222");t=o(!1);var i=n(r);t.push([e.i,".checkbox[data-v-79c7c847]{display:inline-flex;align-items:flex-start;margin-bottom:39px;cursor:pointer}.checkbox__input[data-v-79c7c847]{display:none}.checkbox__input:checked+span[data-v-79c7c847]{background:url("+i+") no-repeat 50%;border:2px solid #0880ae}.checkbox__custom[data-v-79c7c847]{min-width:28px;min-height:28px;border:1px solid #dbe2ea;box-shadow:0 4px 8px rgba(44,39,56,.04);border-radius:4px;transition:all .2s ease-out}.checkbox__custom[data-v-79c7c847],.checkbox__label[data-v-79c7c847]{display:inline-block;vertical-align:middle}.checkbox__label[data-v-79c7c847]{margin-left:8px;font-weight:500;color:#756f86}",""]),e.exports=t},c05e:function(e,t,a){var o=a("2649");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("5c0a67d4",o,!0,{sourceMap:!1,shadowMode:!1})},dc0e:function(e,t,a){"use strict";a("f51a")},df35:function(e,t,a){var o=a("9b47");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("683e353c",o,!0,{sourceMap:!1,shadowMode:!1})},e44c:function(e,t,a){var o=a("aea3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("6f353c42",o,!0,{sourceMap:!1,shadowMode:!1})},f222:function(e,t,a){e.exports=a.p+"img/check.876600c5.svg"},f412:function(e,t,a){"use strict";a("c05e")},f51a:function(e,t,a){var o=a("9b4d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("1bdc0ba0",o,!0,{sourceMap:!1,shadowMode:!1})}});