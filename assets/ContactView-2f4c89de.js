import{C as m}from"./CView-579008c9.js";import{C as f}from"./CViewContent-4894ff71.js";import{C as p}from"./CImg-39e52254.js";import{i as u}from"./band_1-8acba709.js";import{d as _,a as C,b as h,w as n,o as b,f as t,t as a,e as o,l as i,u as s}from"./main-450c438f.js";const g=()=>{const l={email:"tonado.band@gmail.com"};function r(){return l}return{getContactInfo:r}},x={class:"text-700"},v=["href"],B={class:"flex justify-content-center md:my-3"},w={class:"flex flex-column justify-content-center align-items-center"},I=["href"],j=_({__name:"ContactView",setup(l){const c=g().getContactInfo();return(e,V)=>{const d=C("Button");return b(),h(m,null,{title:n(()=>[t("h1",null,a(e.$t("page.contact.title")),1)]),default:n(()=>[o(f,null,{default:n(()=>[t("div",x,[i(a(e.$t("page.contact.text.part1"))+" ",1),t("a",{href:`mailto:${s(c).email}`,tabindex:"-1"},[o(d,{class:"p-0",label:"Link",link:""},{default:n(()=>[i(a(s(c).email),1)]),_:1})],8,v),i(a(e.$t("page.contact.text.part2")),1)]),t("div",B,[o(p,{src:s(u),alt:"Band",class:"max-w-30rem"},null,8,["src"])]),t("div",w,[t("a",{href:`mailto:${s(c).email}`,tabindex:"-1"},[o(d,{label:e.$t("page.contact.sendMail"),icon:"pi pi-envelope",class:"p-button-raised p-button-rounded"},null,8,["label"])],8,I)])]),_:1})]),_:1})}}});export{j as default};
