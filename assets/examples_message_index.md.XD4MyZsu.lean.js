import{a as t}from"./chunks/index.Wp4GJY8y.js";import{d as g,y as d,q as e,z as c,A as n,m as i,s as y,a,F as u,B as s,aj as o}from"./chunks/framework.CJrF3YWJ.js";const _=g({__name:"Basic",setup(E){const h=()=>{t.message({message:"this is a info message"})};return(k,r)=>{const p=d("a-button");return e(),c(p,{type:"info",onClick:h},{default:n(()=>[i("click to show a message")]),_:1})}}}),F=g({__name:"DiffType",setup(E){const h=()=>{t.error({message:"Display an error message when you click the button"})},k=()=>{t.success({message:"Display an success message when you click the button"})},r=()=>{t.warning({message:"this is a warning message"})},p=()=>{t.message({message:"this is a info message"})};return(w,x)=>{const l=d("AButton");return e(),y(u,null,[a(l,{type:"success",onClick:k},{default:n(()=>[i("show success ")]),_:1}),a(l,{type:"info",onClick:p},{default:n(()=>[i("show Info ")]),_:1}),a(l,{type:"danger",onClick:h},{default:n(()=>[i("show error ")]),_:1}),a(l,{type:"warning",onClick:r},{default:n(()=>[i("show warning ")]),_:1})],64)}}}),m=s("h1",{id:"message-消息提示",tabindex:"-1"},[i("Message 消息提示 "),s("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1),A=s("p",null,"常用于主动操作后的反馈提示。",-1),D=s("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),C=s("p",null,"从顶部出现，3 秒后自动消失。",-1),b={class:"example"},B=o("",3),f={class:"example"},q=o("",1),S=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"examples/message/index.md","filePath":"examples/message/index.md"}'),v={name:"examples/message/index.md"},V=Object.assign(v,{setup(E){return(h,k)=>(e(),y("div",null,[m,A,D,C,s("div",b,[a(_)]),B,s("div",f,[a(F)]),q]))}});export{S as __pageData,V as default};