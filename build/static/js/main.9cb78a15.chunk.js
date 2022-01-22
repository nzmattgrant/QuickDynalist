(this["webpackJsonpquick-dynalist"]=this["webpackJsonpquick-dynalist"]||[]).push([[0],{229:function(e,t){},231:function(e,t){},240:function(e,t){},242:function(e,t){},267:function(e,t){},268:function(e,t){},273:function(e,t){},275:function(e,t){},282:function(e,t){},301:function(e,t){},340:function(e,t){},440:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(74),a=n.n(s),r=n(200),c=n(11),l=n(75),u=n(76),d=n(77),p=n(78),h=n(81),b=n(36),x=n.n(b),j=n(80),g=n(38),y=(n(198),n(3)),v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).setDynalistToken=Object(l.a)(x.a.mark((function e(){var t,n,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.state.dynalistApiToken,n=new j.DynalistApi(t),e.prev=2,e.next=5,n.listFiles();case 5:if(!(o=e.sent)._code||"Ok"!==o._code){e.next=10;break}return localStorage.setItem("quick-dynalist-api-key",t),i.props.history.push("/"),e.abrupt("return");case 10:if(!o._code||"InvalidToken"!==o._code){e.next=12;break}throw new Error("Invalid token entered");case 12:throw new Error("Request not accepted");case 15:e.prev=15,e.t0=e.catch(2),g.b.error(e.t0.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 18:case"end":return e.stop()}}),e,null,[[2,15]])}))),i.handleChange=function(e){i.setState({dynalistApiToken:e.target.value})},i.state={dynalistApiToken:""},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"container square-box d-flex justify-content-center",style:{width:"500px",height:"200px",position:"absolute",top:"50%",left:"50%",margin:"-150px 0 0 -250px",flexDirection:"column"},children:[Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Enter Dynalist API token"})}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("p",{children:["Enter your api token found"," ",Object(y.jsx)("a",{target:"_blank",href:"https://dynalist.io/developer",children:"here"})]}),Object(y.jsx)("p",{children:"this key will only be held locally on your browser and will not be sent to any server"})]}),Object(y.jsxs)("div",{children:[" ",Object(y.jsx)("input",{type:"text",style:{width:"400px",marginRight:"10px"},value:this.state.dynalistApiToken,onChange:this.handleChange}),Object(y.jsx)("button",{className:"btn btn-primary",onClick:this.setDynalistToken,children:"Enter"})]}),Object(y.jsx)(g.a,{})]})}}]),n}(i.Component),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).dynalistApi=void 0,i.clearKey=function(){localStorage.removeItem("quick-dynalist-api-key"),i.props.history.push("/Setup")},i.sendTextToInbox=Object(l.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(i.state.inboxInput),e.next=4,null===(t=i.dynalistApi)||void 0===t?void 0:t.sendToInbox(i.state.inboxInput);case 4:n=e.sent,console.log("sent to inbox",n),g.b.success("Sent to inbox",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),i.setState({inboxInput:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g.b.error(e.t0.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),i.handleChange=function(e){i.setState({inboxInput:e.target.value})},i.state={dynalistApiToken:"",inboxInput:""},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("quick-dynalist-api-key");console.log(e),e||this.props.history.push("/Setup"),this.dynalistApi=new j.DynalistApi(e)}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:Object(y.jsx)("button",{style:{margin:"10px"},className:"btn btn-danger",onClick:this.clearKey,children:"Clear dynalist key"})}),Object(y.jsxs)("div",{className:"container square-box d-flex justify-content-center align-items-center",style:{width:"500px",height:"200px",position:"absolute",top:"50%",left:"50%",margin:"-150px 0 0 -250px",flexDirection:"column"},children:[Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Add to inbox"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{style:{width:"400px",marginRight:"10px"},type:"text",value:this.state.inboxInput,onChange:this.handleChange}),Object(y.jsx)("button",{className:"btn btn-primary",onClick:this.sendTextToInbox,children:"Add"})]})]}),Object(y.jsx)(g.a,{})]})}}]),n}(i.Component);n(435);var O=function(){return Object(y.jsxs)(r.a,{children:[Object(y.jsx)(c.a,{exact:!0,path:"/",component:f}),Object(y.jsx)(c.a,{exact:!0,path:"/setup",component:v})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,441)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),s(e),a(e)}))};a.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(O,{})}),document.getElementById("root")),k()}},[[440,1,2]]]);
//# sourceMappingURL=main.9cb78a15.chunk.js.map