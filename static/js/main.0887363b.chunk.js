(this["webpackJsonpreact-messenger-clone"]=this["webpackJsonpreact-messenger-clone"]||[]).push([[0],{54:function(M,N,j){},55:function(M,N,j){},59:function(M,N,j){},70:function(M,N,j){"use strict";j.r(N);var e=j(2),L=j.n(e),s=j(18),T=j.n(s),t=(j(54),j(35)),c=j(89),z=j(91),u=(j(55),j(34)),I=u.a.initializeApp({apiKey:"AIzaSyAOMAkm7EcC-XHIaoKgcsI5D9hQ_N74Y5U",authDomain:"react-messenger-clone-bd56f.firebaseapp.com",projectId:"react-messenger-clone-bd56f",storageBucket:"react-messenger-clone-bd56f.appspot.com",messagingSenderId:"419039326736",appId:"1:419039326736:web:94937606696a4b21ae9095",measurementId:"G-90H6EGZ4P0"}).firestore(),g=j(92),D=j(87),a=j(88),y=(j(59),j(12)),n=Object(e.forwardRef)((function(M,N){var j=M.message,e=M.username===j.username;return Object(y.jsx)("div",{ref:N,className:"message ".concat(e&&"message_user"),children:Object(y.jsx)(g.a,{className:e?"message_userCard":"message_guestCard",children:Object(y.jsx)(D.a,{children:Object(y.jsxs)(a.a,{color:"white",variant:"h5",component:"h2",children:[!e&&"".concat(j.username||"Unknown user"," :"),j.message]})})})})})),i=j(47),O=j(46),w=j.n(O),m=j(90);var C=function(){var M=Object(e.useState)(""),N=Object(t.a)(M,2),j=N[0],L=N[1],s=Object(e.useState)([]),T=Object(t.a)(s,2),g=T[0],D=T[1],a=Object(e.useState)(""),O=Object(t.a)(a,2),C=O[0],x=O[1];return Object(e.useEffect)((function(){x(prompt("Please enter you name :"))}),[]),Object(e.useEffect)((function(){I.collection("messages").orderBy("timestamp","desc").onSnapshot((function(M){D(M.docs.map((function(M){return{id:M.id,message:M.data()}})))}))}),[]),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("img",{className:"messenger-icon",src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGlkPSJMYXllcl8xIj48cGF0aCBkPSJNODYsMTY1LjI4MTI1YzQzLjY3MTg4LDAgNzkuMjgxMjUsLTM1LjYwOTM3IDc5LjI4MTI1LC03OS4yODEyNWMwLC0yMS4yMzEyNSAtOC4xOTY4OCwtNDEuMTE4NzUgLTIzLjI0Njg3LC01Ni4wMzQzN2MtMTQuOTE1NjMsLTE1LjA1IC0zNC44MDMxMywtMjMuMjQ2ODcgLTU2LjAzNDM4LC0yMy4yNDY4N2MtNDMuNjcxODcsMCAtNzkuMjgxMjUsMzUuNDc1IC03OS4yODEyNSw3OS4yODEyNWMwLDEzLjk3NSAzLjYyODEzLDI3LjU0Njg4IDEwLjYxNTYzLDM5LjY0MDYzbC03LjUyNSwyNy42ODEyNWMtMS42MTI1LDUuOTEyNSAzLjc2MjUsMTEuNDIxODggOS44MDkzOCw5LjgwOTM3bDI4LjYyMTg4LC03LjUyNWMxMS40MjE4Nyw2LjMxNTYzIDI0LjQ1NjI1LDkuNjc1IDM3Ljc1OTM3LDkuNjc1eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNDkuMTU2MjVjLTEwLjQ4MTI1LDAgLTIwLjk2MjUsLTIuNjg3NSAtMzAuMjM0MzcsLTcuNjU5MzhjLTIuNDE4NzUsLTEuMzQzNzUgLTUuMTA2MjUsLTIuMDE1NjIgLTcuNjU5MzgsLTIuMDE1NjJjLTEuMzQzNzUsMCAtMi42ODc1LDAuMTM0MzggLTQuMDMxMjUsMC41Mzc1bC0xNS4wNSwzLjg5Njg3bDMuODk2ODcsLTE0LjEwOTM3YzEuMDc1LC00LjE2NTYyIDAuNTM3NSwtOC42IC0xLjYxMjUsLTEyLjM2MjVjLTUuNjQzNzUsLTkuNTQwNjMgLTguNDY1NjIsLTIwLjQyNSAtOC40NjU2MiwtMzEuNDQzNzVjMCwtMzQuOTM3NSAyOC4zNTMxMywtNjMuMTU2MjUgNjMuMTU2MjUsLTYzLjE1NjI1YzE2LjkzMTI1LDAgMzIuNzg3NSw2LjU4NDM3IDQ0Ljc0Njg3LDE4LjU0Mzc1YzExLjgyNSwxMS44MjUgMTguNDA5MzgsMjcuNjgxMjUgMTguNDA5MzgsNDQuNjEyNWMwLDM0LjgwMzEzIC0yOC4zNTMxMiw2My4xNTYyNSAtNjMuMTU2MjUsNjMuMTU2MjV6IiBmaWxsPSIjMDBiMWZlIj48L3BhdGg+PHBhdGggZD0iTTE0NC45OTA2MywyNy4xNDM3NWMtMTUuNzIxODcsLTE1LjcyMTg3IC0zNi42ODQzOCwtMjQuNDU2MjUgLTU4Ljk5MDYyLC0yNC40NTYyNWMtNDUuOTU2MjUsMCAtODMuMzEyNSwzNy4zNTYyNSAtODMuMzEyNSw4My4zMTI1YzAsMTQuMTA5MzggMy40OTM3NSwyNy45NSAxMC4zNDY4Nyw0MC4xNzgxM2wtNy4xMjE4NywyNi4wNjg3NWMtMS4yMDkzOCw0LjE2NTYyIDAsOC40NjU2MiAzLjA5MDYyLDExLjU1NjI1YzMuMDkwNjMsMy4wOTA2MyA3LjM5MDYzLDQuMyAxMS41NTYyNSwzLjIyNWwyNy4xNDM3NSwtNy4xMjE4N2MxMS44MjUsNi4xODEyNSAyNC45OTM3NSw5LjQwNjI1IDM4LjQzMTI1LDkuNDA2MjVjNDUuOTU2MjUsMCA4My4zMTI1LC0zNy4zNTYyNSA4My4zMTI1LC04My4zMTI1Yy0wLjEzNDM4LC0yMi4xNzE4OCAtOC43MzQzNywtNDMuMTM0MzggLTI0LjQ1NjI1LC01OC44NTYyNXpNODYsMTYxLjI1Yy0xMi40OTY4OCwwIC0yNC45OTM3NSwtMy4yMjUgLTM2LjAxMjUsLTkuMTM3NWMtMC41Mzc1LC0wLjI2ODc1IC0xLjIwOTM4LC0wLjUzNzUgLTEuODgxMjUsLTAuNTM3NWMtMC40MDMxMiwwIC0wLjY3MTg3LDAgLTEuMDc1LDAuMTM0MzhsLTI4LjYyMTg3LDcuNTI1Yy0yLjAxNTYyLDAuNTM3NSAtMy4zNTkzNywtMC41Mzc1IC0zLjg5Njg3LC0xLjA3NWMtMC41Mzc1LC0wLjUzNzUgLTEuNjEyNSwtMS44ODEyNSAtMS4wNzUsLTMuODk2ODdsNy41MjUsLTI3LjY4MTI1YzAuMjY4NzUsLTEuMDc1IDAuMTM0MzgsLTIuMTUgLTAuNDAzMTIsLTMuMDkwNjJjLTYuNDUsLTExLjI4NzUgLTkuODA5MzgsLTI0LjMyMTg3IC05LjgwOTM4LC0zNy40OTA2MmMwLC00MS41MjE4NyAzMy43MjgxMywtNzUuMjUgNzUuMjUsLTc1LjI1YzIwLjE1NjI1LDAgMzkuMTAzMTIsNy43OTM3NSA1My4yMTI1LDIyLjAzNzVjMTQuMjQzNzUsMTQuMjQzNzUgMjIuMTcxODgsMzMuMTkwNjMgMjIuMDM3NSw1My4yMTI1YzAsNDEuNTIxODggLTMzLjcyODEyLDc1LjI1IC03NS4yNSw3NS4yNXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNNDAuNzE1NjMsMTA0LjgxMjVsMjEuMDk2ODcsLTMyLjkyMTg3YzQuNDM0MzgsLTYuODUzMTMgMTMuODQwNjMsLTguMzMxMjUgMjAuMDIxODcsLTMuMDkwNjNsMTMuOTc1LDExLjY5MDYzYzEuNzQ2ODcsMS40NzgxMyA0LjMsMS40NzgxMyA2LjA0Njg4LDBsMjIuNDQwNjIsLTE3Ljg3MTg3YzMuMzU5MzgsLTIuNjg3NSA3Ljc5Mzc1LDEuMzQzNzUgNS42NDM3NSw0Ljk3MTg4bC0yMC4xNTYyNSwzMi43ODc1Yy00LjgzNzUsNy43OTM3NSAtMTUuNTg3NSw5LjQwNjI1IC0yMi40NDA2MiwzLjA5MDYybC0xMi4wOTM3NSwtMTEuMTUzMTJjLTEuNzQ2ODgsLTEuNjEyNSAtNC41Njg3NSwtMS43NDY4OCAtNi40NSwtMC4xMzQzN2wtMjEuNSwxOC40MDkzN2MtMy44OTY4OCwzLjM1OTM4IC05LjI3MTg4LC0xLjQ3ODEzIC02LjU4NDM4LC01Ljc3ODEzeiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==",alt:""}),Object(y.jsxs)("h1",{children:["Hello ",C]}),Object(y.jsx)("form",{className:"app_form",children:Object(y.jsxs)(c.a,{className:"app_formControl",children:[Object(y.jsx)(z.a,{className:"app_input",placeholder:"Enter a message",value:j,onChange:function(M){L(M.target.value)},"aria-describedby":"my-helper-text"}),Object(y.jsx)(m.a,{className:"app_iconButton",type:"submit",disabled:!j,variant:"contained",color:"primary",onClick:function(M){M.preventDefault(),I.collection("messages").add({username:C,message:j,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),L("")},children:Object(y.jsx)(w.a,{})})]})}),Object(y.jsx)(i.a,{children:g.map((function(M){var N=M.message,j=M.id;return Object(y.jsx)(n,{message:N,username:C},j)}))})]})},x=function(M){M&&M instanceof Function&&j.e(3).then(j.bind(null,93)).then((function(N){var j=N.getCLS,e=N.getFID,L=N.getFCP,s=N.getLCP,T=N.getTTFB;j(M),e(M),L(M),s(M),T(M)}))};T.a.render(Object(y.jsx)(L.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root")),x()}},[[70,1,2]]]);
//# sourceMappingURL=main.0887363b.chunk.js.map