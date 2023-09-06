import{e as v,i as V,f as m,o as y,c as b,w as e,r as t,a as s,b as F,j as h,g as S,d as f,h as _}from"./app.7f119ad7.js";const T=F("Submit"),q=F("Reset"),k=v({name:"Basic",setup(A){const a=V({name:"坤坤",age:"",address:"",school:2,birthday:""}),l=m([{value:1,text:"Yjj"},{value:2,text:"Big龙"},{value:3,text:"嘿毛"},{value:4,text:"嫖瓜"},{value:5,text:"吊毛"},{value:6,text:"吴彦祖"},{value:7,text:"陈冠希"},{value:8,text:"林俊杰"}]);return(C,o)=>{const D=t("AInput"),c=t("AFormItem"),u=t("ADatePicker"),n=t("ASelect"),i=t("AButton"),d=t("AForm");return y(),b(d,{model:a},{default:e(()=>[s(c,{label:"姓名:"},{default:e(()=>[s(D,{placeholder:"请输入姓名",modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=p=>a.name=p)},null,8,["modelValue"])]),_:1}),s(c,{label:"年龄:"},{default:e(()=>[s(D,{type:"password","show-password":"",placeholder:"请输入年龄",modelValue:a.age,"onUpdate:modelValue":o[1]||(o[1]=p=>a.age=p)},null,8,["modelValue"])]),_:1}),s(c,{label:"家庭住址:"},{default:e(()=>[s(D,{clearable:"",placeholder:"请输入家庭住址",modelValue:a.address,"onUpdate:modelValue":o[2]||(o[2]=p=>a.address=p)},null,8,["modelValue"])]),_:1}),s(c,{label:"出生日期:"},{default:e(()=>[s(u,{modelValue:a.birthday,"onUpdate:modelValue":o[3]||(o[3]=p=>a.birthday=p)},null,8,["modelValue"])]),_:1}),s(c,{label:"学校:"},{default:e(()=>[s(n,{options:l.value.slice(0,6),placeholder:"请选择学校",modelValue:a.school,"onUpdate:modelValue":o[4]||(o[4]=p=>a.school=p)},null,8,["options","modelValue"])]),_:1}),s(c,null,{default:e(()=>[s(i,{type:"primary"},{default:e(()=>[T]),_:1}),s(i,null,{default:e(()=>[q]),_:1})]),_:1})]),_:1},8,["model"])}}}),I=F("Submit"),P=F("Reset"),B=v({name:"Rule",setup(A){const a=m(),l=V({name:"坤坤",age:"",address:"",school:2,birthday:""}),C=m([{value:1,text:"Yjj"},{value:2,text:"Big龙"},{value:3,text:"嘿毛"},{value:4,text:"嫖瓜"},{value:5,text:"吊毛"},{value:6,text:"吴彦祖"},{value:7,text:"陈冠希"},{value:8,text:"林俊杰"}]),o=()=>{a.value.validate().then(u=>{console.log(l),h.success({message:"提交成功"})}).catch(u=>{h.error({message:u}),console.log(u)})},D=()=>{a.value.resetFields()},c={name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],age:[{required:!0,message:"Please input Activity age",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],address:[{required:!0,message:"Please input Activity address",trigger:"blur"},{min:4,max:15,message:"Length should be 5 to 15",trigger:"change"}],birthday:[{required:!0,message:"请选择出生日期",trigger:"change"}],school:[{required:!0,message:"请选择学校",trigger:"change"}]};return(u,n)=>{const i=t("AInput"),d=t("AFormItem"),p=t("ADatePicker"),x=t("ASelect"),g=t("AButton"),E=t("AForm");return y(),b(E,{model:l,rules:c,ref_key:"formRef",ref:a},{default:e(()=>[s(d,{label:"姓名:",prop:"name"},{default:e(()=>[s(i,{placeholder:"请输入姓名",modelValue:l.name,"onUpdate:modelValue":n[0]||(n[0]=r=>l.name=r)},null,8,["modelValue"])]),_:1}),s(d,{label:"年龄:",prop:"age"},{default:e(()=>[s(i,{placeholder:"请输入年龄",modelValue:l.age,"onUpdate:modelValue":n[1]||(n[1]=r=>l.age=r)},null,8,["modelValue"])]),_:1}),s(d,{label:"家庭住址:",prop:"address"},{default:e(()=>[s(i,{clearable:"",placeholder:"请输入家庭住址",modelValue:l.address,"onUpdate:modelValue":n[2]||(n[2]=r=>l.address=r)},null,8,["modelValue"])]),_:1}),s(d,{label:"出生日期:",prop:"birthday"},{default:e(()=>[s(p,{modelValue:l.birthday,"onUpdate:modelValue":n[3]||(n[3]=r=>l.birthday=r)},null,8,["modelValue"])]),_:1}),s(d,{label:"学校:",prop:"school"},{default:e(()=>[s(x,{options:C.value.slice(0,6),placeholder:"请选择学校",modelValue:l.school,"onUpdate:modelValue":n[4]||(n[4]=r=>l.school=r)},null,8,["options","modelValue"])]),_:1}),s(d,null,{default:e(()=>[s(g,{onClick:o,type:"primary"},{default:e(()=>[I]),_:1}),s(g,{onClick:D},{default:e(()=>[P]),_:1})]),_:1})]),_:1},8,["model"])}}}),R=_('<h1 id="form-表单" tabindex="-1">Form 表单 <a class="header-anchor" href="#form-表单" aria-hidden="true">#</a></h1><p>表单包含 <code>输入框</code>, <code>单选框</code>, <code>下拉选择</code>, <code>多选框</code> 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。</p><h2 id="典型表单" tabindex="-1">典型表单 <a class="header-anchor" href="#典型表单" aria-hidden="true">#</a></h2><p>最基础的表单包括各种输入表单项，比如<code>input</code>、<code>select</code>、<code>radio</code>、<code>checkbox</code>等。</p><p>在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值</p>',5),U={class:"example"},N=_(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ADatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dateValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dateValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></details><h2 id="表单校验" tabindex="-1">表单校验 <a class="header-anchor" href="#表单校验" aria-hidden="true">#</a></h2><p>Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。 Form 组件提供了表单验证的功能，只需为 <code>rules</code> 属性传入约定的验证规则，并将 <code>form-Item</code> 的 <code>prop</code> 属性设置为需要验证的特殊键值即可。</p>`,3),j={class:"example"},w=_(`<details><summary>展开示例代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ARate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rateValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ARate</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rateValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1),O=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[{"level":2,"title":"典型表单","slug":"典型表单","link":"#典型表单","children":[]},{"level":2,"title":"表单校验","slug":"表单校验","link":"#表单校验","children":[]}],"relativePath":"examples/Form/index.md"}'),$={name:"examples/Form/index.md"},Y=Object.assign($,{setup(A){return(a,l)=>(y(),S("div",null,[R,f("div",U,[s(k)]),N,f("div",j,[s(B)]),w]))}});export{O as __pageData,Y as default};
