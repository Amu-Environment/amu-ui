import{o as D,g as F,a as s,r,f as A,F as d,d as a,b as e,h as C}from"./app.caebce97.js";const u={style:{"line-height":"30px"}},g={name:"Basic",setup(y){const n=o=>o===100?"Full":`${o}%`;return(o,c)=>{const l=r("AProgress");return D(),F("div",u,[s(l,{style:{width:"500px"},percentage:50}),s(l,{style:{width:"500px"},percentage:100,format:n}),s(l,{style:{width:"500px"},percentage:100,status:"success"}),s(l,{style:{width:"500px"},percentage:100,status:"prompt"}),s(l,{style:{width:"500px"},percentage:50,status:"error"})])}}},E={name:"Inner",setup(y){const n=A(0),o=[{color:"#e53935",percentage:40},{color:"#d69800",percentage:60},{color:"#18a058",percentage:80},{color:"#0468dc",percentage:100}],c=()=>{setTimeout(()=>{n.value>=100?n.value=0:n.value++,c()},80)};return c(),(l,t)=>{const p=r("AProgress");return D(),F(d,null,[s(p,{style:{width:"500px","margin-bottom":"10px"},percentage:20,strokeWidth:20,status:"error",textInside:""}),s(p,{style:{width:"500px","margin-bottom":"10px"},percentage:40,strokeWidth:20,status:"prompt",textInside:""}),s(p,{style:{width:"500px","margin-bottom":"10px"},percentage:90,strokeWidth:24,textInside:"",status:"success"}),s(p,{style:{width:"500px"},percentage:n.value,strokeWidth:26,textInside:"",color:o},null,8,["percentage"])],64)}}},h={style:{"line-height":"30px"}},_={name:"Color",setup(y){const n=A(30),o=[{color:"#e53935",percentage:20},{color:"#d69800",percentage:40},{color:"#18a058",percentage:60},{color:"#0468dc",percentage:80},{color:"#4655ca",percentage:100}];return(c,l)=>{const t=r("AProgress"),p=r("a-input-number");return D(),F("div",h,[s(t,{style:{width:"500px"},percentage:n.value,color:"#fd8ca0"},null,8,["percentage"]),s(t,{style:{width:"500px"},percentage:n.value,color:"#2b92ed"},null,8,["percentage"]),s(t,{style:{width:"500px"},percentage:n.value,color:"#bd26b4"},null,8,["percentage"]),s(t,{style:{width:"500px"},percentage:n.value,color:o},null,8,["percentage"]),s(p,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=i=>n.value=i),step:10,min:0,max:100},null,8,["modelValue"])])}}};const q=a("h1",{id:"progress-进度条",tabindex:"-1"},[e("Progress 进度条 "),a("a",{class:"header-anchor",href:"#progress-进度条","aria-hidden":"true"},"#")],-1),m=a("p",null,"用于展示操作进度，告知用户当前状态和预期。",-1),x=a("h2",{id:"直线进度条",tabindex:"-1"},[e("直线进度条 "),a("a",{class:"header-anchor",href:"#直线进度条","aria-hidden":"true"},"#")],-1),v=a("p",null,[e("Progress 组件设置 "),a("code",null,"percentage"),e(" 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 "),a("code",null,"format"),e(" 来自定义文字显示的格式")],-1),f={class:"example"},b=C("",3),P={class:"example"},w=C("",3),T={class:"example"},I=C("",3),V=JSON.parse('{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[{"level":2,"title":"直线进度条","slug":"直线进度条","link":"#直线进度条","children":[]},{"level":2,"title":"进度条内显示百分比标识","slug":"进度条内显示百分比标识","link":"#进度条内显示百分比标识","children":[]},{"level":2,"title":"自定义进度条的颜色","slug":"自定义进度条的颜色","link":"#自定义进度条的颜色","children":[]},{"level":2,"title":"Progress API","slug":"progress-api","link":"#progress-api","children":[]}],"relativePath":"examples/progress/index.md"}'),k={name:"examples/progress/index.md"},N=Object.assign(k,{setup(y){return(n,o)=>(D(),F("div",null,[q,m,x,v,a("div",f,[s(g)]),b,a("div",P,[s(E)]),w,a("div",T,[s(_)]),I]))}});export{V as __pageData,N as default};
