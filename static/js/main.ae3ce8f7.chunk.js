(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=t.n(c),s=(t(16),t(1)),i=t(2),o=t(4),m=t(3),d=t(5),E=t(6),u=t.n(E),h=(t(17),t(18),!0),p=function(){u()("#header").css({"box-shadow":"rgba(0, 0, 0, 0.15) 0px 0px 40px","-moz-box-shadow":"rgba(0, 0, 0, 0.15) 0px 0px 40px","-webkit-box-shadow":"rgba(0, 0, 0, 0.15) 0px 0px 40px"})},f=function(){u()("#header").css({"box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"})},b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){"undefined"!==typeof u()(window)&&u()(window).scroll(function(){0===u()(this).scrollTop()?f():p()})}},{key:"isMobile",value:function(){return document.getElementById("header").offsetWidth<=480}},{key:"scrollTo",value:function(e,a){var t=80;this.isMobile()&&(this.hamburgerToggle(),t=85),u()(e).length>0&&u()("html, body").animate({scrollTop:u()(e).offset().top-t-a},600)}},{key:"hamburgerToggle",value:function(){document.querySelector(".hamburger-container").classList.toggle("no-height"),document.querySelector(".hamburger-image").classList.toggle("hamburger-logo-close"),h?(p(),h=!1):(f(),h=!0)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar",id:"header"},l.a.createElement("div",{className:"header-logo",alt:"header-logo"}),l.a.createElement("div",{className:"float-right header-nav"},l.a.createElement("a",{onClick:this.scrollTo.bind(this,".page-1",0),className:"font-medium"},"Top"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".page-2",0),className:"font-medium"},"Work Experience"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".carousel-parent",0),className:"font-medium"},"TEST TEST TEST"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".faqs-container",0),className:"font-medium"},"TEST TEST TEST"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".footer",0),className:"font-medium"},"Contact")),l.a.createElement("div",{className:"hamburger",onClick:this.hamburgerToggle.bind(this)},l.a.createElement("div",{className:"hamburger-image hamburger-logo",alt:""}))),l.a.createElement("div",{className:"hamburger-container no-height"},l.a.createElement("a",{onClick:this.scrollTo.bind(this,".page-1",0),className:"font-medium"},"Top"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".page-2",0),className:"font-medium"},"Work Experience"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".carousel-parent",0),className:"font-medium"},"TEST TEST TEST"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".faqs-container",0),className:"font-medium"},"TEST TEST TEST"),l.a.createElement("a",{onClick:this.scrollTo.bind(this,".footer",0),className:"font-medium"},"Contact")))}}]),a}(n.Component),g=(t(19),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=function(e){window.location="#"};return l.a.createElement("div",{className:"download-cta"},l.a.createElement("div",{className:"apple",onClick:e.bind(this,"apple")}),l.a.createElement("div",{className:"google",onClick:e.bind(this,"google")}))}}]),a}(n.Component)),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"page-1"},l.a.createElement("h1",{className:"font-medium page-1-header"},"JIGAR REVAR"),l.a.createElement("p",{className:"page-1-sub-header"},"FRONT END DEVELOPER"),l.a.createElement("div",{className:"page-1-image-container"},l.a.createElement("div",{className:"deco-left"}),l.a.createElement("div",{className:"page-1-image"}),l.a.createElement("div",{className:"deco-right"})),l.a.createElement("p",{id:"p_wrap"}),l.a.createElement("p",{className:"end-header font-light"},"Web Technologies"),l.a.createElement("p",{id:"p_wrap"}),l.a.createElement("p",{className:"end-sub-header"},"HTML5, CSS3, Adobe Experience Manager 6.0, AJAX, Object oriented JavaScript,",l.a.createElement("br",{className:"br-xs"}),"TypeScript, RxJS, jQuery, JSON, XML, Bootstrap, AngularJs 1.6 - 4.0, NodeJs,",l.a.createElement("br",{className:"br-xs"}),"HandlebarJs, LESS/SASS, GIT/SVN, ES6, Jade(Pug), JEST."))}}]),a}(n.Component),T=(t(20),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"page-2"},l.a.createElement("div",null,l.a.createElement("h1",{className:"font-medium page-2-header"},"WORK EXPERIENCE"),l.a.createElement("ul",{className:"key-feature-list"},l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"vml2 poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"VMLY&R - India"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Sr. Frontend Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"Samples ",l.a.createElement("a",{href:"https://www.vmlyr.com",target:"_blank"},"VMLY&R.COM")," and ",l.a.createElement("a",{href:"https://www.ford.com",target:"_blank"},"FORD.COM")),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))),l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"vml1 poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"VMLY&R Kansas City, USA"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Sr. Frontend Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"Samples ",l.a.createElement("a",{href:"https://www.vmlyr.com",target:"_blank"},"VMLY&R.COM")," and ",l.a.createElement("a",{href:"https://www.sprint.com",target:"_blank"},"SPRINT.COM")),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))),l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"agena poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"Agena Biosciences San Diego, USA"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Frontend Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"No Samples, a private project"),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))),l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"epic poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"Epic! Redwood City, USA"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Software Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"Samples ",l.a.createElement("a",{href:"https://www.getepic.com",target:"_blank"},"GETEPIC.COM")),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))),l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"cs poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"CrowdStar - Burlingame, USA"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Software Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"Samples ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/CrowdStar",target:"_blank"},"CROWDSTAR.COM")),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))),l.a.createElement("li",{className:"key-feature-block"},l.a.createElement("div",{className:"hands poo",alt:"merchants"}),l.a.createElement("div",null,l.a.createElement("h2",{className:"font-bold page-2-sub-header"},"30hands Learning - Boston, USA"),l.a.createElement("ul",null,l.a.createElement("li",{className:"page-2-sub-text"},"Role \u2013 Web Developer"),l.a.createElement("li",{className:"page-2-sub-text"},"Samples ",l.a.createElement("a",{href:"http://www.30hands.net/",target:"_blank"},"30HANDS.NET"),",",l.a.createElement("a",{href:"http://www.30hands.com/",target:"_blank"},"30HANDS.COM"),","),l.a.createElement("li",{className:"page-2-sub-text"},"Details of this work can be found on my resume at ",l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LinkedIn"))))))))}}]),a}(n.Component)),v=(t(21),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"phone-left"}),l.a.createElement("h1",{className:"font-medium footer-header"},"Get in touch with me now!"),l.a.createElement("p",{className:"footer-sub-header"},"Jigar Revar"),l.a.createElement("div",{className:"download-cta-footer"},l.a.createElement(g,null)),l.a.createElement("div",{className:"footer-contact"},l.a.createElement("p",null,"MUMBAI, India"),l.a.createElement("p",{className:"footer-contact2"},"Phone: +91 0000000000")," ",l.a.createElement("a",{className:"footer-contact2",href:"mailto:revarjigar@gmail.com"},"Click here to MAIL me"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/jigar-revar-993a28126/",target:"_blank"},"LINKEDIN")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/revarjigar/",target:"_blank"},"GITHUB")))),l.a.createElement("div",{className:"phone-right"})))}}]),a}(n.Component)),k=t(7),w=(t(22),function(e){var a=e.style,t=e.onClick;return l.a.createElement("div",{className:"arrow-left-container"},l.a.createElement("div",{className:"arrow-left",style:Object(k.a)({},a,{display:"block",width:20,height:20}),onClick:t}))}),S=function(e){var a=e.style,t=e.onClick;return l.a.createElement("div",{className:"arrow-right-container"},l.a.createElement("div",{className:"arrow-right",style:Object(k.a)({},a,{display:"block",width:20,height:20}),onClick:t}))},y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){l.a.createElement(S,null),l.a.createElement(w,null);return l.a.createElement("div",{className:"carousel-parent"},l.a.createElement("h1",{className:"font-medium carousel-header"},"Our TEST TEST TEST"))}}]),a}(n.Component),j=(t(23),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=function(e,a){this.el=e||{},this.multiple=a||!1,this.el.find(".article-title").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){e.data.el;u()(this).next().slideToggle(),u()(this).find("#faq-question-image").toggleClass("faq-answer-image"),u()(this).parent().find(".article-title").toggleClass("faq-question-open-tray"),u()(this).parent().toggleClass("open")};new e(u()(".accordion-container"),!1)}},{key:"render",value:function(){return l.a.createElement("div",{className:"faqs-container"},l.a.createElement("div",{className:"faqs"},l.a.createElement("h1",{className:"font-medium faqs-header"},"Frequently Asked Questions"),l.a.createElement("div",{className:"faq-box"},l.a.createElement("div",{className:"faq-question-holder"},l.a.createElement("div",{className:"faq-question-sub-holder float-left"},l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",{className:"special-article"},"TEST TEST TEST?"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))),l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",null,"TEST TEST TEST?"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))),l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",null,"TEST TEST TEST"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))))),l.a.createElement("div",{className:"faq-question-holder"},l.a.createElement("div",{className:"faq-question-sub-holder"},l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",null,"TEST TEST TEST"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))),l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",null,"TEST TEST TEST"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))),l.a.createElement("div",{id:"accordion",className:"accordion-container"},l.a.createElement("div",{className:"content-entry"},l.a.createElement("div",{className:"article-title"},l.a.createElement("p",null,"TEST TEST TEST"),l.a.createElement("div",{id:"faq-question-image",className:"faq-question-image"})),l.a.createElement("div",{className:"accordion-content"},l.a.createElement("p",{className:"margin-none"},"TEST TEST TEST")))))))))}}]),a}(n.Component)),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),l.a.createElement(b,null),l.a.createElement(N,null),l.a.createElement(T,null),l.a.createElement(y,null),l.a.createElement(j,null),l.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.ae3ce8f7.chunk.js.map