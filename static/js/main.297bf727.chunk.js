(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(15)},15:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(4),s=a.n(r),l=a(1),c=a(5),u=a(6),i=a(9),h=a(7),b=a(2),g=a(8);var p=function(t){var e=t.goods;return n.a.createElement("ul",null,e.map(function(t){return n.a.createElement("li",{key:t},t)}))},d=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(h.a)(e).call(this,t))).state={goodsActual:Object(l.a)(a.props.goods),selectValue:"1",goodsForShow:Object(l.a)(a.props.goods),start:!1},a.reverseSort=a.reverseSort.bind(Object(b.a)(a)),a.alphaSort=a.alphaSort.bind(Object(b.a)(a)),a.reset=a.reset.bind(Object(b.a)(a)),a.lengthSort=a.lengthSort.bind(Object(b.a)(a)),a.selectSort=a.selectSort.bind(Object(b.a)(a)),a.start=a.start.bind(Object(b.a)(a)),a}return Object(g.a)(e,t),Object(u.a)(e,[{key:"reverseSort",value:function(){var t=this.state.goodsActual;t.reverse(),this.setState({goodsActual:Object(l.a)(t),goodsForShow:Object(l.a)(t)})}},{key:"alphaSort",value:function(){var t=this.state.goodsActual;t.sort(function(t,e){return t<e?-1:1}),this.setState({goodsActual:Object(l.a)(t),goodsForShow:Object(l.a)(t)})}},{key:"reset",value:function(){var t=Object(l.a)(this.props.goods);this.setState({goodsActual:Object(l.a)(t),goodsForShow:Object(l.a)(t),selectValue:"1"})}},{key:"lengthSort",value:function(){var t=this.state.goodsActual;t.sort(function(t,e){return t.length-e.length}),this.setState({goodsActual:Object(l.a)(t),goodsForShow:Object(l.a)(t)})}},{key:"selectSort",value:function(t){var e=t.target.value,a=this.state.goodsActual,o=e,n=a.filter(function(t){return t.length>=o});this.setState({goodsForShow:Object(l.a)(n),selectValue:o})}},{key:"start",value:function(){this.setState({start:!0})}},{key:"render",value:function(){var t=this.state,e=t.goodsForShow,a=t.selectValue;return t.start?n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{goods:e}),n.a.createElement("button",{type:"button",onClick:this.reverseSort},"Reverse"),n.a.createElement("button",{type:"button",onClick:this.alphaSort},"Sort alphabetically"),n.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),n.a.createElement("button",{type:"button",onClick:this.lengthSort},"Sort by length"),n.a.createElement("select",{onChange:this.selectSort,value:a},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"),n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"7"},"7"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"9"},"9"),n.a.createElement("option",{value:"10"},"10"))):n.a.createElement("button",{type:"button",onClick:this.start},"\u041f\u043e\u0435\u0445\u0430\u043b\u0438!!!!!")}}]),e}(o.Component),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],S=function(){return n.a.createElement(d,{goods:v})};s.a.render(n.a.createElement(S,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.297bf727.chunk.js.map