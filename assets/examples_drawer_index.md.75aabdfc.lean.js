import{d as f,r as C,o as u,c as d,a as s,w as n,F as v,b as r,e as p,h as k,k as h,f as _,g as m}from"./app.2d8139fb.js";import{A as S}from"./chunks/index.491713e7.js";const I=f({__name:"Basic",setup(g){const e=C(!1),c=C(!1),o=C(!1),D=C(!1);return(i,l)=>{const F=r("AButton"),y=r("ADrawer");return u(),d(v,null,[s(F,{onClick:l[0]||(l[0]=a=>e.value=!0)},{default:n(()=>[p("Open Left")]),_:1}),s(F,{onClick:l[1]||(l[1]=a=>c.value=!0),type:"primary"},{default:n(()=>[p("Open right")]),_:1}),s(F,{onClick:l[2]||(l[2]=a=>o.value=!0),type:"success"},{default:n(()=>[p("Open top")]),_:1}),s(F,{onClick:l[3]||(l[3]=a=>D.value=!0),type:"info"},{default:n(()=>[p("Open bottom")]),_:1}),s(y,{direction:"left",title:"Drawer1",modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value=a),closeOnClickModal:""},{default:n(()=>[p(" hello, I am there! ")]),_:1},8,["modelValue"]),s(y,{title:"Drawer2",modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=a=>c.value=a),closeOnClickModal:""},{default:n(()=>[p(" hello, I am there! ")]),_:1},8,["modelValue"]),s(y,{direction:"top",title:"Drawer3",modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=a=>o.value=a),closeOnClickModal:""},{default:n(()=>[p(" hello, I am there! ")]),_:1},8,["modelValue"]),s(y,{direction:"bottom",title:"Drawer4",modelValue:D.value,"onUpdate:modelValue":l[7]||(l[7]=a=>D.value=a),closeOnClickModal:""},{default:n(()=>[p(" hello, I am there! ")]),_:1},8,["modelValue"])],64)}}}),T=f({__name:"Footer",setup(g){const e=C(!1),c=C(),o=k({name:"坤坤",age:"",address:"",school:2,birthday:""}),D=C([{value:1,text:"Yjj"},{value:2,text:"Big龙"},{value:3,text:"嘿毛"},{value:4,text:"嫖瓜"},{value:5,text:"吊毛"},{value:6,text:"吴彦祖"},{value:7,text:"陈冠希"},{value:8,text:"林俊杰"}]),i=()=>{c.value.validate().then(y=>{console.log(o),h.success({message:"提交成功"})}).catch(y=>{h.error({message:y}),console.log(y)})},l=()=>{c.value.resetFields()},F={name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],age:[{required:!0,message:"Please input Activity age",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],address:[{required:!0,message:"Please input Activity address",trigger:"blur"},{min:4,max:15,message:"Length should be 5 to 15",trigger:"change"}],birthday:[{required:!0,message:"请选择出生日期",trigger:"change"}],school:[{required:!0,message:"请选择学校",trigger:"change"}]};return(y,a)=>{const q=r("AButton"),E=r("AInput"),A=r("AFormItem"),b=r("ADatePicker"),w=r("ASelect"),V=r("AForm"),x=r("ADrawer");return u(),d(v,null,[s(q,{type:"primary",onClick:a[0]||(a[0]=t=>e.value=!0)},{default:n(()=>[p("open")]),_:1}),s(x,{title:"编辑",modelValue:e.value,"onUpdate:modelValue":a[6]||(a[6]=t=>e.value=t),closeOnClickModal:""},{default:n(()=>[s(V,{model:o,rules:F,ref_key:"formRef",ref:c},{default:n(()=>[s(A,{label:"姓名:",prop:"name"},{default:n(()=>[s(E,{placeholder:"请输入姓名",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=t=>o.name=t)},null,8,["modelValue"])]),_:1}),s(A,{label:"年龄:",prop:"age"},{default:n(()=>[s(E,{placeholder:"请输入年龄",modelValue:o.age,"onUpdate:modelValue":a[2]||(a[2]=t=>o.age=t)},null,8,["modelValue"])]),_:1}),s(A,{label:"家庭住址:",prop:"address"},{default:n(()=>[s(E,{clearable:"",placeholder:"请输入家庭住址",modelValue:o.address,"onUpdate:modelValue":a[3]||(a[3]=t=>o.address=t)},null,8,["modelValue"])]),_:1}),s(A,{label:"出生日期:",prop:"birthday"},{default:n(()=>[s(b,{modelValue:o.birthday,"onUpdate:modelValue":a[4]||(a[4]=t=>o.birthday=t)},null,8,["modelValue"])]),_:1}),s(A,{label:"学校:",prop:"school"},{default:n(()=>[s(w,{options:D.value.slice(0,6),placeholder:"请选择学校",modelValue:o.school,"onUpdate:modelValue":a[5]||(a[5]=t=>o.school=t)},null,8,["options","modelValue"])]),_:1})]),_:1},8,["model"])]),footer:n(()=>[s(q,{onClick:l},{default:n(()=>[p("Reset")]),_:1}),s(q,{onClick:i,type:"primary"},{default:n(()=>[p("Submit")]),_:1})]),_:1},8,["modelValue"])],64)}}}),B=f({__name:"BeforeClose",setup(g){const e=C(!1),c=o=>{S({title:"提示",content:"确认关闭当前抽屉吗",showCancelBtn:!0}).then(()=>{o()})};return(o,D)=>{const i=r("AButton"),l=r("ADrawer");return u(),d(v,null,[s(i,{onClick:D[0]||(D[0]=F=>e.value=!0),type:"primary"},{default:n(()=>[p("beforeClose")]),_:1}),s(l,{direction:"right",title:"Drawer1",modelValue:e.value,"onUpdate:modelValue":D[1]||(D[1]=F=>e.value=F),closeOnClickModal:"",beforeClose:c},{default:n(()=>[p(" hello, I am there! ")]),_:1},8,["modelValue"])],64)}}}),P=m("",5),R={class:"example"},O=m("",3),M={class:"example"},U=m("",3),N={class:"example"},$=m("",1),z=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"自定义底部内容","slug":"自定义底部内容","link":"#自定义底部内容","children":[]},{"level":2,"title":"关闭 Drawer 前的回调","slug":"关闭-drawer-前的回调","link":"#关闭-drawer-前的回调","children":[]}],"relativePath":"examples/drawer/index.md"}'),L={name:"examples/drawer/index.md"},J=Object.assign(L,{setup(g){return(e,c)=>(u(),d("div",null,[P,_("div",R,[s(I)]),O,_("div",M,[s(T)]),U,_("div",N,[s(B)]),$]))}});export{z as __pageData,J as default};
