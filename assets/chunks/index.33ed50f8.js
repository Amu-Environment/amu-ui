import{d as C,r as x,h as R,l as S,o as p,j as V,w as k,u as d,c as N,n as B,f as c,m as E,t as j,p as z,T as H,q as O,s as f}from"../app.b212b21a.js";const _=(s,e)=>s.findIndex(t=>t===e),u={SUCCESS:"success",WARNING:"warning",Message:"message",ERROR:"error"};const $=C({__name:"message",props:{type:{type:String,defualt:u.Message,validator:s=>Object.values(u).includes(s)},message:{type:String,default:u.Message},duration:{type:Number}},setup(s,{expose:e}){const t=s;let a=null;const n=x(!1),l=R({messageVisible:!1,top:0}),{messageVisible:m,top:M}=S(l),b=()=>{switch(t.type){case"error":return"icon-cuowu";case"success":return"icon-chenggong";case"warning":return"icon-tixingshixin";case"info":return"icon-xinxi-yuankuang";default:return"icon-xinxi-yuankuang"}},T=o=>(m.value=o,new Promise(i=>{a=setTimeout(()=>{i(""),clearTimeout(a),a=null},300)})),g=o=>{n.value=o,n.value};return e({isHover:n,setMessageVisible:T,setMessageTop:o=>(l.top=o,o),height:45,margin:10}),(o,i)=>(p(),V(H,{name:"a-message-fade"},{default:k(()=>[d(m)?(p(),N("div",{key:0,ref:"messageRef",style:B({top:d(M)+"px"}),class:"a-message"},[c("div",{class:"a-message-content",onMouseenter:i[0]||(i[0]=w=>g(!0)),onMouseleave:i[1]||(i[1]=w=>g(!1))},[c("span",{style:{"margin-right":"10px","font-size":"18px"},class:E(`iconfont ${b()} ${t.type}`)},null,2),c("div",null,j(t.message),1)],32)],4)):z("",!0)]),_:1}))}}),r=x([]),v=function(s){const e=O($,s);A(e,s.duration)};Object.values(u).forEach(s=>{v[s]=e=>(e.type=s,v(e))});const A=(s,e)=>{const t=document.createDocumentFragment(),a=s.mount(t);r.value.push(a),document.body.appendChild(t),h(a),a.setMessageVisible(!0),f(()=>r.value,()=>{h(a)}),f(()=>a.isHover,n=>{!n&&y(s,a,e)},{deep:!0}),y(s,a,e)},y=(s,e,t)=>{e.timer=setTimeout(()=>{if(e.isHover){clearTimeout(e.timer),e.timer=null;return}e.setMessageVisible(!1).then(()=>{s.unmount(),r.value=r.value.filter(a=>a!==e),clearTimeout(e.timer),e.timer=null})},t||3e3)},h=s=>{const{setMessageTop:e,height:t,margin:a}=s,n=_(r.value,s);e(a*(n+1)+t*n)};export{v as a};
