(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),p=(n(15),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.image,e={backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 60%"};return r.a.createElement("div",{className:"item",style:e})}}]),e}(a.Component)),d=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.active,a=t.clickDot,i=n?"dot active":"dot";return r.a.createElement("div",{className:i,onClick:function(){return a(e)}})}}]),e}(a.Component),f=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.index,a=t.clickDot;return!1===t.show?null:r.a.createElement("div",{className:"dots"},e.map(function(t,e){var i=e===n;return r.a.createElement(d,{key:e,id:e,active:i,clickDot:a})}))}}]),e}(a.Component),v=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.clickPrev,n=t.clickNext;return!1===t.show?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"arrow prev",onClick:function(){return e()}},"\u276e"),r.a.createElement("button",{className:"arrow next",onClick:function(){return n()}},"\u276f"))}}]),e}(a.Component),g=function(t){function e(t){var n;Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).componentDidMount=function(){n.state.autoplay&&n.startTimer()},n.startTimer=function(){var t=setInterval(function(){n.next()},n.state.time);n.setState({interval:t})},n.resetTimer=function(){var t=clearInterval(n.state.interval);n.setState({interval:t}),n.startTimer()},n.prev=function(t){0!==n.state.index&&(n.setState(function(t){return{index:t.index-1,translate:t.translate+n.widthCaro()}}),n.state.autoplay&&n.resetTimer())},n.next=function(t){var e=n.state;if(e.index===e.images.length-1)return n.setState({index:0,translate:0});n.setState(function(t){return{index:t.index+1,translate:t.translate+-n.widthCaro()}}),n.state.autoplay&&n.resetTimer()},n.clickDot=function(t){var e=n.state,a=e.index,r=e.translate;t!==a&&(t>a?n.setState({translate:-t*n.widthCaro()}):n.setState({translate:r+(a-t)*n.widthCaro()}),n.setState({index:t}),n.state.autoplay&&n.resetTimer())};var a=!(!n.props.config||!n.props.config.autoplay),r=n.props.config&&n.props.config.time?n.props.config.time:3e3,i=!0;n.props.config&&!1===n.props.config.dots&&(i=!1);var o=!0;return n.props.config&&!1===n.props.config.arrow&&(o=!1),n.state={images:["/image/img1.jpg","/image/img2.jpg","/image/img1.jpg","/image/img2.jpg"],index:0,translate:0,interval:null,autoplay:a,time:r,dots:i,arrow:o},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"widthCaro",value:function(){return document.querySelector(".caro").clientWidth}},{key:"render",value:function(){var t=this.state,e=t.images,n=t.index,a=t.translate,i=t.dots,o=t.arrow,c={transform:"translate(".concat(a,"px)"),transition:"transform ease-out 0.45s"};return r.a.createElement("div",{className:"caro"},r.a.createElement("div",{className:"content",style:c},e.map(function(t,e){return r.a.createElement(p,{key:e,image:t})})),r.a.createElement(f,{show:i,clickDot:this.clickDot,index:n,images:e}),r.a.createElement(v,{show:o,clickNext:this.next,clickPrev:this.prev}))}}]),e}(a.Component),h=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(g,{config:{autoplay:!0}}),r.a.createElement(g,{config:{autoplay:!0,time:1e3,dots:!1}}),r.a.createElement(g,{config:{autoplay:!0,time:2e3,dots:!1}}),r.a.createElement(g,{config:{autoplay:!0,time:2e3,dots:!1,arrow:!1}}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.6597d0b5.chunk.js.map