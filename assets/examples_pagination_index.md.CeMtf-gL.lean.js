import{b as e,y as E,q as h,z as r,s as y,B as i,a as p,m as l,aj as g}from"./chunks/framework.BxKR_416.js";const o={__name:"Basic",setup(k){const s=e(1),n=a=>{s.value=a};return(a,d)=>{const t=E("a-pagination");return h(),r(t,{total:"50","current-page":s.value,onPageChange:n},null,8,["current-page"])}}},c={__name:"Background",setup(k){const s=e(1),n=a=>{s.value=a};return(a,d)=>{const t=E("a-pagination");return h(),r(t,{total:"50","current-page":s.value,onPageChange:n,background:""},null,8,["current-page"])}}},F={__name:"ShowSizeChanger",setup(k){const s=e(1),n=a=>{s.value=a};return(a,d)=>{const t=E("a-pagination");return h(),r(t,{showTotal:"",total:"60",pageSize:7,"current-page":s.value,onPageChange:n,background:"",showSizeChanger:""},null,8,["current-page"])}}},u={__name:"AppointPage",setup(k){const s=e(1),n=a=>{s.value=a};return(a,d)=>{const t=E("a-pagination");return h(),r(t,{class:"vp-raw",showTotal:"",total:"60","current-page":s.value,onPageChange:n,background:"",showSizeChanger:"",showQuickJumper:""},null,8,["current-page"])}}},_=i("h1",{id:"pagination-分页",tabindex:"-1"},[l("Pagination 分页 "),i("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1),C=i("p",null,"当数据量过多时，使用分页分解数据。",-1),m=i("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),i("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),B=i("p",null,[i("code",null,"total"),l("表示总条目数，"),i("code",null,"size"),l("用于设置每页显示的页码数量")],-1),A={class:"example"},D=g("",3),v={class:"example"},P=g("",3),b={class:"example"},q=g("",3),f={class:"example"},T=g("",1),w=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"examples/pagination/index.md","filePath":"examples/pagination/index.md"}'),S={name:"examples/pagination/index.md"},V=Object.assign(S,{setup(k){return(s,n)=>(h(),y("div",null,[_,C,m,B,i("div",A,[p(o)]),D,i("div",v,[p(c)]),P,i("div",b,[p(F)]),q,i("div",f,[p(u)]),T]))}});export{w as __pageData,V as default};
