"use strict";(()=>{var e={};e.id=355,e.ids=[355],e.modules={1185:e=>{e.exports=require("mongoose")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5745:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>v,requestAsyncStorage:()=>g,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var o={};t.r(o),t.d(o,{POST:()=>c});var n=t(9303),s=t(8716),a=t(3131),i=t(7070),u=t(5263),p=t(6477);async function c(e){let r=await e.json();try{return await (0,u.Z)(),await p.T.create(r),i.NextResponse.json({message:"ユーザー登録成功"})}catch{return i.NextResponse.json({message:"ユーザー登録失敗"})}}let d=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/user/register/route",pathname:"/api/user/register",filename:"route",bundlePath:"app/api/user/register/route"},resolvedPagePath:"/workspaces/ptInfoApp/app/api/user/register/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:g,staticGenerationAsyncStorage:l,serverHooks:m}=d,h="/api/user/register/route";function v(){return(0,a.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},5263:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(1185),n=t.n(o);let s=async()=>{try{await n().connect("mongodb+srv://gracehomondev:EAOXLtaR2hq2Jswx@cluster0.luikv.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0"),console.log("Success: Connected to MongoDB")}catch{throw console.log("Failure: Unconnected to MongoDB"),Error()}}},6477:(e,r,t)=>{t.d(r,{T:()=>p,z:()=>u});var o=t(1185),n=t.n(o);let s=n().Schema,a=new s({title:String,image:String,price:String,description:String,email:String}),i=new s({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0}}),u=n().models.Item||n().model("Item",a),p=n().models.User||n().model("User",i)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972],()=>t(5745));module.exports=o})();