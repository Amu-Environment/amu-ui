import{aa as o,aj as p,ak as u,al as l,am as c,an as f,ao as d,ap as m,aq as h,ar as A,as as g,ad as P,d as v,P as _,h as R,Y as w,at as y,au as C,av as E,O as T}from"./chunks/framework.CSaOOoxE.js";import{R as b}from"./chunks/theme.mtaW8fEO.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),S=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=_();return R(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),E(),s.setup&&s.setup(),()=>T(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=O();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(S)}function j(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
