(window.webpackJsonp=window.webpackJsonp||[]).push([[44,94],{"J/Db":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),c=n("omHr"),o=n("8k0H"),l=n("Z/CU"),d=n("O4Du"),s=n("g2Kc"),u=n("aC/h"),m=r.c.div.withConfig({displayName:"_article__Content",componentId:"sc-17ehp3-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),g=r.c.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-17ehp3-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],u.a.tabletL),f=r.c.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-17ehp3-2"})(["margin-top:8rem;"]),h=function(e){var t=e.children,n=e.header;return i.a.createElement(o.b,null,i.a.createElement(s.h,{title:Object(l.g)("Help Center | "+n)}),i.a.createElement(s.b,{align:"left",justify:"flex-start",direction:"column"},i.a.createElement(d.u,{to:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0"},Object(l.g)("Back")),i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(d.s,{tab_header:n,size:"var(--text-size-s)"},t)))),i.a.createElement(f,null,i.a.createElement(c.DidntFindYourAnswerBanner,null)))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),i=n.n(a),r=n("p46w"),c=n.n(r),o=n("txul"),l=function(){var e=i.a.useState(!1),t=e[0],a=e[1],r=Object(o.y)()&&window.LC_API||{},l=i.a.useState(!1),d=l[0],s=l[1],u=i.a.useRef(null),m=new URLSearchParams(Object(o.y)()&&window.location.search||"").get("is_livechat_open");return i.a.useEffect((function(){var e,t=null,i=null;if(Object(o.y)()){var r=window.location.hostname.includes("deriv.com")?"deriv.com":"binary.sx";n.e(75).then(n.bind(null,"49Cj")).then((function(e){u.current=e}));var l=(e=document.cookie,function(){var t=document.cookie;if(t!=e){var n=c.a.get("client_information",{domain:r});s(!!n),e=t}});t=setInterval(l,500),i=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){a(!0),"true"===(null==m?void 0:m.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(t),clearTimeout(i)}}),[]),i.a.useEffect((function(){if(Object(o.y)()){var e=null,n=window.location.hostname.includes("deriv.com")?"deriv.com":"binary.sx";u.current&&(e=u.current.init({licenseId:o.B,clientId:o.A})),t&&window.LiveChatWidget.on("ready",(function(){if(d){var t=c.a.get("client_information",{domain:n}),a=JSON.parse(t),i=a.loginid,r=a.email,o=a.landing_company_shortcode,l=a.currency,s=a.residence,u=a.first_name,m=a.last_name,g={loginid:null!=i?i:"",landing_company_shortcode:null!=o?o:"",currency:null!=l?l:"",residence:null!=s?s:"",email:null!=r?r:""};window.LiveChatWidget.call("set_session_variables",g),r&&window.LiveChatWidget.call("set_customer_email",r),u&&m&&window.LiveChatWidget.call("set_customer_name",u+" "+m)}else{if(window.LiveChatWidget.get("chat_data")){var f,h=window.LiveChatWidget.get("chat_data").chatId;null===(f=e)||void 0===f||f.deactivateChat({chatId:h})}window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")}var w=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==w?void 0:w.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[d,u]),[t,r]}},omHr:function(e,t,n){"use strict";n.r(t),n.d(t,"DidntFindYourAnswerBanner",(function(){return w}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),c=n("O4Du"),o=n("wYtL"),l=n("Z/CU"),d=n("g2Kc"),s=n("ctXc"),u=n("aC/h");var m=r.c.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),g=Object(r.c)(d.b).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;justify-content:center;align-items:center;@media ","{flex-wrap:wrap;justify-content:center;align-items:center;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.a.mobileL,o.a),f=r.c.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.a.tabletL),h=Object(r.c)(c.w).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.a.mobileL),w=function(){var e=Object(s.a)(),t=e[0],n=e[1];return i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(f,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWM4cTZ6dW9sYSIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9Ijg3Ljk3MiUiIHkyPSIxMi4wMjglIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNDQ0RiIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY2NDQ0IiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYWM4cTZ6dW9sYSkiCiAgICAgICAgICAgIGQ9Ik02MiAyMWMxLjEwNSAwIDIgLjg5NSAyIDJ2MzQuNzczYzAgLjQ5LS4xOC45NjMtLjUwNSAxLjMyOS0uNzM0LjgyNS0xLjk5OC45LTIuODI0LjE2Nkw1My42MiA1M0gxOGMtMS4xMDUgMC0yLS44OTUtMi0yVjQwaDJ2MTFoMzUuNjJjLjQ5IDAgLjk2Mi4xOCAxLjMyOS41MDVMNjIgNTcuNzczVjIzSDUydi0yaDEwek00NiA0YzEuMTA1IDAgMiAuODk1IDIgMnYyOGMwIDEuMTA1LS44OTUgMi0yIDJIMTAuMzhMMy4zMyA0Mi4yNjhjLS44MjYuNzM0LTIuMDkuNjYtMi44MjQtLjE2NkMuMTggNDEuNzM2IDAgNDEuMjYzIDAgNDAuNzczVjZjMC0xLjEwNS44OTUtMiAyLTJ6bTAgMkgydjM0Ljc3M2w3LjA1MS02LjI2OGMuMzY3LS4zMjUuODQtLjUwNSAxLjMzLS41MDVINDZWNnpNMzAgMjJjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDMwIDI0SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDIyaDIxem05LThjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDM5IDE2SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDE0aDMweiIgLz4KICAgIDwvZz4KPC9zdmc+",alt:"contact us icon"}),i.a.createElement(h,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},Object(l.g)("Didn’t find your answer? We can help.")),t&&i.a.createElement(o.a,{secondary:"true",onClick:function(){n.open_chat_window()},weight:"bold",color:"black"},Object(l.g)("Chat"))))};t.default=w},qVFl:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("vOnD"),c=n("J/Db"),o=n("txul"),l=n("sQ6W"),d=n("Z/CU"),s=n("aC/h"),u=r.c.div.withConfig({displayName:"dmt5__ArticleWrapper",componentId:"kgr3t8-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:0;}"],s.a.tabletL),m=r.c.a.withConfig({displayName:"dmt5__ExternalLink",componentId:"kgr3t8-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}"]),g=Object(r.c)(l.e).withConfig({displayName:"dmt5__StyledText",componentId:"kgr3t8-2"})(["margin-top:1.7rem;"]),f=Object(r.c)(l.a).withConfig({displayName:"dmt5__StyledHeader",componentId:"kgr3t8-3"})(["margin-bottom:2.4rem;"]),h=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("What is DMT5?")),i.a.createElement(l.e,null,Object(d.g)("DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.")))},w=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("What are the major differences between DTrader and DMT5?")),i.a.createElement(l.e,null,Object(d.g)("DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.")),i.a.createElement(g,null,Object(d.g)("DMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.")))},I=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("What are the differences between the DMT5 Financial, Financial STP, and Synthetic accounts?")),i.a.createElement(l.e,null,Object(d.g)("The DMT5 Financial account offers new and experienced traders high leverage and variable spreads for maximum flexibility.")),i.a.createElement(g,null,Object(d.g)("The DMT5 Financial STP account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.")),i.a.createElement(g,null,Object(d.g)("The DMT5 Synthetic account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.")))},M=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("How can I deposit funds into my DMT5 real money account?")),i.a.createElement(l.e,null,i.a.createElement(d.c,{translate_text:"To deposit funds into your MT5 account on Deriv, you’ll need to use the funds in your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[i.a.createElement("strong",{key:0}),i.a.createElement(m,{href:o.i+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),i.a.createElement(g,null,Object(d.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},y=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("How can I withdraw funds from my DMT5 real money account?")),i.a.createElement(l.e,{mb:"1.5rem"},i.a.createElement(d.c,{translate_text:"To withdraw funds from your MT5 account on Deriv, you’ll need to transfer the funds to your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[i.a.createElement("strong",{key:0}),i.a.createElement(m,{href:o.i+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),i.a.createElement(l.e,null,Object(d.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},D=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("Why are my DMT5 login details different from my Deriv login details?")),i.a.createElement(l.e,null,Object(d.g)("MT5 on Deriv is a standalone trading platform that isn’t hosted on our website. Your DMT5 login details give you access to the MT5 platform while your Deriv login details give you access to the platforms hosted on our website, such as DTrader and DBot.")))},p=function(){return i.a.createElement(u,null,i.a.createElement(f,{as:"h4"},Object(d.g)("How can I reset my DMT5 account password?")),i.a.createElement(l.e,null,i.a.createElement(d.c,{translate_text:"Please go to the <0>DMT5 dashboard</0> and click on the <1>Password</1> button of that DMT5 account.",components:[i.a.createElement(m,{href:o.i+"/mt5",target:"_blank",rel:"noopener noreferrer",key:1}),i.a.createElement("strong",{key:0})]})))};t.default=Object(d.e)()((function(){return i.a.createElement(c.a,{header:"DMT5"},i.a.createElement(h,{text:Object(d.g)("What is DMT5?"),label:"what-is-dmt5"}),i.a.createElement(w,{text:Object(d.g)("What are the major differences between DTrader and DMT5?"),label:"differences-of-dtrader-and-dmt5"}),i.a.createElement(I,{text:Object(d.g)("What are the differences between the DMT5 Financial, Financial STP, and Synthetic accounts?"),label:"differences-of-dmt5-accounts"}),i.a.createElement(M,{text:Object(d.g)("How can I deposit funds into my DMT5 real money account?"),label:"deposit-to-dmt5"}),i.a.createElement(y,{text:Object(d.g)("How can I withdraw funds from my DMT5 real money account?"),label:"withdraw-funds-from-DMT5"}),i.a.createElement(D,{text:Object(d.g)("Why are my DMT5 login details different from my Deriv login details?"),label:"login-credentials"}),i.a.createElement(p,{text:Object(d.g)("How can I reset my DMT5 account password?"),label:"reset-dmt5-password"}))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dmt-5-js-81fa119c344e4187c57a.js.map