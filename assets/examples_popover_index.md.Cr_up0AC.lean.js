import{_ as u,y as h,q as k,s as y,a as i,A as a,m as t,F as C,d as o,b as c,z as F,B as s,aj as d}from"./chunks/framework.CJrF3YWJ.js";const _={};function m(e,n){const p=h("a-button"),l=h("APopover");return k(),y(C,null,[i(l,{title:"Title",content:"this is content, this is content, this is content",placement:"top",trigger:"hover",width:"200px"},{reference:a(()=>[i(p,{type:"primary"},{default:a(()=>[t("Hover to activate")]),_:1})]),_:1}),i(l,{trigger:"click",title:"Title",width:"200px",content:"this is content, this is content, this is content"},{reference:a(()=>[i(p,{type:"primary"},{default:a(()=>[t("Click to activate")]),_:1})]),_:1})],64)}const B=u(_,[["render",m]]),q=o({__name:"visible",setup(e){const n=c(!1);return(p,l)=>{const E=h("a-button"),r=h("APopover");return k(),F(r,{visible:n.value,title:"Title",width:"200px",content:"this is content, this is content, this is content"},{reference:a(()=>[i(E,{onClick:l[0]||(l[0]=g=>n.value=!n.value),type:"primary"},{default:a(()=>[t("Manual to activate")]),_:1})]),_:1},8,["visible"])}}}),v=o({__name:"slot",setup(e){const n=c({tHead:[{key:"id",text:"学号"},{key:"name",text:"姓名"},{key:"age",text:"年龄"},{key:"chinese",text:"语文",editable:!1},{key:"math",text:"数学",editable:!1},{key:"english",text:"英语",editable:!1}],tBody:[{id:1,name:"Yjj",age:21,chinese:121,math:90,english:138},{id:2,name:"嘿毛",age:20,chinese:111,math:32,english:43},{id:3,name:"big龙",age:19,chinese:44,math:21,english:11},{id:4,name:"嫖瓜",age:21,chinese:80,math:40,english:45}]});return(p,l)=>{const E=h("a-button"),r=h("a-table"),g=h("APopover");return k(),F(g,{width:"400px",content:"this is content, this is content, this is content"},{reference:a(()=>[i(E,{type:"primary"},{default:a(()=>[t("Click to activate")]),_:1})]),default:a(()=>[i(r,{tableData:n.value.tBody,tableColumn:n.value.tHead},null,8,["tableData","tableColumn"])]),_:1})}}}),b=s("h1",{id:"popover-气泡卡片",tabindex:"-1"},[t("Popover 气泡卡片 "),s("a",{class:"header-anchor",href:"#popover-气泡卡片","aria-label":'Permalink to "Popover 气泡卡片"'},"​")],-1),A=s("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=s("p",null,[s("code",null,"trigger"),t(" 属性被用来决定 popover 的触发方式，支持的触发方式： "),s("code",null,"hover"),t("、"),s("code",null,"click")],-1),f={class:"example"},x=d("",3),P={class:"example"},T=d("",3),V={class:"example"},S=d("",5),w=JSON.parse('{"title":"Popover 气泡卡片","description":"","frontmatter":{},"headers":[],"relativePath":"examples/popover/index.md","filePath":"examples/popover/index.md"}'),H={name:"examples/popover/index.md"},j=Object.assign(H,{setup(e){return(n,p)=>(k(),y("div",null,[b,A,D,s("div",f,[i(B)]),x,s("div",P,[i(q)]),T,s("div",V,[i(v)]),S]))}});export{w as __pageData,j as default};