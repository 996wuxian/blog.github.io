const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BBgdZRpB.js","./DYvTSljB.js","./entry.DvB2Xm2x.css"])))=>i.map(i=>d[i]);
import{r as i,s as V,_ as U,x as t,K as d}from"./DYvTSljB.js";import{u as m}from"./ZLvwimtO.js";function g(o,{volume:u=1,playbackRate:l=1,soundEnabled:h=!0,interrupt:y=!1,autoplay:S=!1,onload:c,...v}={}){const s=i(null),n=i(!1),r=i(null),e=i(null);function p(a){var f;typeof c=="function"&&c.call(this,a),r.value=(r.value||((f=e.value)==null?void 0:f.duration())||0)*1e3,S===!0&&(n.value=!0)}return V(async()=>{await U(()=>import("./BBgdZRpB.js").then(a=>a.h),__vite__mapDeps([0,1,2]),import.meta.url),s.value=Howl,e.value=new s.value({src:t(o),volume:t(u),rate:t(l),onload:p,...v})}),d(()=>[t(o)],()=>{s.value&&s.value&&e&&e.value&&(e.value=new s.value({src:t(o),volume:t(u),rate:t(l),onload:p,...v}))}),d(()=>[t(u),t(l)],()=>{e.value&&(e.value.volume(t(u)),e.value.rate(t(l)))}),{play:a=>{typeof a>"u"&&(a={}),!(!e.value||!h&&!a.forceSoundEnabled)&&(y&&e.value.stop(),a.playbackRate&&e.value.rate(a.playbackRate),e.value.play(a.id),e.value.once("end",()=>{e.value&&e.value&&!e.value.playing()&&(n.value=!1)}),n.value=!0)},sound:e,isPlaying:n,duration:r,pause:a=>{e.value&&(e.value.pause(typeof a=="number"?a:void 0),n.value=!1)},stop:a=>{e.value&&(e.value.stop(typeof a=="number"?a:void 0),n.value=!1)}}}const j=[{name:"首页",hash:"#home"},{name:"关于我",hash:"#about"},{name:"我的项目",hash:"#projects"},{name:"我的技能",hash:"#skills"},{name:"我的经历",hash:"#experience"}],D="江思乐",E=["时长2年半的前端开发工程师"],I=[{title:"template-admin",description:"一个清新优雅的后台管理模板，基于最新的前端技术栈，包括Vue3 + Ts + Vite + Pinia + UnoCss + Naive UI...",tags:["Vue 3","TypeScript","Vite","UnoCss","Naive UI","Pinia"],imageUrl:"/template-admin.jpg",projectUrl:"",demoUrl:"",detailRoute:""}],L=["HTML","CSS","JavaScript","TypeScript","Nuxt2","Nuxt3","Vue2","Vue3","Node","Express","Koa 2","Nest.js","Git","Svn","Tailwind","Unocss","Sass","less","Nginx","Redis","微信小程序","Uniapp"],P=[{title:"前端开发工程师",location:"广州俊才网络科技有限公司",description:"使用Vue3、Naive UI、微信小程序、Uniapp等技术栈，开发微信小程序、H5端项目、后台项目。从0搭建项目框架，负责技术选型，难点攻克，重构聊天IM系统。实现直播间、聊天、视频通话、语音通话等功能",date:"2024年3月 - 至今"},{title:"前端开发工程师",location:"广州飞斯科技有限公司",description:"使用Vue2、Vue3和Element框架搭建医疗行业后台管理系统。主要接触大项目有壹健康医疗门诊小程序和壹健康后台管理系统、电子病历评审辅助系统",date:"2023年1月 - 2023年12月"},{title:"计算机学士学位",location:"广西财经学院",description:"学位、毕业双证毕业，掌握了前端开发技术的基础知识，交了同班同学女朋友。",date:"2021年9月 - 2023年6月"}],b=()=>m("activeSection",()=>"首页"),k=()=>m("timeOfLastClick",()=>0);export{k as a,g as b,P as e,j as l,D as n,I as p,L as s,E as t,b as u};