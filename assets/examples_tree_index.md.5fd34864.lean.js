import{e as y,f as p,o as c,c as F,r as C,g as h,d as n,a as D,b as A,h as i}from"./app.30ab77c5.js";const u=y({name:"Basic",setup(r){const a=p(!1),l=p([{key:1,title:"一级机构部门",children:[{key:90001,title:"测试机构111",children:[{key:90019,title:"测试机构111-2"},{key:90025,title:"机构机构",children:[{key:90026,title:"机构机构-2"}]}]},{key:90037,title:"另一个机构部门"}]},{key:2,title:"小卖部总舵",children:[{key:90037,title:"小卖部河边分部"}]}]),o=s=>{console.log("点击节点 Data : ",s)},e=s=>{console.log(s)};return(s,d)=>{const t=C("a-tree");return c(),F(t,{isSelect:a.value,data:l.value,onNodeClick:o,onChecked:e},null,8,["isSelect","data"])}}}),_=y({name:"Checked",setup(r){const a=p(!0),l=p([{key:1,title:"一级机构部门",children:[{key:90001,title:"测试机构111",children:[{key:90019,title:"测试机构111-2"},{key:90025,title:"机构机构",children:[{key:90026,title:"机构机构-2"}]}]},{key:90037,title:"另一个机构部门"}]},{key:2,title:"小卖部总舵",children:[{key:90037,title:"小卖部河边分部"}]}]),o=s=>{console.log("点击节点 Data : ",s)},e=s=>{console.log(s)};return(s,d)=>{const t=C("a-tree");return c(),F(t,{isSelect:a.value,data:l.value,onNodeClick:o,onChecked:e},null,8,["isSelect","data"])}}}),k=n("h1",{id:"tree-树形控件",tabindex:"-1"},[A("Tree 树形控件 "),n("a",{class:"header-anchor",href:"#tree-树形控件","aria-hidden":"true"},"#")],-1),q=n("p",null,"用清晰的层级结构展示信息，可展开或折叠。",-1),E=n("h2",{id:"基础用法",tabindex:"-1"},[A("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),g=n("p",null,"基础的树形结构展示",-1),m={class:"example"},b=i("",3),f={class:"example"},v=i("",7),T=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"可选择","slug":"可选择","link":"#可选择","children":[]},{"level":2,"title":"Select API","slug":"select-api","link":"#select-api","children":[]},{"level":2,"title":"options Attributes","slug":"options-attributes","link":"#options-attributes","children":[]},{"level":2,"title":"Select Events","slug":"select-events","link":"#select-events","children":[]}],"relativePath":"examples/tree/index.md"}'),S={name:"examples/tree/index.md"},N=Object.assign(S,{setup(r){return(a,l)=>(c(),h("div",null,[k,q,E,g,n("div",m,[D(u)]),b,n("div",f,[D(_)]),v]))}});export{T as __pageData,N as default};
