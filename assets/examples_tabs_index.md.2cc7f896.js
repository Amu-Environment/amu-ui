import{_ as r,o as e,j as F,w as a,a as n,e as l,b as p,c as i,f as o,g as y}from"./app.c1db403a.js";const C={};function A(c,D){const s=p("ATabsPanel"),t=p("ATabs");return e(),F(t,{"default-active-key":"1"},{default:a(()=>[n(s,{key:"1",title:"User"},{default:a(()=>[l(" User ")]),_:1}),n(s,{key:"2",title:"Config"},{default:a(()=>[l(" Config ")]),_:1}),n(s,{key:"3",title:"Role"},{default:a(()=>[l(" Role ")]),_:1}),n(s,{key:"4",title:"Task"},{default:a(()=>[l(" Task ")]),_:1})]),_:1})}const u=r(C,[["render",A]]),_={};function d(c,D){const s=p("ATabsPanel"),t=p("ATabs");return e(),F(t,{"default-active-key":"1",position:"left"},{default:a(()=>[n(s,{key:"1",title:"User"},{default:a(()=>[l(" User ")]),_:1}),n(s,{key:"2",title:"Config"},{default:a(()=>[l(" Config ")]),_:1}),n(s,{key:"3",title:"Role"},{default:a(()=>[l(" Role ")]),_:1}),n(s,{key:"4",title:"Task"},{default:a(()=>[l(" Task ")]),_:1})]),_:1})}const T=r(_,[["render",d]]),b=o("h1",{id:"tabs-标签页",tabindex:"-1"},[l("Tabs 标签页 "),o("a",{class:"header-anchor",href:"#tabs-标签页","aria-hidden":"true"},"#")],-1),g=o("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1),E=o("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),q=o("p",null,"基础的、简洁的标签页。",-1),f=o("p",null,"Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。",-1),h={class:"example"},k=y(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default-active-key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> User </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Config </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Role </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Task</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Task </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="标签位置的设置" tabindex="-1">标签位置的设置 <a class="header-anchor" href="#标签位置的设置" aria-hidden="true">#</a></h2><p>每次只能展开一个面板</p><p>通过 <code>position</code> 设置标签的位置 标签一共有两个方向的设置 <code>position=&quot;top|left&quot;</code></p>`,4),m={class:"example"},P=y(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default-active-key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> User </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Config </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Role </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Task</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Task </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabsPanel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ATabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details>`,1),R=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"标签位置的设置","slug":"标签位置的设置","link":"#标签位置的设置","children":[]}],"relativePath":"examples/tabs/index.md"}'),v={name:"examples/tabs/index.md"},S=Object.assign(v,{setup(c){return(D,s)=>(e(),i("div",null,[b,g,E,q,f,o("div",h,[n(u)]),k,o("div",m,[n(T)]),P]))}});export{R as __pageData,S as default};