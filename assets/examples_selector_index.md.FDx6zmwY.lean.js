import{d,b as l,q as k,z as r,y as g,s as c,B as s,a as E,m as n,aj as y}from"./chunks/framework.BxKR_416.js";const F=d({__name:"Basic",setup(e){const i=l(),t=l([{value:1,text:"选项 一"},{value:2,text:"选项 二"},{value:3,text:"选项 三"},{value:4,text:"选项 四"},{value:5,text:"选项 五"}]);return(o,a)=>{const h=g("a-select");return k(),r(h,{class:"vp-raw",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=p=>i.value=p),options:t.value,placeholder:"请选择一个选项"},null,8,["modelValue","options"])}}}),u=d({__name:"Search",setup(e){const i=l(),t=l([{value:1,text:"Yjj"},{value:2,text:"Big龙"},{value:3,text:"嘿毛"},{value:4,text:"嫖瓜"},{value:5,text:"吊毛"},{value:6,text:"吴彦祖"},{value:7,text:"陈冠希"},{value:8,text:"林俊杰"},{value:9,text:"周杰伦"},{value:10,text:"王力宏"}]);return(o,a)=>{const h=g("a-select");return k(),r(h,{class:"vp-raw",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=p=>i.value=p),isSearch:"",options:t.value,placeholder:"请选择一个小可爱"},null,8,["modelValue","options"])}}}),C=s("h1",{id:"select-选择器",tabindex:"-1"},[n("Select 选择器 "),s("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1),v=s("p",null,"常用的操作按钮。",-1),B=s("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),_=s("p",null,[n("适用广泛的基础单选 "),s("code",null,"v-model"),n(" 的值为当前被选中的"),s("code",null,"option"),n(" 的 value 属性值")],-1),m={class:"example"},q=y("",3),x={class:"example"},b=y("",7),f=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"examples/selector/index.md","filePath":"examples/selector/index.md"}'),A={name:"examples/selector/index.md"},S=Object.assign(A,{setup(e){return(i,t)=>(k(),c("div",null,[C,v,B,_,s("div",m,[E(F)]),q,s("div",x,[E(u)]),b]))}});export{f as __pageData,S as default};
