(this.webpackJsonpticket2calendar=this.webpackJsonpticket2calendar||[]).push([[0],{10:function(e,t,n){e.exports=n(32)},15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(15),n(16),n(17),n(8)),i=n.n(s),l=n(1),u=n(2),b=n(4),p=n(3),m=n(5),d=n(9),h=function(e){function t(e){return Object(l.a)(this,t),Object(b.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=JSON.parse(JSON.stringify(this.props.values));return r.a.createElement("div",null,Object.keys(e).map((function(t){return r.a.createElement("p",{key:Math.random()},t,": ",e[t])})))}}]),t}(r.a.Component),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).thing=function(e){console.log(n.state.result_string),console.log(n.state.bcbp_result)},n.state={result_string:null,bcbp_result:{}},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("pcCanvas").remove(),document.getElementById("mobileCanvas").remove();var t=new Worker("result_check.js");setTimeout((function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.scanBarcode();case 1:case"end":return e.stop()}}))}),1e3),t.onmessage=function(){console.log(e.state.result_string),localStorage.barcode&&e.setState({result_string:localStorage.barcode},(function(){localStorage.clear(),t.terminate(),console.log(e.state.result_string),e.setState({bcbp_result:Object(d.parseBCBP)(e.state.result_string)},(function(){console.log(e.state.bcbp_result),e.state.bcbp_result}))}))}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{id:"headtxt"},"Scan a boarding pass that looks like ",r.a.createElement("a",{href:"https://raw.githubusercontent.com/x8BitRain/ticket2calendar/master/public/pdf417_bcbp.png"},"this")," or ",r.a.createElement("a",{href:"https://raw.githubusercontent.com/x8BitRain/ticket2calendar/master/public/aztec_bcbp.png"},"this"),"."),this.state.bcbp_result?r.a.createElement(h,{values:this.state.bcbp_result}):null)}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6c920777.chunk.js.map