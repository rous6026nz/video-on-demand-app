(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports={CarouselContainer:"Carousel__CarouselContainer__1phD5",CarouselHeading:"Carousel__CarouselHeading__1IXhB",Carousel:"Carousel__Carousel__36y4D",CarouselInnerWrapper:"Carousel__CarouselInnerWrapper__S1X6L"}},function(e,t,n){e.exports={CarouselControls:"CarouselControls__CarouselControls__3xLuA",arrowContainer:"CarouselControls__arrowContainer__2_1Hf",back:"CarouselControls__back__1nW9J",forward:"CarouselControls__forward__9_NgS"}},function(e,t,n){e.exports={MovieCard:"MovieCard__MovieCard__13feq",MoviePlayBtn:"MovieCard__MoviePlayBtn__3tgtT",MovieCardImg:"MovieCard__MovieCardImg__-blFm",MovieCardInfo:"MovieCard__MovieCardInfo__2apLJ"}},function(e,t,n){e.exports={VideoModal:"VideoModal__VideoModal__1qZGo",closeModal:"VideoModal__closeModal__yM72H"}},function(e,t,n){e.exports={App:"App__App__1Ez4i",AppHeader:"App__AppHeader__CKzq3",hideOverflowX:"App__hideOverflowX__1Z2eH"}},function(e,t,n){e.exports={VideoInfo:"VideoInfo__VideoInfo__3VpEt",creditsList:"VideoInfo__creditsList__2Lq6E"}},,,,function(e,t,n){e.exports={Video:"Video__Video__1d9uT"}},function(e,t,n){e.exports=n.p+"static/media/sharp-close-24px.3ee24cc1.svg"},function(e,t,n){e.exports=n.p+"static/media/sharp-arrow_back_ios-24px.81e341ef.svg"},function(e,t,n){e.exports=n.p+"static/media/sharp-arrow_forward_ios-24px.6dcc466d.svg"},function(e,t,n){e.exports=n.p+"static/media/sharp-play_arrow-24px.6fb1ff1c.svg"},,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(24),n(17)),l=n(1),s=n(7),d=n.n(s),u=n(3),f=n.n(u),p=n(6),m=n.n(p),v=Object(a.createContext)({displayModal:!1,movieId:"",toggleModal:function(){}}),h=Object(a.createContext)({id:"",title:"",description:"",publishedDate:"",cover:"",video:"",height:"",width:"",duration:"",language:"",parentalRating:"",categories:[],credits:[]}),_=n(12),g=n.n(_),w=function(e){return r.a.createElement("div",{className:g.a.Video},r.a.createElement("video",{autoPlay:!0,controls:!0},r.a.createElement("source",{src:e.video,type:"video/mp4"}),r.a.createElement("p",null,"Sorry, your browser doesn't support embedded videos.")))},C=n(8),E=n.n(C),b=function(e){return r.a.createElement("div",{className:E.a.VideoInfo},r.a.createElement("h2",null,e.title),r.a.createElement("hr",null),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Rating: ",e.parentalRating),r.a.createElement("p",null,"Duration: ",function(e){var t=new Date;return t.setSeconds(e),t.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")}(e.duration)),r.a.createElement("h3",null,"Credits"),r.a.createElement("hr",null),r.a.createElement("ul",{className:E.a.creditsList},e.credits))},x=n(13),M=n.n(x),y=function(e){var t=Object(a.useContext)(v),n=t.toggleModal,o=t.movieId,i=Object(a.useContext)(h),c=i.findIndex(function(e){return e.id===o}),l=i[c],s=l.credits.map(function(e,t){return e.name!==e.role?r.a.createElement("li",{key:t},e.name,r.a.createElement("br",null),"Role: ",e.role):r.a.createElement("li",{key:t},e.name)});return r.a.createElement("div",{className:m.a.VideoModal},r.a.createElement("div",{className:m.a.VideoModalControls},r.a.createElement("img",{src:M.a,alt:"Close video",className:m.a.closeModal,onClick:n})),r.a.createElement(w,{video:l.video}),r.a.createElement(b,{title:l.title,description:l.description,parentalRating:l.parentalRating,duration:l.duration,credits:s}))},W=n(2),k=n(9),j=n.n(k),O=n(4),I=n.n(O),R=n(14),N=n.n(R),A=n(15),P=n.n(A),V=r.a.forwardRef(function(e,t){var n,o,i,c=Object(a.useState)({}),s=Object(l.a)(c,2),d=s[0],u=s[1];n=d.xPosition,Object(a.useEffect)(function(){var t=new AbortController,n={wrapperWidth:9300,carouselWidth:e.carouselRef.current.clientWidth,xPosition:e.carouselRef.current.clientWidth,showForward:!0,showBack:!1};return u(n),function(){t.abort()}},[]);return r.a.createElement(r.a.Fragment,null,d.showBack?r.a.createElement("div",{className:j()(I.a.CarouselControls,I.a.back),onClick:function(){(n=d.xPosition)<=2*d.carouselWidth?(n=0,o=!1):(n=d.xPosition-d.carouselWidth,o=!0),u(Object(W.a)({},d,{xPosition:n,showBack:o})),e.wrapperRef.current.style="transform: translateX(".concat(d.xPosition,"px)")},ref:t},r.a.createElement("img",{src:N.a,alt:"Go to previous"})):null,d.showForward?r.a.createElement("div",{className:j()(I.a.CarouselControls,I.a.forward),onClick:function(){(n=d.xPosition+d.carouselWidth)>d.wrapperWidth-d.carouselWidth/2&&n<d.wrapperWidth?n=d.wrapperWidth-d.carouselWidth/2:n>=d.wrapperWidth-d.carouselWidth/2&&(n=0),o=!(n<=d.carouselWidth),i=!(n>d.wrapperWidth-d.carouselWidth/2||d.wrapperWidth<d.carouselWidth);var t=Object(W.a)({},d,{xPosition:n,showBack:o,showForward:i});u(t),e.wrapperRef.current.style="transform: translateX(-".concat(d.xPosition,"px)")},ref:t},r.a.createElement("img",{src:P.a,alt:"Go to next"})):null)}),S=function(e){var t=Object(a.useContext)(v).displayModal,n=r.a.createRef(),o=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:f.a.CarouselContainer},e.carouselHeading?r.a.createElement("h3",{className:f.a.CarouselHeading},e.carouselHeading):null,r.a.createElement("div",{className:f.a.Carousel,ref:o},r.a.createElement(V,{arrow:"back",wrapperRef:n,carouselRef:o}),r.a.createElement("div",{className:f.a.CarouselInnerWrapper,ref:n},e.content),r.a.createElement(V,{arrow:"forward",wrapperRef:n,carouselRef:o}))),t?r.a.createElement(y,null):null)},H=function(e){var t=e.children,n={displayModal:!1,movieId:"",toggleModal:function(e){s(function(t){return Object(W.a)({},t,{movieId:e,displayModal:!t.displayModal})})}},o=Object(a.useState)(n),i=Object(l.a)(o,2),c=i[0],s=i[1];return r.a.createElement(v.Provider,{value:c},t)},B=function(e){var t=e.children,n=Object(a.useState)([]),o=Object(l.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)(function(){var e=new AbortController;return fetch("/api/movies").then(function(e){return e.json()}).then(function(e){c(e.entries)}).catch(function(e){return console.error(e)}),function(){e.abort()}},[]);var s=i.map(function(e,t){return{key:t,id:e.id,title:e.title,description:e.description,publishedDate:e.publishedDate,cover:e.cover,video:e.contents[0].url,height:e.contents[0].height,width:e.contents[0].width,duration:e.contents[0].duration,language:e.contents[0].language,parentalRating:e.parentalRatings[0].rating,categories:e.categories,credits:e.credits}});return r.a.createElement(h.Provider,{value:s},t)},L=n(5),D=n.n(L),X=n(16),F=n.n(X),T=function(e){var t=Object(a.useContext)(v).toggleModal;return r.a.createElement("div",{className:D.a.MovieCard},r.a.createElement("img",{src:F.a,alt:"Play button",className:D.a.MoviePlayBtn,onClick:function(){return n=e.movieId,t(n),void e.click();var n}}),r.a.createElement("img",{src:e.imgSrc,alt:e.title,className:D.a.MovieCardImg,id:e.movieId}),r.a.createElement("div",{className:D.a.MovieCardInfo},r.a.createElement("h3",null,e.title)))},q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),u=s[0],f=s[1];Object(a.useEffect)(function(){var e=new AbortController;return document.body.style.overflowX="hidden",fetch("/api/movies").then(function(e){return e.json()}).then(function(e){o(e.entries)}).catch(function(e){return console.error(e)}),function(){e.abort()}},[]);var p,m,v=function(e){return e.map(function(e){return r.a.createElement(T,{key:e.id,title:e.title,imgSrc:e.images[0].url,movieId:e.id,movieLink:e.contents[0].url,click:function(){return h(e.id)}})})},h=function(e){var t=n.findIndex(function(t){return t.id===e}),a=n[t],r=u.findIndex(function(t){return t.id===e});if(u.length>0){if(r>=0)return console.log("Movie already added!");f([a].concat(Object(c.a)(u)))}else f([a])};return n.length>0&&(m=v(n)),u.length>0&&(p=v(u)),r.a.createElement(H,null,r.a.createElement("div",{className:d.a.App},r.a.createElement("header",{className:d.a.AppHeader},r.a.createElement("h1",null,"Video's On-Demand")),r.a.createElement(B,null,r.a.createElement(S,{carouselHeading:"New Releases",content:m}),u.length>0?r.a.createElement(S,{carouselHeading:"Recently Watched",content:p}):null)))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");J?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):G(t,e)})}}()}],[[18,1,2]]]);
//# sourceMappingURL=main.152a8345.chunk.js.map