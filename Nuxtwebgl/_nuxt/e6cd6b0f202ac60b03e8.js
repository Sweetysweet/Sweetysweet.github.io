(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{181:function(t,e,n){"use strict";var r=/([\w-]+)|['"]{1}([^'"]*)['"]{1}/g,c=Object.create?Object.create(null):{};c.area=!0,c.base=!0,c.br=!0,c.col=!0,c.embed=!0,c.hr=!0,c.img=!0,c.input=!0,c.keygen=!0,c.link=!0,c.menuitem=!0,c.meta=!0,c.param=!0,c.source=!0,c.track=!0,c.wbr=!0;var o=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,l=Object.create?Object.create(null):{};function h(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(t){var e=[];for(var n in t)e.push(n+'="'+t[n]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(h,"")+"</"+e.name+">"}}var f=function(html,t){t||(t={}),t.components||(t.components=l);var e,n=[],h=-1,f=[],m={},d=!1;return html.replace(o,(function(o,l){if(d){if(o!=="</"+e.name+">")return;d=!1}var v,y="/"!==o.charAt(1),w=l+o.length,E=html.charAt(w);y&&(h++,"tag"===(e=function(t){var e,i=0,n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return t.replace(r,(function(r){i%2?e=r:0===i?((c[r]||"/"===t.charAt(t.length-2))&&(n.voidElement=!0),n.name=r):n.attrs[e]=r.replace(/['"]/g,""),i++})),n}(o)).type&&t.components[e.name]&&(e.type="component",d=!0),e.voidElement||d||!E||"<"===E||e.children.push({type:"text",content:html.slice(w,html.indexOf("<",w))}),m[e.tagName]=e,0===h&&n.push(e),(v=f[h-1])&&v.children.push(e),f[h]=e),y&&!e.voidElement||(h--,!d&&"<"!==E&&E&&f[h].children.push({type:"text",content:html.slice(w,html.indexOf("<",w))}))})),n},m=function(t){return t.reduce((function(t,e){return t+h("",e)}),"")};Array.prototype.clean=function(t){for(var i=0;i<this.length;i++)this[i]==t&&(this.splice(i,1),i--);return this},t.exports=function(html,template,t){var e=f(html);return e.forEach((function(e){!function t(e,template,n){"text"==e.type&&(e.content=e.content.split(/(?!$)/).map((function(t){return template.replace(/\$/g,t)})).join(""),n&&(e.content=e.content.split(template.replace(/\$/g," ")).clean("").map((function(t){return n.replace(/\$/g,t)})).join(""))),e.children&&e.children.forEach((function(e){t(e,template,n)}))}(e,template,t)})),m(e)}},186:function(t,e,n){"use strict";n.r(e);var r=n(176),c=n(181),o=n.n(c),l={mixins:[{mounted:function(){var t=this.$el.querySelectorAll(".js-split");[].forEach.call(t,(function(t){t.outerHTML=o()(t.outerHTML,'<span class="letter">$</span>')}))},transition:{name:"test",mode:"out-in",css:!1,enter:function(t,e){var n=new r.a({onComplete:e}),c=t.querySelectorAll(".letter");n.set(c,{y:-20,opacity:0}),n.staggerTo(c,.5,{y:0,opacity:1},.05)},leave:function(t,e){new r.a({onComplete:e}).fromTo(t,.3,{y:0,opacity:1},{y:100,opacity:0})}}}]},h=n(16),component=Object(h.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("h1",{staticClass:"js-split"},[this._v("About")])])}],!1,null,null,null);e.default=component.exports}}]);