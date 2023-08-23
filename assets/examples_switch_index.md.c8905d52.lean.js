import{e as F,f as y,o as e,g as c,a as n,F as i,r as d,d as l,b as t,h as u}from"./app.caebce97.js";const C=F({name:"Basic",setup(r){const s=y(!0);return(D,a)=>{const o=d("a-switch");return e(),c(i,null,[n(o,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=p=>s.value=p)},null,8,["modelValue"]),n(o)],64)}}}),A=F({name:"Disabled",setup(r){const s=y(!0);return(D,a)=>{const o=d("a-switch");return e(),c(i,null,[n(o,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=p=>s.value=p),disabled:""},null,8,["modelValue"]),n(o,{disabled:""})],64)}}}),h=F({name:"Title",setup(r){const s=y(!0);return(D,a)=>{const o=d("a-switch");return e(),c(i,null,[n(o,{size:"large",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=p=>s.value=p),"open-title":"是","off-title":"否",disabled:!0},null,8,["modelValue"]),n(o,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=p=>s.value=p),"open-title":"开","off-title":"关"},null,8,["modelValue"]),n(o,{size:"small",modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=p=>s.value=p),"open-title":"上","off-title":"下"},null,8,["modelValue"])],64)}}}),_=l("h1",{id:"switch-开关",tabindex:"-1"},[t("Switch 开关 "),l("a",{class:"header-anchor",href:"#switch-开关","aria-hidden":"true"},"#")],-1),m=l("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),g=l("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),v=l("p",null,[t("绑定 "),l("code",null,"v-model"),t(" 到一个 "),l("code",null,"Boolean"),t(" 类型的变量。")],-1),E={class:"example"},f=u("",3),q={class:"example"},w=u("",3),b={class:"example"},V=u("",3),S=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"文字描述","slug":"文字描述","link":"#文字描述","children":[]},{"level":2,"title":"Switch API","slug":"switch-api","link":"#switch-api","children":[]}],"relativePath":"examples/switch/index.md"}'),T={name:"examples/switch/index.md"},k=Object.assign(T,{setup(r){return(s,D)=>(e(),c("div",null,[_,m,g,v,l("div",E,[n(C)]),f,l("div",q,[n(A)]),w,l("div",b,[n(h)]),V]))}});export{S as __pageData,k as default};