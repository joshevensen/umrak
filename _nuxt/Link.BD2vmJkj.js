import{_ as S}from"./nuxt-link.DwzmBu5g.js";import{d as $,b as o,C as u,w as f,L as v,ai as c,aj as p,M as i,ak as P,e as L,al as j,am as N}from"./entry.CkAJmQuy.js";import{_ as O}from"./_plugin-vue_export-helper.DlAUqK2U.js";const y={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},z=e=>Object.keys(y).reduce((t,a)=>(e[a]!==void 0&&(t[a]=e[a]),t),{}),R=$({inheritAttrs:!1,props:{...y,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function s(t,a,{isActive:r,isExactActive:l}){return e.exactQuery&&!N(t.query,a.query)||e.exactHash&&t.hash!==a.hash?e.inactiveClass:e.exact&&l||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:s}}}),w=["href","aria-disabled","role","rel","target","onClick"];function A(e,s,t,a,r,l){const C=S;return e.to?(o(),u(C,i({key:1},e.$props,{custom:""}),{default:f(({route:g,href:m,target:b,rel:h,navigate:q,isActive:d,isExactActive:n,isExternal:k})=>[L("a",i(e.$attrs,{href:e.disabled?void 0:m,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:h,target:b,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(g,e._.provides[j]||e.$route,{isActive:d,isExactActive:n}),onClick:B=>!k&&!e.disabled&&q(B)}),[v(e.$slots,"default",c(p({isActive:e.active!==void 0?e.active:e.exact?n:d})))],16,w)]),_:3},16)):(o(),u(P(e.as),i({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:f(()=>[v(e.$slots,"default",c(p({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const D=O(R,[["render",A]]);export{D as _,z as g,y as n};
