(()=>{var e={};e.id=851,e.ids=[851],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},7261:e=>{"use strict";e.exports=require("node:util")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>h,tree:()=>p}),r(5483),r(7239),r(5866);var a=r(3191),s=r(8716),i=r(7922),n=r.n(i),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let p=["",{children:["item",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5483)),"/workspaces/ptInfoApp/app/item/create/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7239)),"/workspaces/ptInfoApp/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/workspaces/ptInfoApp/app/item/create/page.js"],c="/item/create/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/item/create/page",pathname:"/item/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},8675:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2481,23)),Promise.resolve().then(r.t.bind(r,9404,23))},9532:(e,t,r)=>{Promise.resolve().then(r.bind(r,5349))},1856:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5349:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(326),s=r(7577),i=r(5047),n=r(1457);require("util");let o=()=>{let[e,t]=(0,s.useState)(""),[r,o]=(0,s.useState)(""),[l,p]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),u=(0,i.useRouter)(),h=(0,n.Z)();console.log(h);let m=async t=>{t.preventDefault();try{let t=await fetch("https://pt-info-app.vercel.app/api/item/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({title:e,image:l,price:r,description:d,email:h})}),a=await t.json();alert(a.message),u.push("/"),u.refresh()}catch{console.log("アイテム作成が失敗しました")}};if(h)return(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"page-title",children:"アイテム作成"}),(0,a.jsxs)("form",{onSubmit:m,children:[a.jsx("input",{value:e,onChange:e=>t(e.target.value),type:"text",name:"title",placeholder:"アイテム名",required:!0}),a.jsx("input",{value:r,onChange:e=>o(e.target.value),type:"text",name:"price",placeholder:"価格",required:!0}),a.jsx("input",{value:l,onChange:e=>p(e.target.value),type:"text",name:"image",placeholder:"画像",required:!0}),a.jsx("textarea",{value:d,onChange:e=>c(e.target.value),name:"description",placeholder:"商品説明",required:!0}),a.jsx("button",{children:"作成"})]})]})}},1457:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(2358),s=r(5047),i=r(7577);let n=()=>{let[e,t]=(0,i.useState)(""),r=(0,s.useRouter)();return(0,i.useEffect)(()=>{(async()=>{let e=localStorage.getItem("token");e||r.push("/user/login");try{let r=new TextEncoder().encode("ptInfoApp-book"),s=await (0,a._)(e,r);t(s.payload.email)}catch{r.push("/user/login")}})()},[r]),e}},5483:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`/workspaces/ptInfoApp/app/item/create/page.js#default`)},7239:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(9510);r(7272);var s=r(7710),i=r(7371);let n=()=>(0,a.jsxs)("header",{children:[a.jsx("div",{children:a.jsx(i.default,{href:"/",children:a.jsx(s.default,{src:"/header.svg",width:1330,height:148,alt:"header-image",priority:!0})})}),a.jsx("nav",{children:(0,a.jsxs)("ul",{children:[a.jsx("li",{children:a.jsx(i.default,{href:"/user/register",children:"登録"})}),a.jsx("li",{children:a.jsx(i.default,{href:"/user/login",children:"ログイン"})}),a.jsx("li",{children:a.jsx(i.default,{href:"/item/create",children:"アイテム作成"})})]})})]}),o=()=>a.jsx("footer",{children:(0,a.jsxs)("p",{children:["@",new Date().getFullYear()," 東風会"]})}),l=({children:e})=>a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{children:[a.jsx(n,{}),e,a.jsx(o,{})]})})},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"200x200",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,261,621,956],()=>r(7468));module.exports=a})();