import{e as A,f as i,o as t,c as y,u as l,r as o,w as p,b as c,t as g,L as _,a as e,m as b,g as E,d as n,h as u}from"./app.30ab77c5.js";const f=A({name:"Basic",setup(F){const s=i({tHead:[{key:"id",text:"学号"},{key:"name",text:"姓名"},{key:"age",text:"年龄"},{key:"chinese",text:"语文",editable:!1},{key:"math",text:"数学",editable:!1},{key:"english",text:"英语",editable:!1}],tBody:[{id:1,name:"Yjj",age:21,chinese:121,math:90,english:138},{id:2,name:"嘿毛",age:20,chinese:111,math:32,english:43},{id:3,name:"big龙",age:19,chinese:44,math:21,english:11},{id:4,name:"嫖瓜",age:21,chinese:80,math:40,english:45}]});return(D,r)=>{const a=o("a-table");return t(),y(a,{tableData:l(s).tBody,tableColumn:l(s).tHead},null,8,["tableData","tableColumn"])}}}),x=A({name:"Border",setup(F){const s=i({tHead:[{key:"id",text:"学号"},{key:"name",text:"姓名"},{key:"age",text:"年龄"},{key:"chinese",text:"语文",editable:!1},{key:"math",text:"数学",editable:!1},{key:"english",text:"英语",editable:!1}],tBody:[{id:1,name:"Yjj",age:21,chinese:121,math:90,english:138},{id:2,name:"嘿毛",age:20,chinese:111,math:32,english:43},{id:3,name:"big龙",age:19,chinese:44,math:21,english:11},{id:4,name:"嫖瓜",age:21,chinese:80,math:40,english:45}]});return(D,r)=>{const a=o("a-table");return t(),y(a,{border:"",tableData:l(s).tBody,tableColumn:l(s).tHead},null,8,["tableData","tableColumn"])}}}),k=c("Edit"),B=c("Delete"),v=A({name:"SelfDefined",setup(F){const s=i({tHead:[{key:"id",text:"学号"},{key:"name",text:"姓名"},{key:"age",text:"年龄"},{key:"chinese",text:"语文"},{key:"math",text:"数学"},{key:"english",text:"英语"},{key:"operation",text:"操作"}],tBody:[{id:1,name:"Yjj",age:21,chinese:121,math:90,english:138},{id:2,name:"嘿毛",age:20,chinese:111,math:32,english:43},{id:3,name:"big龙",age:19,chinese:44,math:21,english:11},{id:4,name:"嫖瓜",age:21,chinese:80,math:40,english:45}]}),D=r=>{b({showCancelBtn:!0,title:"提示",confirmBtnText:"确认",cancelBtnText:"取消",content:"确认删除当前学生吗？"}).then(()=>{s.value.tBody=s.value.tBody.filter(a=>a.id!==r)})};return(r,a)=>{const m=o("a-tag"),d=o("a-button"),q=o("ATable");return t(),y(q,{tableData:l(s).tBody,tableColumn:l(s).tHead},{table:p(({tableColumn:C,tableData:h})=>[C.key==="name"?(t(),y(m,{key:0,type:"success"},{default:p(()=>[c(g(h.name),1)]),_:2},1024)):_("",!0)]),operation:p(({item:C,index:h})=>[e(d,{type:"info",size:"small"},{default:p(()=>[k]),_:1}),e(d,{type:"danger",size:"small",disabled:!1,onClick:R=>D(C.id)},{default:p(()=>[B]),_:2},1032,["onClick"])]),_:1},8,["tableData","tableColumn"])}}}),T=n("h1",{id:"table-表格",tabindex:"-1"},[c("Table 表格 "),n("a",{class:"header-anchor",href:"#table-表格","aria-hidden":"true"},"#")],-1),j=n("p",null,"用于展示多条结构类似的数据",-1),S=n("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),H=n("p",null,"基础的表格展示用法。",-1),V={class:"example"},N=u("",3),I={class:"example"},P=u("",3),Y={class:"example"},$=u("",1),O=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"带边框的表格","slug":"带边框的表格","link":"#带边框的表格","children":[]},{"level":2,"title":"自定义表格内容","slug":"自定义表格内容","link":"#自定义表格内容","children":[]}],"relativePath":"examples/table/index.md"}'),w={name:"examples/table/index.md"},J=Object.assign(w,{setup(F){return(s,D)=>(t(),E("div",null,[T,j,S,H,n("div",V,[e(f)]),N,n("div",I,[e(x)]),P,n("div",Y,[e(v)]),$]))}});export{O as __pageData,J as default};