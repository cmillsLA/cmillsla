webpackJsonp([0],{178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),l=r(a);n(400);var o=l["default"].createClass({displayName:"ContactForm",getInitialState:function(){return{showForm:!0}},handleSubmit:function(e){e.preventDefault(),this.submitForm()},submitForm:function(){console.log("submit form called!");var e={name:l["default"].findDOMNode(this.refs["cm-name"]).value,email:l["default"].findDOMNode(this.refs["cm-email"]).value,phone:l["default"].findDOMNode(this.refs["cm-phone"]).value,website:l["default"].findDOMNode(this.refs["cm-website"]).value,phone:l["default"].findDOMNode(this.refs["cm-phone"]).value,project:l["default"].findDOMNode(this.refs["cm-project"]).value};this.setState({showForm:!1}),this.state.showForm=!1,console.log("form data",e,"/form data")},render:function(){return l["default"].createElement("div",null,l["default"].createElement("form",{onSubmit:this.handleSubmit,className:this.state.showForm?"":"cm-hide"},l["default"].createElement("label",{"for":"cm-form-name",className:"cm-sr"},"Name:"),l["default"].createElement("input",{ref:"cm-name",className:"cm-input cm-left",type:"text",id:"cm-form-name",placeholder:"Name"}),l["default"].createElement("label",{"for":"cm-form-name",className:"cm-sr"},"Email (required):"),l["default"].createElement("input",{ref:"cm-email",className:"cm-input cm-right",type:"text",id:"cm-form-email",placeholder:"Email (Required)"}),l["default"].createElement("label",{"for":"cm-form-name",className:"cm-sr"},"Phone:"),l["default"].createElement("input",{ref:"cm-phone",className:"cm-input cm-left",type:"text",id:"cm-form-phone",placeholder:"Phone Number"}),l["default"].createElement("label",{"for":"cm-form-name",className:"cm-sr"},"Website Url:"),l["default"].createElement("input",{ref:"cm-website",className:"cm-input cm-right",type:"text",id:"cm-form-url",placeholder:"Website URL"}),l["default"].createElement("label",{"for":"cm-form-name",className:"cm-sr"},"Project Details:"),l["default"].createElement("textarea",{ref:"cm-project",className:"cm-textarea",type:"text",id:"cm-form-project",placeholder:"Project Details"}),l["default"].createElement("input",{type:"submit",className:"cm-btn",value:"Send"})),l["default"].createElement("p",{className:this.state.showForm?"cm-hide":""},"Thanks!"))}});t["default"]=o,e.exports=t["default"]},182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),l=r(a);n(405);var o=n(57),i=(r(o),l["default"].createClass({displayName:"Overlay",getInitialState:function(){return{showoverlay:!1}},handleClick:function(e,t){},render:function(){var e=this.props.data;return console.log("overlay project",e,"/overlay project"),l["default"].createElement("div",{className:"cm-overlay"},l["default"].createElement("div",{className:"cm-overlay-content"},l["default"].createElement("div",{className:"cm-overlay-img-mask"},l["default"].createElement("img",{src:e.image})),l["default"].createElement("h2",null,e.name),l["default"].createElement("p",null,e.description),l["default"].createElement("div",{className:"cm-center"},e.url?l["default"].createElement("a",{href:e.url,className:"cm-btn cm-m14 cm-btn-wide",target:" _blank"},"View Site"):null)))}}));t["default"]=i,e.exports=t["default"]},183:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),l=r(a);n(406);var o=n(57),i=(r(o),n(182)),c=r(i),u=l["default"].createClass({displayName:"Project",getInitialState:function(){return{showoverlay:!1,loading:!1,project:{}}},handleClick:function(e){this.setState({showoverlay:e,loading:!0})},render:function(){var e=this,t=[],n=this.props.data.map(function(n,r){return t.push(n),l["default"].createElement("div",{key:r},l["default"].createElement("div",{className:"project"},l["default"].createElement("h2",{className:"project-fade project-slide-in"},n.name),l["default"].createElement("p",{className:"project-fade project-slide-in"},n.summary),l["default"].createElement("img",{src:n.thumb}),l["default"].createElement("button",{className:"project-fade cm-btn",onClick:e.handleClick.bind(null,n.name)},"View"),l["default"].createElement("div",{className:"project-shade project-fade"}),e.state.showoverlay===n.name?l["default"].createElement(c["default"],{data:n}):null,e.state.showoverlay===n.name&&e.state.loading?l["default"].createElement("p",null,"Loading"):null))});return l["default"].createElement("div",{className:"projectList"},n)}}),s=l["default"].createClass({displayName:"Projects",getInitialState:function(){return{data:[]}},componentDidMount:function(){var e=this,t=window.location.host.indexOf("localhost")>-1?"http://localhost:3000":"https://cmillsla-cmills83.rhcloud.com",n=new XMLHttpRequest;n.open("GET",encodeURI(t+"/api/posts")),n.onload=function(t){if(200===n.status&&n.responseText){var r=JSON.parse(n.responseText);if(r.success===!0){for(var a=[],l=0;l<r.result.length;l+=1){var o={name:r.result[l].title.replace(/(<([^>]+)>)/gi,""),description:r.result[l].content.extended.replace(/(<([^>]+)>)/gi,""),summary:r.result[l].content.brief.replace(/(<([^>]+)>)/gi,""),thumb:r.result[l].thumb.url,image:r.result[l].image.url,url:r.result[l].url?r.result[l].url:null};a.push(o)}e.setState({data:a})}}},n.send()},render:function(){return l["default"].createElement("div",null,l["default"].createElement(u,{data:this.state.data}))}});t["default"]=s,e.exports=t["default"]},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var a=e,l=t,o=n;r=!1,null===a&&(a=Function.prototype);var i=Object.getOwnPropertyDescriptor(a,l);if(void 0!==i){if("value"in i)return i.value;var c=i.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=l,n=o,r=!0,i=u=void 0}},c=n(13),u=r(c),s=n(178),d=r(s),p=n(50),f=function(e){function t(){a(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(p,{transitionName:"cm",transitionAppear:!0},u["default"].createElement("h1",null,"Contact"),u["default"].createElement("p",null,"I specialize in web and mobile web development, Javascript MVC based web applications as well as UI and web design."),u["default"].createElement("p",null,"UI/Web Development, HTML5, CSS3, LESS, Jade, Hbs, responsive, Javascript, jQuery, jQuery Mobile, jQuery UI, Angular.js, Backbone.js, React.js, MongoDB, Node.js, Twitter Bootstrap, JSON, AJAX, Highcharts, svn, git"),u["default"].createElement(d["default"],null)))}}]),t}(c.Component);t["default"]=f,e.exports=t["default"]},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var a=e,l=t,o=n;r=!1,null===a&&(a=Function.prototype);var i=Object.getOwnPropertyDescriptor(a,l);if(void 0!==i){if("value"in i)return i.value;var c=i.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=l,n=o,r=!0,i=u=void 0}},c=n(13),u=r(c),s=n(50),d=function(e){function t(){a(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(s,{transitionName:"cm",transitionAppear:!0},u["default"].createElement("div",{className:"cm-welcome"},u["default"].createElement("h1",null,"Welcome to the portfolio site of Chris Mills a creative web site and application UI developer in Los Angeles."))))}}]),t}(c.Component);t["default"]=d,e.exports=t["default"]},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var a=e,l=t,o=n;r=!1,null===a&&(a=Function.prototype);var i=Object.getOwnPropertyDescriptor(a,l);if(void 0!==i){if("value"in i)return i.value;var c=i.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=l,n=o,r=!0,i=u=void 0}},c=n(13),u=r(c),s=n(50),d=function(e){function t(){a(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(s,{transitionName:"cm",transitionAppear:!0},u["default"].createElement("h1",null,"Resumé"),u["default"].createElement("p",{className:"cm-center"},"Chris Mills",u["default"].createElement("br",null),u["default"].createElement("a",{href:"https://github.com/cmillsLA",target:" _blank"},"https://github.com/cmillsLA")," | ",u["default"].createElement("a",{href:"https://github.com/chrismillsnbcu"},"https://github.com/chrismillsnbcu"),u["default"].createElement("br",null),u["default"].createElement("em",null,"HTML5, XHTML, CSS3, Javascript, jQuery, Backbone.js, Angular.js, Twitter Bootstrap, json, restful apis/ajax, localstorage, svn, git, node.js, keystone.js, LESS, mocha, jasmine, jade, coffeescript, handlebars")),u["default"].createElement("hr",null),u["default"].createElement("h2",null,"Work History"),u["default"].createElement("p",null,u["default"].createElement("strong",null,"NBC Universal"),u["default"].createElement("br",null),"Sr. Front End Developer ( February 2014 - present )",u["default"].createElement("br",null),"Clientside UI Integration, html5 localstorage shopping cart development and integration and front end development for ",u["default"].createElement("a",{href:"https://www.nbcumv.com/",target:" _blank"},"https://www.nbcumv.com/"),u["default"].createElement("br",null),"Maintain and extend javascript ad API used by most news and brand sites."),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Service"),u["default"].createElement("br",null),"Sr. Front End Engineer ( August 2015 – October 2015 ) – Part time contract",u["default"].createElement("br",null),"Built a custom mobile-friendly website for ",u["default"].createElement("a",{href:"http://service.com",target:" _blank"},"http://service.com"),", powered by restful Java APIs. This site was built using Angular.js, LESS, Bootstrap and Coffeescript."),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Dex Media"),u["default"].createElement("br",null),"UI Engineer (January 2012 - February 2014)",u["default"].createElement("br",null),"Developed user interfaces for restful applications using HTML5, CSS3, Backbone.js, jQuery, jQuery Mobile and native javascript in a Java environment.",u["default"].createElement("br",null),"Developed an internal iPad app using Backbone.js and jQuery Mobile",u["default"].createElement("br",null),"Maintained custom Account Management System",u["default"].createElement("br",null),"Developed an application to showcase the new Dex API using jQuery and Highcharts.js"),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Apollo Interactive"),u["default"].createElement("br",null),"Front End Developer (August 2008 – January 2012)",u["default"].createElement("br",null),"Develop and maintain client sites with HTML5, CSS3, XHTML/CSS, Javascript, JQuery, AJAX Web and Graphic Design – Design landing pages, newsletters, and site additions. Worked in both PHP and .net environments",u["default"].createElement("br",null),"Projects Inlcude Jackinthebox.com – Corporate Profile section additions, Chuck E. Cheese’s site maintenance, Curves.com, MyCurves.com, Curves International sites and Curves internet marketing sites."),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Wireframe.com"),u["default"].createElement("br",null),"Front End Developer(August 2007 – August 2008)",u["default"].createElement("br",null),"Develop client sites with XHTML/CSS, Javascript, Flash AS2 Projects Inlcude MyNetworkTV.com, InsideEdition.com, NBC Portal, banner ads."),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Einstein Medical"),u["default"].createElement("br",null),"Web Production Artist (November 2006 – August 2007)",u["default"].createElement("br",null),"Maintained and developed client sites with XHTML/CSS Web graphic updates."),u["default"].createElement("p",null,u["default"].createElement("strong",null,"Search Fit"),u["default"].createElement("br",null),"Jr. Front End Developer (April 2006 – November 2006)",u["default"].createElement("br",null),"Maintained and developed directory sites for SEO and link building"),u["default"].createElement("p",null,u["default"].createElement("strong",null,"SmartDraw.com"),u["default"].createElement("br",null),"Web Development Intern (November 2005 – April 2006)",u["default"].createElement("br",null),"Web Development Intern",u["default"].createElement("br",null),"Updated company website and graphics.")))}}]),t}(c.Component);t["default"]=d,e.exports=t["default"]},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e,t,n){for(var r=!0;r;){var a=e,l=t,o=n;r=!1,null===a&&(a=Function.prototype);var i=Object.getOwnPropertyDescriptor(a,l);if(void 0!==i){if("value"in i)return i.value;var c=i.get;if(void 0===c)return;return c.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=l,n=o,r=!0,i=u=void 0}},c=n(13),u=r(c),s=n(183),d=r(s),p=n(50),f=function(e){function t(){a(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(p,{transitionName:"cm",transitionAppear:!0},u["default"].createElement("h1",null,"Work")),u["default"].createElement(p,{transitionName:"cm",transitionAppear:!0},u["default"].createElement(d["default"],null)))}}]),t}(c.Component);t["default"]=f,e.exports=t["default"]},307:function(e,t,n){t=e.exports=n(35)(),t.push([e.id,"@font-face{font-family:prox;src:url('/ProximaNova-Semibold.otf')}.cm-input,.cm-textarea{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;margin:0 0 18px}.cm-input{width:47%}.cm-input-error{border:1px solid red}.cm-textarea{height:300px;width:946px}.cm-left{float:left}.cm-right{float:right}",""])},312:function(e,t,n){t=e.exports=n(35)(),t.push([e.id,"@font-face{font-family:prox;src:url('/ProximaNova-Semibold.otf')}.cm-overlay{position:fixed;width:100vw;height:100vh;background:#000;background:rgba(0,0,0,.7);top:0;left:0;z-index:99}.cm-overlay-content{margin:0 auto;width:970px;position:relative;background:#000;min-height:100vh;height:100%;padding:20px 10px}.cm-overlay h2{background:none;padding-top:50px;padding-bottom:20px}.cm-overlay h2,.cm-overlay p{position:relative;top:0}.cm-overlay-img-mask{max-height:60vh;overflow:hidden;margin:20px 0 0}",""])},313:function(e,t,n){t=e.exports=n(35)(),t.push([e.id,"@font-face{font-family:prox;src:url('/ProximaNova-Semibold.otf')}.project{background:#000;width:24%;margin:.5%;float:left;box-shadow:0 0 5px #444}.project-fade{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;opacity:0}.project-shade{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:block;opacity:0}.project-shade div{display:none}.project{position:relative;overflow:hidden}.project h2{font-size:18px;top:0;width:100%;padding:20px 10px;background:#000}.project h2,.project p{position:absolute;margin:0;z-index:2}.project p{display:block;padding:0 15px;top:90px;font-size:14px;line-height:18px;font-weight:400;-webkit-transition-delay:.25s;transition-delay:.25s;width:90%}.project img{position:relative;z-index:0;display:block;width:100%;height:auto}.project button{position:absolute;bottom:-50px;left:50%;width:80px;margin-left:-40px;opacity:0;z-index:2}.project:hover .project-fade{opacity:1}.project .project-slide-in{left:-100%}.project:hover .project-slide-in{left:0}.project:hover button{bottom:20px}@media only screen and (min-width:1500px){.project h2{font-size:24px}.project p{font-size:18px;line-height:26px}}@media (max-width:1024px){.project{width:32%}.project p{display:none}.project h2{left:0!important;opacity:1!important}.project-shade{opacity:.9;width:100%;height:100%;padding-bottom:25%;padding-left:25%;overflow:hidden;display:block}.project-shade div{width:50%;height:50%;opacity:.75;display:block;width:0;height:0;margin-top:-500px;margin-left:-500px;border-top:500px solid transparent;border-bottom:500px solid transparent;border-left:500px solid #0096ff}.project:hover .project button,.project button{bottom:20%!important;width:50%!important;margin-left:-25%!important;opacity:1}}@media only screen and (max-width:768px){.Layout{text-align:center}.logo{position:relative;display:inline-block;left:-5px}.project{width:100%;margin:0 0 30px}.project h2{background:none;font-size:30px;padding:25% 0 0}.project:hover .project button,.project button{bottom:20%!important;width:50%!important;margin-left:-25%!important}}",""])},400:function(e,t,n){var r=n(307);"string"==typeof r&&(r=[[e.id,r,""]]);n(38)(r,{});r.locals&&(e.exports=r.locals)},405:function(e,t,n){var r=n(312);"string"==typeof r&&(r=[[e.id,r,""]]);n(38)(r,{});r.locals&&(e.exports=r.locals)},406:function(e,t,n){var r=n(313);"string"==typeof r&&(r=[[e.id,r,""]]);n(38)(r,{});r.locals&&(e.exports=r.locals)}});