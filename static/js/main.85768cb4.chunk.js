(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(3),s=n.n(o),r=n(4),c=n(5),i=n(7),a=n(6),u=n(1),l=n.n(u),b=(n(12),n(0)),h=function(t){var e=t.goods;return Object(b.jsx)("ul",{className:"goods__list",children:e.map((function(t){return Object(b.jsx)("li",{className:"goods__item",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={visibleGoods:d,isStart:!1,sortBy:""},t.startButton=function(){t.setState((function(t){return{isStart:!t.isStart}}))},t.reverseButton=function(){t.setState((function(t){return{visibleGoods:t.visibleGoods.reverse()}}))},t.resetButton=function(){t.setState({visibleGoods:d})},t}return Object(c.a)(n,[{key:"sortButton",value:function(t){this.setState((function(){return{sortBy:t}}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.visibleGoods,o=e.isStart,s=e.sortBy;return""!==s&&n.sort((function(t,e){switch(s){case"alphab":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),o?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",onClick:this.reverseButton,children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.sortButton("alphab")},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.sortButton("length")},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:this.startButton,children:"resetButton"}),Object(b.jsx)(h,{goods:n})]}):Object(b.jsx)("button",{type:"button",onClick:this.startButton,children:"Start"})]})}}]),n}(l.a.Component),p=j;s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85768cb4.chunk.js.map