(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{318:function(t,e,n){"use strict";n.r(e);var a=n(9),o=n.n(a),c=n(73),s=n.n(c),i=(n(83),n(74)),r=n(75),u=n(78),l=n(77),d=(n(84),n(76)),h=n.n(d),j={particles:{number:{value:99,density:{enable:!0,value_area:600}},color:{value:"#ded9d9"},opacity:{value:5},size:{value:1,random:!0,anim:{enable:!1,speed:50}}}},b=n(39),p=n(7),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).tweetQuote=function(){var t=a.state,e=t.quote,n=t.author,o="https://twitter.com/intent/tweet?text=".concat(e," - ").concat(n);window.open(o,"_blank")},a.getQuote=function(){a.setState({loading:!0}),fetch("https://favqs.com/api/qotd",{method:"GET",headers:{"Content-Type":"application/json",Authorization:'Token token="a4cc0569a80b1af6eef203ef9e6be28b"'}}).then((function(t){return t.json()})).then((function(t){return a.setState({quote:t.quote.body,author:t.quote.author,loading:!1})})).catch((function(t){return console.error(t)}))},a.state={quote:"",author:"",loading:!0},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){var t=this.state,e=t.quote,n=t.author,a=t.loading;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h.a,{className:"particles",params:j}),a?Object(p.jsx)("div",{className:"loader"}):Object(p.jsxs)("div",{className:"quote-container",children:[Object(p.jsxs)("div",{className:"quote-text",children:[Object(p.jsx)(b.a,{style:{paddingRight:"10px",fontSize:"4rem"}}),Object(p.jsx)("span",{className:"quote",children:e})]}),Object(p.jsx)("div",{className:"quote-author",children:Object(p.jsx)("span",{children:n})}),Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsx)("button",{className:"twitter-button",title:"Tweet This!",onClick:this.tweetQuote,children:Object(p.jsx)(b.b,{className:"twitter-icon"})}),Object(p.jsx)("button",{className:"new-quote",onClick:this.getQuote,children:"New Quote"})]})]})]})}}]),n}(o.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,319)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),o(t),c(t),s(t)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()},83:function(t,e,n){},84:function(t,e,n){}},[[318,1,2]]]);
//# sourceMappingURL=main.87936135.chunk.js.map