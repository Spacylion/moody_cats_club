(this.webpackJsonpgmdapp=this.webpackJsonpgmdapp||[]).push([[0],{277:function(e,t){},280:function(e,t){},282:function(e,t){},286:function(e,t){},287:function(e,t){},313:function(e,t){},315:function(e,t){},324:function(e,t){},326:function(e,t){},337:function(e,t){},339:function(e,t){},356:function(e,t){},390:function(e,t){},391:function(e,t){},462:function(e,t){},467:function(e,t){},469:function(e,t){},476:function(e,t){},477:function(e,t){},501:function(e,t){},508:function(e,t){},556:function(e,t){},584:function(e,t,n){},585:function(e,t,n){"use strict";n.r(t);var c,s,o,a,r,i,l,j,b,d,x,p,h,O,u,f,g,m,v,w,y,C,T,A,S,E=n(2),N=n(103),D=n.n(N),k=n(18),_=n.n(k),M=n(57),I=n(61),L=n(14),P=n(74),R=n(84),F=n.n(R),z=n(248),K=n.n(z),H=n(85),U=n(249),W=n(12),Y={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(W.a)(Object(W.a)({},Y),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(W.a)(Object(W.a)({},Y),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(W.a)(Object(W.a)({},e),{},{account:t.payload.account});default:return e}},B={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(W.a)(Object(W.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(W.a)(Object(W.a)({},B),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},Q=Object(H.b)({blockchain:Z,data:G}),V=[U.a],J=Object(H.c)(H.a.apply(void 0,V)),X=Object(H.d)(Q,J),q=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},$=function(){return function(){var e=Object(M.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,X.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(q("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(e){return{type:"CONNECTION_FAILED",payload:e}},te=function(e){return function(){var t=Object(M.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n($());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ne=n(15),ce=ne.a.div(c||(c=Object(L.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),se=ne.a.div(s||(s=Object(L.a)(["\n  height: 8px;\n  width: 8px;\n"]))),oe=ne.a.div(o||(o=Object(L.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ae=ne.a.div(a||(a=Object(L.a)(["\n  height: 24px;\n  width: 24px;\n"]))),re=ne.a.div(r||(r=Object(L.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ie=ne.a.div(i||(i=Object(L.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),le=ne.a.p(l||(l=Object(L.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),je=(ne.a.p(j||(j=Object(L.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),ne.a.p(b||(b=Object(L.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),be=(ne.a.div(d||(d=Object(L.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(253)),de=n(590),xe=n(591),pe=n(592),he=ne.a.div(x||(x=Object(L.a)(["\npadding: 80px 60px;\nbackground: black;\nposition: relative;\nbottom: 0;\nwidth: 100%;\n@media (max-width: 1000px) {\n\tpadding: 70px 30px;\n}\n"]))),Oe=ne.a.div(p||(p=Object(L.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 1000px;\n\tmargin: 0 auto;\t\n\n\t/* background: red; */\n"]))),ue=ne.a.div(h||(h=Object(L.a)(["\ndisplay: flex;\nflex-direction: column;\ntext-align: left;\nmargin-left: 100px;\n"]))),fe=ne.a.div(O||(O=Object(L.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(400px, 1fr));\ngrid-gap: 20px;\n\n@media (max-width: 1000px) {\n\tgrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(200px, 1fr));\n}\n"]))),ge=ne.a.a(u||(u=Object(L.a)(["\ncolor: #fff;\nmargin-bottom: 20px;\nfont-size: 12px;\ntext-decoration: none;\n\n&:hover {\n\tcolor: orange;\n\ttransition: 200ms ease-in;\n}\n"]))),me=ne.a.p(f||(f=Object(L.a)(["\nfont-size: 20px;\ncolor: #FF0000;\nmargin-bottom: 40px;\nfont-weight: bold;\n"]))),ve=n(0),we=function(){return Object(ve.jsxs)(he,{children:[Object(ve.jsx)("h1",{style:{color:"orange",textAlign:"center",fontSize:"15px",fontFamily:"sans-serif",marginTop:"-50px"},children:"Copyright \xa9 gm Divas 2021 - All Rights Reserved. "})," ",Object(ve.jsx)("br",{}),Object(ve.jsx)("br",{}),Object(ve.jsx)("br",{}),Object(ve.jsx)(Oe,{children:Object(ve.jsxs)(fe,{children:[Object(ve.jsxs)(ue,{children:[Object(ve.jsx)(me,{children:"Info"}),Object(ve.jsxs)(ge,{href:"#",children:["View Contract ",Object(ve.jsx)("br",{}),"(coming soon)"]})]}),Object(ve.jsxs)(ue,{children:[Object(ve.jsx)(me,{children:"Socials"}),Object(ve.jsx)(ge,{href:"https://t.me/gmdivas",children:Object(ve.jsx)("i",{className:"fab fa-telegram",children:Object(ve.jsx)("span",{style:{marginLeft:"10px"},children:"Telegram"})})}),Object(ve.jsx)(ge,{href:"https://discord.gg/kD6PTRNwJE",children:Object(ve.jsx)("i",{className:"fab fa-discord",children:Object(ve.jsx)("span",{style:{marginLeft:"10px"},children:"Discord"})})}),Object(ve.jsx)(ge,{href:"https://twitter.com/gmdivas",children:Object(ve.jsx)("i",{className:"fab fa-twitter",children:Object(ve.jsx)("span",{style:{marginLeft:"10px"},children:"Twitter"})})})]})]})})]})},ye=(n.p,n.p,n.p,n.p,n.p+"static/media/Diva5.55049676.jpg"),Ce=n.p+"static/media/Diva.ab0ad27b.jpg",Te=(n.p,n.p+"static/media/devG.944f452a.png"),Ae=n.p+"static/media/devA.340e5c79.jpg",Se=n.p+"static/media/dev(1).b96eca5b.png",Ee=(n.p,ne.a.button(g||(g=Object(L.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 200px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ne.a.button(m||(m=Object(L.a)(["\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  background: rgba(0,0,0,.5);\n  color: #fff;\n  font-size: .85rem;\n  box-shadow: -0.16em -0.2em red, 0.16em 0.2em rgb(255, 153, 0);\n // box-shadow: -0.16em -0.2em red, 0.16em 0.2em #0ff;\n  text-align: center;\n  vertical-align: middle;\n  font-family: Press Start 2P;\n  transition: .3s ease;\n  cursor: pointer;\n  transform: scale(1);\n  user-select: none;\n}  \n"],["\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  background: rgba(0,0,0,.5);\n  color: #fff;\n  font-size: .85rem;\n  box-shadow: -0.16em -0.2em red, 0.16em 0.2em rgb(255, 153, 0);\n // box-shadow: -0.16em -0.2em red, 0.16em 0.2em #0ff;\n  text-align: center;\n  vertical-align: middle;\n  font-family: Press Start\\ 2P;\n  transition: .3s ease;\n  cursor: pointer;\n  transform: scale(1);\n  user-select: none;\n}  \n"])))),Ne=ne.a.button(v||(v=Object(L.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),De=ne.a.div(w||(w=Object(L.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ke=(ne.a.img(y||(y=Object(L.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ne.a.img(C||(C=Object(L.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"])))),_e=ne.a.a(T||(T=Object(L.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));ne.a.img(A||(A=Object(L.a)(["\n  width: 200px;\n  height: 100px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 200px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ne.a.img(S||(S=Object(L.a)(["\n  width: 250px;\n  height: 250px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var Me=function(){var e,t,n=Object(P.b)(),c=Object(P.c)((function(e){return e.blockchain})),s=Object(P.c)((function(e){return e.data})),o=Object(E.useState)(!1),a=Object(I.a)(o,2),r=a[0],i=a[1],l=Object(E.useState)("Mint your NFT."),j=Object(I.a)(l,2),b=j[0],d=j[1],x=Object(E.useState)(1),p=Object(I.a)(x,2),h=p[0],O=p[1],u=Object(E.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(I.a)(u,2),g=f[0],m=f[1],v=function(){""!==c.account&&null!==c.smartContract&&n($(c.account))},w=function(){var e=Object(M.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.useEffect)((function(){w()})),Object(E.useEffect)((function(){v()}),[c.account]),Object(ve.jsxs)(ce,{children:[Object(ve.jsxs)(ie,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:g.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ve.jsx)("h1",{className:"Text2",children:"gm Divas"}),Object(ve.jsx)(oe,{}),Object(ve.jsxs)(De,{flex:1,style:{padding:24},test:!0,children:[Object(ve.jsx)(ie,{flex:1,jc:"center",ai:"center",children:Object(ve.jsx)(ke,{alt:"example",src:"/config/images/example.gif"})}),Object(ve.jsx)(re,{}),Object(ve.jsxs)(ie,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ve.jsxs)(le,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[s.totalSupply," / ",g.MAX_SUPPLY]}),Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ve.jsx)(_e,{target:"_blank",href:g.SCAN_LINK,children:(e=g.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ve.jsx)(oe,{}),Number(s.totalSupply)>=g.MAX_SUPPLY?Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(le,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ve.jsxs)(je,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(ve.jsx)(oe,{}),Object(ve.jsx)(_e,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsxs)(le,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(ve.jsx)(se,{}),Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(ve.jsx)(oe,{}),""===c.account||null===c.smartContract?Object(ve.jsxs)(ie,{ai:"center",jc:"center",children:[Object(ve.jsxs)(je,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",g.NETWORK.NAME," network"]}),Object(ve.jsx)(oe,{}),Object(ve.jsx)(Ee,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(M.a)(_.a.mark((function e(t){var n,c,s,o,a,r,i,l,j,b,d,x;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return s=e.sent,e.next=12,s.json();case 12:return o=e.sent,a=window.Web3Modal.default,r=window.WalletConnectProvider.default,i=new a({providerOptions:{walletconnect:{package:r,options:{infuraId:"d85fda7b424b4212ba72f828f48fbbe1 "}}},cacheProvider:!1,disableInjectedProvider:!1}),e.next=19,i.connect();case 19:return l=e.sent,j=new K.a(l),F.a.setProvider(l),e.prev=22,e.next=25,j.eth.getAccounts();case 25:return b=e.sent,console.log(b),e.next=29,j.eth.net.getId();case 29:d=e.sent,console.log(d),d==o.NETWORK.ID?(x=new F.a(c,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:b[0],smartContract:x,web3:j}}),l.on("accountsChanged",(function(e){t(te(e[0]))})),l.on("chainChanged",(function(){window.location.reload()}))):t(ee("Change network to ".concat(o.NETWORK.NAME,"."))),e.next=38;break;case 34:e.prev=34,e.t0=e.catch(22),console.log(e.t0),t(ee("Something went wrong."));case 38:case"end":return e.stop()}}),e,null,[[22,34]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(oe,{}),Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(ve.jsx)(ae,{}),Object(ve.jsxs)(ie,{ai:"center",jc:"center",fd:"row",children:[Object(ve.jsx)(Ne,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h-1;e<1&&(e=1),O(e)}()},children:"-"}),Object(ve.jsx)(ae,{}),Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--accent-text)"},children:h}),Object(ve.jsx)(ae,{}),Object(ve.jsx)(Ne,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=h+1;e>20&&(e=20),O(e)}()},children:"+"})]}),Object(ve.jsx)(oe,{}),Object(ve.jsx)(ie,{ai:"center",jc:"center",fd:"row",children:Object(ve.jsx)(Ee,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=g.WEI_COST,t=g.GAS_LIMIT,s=String(e*h),o=String(t*h);console.log("Cost: ",s),console.log("Gas limit: ",o),d("Minting your ".concat(g.NFT_NAME,"...")),i(!0),c.smartContract.methods.mint(h).send({gasLimit:String(o),to:g.CONTRACT_ADDRESS,from:c.account,value:s}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),i(!1)})).then((function(e){console.log(e),d("You GMI, ".concat(g.NFT_NAME," is yours")),i(!1),n($(c.account))}))}(),v()},children:r?"MINTING":"MINT"})})]})]}),Object(ve.jsx)(ae,{})]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(ie,{flex:1,jc:"center",ai:"center"})]}),Object(ve.jsx)(ae,{}),Object(ve.jsxs)(ie,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(ve.jsx)(oe,{}),Object(ve.jsx)(je,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]}),Object(ve.jsx)(re,{}),Object(ve.jsx)("div",{class:"roadmap",children:Object(ve.jsxs)("div",{class:"col",children:[Object(ve.jsx)("p",{class:"common-p1",children:" Each gm Diva will be 0.04\u039e ETH! Mint date coming soon! "}),Object(ve.jsx)("br",{}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("p",{class:"common-p5",children:["gm Divas is a collection of 8,888 Divas getting gm on the Ethereum blockchain.",Object(ve.jsx)("br",{}),Object(ve.jsx)("br",{}),"MissTeenCrypto is an 18 year old Gen Z influencer who travels throughout the country to speak at different Crypto Events and schools to educate the younger generation on NFTs, Bitcoin, and the metaverse. She has been featured in Forbes, New York Post, and countless other outlets. She is the youngest CEO to create an NFT collection, which is aimed at helping her platform spread crypto adoption. With the creation of the gm Divas Sisterhood, we will all be part of history as MissTeenCrypto becomes a voice for the next generation of crypto adoption."]}),Object(ve.jsx)("div",{class:"my-lg-auto col-lg-4 col-12 offset-lg-1"}),Object(ve.jsx)(re,{}),Object(ve.jsxs)("div",{class:"row",children:[Object(ve.jsx)("div",{class:"mb-3 col-12"}),Object(ve.jsx)("div",{class:"mb-2 mb-lg-0 col-lg-7 col-12",children:Object(ve.jsx)("p",{class:"common-p mb-lg-0"})}),Object(ve.jsx)("div",{class:"col-lg-4 col-12 offset-lg-1",children:Object(ve.jsx)("p",{class:"note text-justify mb-0"})})]})]})}),Object(ve.jsx)("div",{class:"mb-5 row",children:Object(ve.jsx)("div",{class:"col",children:Object(ve.jsx)("div",{id:"buy-an-ape",class:"buy-token-container",children:Object(ve.jsxs)("div",{class:"bayc-bg p-4 m-auto row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-3 col-12",children:[Object(ve.jsx)("h3",{class:"buy-ape-title",children:"BUY A DIVA"}),Object(ve.jsx)("br",{})]}),Object(ve.jsx)("br",{}),Object(ve.jsx)("div",{class:"m-auto col-lg-4 col-12 offset-lg-1",children:Object(ve.jsx)("p",{class:"cbuy-ape-title",children:"Check out the gm Diva collection on OpenSea!"})}),Object(ve.jsx)("div",{class:"m-auto col-lg-3 col-12 offset-lg-1",children:Object(ve.jsxs)("a",{href:"https://opensea.io/collection/gmdivas",children:[Object(ve.jsx)("br",{}),Object(ve.jsx)("button",{class:"StyledButton2",type:"button",children:"OpenSea"})]})})]})})})}),Object(ve.jsx)(re,{}),Object(ve.jsx)("div",{class:"roadmap",children:Object(ve.jsx)("div",{class:"col",children:Object(ve.jsx)("div",{id:"roadmap",class:"common-container",children:Object(ve.jsxs)("div",{class:"row",children:[Object(ve.jsxs)("div",{class:"mb-3 col-lg-9 col-12",children:[Object(ve.jsx)("h2",{class:"Textroad3",children:"gm ROADMAP "}),Object(ve.jsx)(re,{}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("p",{class:"common-p3",children:["Project Launch! There will be a Whitelist (Presale). ",Object(ve.jsx)("br",{}),"The Whitelist is opened to the top 888 most active discord members, who also complete discord tasks (2 NFTs per address)."]}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("p",{class:"common-p3",children:["Public sale will be announced soon.",Object(ve.jsx)("br",{}),"50% of ALL secondary sales will be used to sweep the floor!"]})]}),Object(ve.jsxs)("div",{class:"mb-3 mb-md-0 col-lg-8 col-12",children:[Object(ve.jsxs)("div",{class:"mb-3 mb-lg-1 row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("br",{}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{}),Object(ve.jsx)("p",{class:"goal",children:"10%"}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]}),Object(ve.jsx)("div",{class:"m-auto col-lg-10 col-9",children:Object(ve.jsxs)("p",{class:"common-sub-p",children:["Giveaway 10 gm Divas to holders.",Object(ve.jsx)("br",{}),"Community rewards given out to the most engaged Divas in Discord.",Object(ve.jsx)("br",{}),"Private Divas only discord channel opened!"]})})]}),Object(ve.jsxs)("div",{class:"mb-3 mb-lg-1 row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("p",{class:"goal",children:"20%"}),Object(ve.jsx)(re,{})]}),Object(ve.jsxs)("div",{class:"m-auto col-lg-10 col-9",children:[Object(ve.jsxs)("p",{class:" common-sub-p",children:["5 holders will recieve their own honorary Divas!",Object(ve.jsx)("br",{}),"Contribute 5 ETH to support small female artists + potential collabs!",Object(ve.jsx)("br",{})]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]})]}),Object(ve.jsxs)("div",{class:"mb-3 mb-lg-1 row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("p",{class:"goal",children:"40%"}),Object(ve.jsx)(re,{})]}),Object(ve.jsxs)("div",{class:"m-auto col-lg-10 col-9",children:[Object(ve.jsxs)("p",{class:" common-sub-p",children:["5 ETH giveaway amongst 25 Diva holders (more info in discord).",Object(ve.jsx)("br",{}),"All Divas will be able to free mint a companion (more on this soon).",Object(ve.jsx)("br",{})," "]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]})]}),Object(ve.jsxs)("div",{class:"mb-3 mb-lg-1 row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("p",{class:"goal",children:"80%"}),Object(ve.jsx)(re,{})]}),Object(ve.jsxs)("div",{class:"m-auto col-lg-10 col-9",children:[Object(ve.jsxs)("p",{class:" common-sub-p",children:["5 ETH donation (to be announced).",Object(ve.jsx)("br",{}),"gm merch in the works!",Object(ve.jsx)("br",{}),"VR meetup planning starts. Different VR events will be held with MissTeenCrypto!"]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]})]}),Object(ve.jsxs)("div",{class:"mb-3 mb-lg-1 row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("p",{class:"goal",children:"90%"}),Object(ve.jsx)(re,{})]}),Object(ve.jsxs)("div",{class:"m-auto col-lg-10 col-9",children:[Object(ve.jsxs)("p",{class:" common-sub-p",children:["5 ETH donation (to be announced). ",Object(ve.jsx)("br",{}),"5 ETH used to sweep the floor on OpenSea."]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]})]}),Object(ve.jsxs)("div",{class:"row",children:[Object(ve.jsxs)("div",{class:"m-auto col-lg-1 col-2 offset-lg-1 offset-1",children:[Object(ve.jsx)("p",{class:"goal",children:"100%"}),Object(ve.jsx)(re,{})]}),Object(ve.jsxs)("div",{class:"m-auto col-lg-10 col-9",children:[Object(ve.jsxs)("p",{class:" common-sub-p",children:["10 ETH donation (to be announced).",Object(ve.jsx)("br",{}),"Weekly gm Diva livestreams will start. Holders will be able to speak to the community and voice opinions on the future of the project!",Object(ve.jsx)("br",{}),"50% of all secondary sales will be used to sweep the floor and an artist support fund will be started."]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{})]})]})]})]})})})}),Object(ve.jsxs)(de.a,{className:"ContainerOfScroll4",children:[Object(ve.jsx)("h1",{className:"Textroad",children:"Team"}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{}),Object(ve.jsxs)(xe.a,{children:[Object(ve.jsxs)(pe.a,{sm:!0,children:[Object(ve.jsx)("img",{className:"gif-display1",src:Se}),Object(ve.jsx)("br",{}),Object(ve.jsx)("h1",{children:"Mr. YumYum"}),Object(ve.jsx)("br",{})]}),Object(ve.jsxs)(pe.a,{sm:!0,children:[Object(ve.jsx)("img",{className:"gif-display1",src:Ce}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("h1",{children:["MissTeenCrypto",Object(ve.jsx)("br",{}),"Miss CEO"]}),Object(ve.jsx)("br",{})]}),Object(ve.jsxs)(pe.a,{sm:!0,children:[Object(ve.jsx)("img",{className:"gif-display1",src:ye}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("h1",{children:["SpacyLion",Object(ve.jsx)("br",{}),"Artist"]}),Object(ve.jsx)("br",{})]}),Object(ve.jsxs)(pe.a,{sm:!0,children:[Object(ve.jsx)("img",{className:"gif-display1",src:Te}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("h1",{children:["CryptoCh1cken",Object(ve.jsx)("br",{}),"Just a Chicken"]}),Object(ve.jsx)("br",{})]}),Object(ve.jsxs)(pe.a,{sm:!0,children:[Object(ve.jsx)("img",{className:"gif-display1",src:Ae}),Object(ve.jsx)("br",{}),Object(ve.jsxs)("h1",{children:["AXI",Object(ve.jsx)("br",{}),"NFT Ape "]}),Object(ve.jsx)("br",{})]})]})]}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{}),Object(ve.jsx)(re,{}),Object(ve.jsx)(de.a,{children:Object(ve.jsx)("div",{children:Object(ve.jsx)(be.a,{data:{title:"FAQ",rows:[{title:"How much will mint price be?",content:"0.04 ETH per Diva."},{title:"Will there be a Whitelist?",content:"Yes. The presale will be avaiable to the first 500 Discord members who complete all the required tasks. "},{title:"Is there a limit of Divas per address?",content:"There is a limit of 20 Divas."},{title:"How many different attributes are there?",content:"There are over 200 different attributes."}]},styles:{bgColor:"black",titleTextColor:"orange",rowTitleColor:"white",rowContentColor:"grey",arrowColor:"red",rowContentPaddingRight:"0",transitionDuration:"1s",timingFunc:"ease",rowTitleTextSize:"Medium",rowContentFontFamily:"Courier New",rowContentTextSize:"small"},config:{animate:!0,arrowIcon:"DIVA",tabFocus:!0}})})}),Object(ve.jsx)(re,{}),Object(ve.jsx)(we,{})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,593)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};n(584);D.a.render(Object(ve.jsx)(P.a,{store:X,children:Object(ve.jsx)(Me,{})}),document.getElementById("root")),Ie()}},[[585,1,2]]]);
//# sourceMappingURL=main.906ae927.chunk.js.map