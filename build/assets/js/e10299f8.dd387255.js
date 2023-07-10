"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={},a="GitHub",l={unversionedId:"Toolkit/github",id:"Toolkit/github",title:"GitHub",description:"The SuperAGI GitHub Tool enables users to perform various operations on GitHub repositories which include adding files or folders, deleting files, and searching for files or folders within a repository.",source:"@site/docs/Toolkit/github.md",sourceDirName:"Toolkit",slug:"/Toolkit/github",permalink:"/docs/Toolkit/github",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/github.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email",permalink:"/docs/Toolkit/email"},next:{title:"Google Calendar",permalink:"/docs/Toolkit/google_calender"}},s={},u=[{value:"Features",id:"features",level:2},{value:"<strong>Add GitHub Configuration Settings in SuperAGI Dashboard</strong>",id:"add-github-configuration-settings-in-superagi-dashboard",level:3},{value:"Running SuperAGI GitHub Tool",id:"running-superagi-github-tool",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"github"},"GitHub"),(0,n.kt)("p",null,"The SuperAGI GitHub Tool enables users to perform various operations on GitHub repositories which include adding files or folders, deleting files, and searching for files or folders within a repository."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Add Files or Folders:")," With SuperAGI's GitHub Tool, you can easily add files or folders to a GitHub repository"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Delete Files:")," Remove files from a GitHub repository effortlessly using SuperAGI's GitHub Tool. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Search for Files or Folders:")," Find specific files or folders within a GitHub repository using SuperAGI's GitHub Tool. ")),(0,n.kt)("h3",{id:"add-github-configuration-settings-in-superagi-dashboard"},(0,n.kt)("strong",{parentName:"h3"},"Add GitHub Configuration Settings in SuperAGI Dashboard")),(0,n.kt)("p",null,"Add the following configuration settings to the GitHub Toolkit Page:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"GitHub Access Token:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Obtain a GitHub access token with the necessary permissions for accessing and modifying repositories."),(0,n.kt)("li",{parentName:"ul"},"Go to Settings in your GitHub Account. Then go to Developer Settings."),(0,n.kt)("li",{parentName:"ul"},'Click on "Personal access tokens". Then click on "Tokens (classic)".\n',(0,n.kt)("img",{parentName:"li",src:"https://github.com/TransformerOptimus/SuperAGI/assets/43145646/ee646cdd-fa04-400b-ae84-e9aee7b46c36",alt:"personal-access-token"})),(0,n.kt)("li",{parentName:"ul"},'Click on "Generate new token". Then choose "Generate new token (classic)".\n',(0,n.kt)("img",{parentName:"li",src:"https://github.com/TransformerOptimus/SuperAGI/assets/43145646/64f1d681-236a-4008-a5d9-93bb368caaaf",alt:"generate-new-token"})),(0,n.kt)("li",{parentName:"ul"},"Write a Note about what the token is for and choose an appropriate expiration date.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/TransformerOptimus/SuperAGI/assets/43145646/757b02e8-0b49-47b8-bfef-5469c0d070eb",alt:"github-permissions"})),(0,n.kt)("li",{parentName:"ul"},"Select all the scopes (In this way, users won't have to create new Access Tokens every time we add new scopes to the code)."),(0,n.kt)("li",{parentName:"ul"},"Click on Generate New Token."),(0,n.kt)("li",{parentName:"ul"},"Copy the token and save it as a separate file. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Github User Name:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can find your GitHub username on your GitHub Profile."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Configuring in SuperAGI Dashboard:"),"\n-You can add your Generated Token and your Username to the GitHub Toolkit Page."))),(0,n.kt)("h2",{id:"running-superagi-github-tool"},"Running SuperAGI GitHub Tool"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add Files or Folders:")),(0,n.kt)("p",{parentName:"li"},"To add a file or folder to a GitHub repository, specify the repository and the owner's UserName and the path where the file/folder should be added to your goal. SuperAGI will upload it to the repository and automatically raise a PR for it. By default, it'll pick the main branch, if you want to add it to any other branch you have to mention it in the goal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Delete Files:")),(0,n.kt)("p",{parentName:"li"},"To delete a file from a GitHub repository, mention the repository, owner's UserName and provide the path to the file you want to delete in your goal. SuperAGI will handle the deletion process and raise a PR for it. By default, it'll pick the main branch, if you want to delete it to any other branch you have to mention it in the goal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Search for Files or Folders")),(0,n.kt)("p",{parentName:"li"},"To search for files or folders within a GitHub repository, specify the repository, and owner's UserName and provide the name or path of the file/folder you're looking for in your goal. SuperAGI will provide you with the search results. By default, it'll pick the main branch, if you want to search in any other branch you have to mention it in the goal."))))}d.isMDXComponent=!0}}]);