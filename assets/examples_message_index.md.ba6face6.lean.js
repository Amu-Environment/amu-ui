import{a as l}from"./chunks/index.33ed50f8.js";import{d as y,o as r,j as A,w as o,b as i,e as a,c as C,a as n,F as g,f as s,g as u}from"./app.b212b21a.js";const _=y({__name:"Basic",setup(D){const p=()=>{l.message({message:"this is a info message"})};return(e,F)=>{const c=i("a-button");return r(),A(c,{type:"info",onClick:p},{default:o(()=>[a("click to show a message")]),_:1})}}}),d=y({__name:"DiffType",setup(D){const p=()=>{l.error({message:"Display an error message when you click the button"})},e=()=>{l.success({message:"Display an success message when you click the button"})},F=()=>{l.warning({message:"this is a warning message"})},c=()=>{l.message({message:"this is a info message"})};return(k,T)=>{const t=i("AButton");return r(),C(g,null,[n(t,{type:"success",onClick:e},{default:o(()=>[a("show success ")]),_:1}),n(t,{type:"info",onClick:c},{default:o(()=>[a("show Info ")]),_:1}),n(t,{type:"danger",onClick:p},{default:o(()=>[a("show error ")]),_:1}),n(t,{type:"warning",onClick:F},{default:o(()=>[a("show warning ")]),_:1})],64)}}}),m=s("h1",{id:"message-消息提示",tabindex:"-1"},[a("Message 消息提示 "),s("a",{class:"header-anchor",href:"#message-消息提示","aria-hidden":"true"},"#")],-1),h=s("p",null,"常用于主动操作后的反馈提示。",-1),b=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),f=s("p",null,"从顶部出现，3 秒后自动消失。",-1),E={class:"example"},q=u("",3),w={class:"example"},v=u("",1),V=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"不同状态","slug":"不同状态","link":"#不同状态","children":[]}],"relativePath":"examples/message/index.md"}'),x={name:"examples/message/index.md"},N=Object.assign(x,{setup(D){return(p,e)=>(r(),C("div",null,[m,h,b,f,s("div",E,[n(_)]),q,s("div",w,[n(d)]),v]))}});export{V as __pageData,N as default};
