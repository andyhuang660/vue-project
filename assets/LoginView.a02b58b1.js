import{a6 as f,r as u,a as d,o as g,c as w,w as l,b as o,d as _,V as x,e as b,f as h}from"./index.059eaa6f.js";import{V as v,a as c}from"./VRow.f8496316.js";import{V as B}from"./VDivider.73ba84b9.js";import{V as U,a as i}from"./VTextField.7371e0ec.js";const y=b("h1",{class:"text-center"},"\u767B\u5165",-1),N=h("\u767B\u5165"),F={__name:"LoginView",setup(S){const m=f(),n=u(!1),V=u(!1),t=d({account:"",password:""}),r=d({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),p=()=>{m.login(t)};return(e,a)=>(g(),w(v,{id:"login"},{default:l(()=>[o(c,{cols:"12"},{default:l(()=>[y]),_:1}),o(B),o(c,{cols:"12"},{default:l(()=>[o(U,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=s=>n.value=s),onSubmit:_(p,["prevent"])},{default:l(()=>[o(i,{type:"text",label:"\u5E33\u865F",modelValue:t.account,"onUpdate:modelValue":a[0]||(a[0]=s=>t.account=s),rules:r.account,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),o(i,{type:"password",label:"\u5BC6\u78BC",modelValue:t.password,"onUpdate:modelValue":a[1]||(a[1]=s=>t.password=s),rules:r.password,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),o(x,{class:"mx-auto",color:"success",type:"submit",loading:V.value},{default:l(()=>[N]),_:1},8,["loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}))}};export{F as default};
