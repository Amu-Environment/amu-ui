import{e as C,f as l,o as r,g as A,a as e,F as m,r as c,c as h,d as s,b as i,h as d}from"./app.f983e3d7.js";const g=C({name:"Basic",setup(D){const a=l(2),o=l(3),F=l([{label:"选项 A",value:1},{label:"选项 B",value:2}]),p=l([{label:"选项 C",value:3,disabled:!0},{label:"选项 D",value:4,disabled:!0}]);return(y,n)=>{const u=c("ARadioGroup"),_=c("a-radio-group");return r(),A(m,null,[e(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value=t),options:F.value},null,8,["modelValue","options"]),e(_,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=t=>o.value=t),options:p.value},null,8,["modelValue","options"])],64)}}});const v=C({name:"Disabled",setup(D){const a=l(2),o=l([{label:"选项 一",value:1,disabled:!0},{label:"选项 二",value:2,disabled:!0}]);return(F,p)=>{const y=c("a-radio-group");return r(),h(y,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=n=>a.value=n),options:o.value},null,8,["modelValue","options"])}}}),b=s("h1",{id:"radio-单选框",tabindex:"-1"},[i("Radio 单选框 "),s("a",{class:"header-anchor",href:"#radio-单选框","aria-hidden":"true"},"#")],-1),E=s("p",null,"在一组备选项中进行单选。",-1),f=s("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),q=s("p",null,"一般为一组数据中单选某个数据，如需选择多个选项推荐使用Checkbox多选框",-1),k={class:"example"},x=d("",3),V={class:"example"},T=d("",1),S=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]}],"relativePath":"examples/radio/index.md"}'),B={name:"examples/radio/index.md"},R=Object.assign(B,{setup(D){return(a,o)=>(r(),A("div",null,[b,E,f,q,s("div",k,[e(g)]),x,s("div",V,[e(v)]),T]))}});export{S as __pageData,R as default};