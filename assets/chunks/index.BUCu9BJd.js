import{d as g,a as i,r as F,w as I,c as D,F as N}from"./framework.CSaOOoxE.js";const P=g({name:"AIcon",props:{name:{type:String,defalut:"amu-amudesign"}},setup(t){return()=>i("span",{class:`iconfont icon-${t.name}`},null)}}),V=t=>(t.install=r=>{const o=t.name;r.component(o,t)},t),b=V(P),W=g({name:"AButton",props:{type:{type:String,default:()=>"default"},size:{type:String,default:()=>"default"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},dashed:{type:Boolean,default:!1},icon:{type:String,default:""},text:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},color:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t,{slots:r}){const o=F({color:"",hover:"",active:""}),v=()=>{switch(t.size){case"small":return"size-s";case"default":return"size-m";case"large":return"size-l";default:return""}},m=(a,l,c,e)=>{o.color=a,o.hover=l,o.active=c},p=()=>{const{type:a,disabled:l,text:c}=t;m(e("color"),e("hover"),e("active"));function e(n=""){if(a==="default")return l&&["color","hover"].includes(n)?"var(--a-text-color)":"var(--a-primary-color)";if(c&&l&&["color","hover"].includes(n))return"var(--a-text-color)";{const s=n==="color"?"":`-${n}`;return`var(--a-${a}${s}-color)`}}};I(()=>t.type,()=>p());const h=D(()=>{const{dashed:a,text:l,type:c,disabled:e,loading:n,ghost:s,round:f,circle:B,color:u,size:d}=t,w=t.full?"100%":"auto",z=a||s||l||c==="default"?o.color:"var(--a-text-color-white)",S=e&&c==="default"?"var(--a-border-color)":o.color,$=a||s?"var(--a-bg-color)":o.color,k=e?o.color:o.hover,C=n||l||e?"":u||o.color,A=e?o.color:o.active;return{"--button-width":w,"--button-color":z,"--button-border-color":S,"--button-bg-color":$,"--button-hover-color":k,"--button-ripple-color":C,"--button-active-color":A,"--button-line-type":a?"dashed":"solid","--button-masker-zIndex":n||e?"100":"0","--button-cursor-type":e?"not-allowed":n?"wait":"","--button-border-radius":f?"34px":B?"50%":"3px","--button-self-define-filter":e?"brightness(1)":"brightness(.9)","--button-self-define-opacity":e?"0.5":"0.8","--button-self-define-color":s||l?u:"var(--a-text-color-white)","--button-self-define-bg-color":s||l?"var(--a-bg-color)":u,"--button-self-define-border-color":l?"transparent":u,"--button-circle-width":d==="default"?"34px":d==="small"?"28px":"40px","--button-circle-height":d==="default"?"34px":d==="small"?"28px":"40px"}}),y=()=>{if(t.loading)return i("div",{class:"is-loading"},[i(b,{class:"a-loading-icon",name:"loading"},null)]);if(r.icon)return i(N,null,[r.icon()]);if(t.icon)return i(b,{name:t.icon},null)},x=()=>{const{type:a,dashed:l,text:c,ghost:e,disabled:n,circle:s,color:f}=t;return["a-button",v(),a==="default"?"bg-default":"",l||c||e?"":"a-solid-button",c?"bg-text":"",n?"bg-disabled":"",f?"bg-self-define":"",s?"bg-circle":""].filter(Boolean)};return p(),()=>i("button",{style:h.value,class:x()},[i("div",{class:"a-button-content"},[(t.loading||t.icon||r.icon)&&i("div",{class:"icon-slot-content"},[y()]),r.default?r.default():""]),i("div",{onClick:a=>a.stopPropagation(),class:"a-button-masker"},null)])}}),j=t=>(t.install=r=>{const o=t.name;r.component(o,t)},t),E=j(W);export{E as a,b as l};
