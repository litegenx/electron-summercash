(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(164)},120:function(e,t,a){},122:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(120),a(16)),l=a.n(o),c=a(112),m=a(32),u=a(19),d=a(20),h=a(23),p=a(21),f=a(9),g=a(24),b=(a(122),a(14)),w=(a(71),a(181)),v=a(183),E=a(184),S=a(185),y=a(186),C=a(187),x={global:{colors:{background:"#ffffff",brand:"#03A9F4",control:{dark:"#0288D1",light:"#03A9F4"},focus:"#cceeff","neutral-1":"#757575","neutral-2":"#005584","neutral-3":"#005584","neutral-4":void 0,"accent-1":"#FFC107","accent-2":"#FFC107","accent-3":"#03A9F4","dark-1":"#000001","dark-2":"#646569"},button:{primary:{color:"#ffffff",text:"#ffffff"},colors:{text:"#ffffff"}}}},k=a(31),A=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(h.a)(this,Object(p.a)(t).call(this,e));var n=new b.a;return void 0!==n.get("username")&&""!==n.get("username")&&"not-signed-in"!==n.get("username")&&fetch("/api/accounts/"+n.get("username")+"/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n.get("password")})}).then(function(e){return e.json()}).then(function(e){n.set("address",e.address),a.setState({username:n.get("username")||"not-signed-in",password:n.get("password")||"not-signed-in",address:n.get("address")||"not-signed-in"})}),a.onClickLogin=a.onClickLogin.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return void 0!==this.state&&null!==this.state&&""!==this.state.username&&"not-signed-in"!==this.state.username&&""!==this.state.address&&"not-signed-in"!==this.address&&this.props.history.push("/"),r.a.createElement(w.a,{theme:x,full:!0},r.a.createElement(v.a,{justify:"center",align:"center",fill:!0,basis:"large"},r.a.createElement(E.a,{responsive:!0,margin:{top:"none",bottom:"none"},size:"large"},"SummerCash"),r.a.createElement(S.a,{responsive:!0,size:"xxlarge",textAlign:"center"},"Save, store, and send SummerCash."),r.a.createElement(y.a,null,r.a.createElement(C.a,{responsive:!0,size:"xlarge",primary:!0,color:"accent-2",label:"Create New Wallet",href:"signup"}),r.a.createElement(C.a,{responsive:!0,size:"xlarge",margin:"small",label:"Sign In",onClick:this.onClickLogin}))))}},{key:"onClickLogin",value:function(e){this.props.history.push("/login")}}]),t}(n.Component),R=Object(k.d)(A),j=a(182),O=a(178),M=a(180),T=a(179),_=a(101),z=a.n(_),q=a(15),N=a(174),P=a(175),Q=a(8),L=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return"send"===this.props.type?r.a.createElement(w.a,{theme:x},r.a.createElement(Q.a,{query:"(min-width:626px)"},function(t){return t?r.a.createElement(y.a,{rows:["xxsmall"],columns:["xxsmall","16%","medium","medium"],align:"center",margin:{top:e.props.margin}},r.a.createElement(N.a,null),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.timestamp),r.a.createElement(S.a,{responsive:!0,textAlign:"start",margin:{right:e.props.gap}},"Sent ",e.props.amount," SMC to ",e.props.recipient),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.message)):r.a.createElement(y.a,{rows:["xxsmall"],columns:["xxsmall","10%","medium","small"],align:"center",fill:"horizontal",margin:{top:e.props.margin}},r.a.createElement(N.a,null),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.shortTimestamp),r.a.createElement(Q.a,{query:"(min-width:432px)"},function(t){return t?r.a.createElement(S.a,{responsive:!0,textAlign:"center"},e.props.amount," SMC to ",e.props.recipient):r.a.createElement(S.a,{responsive:!0,textAlign:"center",margin:{left:"-5%"}},e.props.amount," SMC to ",e.props.recipient)}),r.a.createElement(Q.a,{query:"(min-width:530px)"},r.a.createElement(S.a,{responsive:!0,textAlign:"start",margin:{left:"-20%"}},e.props.message)))})):r.a.createElement(w.a,{theme:x},r.a.createElement(Q.a,{query:"(min-width:626px)"},function(t){return t?r.a.createElement(y.a,{rows:["xxsmall"],columns:["xxsmall","16%","medium","medium"],align:"center",margin:{top:e.props.margin}},r.a.createElement(P.a,null),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.timestamp),r.a.createElement(S.a,{responsive:!0,textAlign:"start",margin:{right:e.props.gap}},"Received ",e.props.amount," SMC from ",e.props.sender),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.message)):r.a.createElement(y.a,{rows:["xxsmall"],columns:["xxsmall","10%","medium","small"],align:"center",fill:"horizontal",margin:{top:e.props.margin}},r.a.createElement(P.a,null),r.a.createElement(S.a,{responsive:!0,textAlign:"start"},e.props.shortTimestamp),r.a.createElement(Q.a,{query:"(min-width:432px)"},function(t){return t?r.a.createElement(S.a,{responsive:!0,textAlign:"center"},e.props.amount," SMC from ",e.props.sender):r.a.createElement(S.a,{responsive:!0,textAlign:"center",margin:{left:"-15%"}},e.props.amount," SMC from ",e.props.sender)}),r.a.createElement(Q.a,{query:"(min-width:530px)"},r.a.createElement(S.a,{responsive:!0,textAlign:"start",margin:{left:"-20%"}},e.props.message)))}))}}]),t}(n.Component),J=a(44),B=a.n(J),U=a(177),V=a(67),W=a(54),F=a.n(W),I=a(104),H=a(105),G=a.n(H),D=a(106),$=a.n(D),K=a(107),X=a.n(K),Y=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).errorAlert=function(e){return q.b.error(e)},a.infoAlert=function(e){return q.b.info(e)},a.successAlert=function(e){return q.b.success(e)};var n=new b.a;return a.fetchBalance=a.fetchBalance.bind(Object(f.a)(a)),a.onSubmitTx=a.onSubmitTx.bind(Object(f.a)(a)),a.handleScan=a.handleScan.bind(Object(f.a)(a)),a.handleScanError=a.handleScanError.bind(Object(f.a)(a)),a.makeRedeemableAccount=a.makeRedeemableAccount.bind(Object(f.a)(a)),a.showRedeemable=a.showRedeemable.bind(Object(f.a)(a)),a.recipient_input=r.a.createRef(),a.printTriggerRef=r.a.createRef(),a.qrRef=r.a.createRef(),""!==n.get("username")&&"not-signed-in"!==n.get("username")&&void 0!==n.get("username")&&a.fetchBalance(n.get("username")),a.state={username:n.get("username")||"not-signed-in",address:n.get("address")||"not-signed-in",password:n.get("password")||"not-signed-in",showSendModal:!1,showAddressModal:!1,showQRReader:!1,alreadyPoppedRedeemable:!1,balance:0,transactions:[],sendAddressValue:"",shouldMakeRedeemable:!1,redeemableAccount:null,lastPayload:"",showRedeemableModal:!1,showRedeemModal:!1,lastTxHash:"",alreadyReceivedHashes:[],hasInitiallyLoaded:!1,hasAlreadyScanned:!1,hasCookie:n.get("has-cookie-accept")},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new b.a;""!==t.get("username")&&"not-signed-in"!==t.get("username")&&void 0!==t.get("username")&&fetch("/api/accounts/"+t.get("username")+"/transactions",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){a.error?(a.error.includes("no account exists with the given username")&&(t.remove("username"),t.remove("password"),t.remove("address"),e.props.history.push("/")),e.errorAlert(a.error)):a.transactions?e.setState({transactions:a.transactions}):e.state.alreadyPoppedRedeemable||(e.infoAlert("Need some SummerCash? Look out for redeemable airdrop QR codes to earn your first coins."),e.setState({alreadyPoppedRedeemable:!0})),window.setInterval(function(){var t=JSON.parse(JSON.stringify(e.state.lastTxHash));e.fetchLastTxHash(e.state.username).then(function(){e.state.lastTxHash!==t&&e.fetchTransactions()})},500)})}},{key:"render",value:function(){var e,t=this;if("not-signed-in"===this.state.username||""===this.state.username)return r.a.createElement(R,null);var a=navigator.userAgent.toLowerCase();return this.state.hasCookie||-1!==a.indexOf(" electron/")||(e=r.a.createElement(X.a,{message:"We uses cookies to ensure you get the best experience on our website.",onAccept:function(){},cookie:"has-cookie-accept"})),r.a.createElement(w.a,{theme:x,full:!0},r.a.createElement(q.a,null),e,r.a.createElement(v.a,{margin:{top:"large",left:"large",right:"large"},align:"center",direction:"row"},r.a.createElement(v.a,{margin:{right:"medium"}},r.a.createElement(z.a,{seed:this.state.address,size:5,scale:15,className:"blocky"})),r.a.createElement(v.a,{margin:{left:"small"}},r.a.createElement(E.a,{responsive:!0,size:"medium",margin:"none"},this.state.username),r.a.createElement(Q.a,{query:"(min-width:770px)"},r.a.createElement(S.a,{responsive:!0,size:"large",margin:{top:"xsmall",bottom:"none"}},this.state.address)),r.a.createElement(Q.a,{query:"(max-width:779px)"},r.a.createElement(Q.a,{query:"(min-width: 440px)"},r.a.createElement(S.a,{responsive:!0,size:"small",margin:{top:"xsmall",bottom:"none"}},this.state.address))),r.a.createElement(S.a,{responsive:!0,size:"medium",margin:{top:"xsmall"}},"Balance: ",this.state.balance," SMC"))),r.a.createElement(E.a,{responsive:!0,size:"medium",margin:{left:"large",top:"medium",bottom:"xsmall"}},"Transactions"),r.a.createElement(v.a,{overflow:{vertical:"scroll"},margin:{left:"large"},height:"50%"},this.renderTransactions()),r.a.createElement(Q.a,{query:"(min-width:605px)"},function(e){return e?r.a.createElement(v.a,{direction:"row",margin:{left:"large"},align:"baseline",alignContent:"start",alignSelf:"start"},r.a.createElement(C.a,{primary:!0,label:"Send",onClick:function(){return t.setState({showSendModal:!0})},margin:{top:"small"},color:"accent-2",size:"xlarge"}),r.a.createElement(C.a,{label:"Receive",onClick:function(){return t.setState({showAddressModal:!0})},margin:{top:"small",left:"small"},size:"xlarge"}),r.a.createElement(C.a,{label:"Redeem",onClick:function(){return t.setState({showRedeemModal:!0})},margin:{top:"small",left:"small"},size:"xlarge"})):r.a.createElement(v.a,{flex:!1,direction:"column",fill:"vertical",responsive:!0,margin:{left:"medium",right:"medium"},tag:"footer"},r.a.createElement(C.a,{primary:!0,label:"Send",onClick:function(){return t.setState({showSendModal:!0})},margin:{top:"small"},color:"accent-2"}),r.a.createElement(C.a,{label:"Receive",onClick:function(){return t.setState({showAddressModal:!0})},margin:{top:"small"}}),r.a.createElement(C.a,{label:"Redeem",onClick:function(){return t.setState({showRedeemModal:!0})},margin:{top:"small"}}))}),this.state.showAddressModal?this.showAddressModal():null,this.state.showSendModal?this.showSendModal():null,this.state.showRedeemableModal?this.showRedeemable(512,535,!0):null,this.state.showRedeemModal?this.showRedeem():null)}},{key:"fetchBalancePure",value:function(e){var t=this;return fetch("/api/accounts/"+e+"/balance",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=0;return e.error?t.errorAlert(e.error):a=e.balance,a})}},{key:"fetchLastTxHash",value:function(e){var t=this;return fetch("/api/accounts/"+e+"/lastHash",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.error||t.setState({lastTxHash:e.hash})})}},{key:"fetchBalance",value:function(e){var t=this;fetch("/api/accounts/"+e+"/balance",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=0;e.error?t.errorAlert(e.error):a=e.balance,t.setState({balance:a})})}},{key:"showRedeem",value:function(){var e=this;return r.a.createElement(Q.a,{query:"(min-width:588px)"},function(t){return t?r.a.createElement(j.a,{onEsc:function(){return e.setState({showRedeemModal:!1})},onClickOutside:function(){return e.setState({showRedeemModal:!1})},modal:!0,responsive:!1},r.a.createElement(v.a,{margin:{right:"medium",top:"small",bottom:"none"},alignContent:"end",align:"end",responsive:!1},r.a.createElement(U.a,{onClick:function(){return e.setState({showRedeemModal:!1})},cursor:"pointer"})),r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column",responsive:!1},r.a.createElement(E.a,{margin:{left:"xlarge",right:"xlarge",top:"none"},responsive:!0},"Scan a code!")),r.a.createElement(F.a,{facingMode:"environment",onScan:e.handleScan,onError:e.handleScanError})):r.a.createElement(j.a,{onEsc:function(){return e.setState({showRedeemModal:!1})},onClickOutside:function(){return e.setState({showRedeemModal:!1})},modal:!0,responsive:!0},r.a.createElement(v.a,{alignContent:"end",align:"end",margin:{top:"medium",right:"medium"},overflow:{vertical:"hidden"}},r.a.createElement(U.a,{color:"white",onClick:function(){return e.setState({showRedeemModal:!1})},cursor:"pointer",overflow:{vertical:"hidden"}})),r.a.createElement(F.a,{facingMode:"environment",onScan:e.handleScan,onError:e.handleScanError,showViewFinder:!1,className:"mobile-qr"}))})}},{key:"showAddressModal",value:function(){var e=this;return r.a.createElement(Q.a,{query:"(min-width:544px)"},function(t){return t?r.a.createElement(j.a,{onEsc:function(){return e.setState({showAddressModal:!1})},onClickOutside:function(){return e.setState({showAddressModal:!1})},modal:!0,responsive:!1},r.a.createElement(v.a,{margin:{right:"medium",top:"small",bottom:"small"},alignContent:"end",align:"end"},r.a.createElement(U.a,{onClick:function(){return e.setState({showAddressModal:!1})},cursor:"pointer"})),r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column"},r.a.createElement(B.a,{value:e.state.address,size:512}),r.a.createElement(V.CopyToClipboard,{text:e.state.address},r.a.createElement(C.a,null,r.a.createElement(S.a,{responsive:!0},e.state.address))))):r.a.createElement(Q.a,{query:"(min-width:355px)"},function(t){return t?r.a.createElement(j.a,{onEsc:function(){return e.setState({showAddressModal:!1})},onClickOutside:function(){return e.setState({showAddressModal:!1})},modal:!0,responsive:!1},r.a.createElement(v.a,{margin:{right:"medium",top:"medium",bottom:"medium"},alignContent:"end",align:"end"},r.a.createElement(U.a,{onClick:function(){return e.setState({showAddressModal:!1})},cursor:"pointer"})),r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column"},r.a.createElement(B.a,{value:e.state.address,size:320}),r.a.createElement(V.CopyToClipboard,{text:e.state.address},r.a.createElement(C.a,null,r.a.createElement(S.a,{size:"small",responsive:!0},e.state.address))))):r.a.createElement(j.a,{onEsc:function(){return e.setState({showAddressModal:!1})},onClickOutside:function(){return e.setState({showAddressModal:!1})},modal:!0,responsive:!1},r.a.createElement(v.a,{margin:{right:"medium",top:"medium",bottom:"medium"},alignContent:"end",align:"end"},r.a.createElement(U.a,{onClick:function(){return e.setState({showAddressModal:!1})},cursor:"pointer"})),r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column",pad:{bottom:"xlarge"}},r.a.createElement(B.a,{value:e.state.address,size:256})))})})}},{key:"showSendModal",value:function(){var e=this;return r.a.createElement(Q.a,{query:"(min-width:427px)"},function(t){return t?r.a.createElement(j.a,{onEsc:function(){return e.setState({showSendModal:!1})},onClickOutside:function(){return e.setState({showSendModal:!1})},modal:!0,responsive:!1},r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column",pad:"medium"},r.a.createElement(O.a,{onSubmit:e.onSubmitTx},r.a.createElement(M.a,{name:"amount",ref:"amount_input",label:"Amount",placeholder:"1.23456",required:!0,size:"xxlarge"}),r.a.createElement(M.a,{name:"burn_rate",ref:"burn_input",label:"Burn Rate",placeholder:"0.123456",required:!1,size:"xxlarge"}),r.a.createElement(M.a,{name:"recipient",label:"Recipient",required:!1,size:"xxlarge"},r.a.createElement(T.a,{ref:"recipient_input",value:e.state.sendAddressValue,onChange:function(t){return e.setState({sendAddressValue:t.target.value})},placeholder:"@username / 0x1234",size:"xxlarge"})),r.a.createElement(M.a,{name:"message",label:"Message",placeholder:"Say something nice!",required:!1,size:"xxlarge"}),r.a.createElement(Q.a,{query:"(min-width: 1066px)"},function(t){return t?r.a.createElement(v.a,{align:"center",alignContent:"center",alignSelf:"center",direction:"row"},r.a.createElement(C.a,{primary:!0,type:"submit",label:"Send",color:"accent-2"}),r.a.createElement(C.a,{primary:!0,margin:{left:"small"},type:"submit",label:"Make Redeemable",onClick:function(){return e.setState({shouldMakeRedeemable:!0})},color:"accent-2"}),r.a.createElement(C.a,{ref:e.recipient_input,margin:{left:"small"},label:"Scan QR Code",onClick:function(){return e.setState({showQRReader:!0})}})):r.a.createElement(v.a,{align:"center",alignContent:"center",alignSelf:"center",direction:"row"},r.a.createElement(C.a,{primary:!0,type:"submit",label:"Send",color:"accent-2"}),r.a.createElement(C.a,{primary:!0,margin:{left:"small"},type:"submit",label:"Redeemable",onClick:function(){return e.setState({shouldMakeRedeemable:!0})},color:"accent-2"}),r.a.createElement(C.a,{ref:e.recipient_input,margin:{left:"small"},label:"Scan",onClick:function(){return e.setState({showQRReader:!0})}}))}))),e.state.showQRReader?e.showQRReader():null):r.a.createElement(j.a,{onEsc:function(){return e.setState({showSendModal:!1})},onClickOutside:function(){return e.setState({showSendModal:!1})},modal:!0,responsive:!0},r.a.createElement(v.a,{align:"end",margin:{right:"large",top:"medium"}},r.a.createElement(U.a,{onClick:function(){return e.setState({showSendModal:!1})},cursor:"pointer"})),r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column",pad:"medium"},r.a.createElement(O.a,{onSubmit:e.onSubmitTx},r.a.createElement(M.a,{name:"amount",ref:"amount_input",label:"Amount",placeholder:"1.23456",required:!0,size:"xxlarge"}),r.a.createElement(M.a,{name:"burn_rate",ref:"burn_input",label:"Burn Rate",placeholder:"0.123456",required:!1,size:"xxlarge"}),r.a.createElement(M.a,{name:"recipient",label:"Recipient",required:!1,size:"xxlarge"},r.a.createElement(T.a,{ref:"recipient_input",value:e.state.sendAddressValue,onChange:function(t){return e.setState({sendAddressValue:t.target.value})},placeholder:"@username / 0x1234",size:"xxlarge"})),r.a.createElement(M.a,{name:"message",label:"Message",placeholder:"Say something nice!",required:!1,size:"xxlarge"}),r.a.createElement(Q.a,{query:"(min-width: 1066px)"},function(t){return t?r.a.createElement(v.a,{align:"center",alignContent:"center",alignSelf:"center",direction:"row"},r.a.createElement(C.a,{primary:!0,type:"submit",label:"Send",color:"accent-2"}),r.a.createElement(C.a,{primary:!0,margin:{left:"small"},type:"submit",label:"Make Redeemable",onClick:function(){return e.setState({shouldMakeRedeemable:!0})},color:"accent-2"}),r.a.createElement(C.a,{ref:e.recipient_input,margin:{left:"small"},label:"Scan QR Code",onClick:function(){return e.setState({showQRReader:!0})}})):r.a.createElement(v.a,{align:"center",alignContent:"center",alignSelf:"center",direction:"row"},r.a.createElement(C.a,{primary:!0,type:"submit",label:"Send",color:"accent-2"}),r.a.createElement(C.a,{primary:!0,margin:{left:"small"},type:"submit",label:"Redeemable",onClick:function(){return e.setState({shouldMakeRedeemable:!0})},color:"accent-2"}),r.a.createElement(C.a,{ref:e.recipient_input,margin:{left:"small"},label:"Scan",onClick:function(){return e.setState({showQRReader:!0})}}))}))),e.state.showQRReader?e.showQRReader():null)})}},{key:"makeRedeemableAccount",value:function(e){var t=this;this.setState({redeemableAccount:null});var a=this.state.username+"_"+Math.random().toString(36).substring(7);void 0!==e&&e&&0!==e&&(a=this.state.username+"_"+Math.random().toString(36).substring(7)+"_burnrate:"+e);var n=Object(I.sha3_512)(Math.random().toString(36).substring(7));return fetch("/api/accounts/"+a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n})}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):t.setState({redeemableAccount:{username:a,password:n}})})}},{key:"showQRReader",value:function(){return r.a.createElement(F.a,{facingMode:"environment",onScan:this.handleScan,onError:this.handleScanError})}},{key:"showRedeemable",value:function(e,t,a){var n=this;return r.a.createElement(j.a,{onEsc:function(){return n.setState({showRedeemableModal:!1,showSendModal:!1,showQRReader:!1,sendAddressValue:"",shouldMakeRedeemable:!1,lastPayload:""})},onClickOutside:function(){return n.setState({showRedeemableModal:!1,showSendModal:!1,showQRReader:!1,sendAddressValue:"",shouldMakeRedeemable:!1,lastPayload:""})},modal:a,responsive:!1},r.a.createElement(v.a,{margin:{right:"medium",top:"small",bottom:"small"},alignContent:"end",align:"end"},r.a.createElement(U.a,{onClick:function(){return n.setState({showRedeemableModal:!1,showSendModal:!1,showQRReader:!1,sendAddressValue:"",shouldMakeRedeemable:!1,lastPayload:""})},cursor:"pointer"})),r.a.createElement("div",{id:"print-contents"},r.a.createElement(v.a,{align:"center",alignContent:"center",direction:"column"},r.a.createElement(E.a,{size:"small",margin:{top:"none"}},"Scan in SummerCash Wallet"),r.a.createElement(Q.a,{query:this.getQuery(t)},function(a){return a?r.a.createElement(B.a,{value:n.state.redeemableAccount.username+"_"+n.state.redeemableAccount.password,size:e}):n.showRedeemable(e-32,t-32,!1)}),r.a.createElement(S.a,{responsive:!0},this.state.lastPayload))),r.a.createElement(C.a,{primary:!0,onClick:function(){return n.printContents()},label:"Print",margin:{top:"none",bottom:"small",left:"small",right:"small"},color:"accent-2",size:"xlarge"}))}},{key:"getQuery",value:function(e){return"(min-width:".concat(e,"px)")}},{key:"printContents",value:function(){var e=document.getElementById("print-contents");G.a.toJpeg(e,{bgcolor:"white"}).then(function(e){$()({printable:e,type:"image",imageStyle:"width:70%; height:70%;transform:rotate(-90deg);margin-top:-5%;margin-left: 10%;"})}).catch(function(e){console.error("oops, something went wrong!",e)})}},{key:"handleScan",value:function(e){var t=this;if(e&&!this.state.hasAlreadyScanned)if(this.setState({hasAlreadyScanned:!0}),e.includes("@")||e.includes("0x")||e.includes("_")){if(e.includes("@")||e.includes("0x"))this.setState({showQRReader:!1,sendAddressValue:e,hasAlreadyScanned:!1});else if(e.includes("_")){var a;a=e.includes("_burnrate")?{username:e.split("_burnrate:")[0]+"_burnrate:"+e.split("_burnrate:")[1].split("_")[0],password:e.split("_")[e.split("_").length-1]}:{username:e.split("_")[0]+"_"+e.split("_")[1],password:e.split("_")[2]},fetch("/api/accounts/"+a.username+"/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a.password})}).then(function(e){return e.json()}).then(function(e){if(e.error)t.errorAlert(e.error);else{var n=0;t.fetchBalancePure(a.username).then(function(e){n=e,a.username.includes("_burnrate:")&&(n=parseFloat(a.username.split("_burnrate:")[1])),fetch("/api/transactions/NewTransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.username,password:a.password,recipient:t.state.address,amount:n})}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):(t.fetchBalance(t.state.username),t.fetchTransactions(),t.setState({showRedeemModal:!1,showQRReader:!1}))})})}t.setState({hasAlreadyScanned:!1})})}}else this.errorAlert("Invalid QR code (must be @username or 0x1234 address)"),this.setState({hasAlreadyScanned:!1})}},{key:"handleScanError",value:function(e){this.errorAlert(e)}},{key:"onSubmitTx",value:function(e){var t=this;e.preventDefault();var a=JSON.parse(JSON.stringify(e.value));if(a.amount<0)this.errorAlert("Invalid transaction amount; cannot send negative amounts of SummerCash.");else{if(this.state.shouldMakeRedeemable)return this.setState({shouldMakeRedeemable:!1,lastPayload:a.message}),void this.makeRedeemableAccount(a.burn_rate).then(function(){return fetch("/api/transactions/NewTransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.state.username,recipient:t.state.redeemableAccount.username,amount:parseFloat(a.amount),password:t.state.password,payload:a.message})})}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):(t.fetchTransactions(),t.setState({showSendModal:!1,showQRReader:!1,sendAddressValue:"",showRedeemableModal:!0}))});a.recipient||(a.recipient=this.state.sendAddressValue),a.recipient=a.recipient.replace("@",""),a.message||(a.message=""),fetch("/api/transactions/NewTransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,recipient:a.recipient,amount:parseFloat(a.amount),password:this.state.password,payload:a.message})}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):t.successAlert("Transaction sent successfully!"),t.fetchTransactions(),t.setState({showSendModal:!1,showQRReader:!1,sendAddressValue:""})})}}},{key:"fetchTransactions",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t,a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchBalance(this.state.username),""!==(t=new b.a).get("username")&&"not-signed-in"!==t.get("username")&&void 0!==t.get("username")&&fetch("/api/accounts/"+t.get("username")+"/transactions",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(){var e=Object(m.a)(l.a.mark(function e(n){var r,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.error)n.error.includes("no account exists with the given username")&&(t.remove("username"),t.remove("password"),t.remove("address"),a.props.history.push("/")),a.errorAlert(n.error);else if(n.transactions){for(r=0;r<n.transactions.length;r++)a.state.alreadyReceivedHashes.includes(n.transactions[r].hash)||n.transactions[r].recipient!==a.state.username&&n.transactions[r].recipient!==a.state.address||(a.state.hasInitiallyLoaded&&a.successAlert("Received ".concat(n.transactions[r].amount," SummerCash from ").concat(n.transactions[r].sender,"!")),(s=Object(c.a)(a.state.alreadyReceivedHashes)).push(n.transactions[r].hash),a.setState({alreadyReceivedHashes:s}));a.state.hasInitiallyLoaded||a.setState({hasInitiallyLoaded:!0}),a.setState({transactions:n.transactions})}else a.state.alreadyPoppedRedeemable||(a.infoAlert("Need some SummerCash? Look out for redeemable airdrop QR codes to earn your first coins."),a.setState({alreadyPoppedRedeemable:!0}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderTransactions",value:function(){var e,t=[];for(e=0;e<this.state.transactions.length;e++){var a="send";!(e>0&&this.state.transactions[e-1].hash===this.state.transactions[e].hash)||this.state.transactions[e].recipient!==this.state.address&&this.state.transactions[e].recipient!==this.state.username||this.state.transactions[e].sender!==this.state.address&&this.state.transactions[e].sender!==this.state.username?this.state.transactions[e].recipient!==this.state.address&&this.state.transactions[e].recipient!==this.state.username?a="send":this.state.transactions[e].recipient!==this.state.address&&this.state.transactions[e].recipient!==this.state.username||this.state.transactions[e].sender===this.state.address||this.state.transactions[e].sender===this.state.username||(a="receive"):a="receive";var n="";this.state.transactions[e].payload&&(n=atob(this.state.transactions[e].payload));var s=13;switch(window.innerWidth<424&&(s=7),a){case"send":t.push(r.a.createElement(L,{key:e,margin:"small",gap:"small",type:a,timestamp:this.state.transactions[e].time,shortTimestamp:this.state.transactions[e].time.toString().split(" ")[0],recipient:this.state.transactions[e].recipient.toString().substring(0,s),amount:this.state.transactions[e].amount,message:n}));break;case"receive":t.push(r.a.createElement(L,{key:e,margin:"small",gap:"small",type:a,timestamp:this.state.transactions[e].time,shortTimestamp:this.state.transactions[e].time.toString().split(" ")[0],sender:this.state.transactions[e].sender.toString().substring(0,s),amount:this.state.transactions[e].amount,message:n}))}}return t}}]),t}(n.Component),Z=Object(k.d)(Y),ee=(a(160),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).errorAlert=function(e){return q.b.error(e)};var n=new b.a;return void 0!==n.get("username")&&""!==n.get("username")&&"not-signed-in"!==n.get("username")&&fetch("/api/accounts/"+n.get("username")+"/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n.get("password")})}).then(function(e){return e.json()}).then(function(e){n.set("address",e.address),a.setState({username:n.get("username")||"not-signed-in",password:n.get("password")||"not-signed-in",address:n.get("address")||"not-signed-in"}),a.props.history.push("/")}),a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a.password_text_input=r.a.createRef(),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e="xxlarge";return window.innerWidth<432?e="large":window.innerWidth<402&&(e="medium"),r.a.createElement(w.a,{theme:x,full:!0},r.a.createElement(q.a,null),r.a.createElement(v.a,{justify:"center",align:"center",fill:"vertical",responsive:!0},r.a.createElement(O.a,{onSubmit:this.onSubmit},r.a.createElement(M.a,{name:"name",label:"Name",required:!0,size:e,pad:!0}),r.a.createElement(M.a,{ref:"password_input",label:"Password",required:!1,value:"",pad:!0},r.a.createElement(T.a,{ref:"password_text_input",type:"password",name:"password",label:"Password",size:e})),r.a.createElement(C.a,{type:"submit",onClick:this.alert,primary:!0,label:this.props.label,margin:{top:"small"},color:"accent-2",size:"large"}))))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=e.value;t.password=this.refs.password_text_input.value,"Sign Up"===this.props.label?this.onSubmitCreate(t):this.onSubmitAuth(t)}},{key:"onSubmitCreate",value:function(e){var t=this;fetch("/api/accounts/"+e.name,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password})}).then(function(e){return e.json()}).then(function(a){if(a.error)t.errorAlert(a.error);else{var n=new b.a;n.set("username",e.name),n.set("password",e.password),n.set("address",a.address),t.setState({username:n.get("username")||"not-signed-in",password:n.get("password")||"not-signed-in",address:n.get("address")||"not-signed-in"}),t.props.history.push("/")}})}},{key:"onSubmitAuth",value:function(e){var t=this;fetch("/api/accounts/"+e.name+"/authenticate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password})}).then(function(e){return e.json()}).then(function(a){if(a.error)t.errorAlert(a.error);else{var n=new b.a;n.set("username",e.name),n.set("password",e.password),n.set("address",a.address),t.setState({username:n.get("username")||"not-signed-in",password:n.get("password")||"not-signed-in",address:n.get("address")||"not-signed-in"}),t.props.history.push("/")}})}}]),t}(n.Component)),te=Object(k.d)(ee),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=a(43),se=a(111),ie=a(110),oe=a(35),le=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).errorAlert=function(e){return q.b.error(e)},a.infoAlert=function(e){return q.b.info(e)},a.successAlert=function(e){return q.b.success(e)};var n=new b.a;return a.state={timeUntilClaim:"",nextClaimAmount:0,username:n.get("username")},a.getTimeUntilClaim=a.getTimeUntilClaim.bind(Object(f.a)(a)),a.getClaimAmount=a.getClaimAmount.bind(Object(f.a)(a)),a.makeClaim=a.makeClaim.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new b.a;void 0!==t.get("username")&&"not-signed-in"!==t.get("username")||this.props.history.push("/"),this.getClaimAmount(),window.setInterval(function(){void 0!==e.state.username&&e.getTimeUntilClaim()},1e3)}},{key:"render",value:function(){return r.a.createElement(w.a,{theme:x,full:!0},r.a.createElement(q.a,null),r.a.createElement(v.a,{align:"center",fill:"vertical",justify:"center",basis:"large"},r.a.createElement(E.a,{margin:{bottom:"none"}},"Faucet"),r.a.createElement(E.a,{size:"xlarge",margin:{top:"small",bottom:"none"}},this.state.timeUntilClaim),r.a.createElement(S.a,{size:"large",margin:{top:"small"}},"Time Until Next Claim"),r.a.createElement(C.a,{responsive:!0,size:"xlarge",primary:!0,color:"accent-2",label:this.getClaimLabelText(),onClick:this.makeClaim})))}},{key:"getTimeUntilClaim",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faucet/"+this.state.username+"/NextClaimTime",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):t.setState({timeUntilClaim:e.time})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getClaimAmount",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faucet/"+this.state.username+"/NextClaimAmount",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):t.setState({nextClaimAmount:e.amount})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"makeClaim",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/faucet/Claim",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,amount:this.state.nextClaimAmount.toString()})}).then(function(e){return e.json()}).then(function(e){e.error?t.errorAlert(e.error):(t.successAlert("Claimed ".concat(t.state.nextClaimAmount," SummerCash!")),t.getClaimAmount(),t.getTimeUntilClaim())});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getClaimLabelText",value:function(){return"Claim ".concat(this.state.nextClaimAmount," SummerCash")}}]),t}(n.Component),ce=Object(k.d)(le),me=Object(re.c)(Object(re.b)({routing:ie.routerReducer})),ue=r.a.createElement(se.a,{store:me},r.a.createElement(oe.a,null,r.a.createElement("div",null,r.a.createElement(k.a,{exact:!0,path:"/",component:Z}),r.a.createElement(k.a,{path:"/signup",render:function(){return r.a.createElement(te,{label:"Sign Up"})}}),r.a.createElement(k.a,{path:"/login",render:function(){return r.a.createElement(te,{label:"Log In"})}}),r.a.createElement(k.a,{path:"/faucet",render:function(){return r.a.createElement(ce,null)}}))));i.a.render(ue,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ae?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()},71:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.488ba626.chunk.js.map