import{e as i,f as u,o as r,c as _,w as C,r as p,a as o,u as y,g as d,F as m,b as D,d as a,h as A}from"./app.caebce97.js";const h=i({name:"Basic",setup(F){const s=u(!0),n={tHead:[{key:"id",text:"学号"},{key:"name",text:"姓名"},{key:"age",text:"年龄"},{key:"chinese",text:"语文",editable:!1},{key:"math",text:"数学",editable:!1},{key:"english",text:"英语",editable:!1}],tBody:[{id:1,name:"Yjj",age:21,chinese:121,math:90,english:138},{id:2,name:"嘿毛",age:20,chinese:111,math:32,english:43},{id:3,name:"big龙",age:19,chinese:44,math:21,english:11},{id:4,name:"嫖瓜",age:21,chinese:80,math:40,english:45}]};return(g,l)=>{const t=p("a-table"),e=p("ALoading");return r(),_(e,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),title:"please loading..."},{default:C(()=>[o(t,{tableData:y(n).tBody,tableColumn:y(n).tHead},null,8,["tableData","tableColumn"])]),_:1},8,["modelValue"])}}}),b=D("show global loading "),f=i({name:"DiffType",setup(F){const s=u(!1),n=()=>{s.value=!0,setTimeout(()=>{s.value=!1},2e3)};return(g,l)=>{const t=p("AButton"),e=p("ALoading");return r(),d(m,null,[o(t,{type:"success",onClick:n},{default:C(()=>[b]),_:1}),o(e,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),title:"please loading..."},null,8,["modelValue"])],64)}}}),E=a("h1",{id:"loading-加载",tabindex:"-1"},[D("Loading 加载 "),a("a",{class:"header-anchor",href:"#loading-加载","aria-hidden":"true"},"#")],-1),q=a("p",null,"加载数据时显示动效。",-1),v=a("h2",{id:"区域加载",tabindex:"-1"},[D("区域加载 "),a("a",{class:"header-anchor",href:"#区域加载","aria-hidden":"true"},"#")],-1),x=a("p",null,"在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。",-1),T={class:"example"},k=A(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">YButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">amu-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="全屏加载" tabindex="-1">全屏加载 <a class="header-anchor" href="#全屏加载" aria-hidden="true">#</a></h2><p>传入<code>global</code>属性时加载数据时显示全屏动画。</p>`,3),V={class:"example"},B=A(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">YButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">amu-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1),S=JSON.parse('{"title":"Loading 加载","description":"","frontmatter":{},"headers":[{"level":2,"title":"区域加载","slug":"区域加载","link":"#区域加载","children":[]},{"level":2,"title":"全屏加载","slug":"全屏加载","link":"#全屏加载","children":[]}],"relativePath":"examples/Loading/index.md"}'),L={name:"examples/Loading/index.md"},N=Object.assign(L,{setup(F){return(s,n)=>(r(),d("div",null,[E,q,v,x,a("div",T,[o(h)]),k,a("div",V,[o(f)]),B]))}});export{S as __pageData,N as default};