import{e as y,o as r,c as A,w as l,j as o,r as i,b as a,g as C,a as n,F as g,d as s,h as u}from"./app.7f119ad7.js";const _=a("click to show a message"),d=y({name:"Basic",setup(D){const p=()=>{o.message({message:"this is a info message"})};return(e,F)=>{const c=i("a-button");return r(),A(c,{type:"info",onClick:p},{default:l(()=>[_]),_:1})}}}),m=a("show success "),h=a("show Info "),b=a("show error "),f=a("show warning "),E=y({name:"DiffType",setup(D){const p=()=>{o.error({message:"Display an error message when you click the button"})},e=()=>{o.success({message:"Display an success message when you click the button"})},F=()=>{o.warning({message:"this is a warning message"})},c=()=>{o.message({message:"this is a info message"})};return(N,$)=>{const t=i("AButton");return r(),C(g,null,[n(t,{type:"success",onClick:e},{default:l(()=>[m]),_:1}),n(t,{type:"info",onClick:c},{default:l(()=>[h]),_:1}),n(t,{type:"danger",onClick:p},{default:l(()=>[b]),_:1}),n(t,{type:"warning",onClick:F},{default:l(()=>[f]),_:1})],64)}}}),q=s("h1",{id:"message-消息提示",tabindex:"-1"},[a("Message 消息提示 "),s("a",{class:"header-anchor",href:"#message-消息提示","aria-hidden":"true"},"#")],-1),w=s("p",null,"常用于主动操作后的反馈提示。",-1),v=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),x=s("p",null,"从顶部出现，3 秒后自动消失。",-1),k={class:"example"},T=u("",3),B={class:"example"},S=u("",1),P=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"不同状态","slug":"不同状态","link":"#不同状态","children":[]}],"relativePath":"examples/message/index.md"}'),V={name:"examples/message/index.md"},M=Object.assign(V,{setup(D){return(p,e)=>(r(),C("div",null,[q,w,v,x,s("div",k,[n(d)]),T,s("div",B,[n(E)]),S]))}});export{P as __pageData,M as default};
