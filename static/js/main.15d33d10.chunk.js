(this.webpackJsonptannerportfolio=this.webpackJsonptannerportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){},function(e,t,A){"use strict";A.r(t);var i=A(0),d=A(1),a=A.n(d),c=A(9),n=A.n(c),s=(A(15),A(16),A(8),A(2)),r=A(3),o=A(5),b=A(4),g=(A(17),A(18),A(6));A(19);var l=function(){return Object(i.jsx)("div",{className:"background-container",children:Object(i.jsx)("h1",{className:"background-text",children:"Welcome to Tanner Cook's Portfolio"})})},h=(A(20),A.p+"static/media/github-profile-pic.601ed0ac.png"),I=A.p+"static/media/resume-pic.d0990443.png",j=function(e){Object(o.a)(A,e);var t=Object(b.a)(A);function A(e){var i;return Object(s.a)(this,A),(i=t.call(this,e)).state={image:i.props.project.image},i.moveImage=i.moveImage.bind(Object(g.a)(i)),i.stillImage=i.stillImage.bind(Object(g.a)(i)),i}return Object(r.a)(A,[{key:"moveImage",value:function(){this.setState({image:this.props.project.movingImage})}},{key:"stillImage",value:function(){this.setState({image:this.props.project.image})}},{key:"render",value:function(){return Object(i.jsxs)("div",{style:{height:"100%",width:"850px",margin:"5%",backgroundColor:"lightblue",borderStyle:"solid"},children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:this.state.image,onMouseEnter:this.moveImage,onMouseLeave:this.stillImage,style:{height:"115px",width:"200px",margin:"1%",float:"left"},alt:"project pic"})}),Object(i.jsx)("div",{style:{fontFamily:"Verdana, sans-serif",fontWeight:"bold",fontSize:"larger",textDecoration:"underline"},children:Object(i.jsx)("p",{children:this.props.project.title})}),Object(i.jsx)("div",{style:{fontFamily:"Brush Script MT"},children:Object(i.jsx)("p",{children:this.props.project.description})}),Object(i.jsx)("div",{style:{fontFamily:"Brush Script MT"},children:Object(i.jsxs)("p",{children:["Github Repo: ",Object(i.jsx)("a",{href:this.props.project.github,children:this.props.project.title})]})}),Object(i.jsx)("div",{style:{fontFamily:"Brush Script MT"},children:Object(i.jsxs)("p",{children:["URL: ",Object(i.jsx)("a",{href:this.props.project.url,children:this.props.project.title})]})})]})}}]),A}(d.Component),u=(A(21),A.p+"static/media/OutYonder.2b8afb6b.png"),m=A.p+"static/media/OutYonder.16779c37.gif",p=A.p+"static/media/Gallivant.821fd8ff.png",R=A.p+"static/media/Gallivant.e19d47ab.gif",D=A.p+"static/media/codequiz.eec7f726.png",B=A.p+"static/media/codequiz.3e244aa2.gif",w=A.p+"static/media/dayplanner.f12872b4.png",O=A.p+"static/media/dayplanner.583e976e.gif",Q=A.p+"static/media/EmployeeDir.005bd2a8.png",H=A.p+"static/media/EmployeeDir.cd57a2d5.gif",C=A.p+"static/media/thinkcakes.e0d53f42.png",f=A.p+"static/media/thinkcakes.bb841c08.gif",N=function(e){Object(o.a)(A,e);var t=Object(b.a)(A);function A(e){var i;return Object(s.a)(this,A),(i=t.call(this,e)).state={gohome:!1,projects:[{title:"Out Yonder",description:"React/Node/Express/Mongodb app made for locating parks across the US and any additional information about them",url:"https://out-yonder.herokuapp.com/",github:"https://github.com/wilsoncollin7/project-3",image:u,movingImage:m},{title:"Gallivant",description:"JS/JQuery/Node/HTML/CSS Web application that helps plan and display travel details, such as flight times, weatther info for the destination, and points of interest.",url:"https://wasteofadrumbum.github.io/Gallivant/",github:"https://github.com/WasteOfADrumBum/Gallivant",image:p,movingImage:R},{title:"Code Quiz",description:"The 'Code' Quiz is a fun web game that asks the user simple random coding questions and challenges them to get the highest score in the alloted time",url:"https://tanner336.github.io/CodeQuiz/",github:"https://github.com/Tanner336/CodeQuiz",image:D,movingImage:B},{title:"Personal Day Planner",description:"This is a reactive web application that utilizes local storage to schedule and plan events throught the day. It also notes the current date and time of day.",url:"https://tanner336.github.io/DayPlannerHW/",github:"https://github.com/Tanner336/DayPlannerHW",image:w,movingImage:O},{title:"Employee Directory",description:"React/JQuery/JS simple web application that allows the user to enter employee information and is then saved and displayed on a table.",url:"https://tanner336.github.io/React-Employee-Dir/",github:"https://github.com/Tanner336/React-Employee-Dir",image:Q,movingImage:H},{title:"ThinkCakes",description:"*This project is still in development*  This is a JS/JQuery/SQL/Node/handlebars app that makes a user account and saves users favorite cake recipes. It allows them to upload their own recipes, as well as rate and comment on other users recipes.",url:"",github:"https://github.com/arodrigu1/Project2",image:C,movingImage:f}]},i.renderProjects=i.renderProjects.bind(Object(g.a)(i)),i.handleHomeButton=i.handleHomeButton.bind(Object(g.a)(i)),i}return Object(r.a)(A,[{key:"renderProjects",value:function(){return this.state.projects.map((function(e,t){return Object(i.jsx)(j,{project:e},t)}))}},{key:"handleHomeButton",value:function(){this.setState({gohome:!0})}},{key:"render",value:function(){return!1===this.state.gohome?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"projects-pic-container",children:[Object(i.jsx)("img",{src:h,alt:"Profile Pic",className:"projectResPic"}),Object(i.jsxs)("div",{className:"display-text",children:["These are my current web applications. Some are finished and some are currently being worked on in my spare time.",Object(i.jsx)("button",{className:"homeButton",onClick:this.handleHomeButton,children:"Home"})]})]}),Object(i.jsxs)("div",{className:"project-container",children:[Object(i.jsx)("h1",{className:"projects-display-text",style:{fontStyle:"Italic"},children:"Current Projects Finished and in Development"}),Object(i.jsx)("section",{className:"projects",children:Object(i.jsx)("ol",{children:this.renderProjects()})})]})]}):Object(i.jsx)(M,{})}}]),A}(d.Component),L=A.p+"static/media/TannerResume2020(1).3df78a00.pdf",J=(A(22),A.p+"static/media/github.746ec8f0.png"),G=A.p+"static/media/gmail.c057771c.png";var x=function(){return Object(i.jsx)("div",{className:"footer-container",children:Object(i.jsxs)("div",{className:"footer-text",children:[Object(i.jsx)("a",{href:"https://github.com/Tanner336",children:Object(i.jsx)("img",{className:"githubpic",src:J,alt:"github-logo"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/tanner-cook-3b78421ab/",children:Object(i.jsx)("img",{className:"linkedInpic",src:"data:image/png;base64,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",alt:"linkedIn-logo"})}),Object(i.jsx)("a",{href:"mailto:tannercook336@gmailcom",target:"html link",children:Object(i.jsx)("img",{className:"gmailpic",src:G,alt:"Gmail-logo"})})]})})},M=function(e){Object(o.a)(A,e);var t=Object(b.a)(A);function A(e){var i;return Object(s.a)(this,A),(i=t.call(this,e)).state={viewProjects:!1},i.handleProjectsChange=i.handleProjectsChange.bind(Object(g.a)(i)),i}return Object(r.a)(A,[{key:"handleProjectsChange",value:function(e){this.setState({viewProjects:!0})}},{key:"render",value:function(){return!1===this.state.viewProjects?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"pic-container",children:[Object(i.jsx)("img",{src:h,alt:"Profile Pic",className:"profPic"}),Object(i.jsx)("div",{className:"display-text",children:"This website is meant to display my web applications that are finished or I am currently working on to potential employers."}),Object(i.jsx)("a",{href:L,target:"blank",children:Object(i.jsx)("img",{className:"resumepic",src:I,alt:"resume pic"})}),Object(i.jsx)("button",{className:"projectsButton",onClick:this.handleProjectsChange,children:"View Projects"})]}),Object(i.jsx)(l,{}),Object(i.jsx)(x,{})]}):Object(i.jsx)(N,{})}}]),A}(d.Component),Y=function(e){Object(o.a)(A,e);var t=Object(b.a)(A);function A(){return Object(s.a)(this,A),t.apply(this,arguments)}return Object(r.a)(A,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(M,{classname:"body"})})}}]),A}(d.Component),E=function(e){Object(o.a)(A,e);var t=Object(b.a)(A);function A(){return Object(s.a)(this,A),t.apply(this,arguments)}return Object(r.a)(A,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(Y,{className:"wholeContainer"})})}}]),A}(d.Component);var V=function(){return Object(i.jsx)(E,{})},v=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,24)).then((function(t){var A=t.getCLS,i=t.getFID,d=t.getFCP,a=t.getLCP,c=t.getTTFB;A(e),i(e),d(e),a(e),c(e)}))};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root")),v()}],[[23,1,2]]]);
//# sourceMappingURL=main.15d33d10.chunk.js.map