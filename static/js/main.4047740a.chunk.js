(this["webpackJsonpg-kienzle.github.io"]=this["webpackJsonpg-kienzle.github.io"]||[]).push([[0],{11:function(e,s,c){},20:function(e,s,c){},28:function(e,s,c){},29:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c.n(t),n=c(9),r=c.n(n),i=(c(20),c(6)),l=(c(11),c(5)),j=c(2),o=c.n(j),d=c(3),b=c(14),m=c(13),h=c(15),u=(c(22),c(1)),x=function(){var e=Object(b.a)(),s=e.register,t=e.handleSubmit,a=e.reset,n=e.formState.errors,r=function(){var e=Object(d.a)(o.a.mark((function e(s){var t,n,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(24).config(),t=s.name,n=s.email,r=s.subject,i=s.message,e.prev=2,l={name:t,email:n,subject:r,message:i},e.next=6,m.a.send("service_dwue0gi","template_9svhx1q",l,"user_UweO3gXLHqO4H2WPKAKch");case 6:a(),Object(h.a)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(s){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"ContactForm",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12 text-center",children:Object(u.jsx)("div",{className:"contactForm",children:Object(u.jsxs)("form",{id:"contact-form",onSubmit:t(r),noValidate:!0,children:[Object(u.jsxs)("div",{className:"row formRow",children:[Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",name:"name"},s("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}})),{},{className:"form-control formInput",placeholder:"Name"})),n.name&&Object(u.jsx)("p",{className:"errorMessage",children:n.name.message})]}),Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"email",name:"email"},s("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{className:"form-control formInput",placeholder:"Email address"})),n.email&&Object(u.jsx)("p",{className:"errorMessage",children:"Please enter a valid email address"})]})]}),Object(u.jsx)("div",{className:"row formRow",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",name:"subject"},s("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}})),{},{className:"form-control formInput",placeholder:"Subject"})),n.subject&&Object(u.jsx)("p",{className:"errorMessage",children:n.subject.message})]})}),Object(u.jsx)("div",{className:"row formRow",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("textarea",Object(l.a)(Object(l.a)({rows:3,name:"message"},s("message",{required:!0})),{},{className:"form-control formInput",placeholder:"Message"})),n.message&&Object(u.jsx)("p",{className:"errorMessage",children:"Please enter a message"})]})}),Object(u.jsx)("button",{className:"submit-btn",type:"submit",children:"Submit"})]})})})})})})};c(28);var O=function(){return Object(u.jsx)("div",{className:"wrap",children:Object(u.jsxs)("div",{className:"cube",children:[Object(u.jsx)("div",{className:"front"}),Object(u.jsx)("div",{className:"back"}),Object(u.jsx)("div",{className:"top"}),Object(u.jsx)("div",{className:"bottom"}),Object(u.jsx)("div",{className:"left"}),Object(u.jsx)("div",{className:"right"})]})})};var p=function(){var e=function(){var e=Object(t.useState)({x:null,y:null}),s=Object(i.a)(e,2),c=s[0],a=s[1];return Object(t.useEffect)((function(){function e(e){a({x:window.scrollX/(document.documentElement.scrollWidth-window.innerWidth),y:window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)})}return window.window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c}(),s=(e.x,e.y);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#projects",children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#contact",children:"Contact"})})]})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{className:"black",id:"home",children:Object(u.jsxs)("div",{style:{position:"fixed",zIndex:0},children:[Object(u.jsxs)("div",{className:"heading-wrapper",children:[Object(u.jsx)("h1",{className:"ticker",children:">"}),Object(u.jsx)("h1",{className:"heading",children:"Grey Kienzle"})]}),Object(u.jsx)("p",{children:"Front-end web developer, aspiring software engineer, mathematician at heart"})]})}),Object(u.jsx)("div",{className:"spacer black-white",style:{zIndex:5}}),Object(u.jsxs)("section",{className:"white",id:"about",children:[Object(u.jsxs)("div",{style:{zIndex:0,opacity:"".concat(Math.min(3*s,1))},children:[Object(u.jsx)("h1",{children:"About Me"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["CS/Math Major at the University of Maryland ","(Class of 2024)"]}),Object(u.jsx)("li",{children:"Aspiring Software Engineer"}),Object(u.jsx)("li",{children:"Experienced in Python, Java, and HTML/CSS"}),Object(u.jsx)("li",{children:"Learning front-end development with ReactJS"}),Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"https://www.gnu.org/philosophy/free-sw.html",children:"Free software"})," is my friend"]})]})]}),Object(u.jsx)("div",{className:"cubey",children:Object(u.jsx)(O,{})})]}),Object(u.jsx)("div",{className:"spacer white-black"}),Object(u.jsxs)("section",{className:"black",id:"projects",children:[Object(u.jsx)("h1",{children:"Title"}),Object(u.jsx)("p",{children:"Optio nam voluptate asperiores eaque quasi rerum alias earum accusantium cumque est temporibus sint id non deleniti laborum ea blanditiis, reprehenderit atque assumenda corrupti aspernatur eligendi! Eius qui obcaecati maiores?"})]}),Object(u.jsx)("div",{className:"spacer black-blue"}),Object(u.jsxs)("section",{className:"blue",id:"contact",children:[Object(u.jsx)("h1",{children:"Contact"}),Object(u.jsx)("div",{className:"form",children:Object(u.jsx)(x,{})})]})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;c(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.4047740a.chunk.js.map