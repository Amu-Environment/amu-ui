import{f as r,o,c as D,r as y,g as i,d as a,a as t,b as c,h as F}from"./app.75269d6d.js";const A={name:"Basic",setup(e){const s=r(1),l=n=>{s.value=n};return(n,C)=>{const p=y("a-pagination");return o(),D(p,{total:"50","current-page":s.value,onPageChange:l},null,8,["current-page"])}}},g={name:"Background",setup(e){const s=r(1),l=n=>{s.value=n};return(n,C)=>{const p=y("a-pagination");return o(),D(p,{total:"50","current-page":s.value,onPageChange:l,background:""},null,8,["current-page"])}}},u={name:"ShowSizeChanger",setup(e){const s=r(1),l=n=>{s.value=n};return(n,C)=>{const p=y("a-pagination");return o(),D(p,{total:"500",pageSize:7,"current-page":s.value,onPageChange:l,background:"",showSizeChanger:""},null,8,["current-page"])}}},_={name:"AppointPage",setup(e){const s=r(1),l=n=>{s.value=n};return(n,C)=>{const p=y("a-pagination");return o(),D(p,{total:"80","current-page":s.value,onPageChange:l,background:"",showSizeChanger:"",showQuickJumper:""},null,8,["current-page"])}}},d=a("h1",{id:"pagination-分页",tabindex:"-1"},[c("Pagination 分页 "),a("a",{class:"header-anchor",href:"#pagination-分页","aria-hidden":"true"},"#")],-1),h=a("p",null,"当数据量过多时，使用分页分解数据。",-1),m=a("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),E=a("p",null,[a("code",null,"total"),c("表示总条目数，"),a("code",null,"size"),c("用于设置每页显示的页码数量")],-1),v={class:"example"},f=F("",3),P={class:"example"},b=F("",3),T={class:"example"},q=F("",3),x={class:"example"},k=F("",1),w=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"带有背景色的分页","slug":"带有背景色的分页","link":"#带有背景色的分页","children":[]},{"level":2,"title":"更改每页显示条目个数","slug":"更改每页显示条目个数","link":"#更改每页显示条目个数","children":[]},{"level":2,"title":"跳转至指定页码","slug":"跳转至指定页码","link":"#跳转至指定页码","children":[]}],"relativePath":"examples/pagination/index.md"}'),S={name:"examples/pagination/index.md"},N=Object.assign(S,{setup(e){return(s,l)=>(o(),i("div",null,[d,h,m,E,a("div",v,[t(A)]),f,a("div",P,[t(g)]),b,a("div",T,[t(u)]),q,a("div",x,[t(_)]),k]))}});export{w as __pageData,N as default};
