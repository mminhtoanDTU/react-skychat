(this["webpackJsonpreact-app-chatchit"]=this["webpackJsonpreact-app-chatchit"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(19),o=n.n(a),i=n(3),r=(n(41),n(13)),l=n(15),u=n(12),d=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},j=function(e){return JSON.parse(localStorage.getItem(e))},m=function(e,t){var n=JSON.parse(localStorage.getItem(e))||[],c=[].concat(Object(l.a)(n),[t]);return localStorage.setItem(e,JSON.stringify(c))},b=function(e,t){var n=JSON.parse(sessionStorage.getItem(e))||[],c=[].concat(Object(l.a)(n),[t]);return sessionStorage.setItem("messages",JSON.stringify(c))},f=j("userInfo")||{uid:"sky00",displayName:"",photoURL:"/react-skychat/static/media/bear.8f109084.png"},O={userInfo:Object(u.a)(Object(u.a)({},f),{},{friendIds:j("friendIds")||[]}),isLogin:j("isLogin")||!1},p=Object(r.b)({name:"user",initialState:O,reducers:{resetUser:function(e){e.userInfo.friendIds=[]},loginSetUser:function(e,t){return{userInfo:Object(u.a)(Object(u.a)({},e.userInfo),{},{displayName:t.payload}),isLogin:!0}},logoutUser:function(e,t){e.isLogin=t.payload},addNewFriends:function(e,t){e.userInfo.friendIds=[].concat(Object(l.a)(e.userInfo.friendIds),[t.payload])},setAvatar:function(e,t){e.userInfo.photoURL=t.payload}}}),h=p.actions,g=h.resetUser,x=h.loginSetUser,v=h.logoutUser,N=h.addNewFriends,y=h.setAvatar,k=p.reducer,S={rooms:j("rooms")||[],selectedRoom:{},hasSender:"",hasReply:0},I=Object(r.b)({name:"rooms",initialState:S,reducers:{resetRooms:function(e){e.rooms=[],e.selectedRoom={},e.hasReply=0},setRooms:function(e,t){var n=[].concat(Object(l.a)(e.rooms),[t.payload]);e.rooms=n},setRoomInfo:function(e,t){e.selectedRoom=t.payload},inputChange:function(e,t){e.hasSender=t.payload},replyChange:function(e,t){e.hasReply=t.payload}}}),C=I.actions,L=C.resetRooms,A=C.setRoomInfo,R=C.setRooms,w=C.inputChange,B=C.replyChange,U=I.reducer,M={isModalFriends:!1,isShowInfoBar:!1,isShowMessage:!1,isLoading:!1},_=Object(r.b)({name:"control",initialState:M,reducers:{resetControl:function(){return M},toggleModalFriends:function(e,t){e.isModalFriends=t.payload},toggleInfoBar:function(e,t){e.isShowInfoBar=t.payload},toggleContentMessage:function(e,t){e.isShowMessage=t.payload},toggleLoading:function(e,t){e.isLoading=t.payload}}}),E=_.actions,W=E.toggleModalFriends,D=E.toggleInfoBar,F=E.toggleContentMessage,T=E.toggleLoading,H=E.resetControl,z={user:k,rooms:U,control:_.reducer},J=Object(r.a)({reducer:z,middleware:Object(r.c)({serializableCheck:!1})}),Z=n(14),G=n(5),Q=n(26),P=n(6),Y=n(29),K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEtElEQVR42u2Wa0xbZRjHn3NOLyvlVmSFUi5bmMPAuBSBDYIDdA2luqEM4yeTuTg/oGx+2RxLHMJgF+CD2Qf9oNs0kriLdWZZIs4sDIxbss3plBk/zCyzBWQInF4O57Q97fF5G9ocu7JsXOYHfZI3fd77732e9/+eUvAvG/WfBCjYvYeWKEr1a88R4bEDNFy+YvULQpfr1kjj1dZW+2MDsAx/V8VoNAdZh6M60WDw2W027Uhvj7TsAOYLFwo0+rRuP88/z9rttDI+gU7OMIycKykuJP3LBlB39qvshNWrO9B9lWdZyTMxwfh8fipjXQFQFHUWAZqWBeCZ/v4ndOsK96HbIkmS2nPvXkBgWQXncoEhPx/UWi0Z1osAe5YUYMMHH2r1VVVvo7sbS1JQFIOusTFJFASGc7lBuzIVUnNyQmODfv8b58vLPloSgNJDh5VGi2UHhvVdrKaTNsx3wD02RgUDAVqYnQUxEIBskwlomg7Ncd+58+zgSy8OLgqgsK2Nymna+gqtVB7A6ppwu+B0ihh2BiSJ8nt94GZZyCouAk1iYmTun0NDWVd37XQsGMB6+Uq9Ii7uELqmcBvmW+JIvp1OBakHRBFc0zOQZEgHfW6ufPrs7/2fxd/q65MeGaB+8FKFWqc7jG6dvF2e71A9GMTNp4FWKGHV06VAM4x8+C94AYvClYcC2PT1QF6cwdCNblP0nFC+x8cphKDnIgHuGRZEvx+MKDmtThe93JcIsPWhAGptNmNi7pp2dF/Doojul+c7vDm58V6eh0S9HgxP5cVatgcB3nkgQPUnn+pSSkr2otuKRRPdH8r35CTRNxNeg2zuwgs3NfkXBECCMrMZlGr1fWujBHegBD+OCVBx9KgmfWPNTnQJ4X2xi+R7fFwSeZ4hm/JeL7hRak7cHCMSGlNQWQlp2dkxo4oSrEMJXvoHgKmrW5FptW6naHo/Vo3zpQS/YgHX6Cjl8XhosikpAbxwCAUivnTEUjMyoLC6mjy3MddACWaiBEcjAC9cu65HLZOnM38uz/JCQqzAkypcU1OZf9y+neDmOIrc8kg60PeTk2M0GKUSNlgsoI6Lm+8MHEowISzBee9ALDMdO97gYNnzeGJadhdCJ5fwpSP2JL52WWvXPmiZn/ECFssbHukdKDh+4uD41FRbZHOPBySU2xwNqDHslc3N0bqXmw0BmhcMkLNtG0NXrL/o5LgaEfMfFIRIH7kHs3Y7rDKZpKL6+vnWPYIAexcMQCyv84BhWqX6kXc60+TtBEiYmABGpTpjbmlxq1as2B49FyX4Okrw2KIAiGV2dD7n9Hq/wTREYu1DGfpmZiTwek2m8vLfsqzWYWyukM9DCdaiBIcWDUAsvau73cNx74Xr5PQYhXNw8vNGUq85dTorKS/vOrr68BiUoBElOLYkACmbt9BQWjrg8/nMpM7Z7ZLE8+vB9sW18BjL0HCNKinpW3SVZAjmPz56nUX9IdG/+ZZeSE6+gZ9eI3f37gCeviF6zOYfbuyiGOZ9dG8iQMmSAhBb2bZvo0cQLvIORy2cOf19rDFbfrrZjz9qBHh5yQGIpexvt0x3dgzM11/W26fJMJsbEeDksgAsxv4H+Bv1ZyQ/r5/bvQAAAABJRU5ErkJggg==",V=(n(42),n(1));var q=function(e){var t=e.name,n=e.icon,c=e.type,s=e.className,a=e.size,o=e.onClick,i=e.useRef,r=e.isSubmit;return Object(V.jsxs)("button",{type:r?"submit":"",ref:i,className:"btn ".concat("btn-".concat(c),a?" btn-".concat(a," "):" ").concat(s||""),onClick:o?function(e){return o(e)}:function(){},children:[n&&Object(V.jsx)("span",{className:"icon",children:n}),Object(V.jsx)("span",{className:"name",children:t})]})},X=n.p+"static/media/user-place.aa5d0453.png";var $=function(e){var t=e.src,n=e.alt,c=e.size,s=e.className,a=(e.onClick,{width:"".concat(c,"px"),height:"".concat(c,"px"),borderRadius:"".concat(c,"px"),overflow:"hidden",border:"1px solid #eee",flexShrink:0});return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("img",{className:s,onError:function(e){e.target.onerror=null,e.target.src=X},src:t,alt:n,style:a})})};n(44);var ee=function(e){return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{class:"lds-dual-ring"})})},te=n(8),ne=n.p+"static/media/lisa.392ab396.png",ce=n.p+"static/media/rosie.69881f79.png",se=n.p+"static/media/jennie.87f142fb.png",ae=[{uid:"sky01",displayName:"Lisa Oppa",photoURL:ne},{uid:"sky02",displayName:"Ros\xe9",photoURL:ce},{uid:"sky03",displayName:"Chi Choo",photoURL:n.p+"static/media/jisoo.1822cfea.png"},{uid:"sky04",displayName:"Kim Jennie",photoURL:se},{uid:"sky05",displayName:"Son Tung MTP",photoURL:n.p+"static/media/sontung.d3bade2e.jpg"}];function oe(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0111/g,"d").replace(/\u0110/g,"D")}n(45);var ie=function(e){var t=e.placeholder,n=e.className,s=e.onSubmit,a=Object(c.useState)(""),o=Object(P.a)(a,2),i=o[0],r=o[1],l=Object(c.useRef)(null);return Object(V.jsxs)("div",{className:"search-box ".concat(n||""),children:[Object(V.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target.value;r(t),s&&(l.current&&clearTimeout(l.current),l.current=setTimeout((function(){s(t)}),800))},className:"search-box__input",placeholder:t}),""===i?Object(V.jsx)(te.g,{className:"search-box__icon"}):Object(V.jsx)(te.c,{className:"search-box__icon close",onClick:function(){return r(""),void s("")}})]})};n(46);var re=function(e){var t=e.user,n=e.onAddClick,c=e.onChatClick,s=Object(i.c)((function(e){return e.user})),a=s.userInfo;return s.isLogin,Object(V.jsxs)("li",{className:"item-friend",children:[Object(V.jsx)($,{src:t.photoURL,size:50,alt:"avatar",className:"item-friend__avatar"}),Object(V.jsx)("span",{className:"item-friend__name",children:t.displayName}),a.friendIds.includes(t.uid)?Object(V.jsx)(q,{name:"Message",type:"outline",className:"item-friend__add",onClick:c}):Object(V.jsx)(q,{name:"Add Friend",type:"primary",className:"item-friend__add",onClick:n})]})};n(47);var le=function(e){var t=Object(c.useState)([]),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)({type:"all",key:""}),r=Object(P.a)(o,2),l=r[0],d=r[1],b=Object(i.b)(),f=Object(i.c)((function(e){return e.control})),O=f.isModalFriends,p=f.isLoading,h=Object(i.c)((function(e){return e.user})).userInfo;Object(c.useEffect)((function(){b(T(!0));var e=ae.filter((function(e){return"all"===l.type||h.friendIds.includes(e.uid)?""===l.key?e:oe(e.displayName).includes(l.key):void 0})),t=setTimeout((function(){b(T(!1))}),500);return a(e),function(){return clearTimeout(t)}}),[l]);var g=function(e){d(Object(u.a)(Object(u.a)({},l),{},{type:e}))};return Object(V.jsxs)("div",{className:"modal-friends ".concat(O?"active":""),children:[Object(V.jsxs)("div",{className:"modal-friends__top",children:[Object(V.jsxs)(Z.b,{to:"/",className:"logo modal-logo",children:[Object(V.jsx)("img",{src:K,alt:"Logo Sky Chat"}),Object(V.jsx)("span",{className:"title",children:"Sky Chat"})]}),Object(V.jsx)("div",{className:"icon",onClick:function(){b(W(!1))},children:Object(V.jsx)(te.a,{})})]}),Object(V.jsx)(ie,{placeholder:"Search",onSubmit:function(e){d(Object(u.a)(Object(u.a)({},l),{},{key:oe(e)}))}}),Object(V.jsxs)("div",{className:"modal-friends__category",children:[Object(V.jsx)("span",{className:"option-item ".concat("all"===l.type?"active":""),onClick:function(){return g("all")},children:"All Users"}),Object(V.jsx)("span",{className:"option-item ".concat("friends"===l.type?"active":""),onClick:function(){return g("friends")},children:"Friends"})]}),Object(V.jsx)("ul",{className:"modal-friends__list",children:p?Object(V.jsx)(ee,{}):s.length?s.map((function(e){return Object(V.jsx)(re,{user:e,onAddClick:function(){return function(e){var t=N(e);b(t),m("friendIds",e)}(e.uid)},onChatClick:function(){return function(e){var t=e.uid,n=e.displayName,c=e.photoURL;if(!(j("rooms")||[]).find((function(e){return e.uid===t}))){m("rooms",{uid:t,displayName:n,photoURL:c,updatedAt:new Date});var s={displayName:n,uid:t,photoURL:c,updatedAt:new Date};b(R(s))}b(A({displayName:n,uid:t,photoURL:c})),b(W(!1)),b(F(!0))}(e)}},e.uid)})):Object(V.jsx)("p",{className:"not-match",children:"Does not match any results!"})})]})};n(52);n(53);var ue=n(21),de=n.n(ue);var je=function(e){var t=e.room,n=e.onClick,c=Object(i.c)((function(e){return e.rooms})).selectedRoom;return Object(V.jsxs)("div",{className:"item-room ".concat(c.uid===t.uid?"active":""),onClick:function(){return n(t)},children:[Object(V.jsx)($,{src:t.photoURL,alt:t.displayName,size:50}),Object(V.jsx)("span",{className:"name",children:t.displayName}),Object(V.jsx)("span",{className:"time",children:function(e){if(e)return de()(e).format("LT")}(t.updatedAt)})]})},me=(n(55),n(28));n(56);var be=function(){var e=Object(i.c)((function(e){return e.user})).userInfo,t=Object(i.b)();return Object(V.jsxs)("div",{className:"pop-setting",children:[Object(V.jsxs)("div",{className:"pop-setting__item",onClick:function(){return console.log("Edit profile")},children:[Object(V.jsx)($,{src:e.photoURL,size:28}),Object(V.jsx)("span",{children:e.displayName})]}),Object(V.jsxs)("div",{className:"pop-setting__item",onClick:function(){return localStorage.clear(),sessionStorage.clear(),t(g()),t(L()),t(H()),void t(v(!1))},children:[Object(V.jsx)(me.a,{className:"icon"}),Object(V.jsx)("span",{children:"Logout"})]})]})};n(57);var fe=function(e){var t=Object(c.useState)(!1),n=Object(P.a)(t,2),s=n[0],a=n[1],o=e.userInfo,i=Object(c.useRef)(null);Object(c.useEffect)((function(){return s?document.addEventListener("mouseup",r):document.removeEventListener("mouseup",r),function(){return document.removeEventListener("mouseup",r)}}),[s]);var r=function(e){i.current.contains(e.target)||a(!1)};return Object(V.jsxs)("div",{className:"user-info",ref:i,onClick:function(e){a(!s)},children:[Object(V.jsx)($,{src:o.photoURL,alt:o.displayName,size:40}),s&&Object(V.jsx)(be,{setOpenSetting:a})]})};var Oe=function(e){var t=Object(c.useState)([]),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(P.a)(o,2),l=r[0],u=r[1],d=Object(c.useState)(""),j=Object(P.a)(d,2),m=j[0],b=j[1],f=Object(i.c)((function(e){return e.user})),O=f.userInfo,p=f.isLogin,h=Object(i.c)((function(e){return e.rooms})).rooms,g=Object(i.c)((function(e){return e.control}));Object(Q.a)(g);var x=Object(i.b)();Object(c.useEffect)((function(){u(!0);var e=h.filter((function(e){return""===m?e:oe(e.displayName).includes(m)})),t=setTimeout((function(){u(!1)}),500);return a(e.reverse()),function(){return clearTimeout(t)}}),[m,h]);var v=function(){x(W(!0)),x(T(!0)),setTimeout((function(){x(T(!1))}),1e3)},N=function(e){x(A(e)),x(F(!0))};return Object(V.jsxs)("div",{className:"side-bar",children:[Object(V.jsxs)("div",{className:"side-bar__top",children:[Object(V.jsxs)(Z.b,{to:"/",className:"logo",children:[Object(V.jsx)("img",{src:K,alt:"Logo Sky Chat"}),Object(V.jsx)("span",{className:"title",children:"Sky Chat"})]}),p&&Object(V.jsx)(fe,{userInfo:O})]}),Object(V.jsx)(ie,{placeholder:"Search",className:"side-bar__search",onSubmit:function(e){b(oe(e))}}),Object(V.jsxs)("div",{className:"side-bar__add",children:[Object(V.jsx)("h5",{className:"text",children:"Messages"}),Object(V.jsx)(q,{onClick:function(){return v()},name:"New",icon:Object(V.jsx)(Y.a,{}),type:"blur"})]}),Object(V.jsx)("div",{className:"side-bar__list",children:p?0===h.length?Object(V.jsxs)("p",{className:"sub-text",children:["List is empty.",Object(V.jsx)("span",{onClick:function(){return v()},children:" Add new"})]}):l?Object(V.jsx)(ee,{}):s.length?s.map((function(e){return Object(V.jsx)(je,{room:e,onClick:N},e.uid)})):Object(V.jsx)("p",{className:"not-match",children:"Does not match any results!"}):Object(V.jsx)(ee,{})})]})},pe=["Hello","Hi","Welcome to Sky Chat.","Bye Bye","See you again!","Nice to meet you!","How's it going","How are you?","What's up?","What is your name?","What do you like doing in your free time?","What are your hobbies?","Are you feeling alright today? ","Are you hungry?","Are you ready?","Are you sick?","Are you free this evening?","Are you a camera? Because every time I look at you, I smile \ud83d\ude03","I love flowers. Do you like it?","I don't speak very well. \ud83d\ude25","I'm good, and you ?","I'm here.","I'm always be with you.","I miss you \ud83d\ude1d\ud83d\ude1d","I love LISA","I love ROS\xc9","I love JENNIE","I love JISOO","I believe you can","Do you like coffee?","Do you like milk tea?","Do you have a girlfriend yet? \ud83e\udd70","Do you know BLACKPINK?","Good afternoon","Good night! \ud83d\udca4","Good morning \ud83c\udf1e","Happy birthday \ud83c\udf81","Come on! I know you can make it","Would you like to have coffee?","You\u2019ve done the best. I\u2019m proud of you!","My doctor says I'm lacking vitamin U.","Skyyy oiiii, Say oh zee"];n(58);var he=function(e){var t=e.message,n=e.time,c=e.isSend,s=e.loading;return Object(V.jsxs)("div",{className:"item-message ".concat(c&&"sender"),children:[t&&Object(V.jsx)("span",{className:"msg",children:t}),n&&Object(V.jsx)("div",{className:"times",children:n}),s&&Object(V.jsxs)("span",{className:"msg",children:[Object(V.jsx)("span",{className:"dots"}),Object(V.jsx)("span",{className:"dots"}),Object(V.jsx)("span",{className:"dots"})]})]})};var ge=function(e){var t=Object(c.useState)([]),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(P.a)(o,2),l=r[0],u=r[1],d=Object(i.c)((function(e){return e.rooms})),j=d.selectedRoom,m=d.hasSender,b=d.hasReply,f=Object(i.c)((function(e){return e.user})).userInfo,O=Object(c.useRef)(null);Object(c.useEffect)((function(){var e,t=(e="messages",JSON.parse(sessionStorage.getItem(e))||[]).filter((function(e){return e.roomId===j.uid}));a(t)}),[j,m,b]),Object(c.useEffect)((function(){""!=m&&(u(!0),O.current&&clearTimeout(O.current),O.current=setTimeout((function(){u(!1)}),3e3))}),[m]);var p=function(e){if(e)return de()(e).calendar()};return Object(V.jsx)("div",{className:"message-wrap",children:Object(V.jsxs)("div",{className:"message-wrap__list",children:[s.map((function(e,t){return Object(V.jsx)(he,{message:e.message,time:p(e.time),isSend:e.sender===f.uid},t)})),Object(V.jsx)(he,{isSend:!1,loading:l})]})})};n(59);var xe=function(e){var t=Object(i.b)(),n=Object(c.useState)(""),s=Object(P.a)(n,2),a=s[0],o=s[1],r=Object(i.c)((function(e){return e.user})).userInfo,l=Object(i.c)((function(e){return e.rooms})).selectedRoom,u=function(e){e.preventDefault(),""!==a&&(b("messages",{roomId:l.uid,message:a,time:new Date,sender:r.uid}),t(w(Math.random().toFixed(2)))),o("")};return Object(V.jsxs)("form",{className:"box-input",onSubmit:function(e){return u(e)},children:[Object(V.jsx)("input",{autoComplete:"off",name:"message",type:"text",className:"input-message",placeholder:"Type a message",value:a,onChange:function(e){return o(e.target.value)}}),Object(V.jsx)("div",{className:"btn-send",onClick:function(e){return u(e)},children:Object(V.jsx)(te.f,{size:"23px"})}),Object(V.jsx)("div",{className:"icon-smile",onClick:function(){return console.log("Open Emoji")},children:Object(V.jsx)(te.e,{size:"22px"})})]})},ve=(n(60),n(61),n.p+"static/media/intro-welcome.6796104a.svg");var Ne=function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.control})).isModalFriends,c=[];return Object(V.jsx)("div",{className:"main-content",children:Object(V.jsxs)("div",{className:"welcome-wrap",children:[Object(V.jsxs)("div",{className:"welcome__content",children:[Object(V.jsx)("h4",{className:"title",children:c.length?"Welcome back!":"Welcome to Sky Chat"}),Object(V.jsx)("p",{className:"sub-title",children:c.length?"So glad you're back \ud83d\ude0d":"Sky Chat makes it easy and fun to stay close to your favorite people."}),c.length?Object(V.jsx)("p",{className:"text-action",children:"Let's send a message to your friends."}):Object(V.jsx)("div",{className:"btn-action",onClick:function(){n||(t(W(!0)),t(T(!0)),setTimeout((function(){t(T(!1))}),1e3))},children:"Create a room"})]}),Object(V.jsx)("div",{className:"welcome__cover",style:{backgroundImage:"url(".concat(ve,")")}})]})})};function ye(e){var t=Math.round(Math.random()*pe.length-1);return t===e&&ye(e),t}var ke=function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.rooms})),s=n.selectedRoom,a=n.hasSender,o=n.hasReply,r=(Object(i.c)((function(e){return e.user})).userInfo,Object(i.c)((function(e){return e.control}))),l=r.isShowInfoBar,u=r.isShowMessage,d=Object(c.useRef)();return Object(c.useEffect)((function(){return 0!==Object.keys(s).length&&(d.current&&clearTimeout(d.current),d.current=setTimeout((function(){b("messages",{roomId:s.uid,message:pe[o],time:new Date,sender:s.uid}),t(B(ye(o)))}),3e3)),function(){return clearTimeout(d.current)}}),[a]),0===Object.keys(s).length?Object(V.jsx)(Ne,{}):Object(V.jsxs)("div",{className:"main-content ".concat(u?"active":""),children:[Object(V.jsxs)("div",{className:"main-content__head",children:[Object(V.jsx)(te.a,{className:"icon-back",onClick:function(){t(F(!1))}}),Object(V.jsxs)("div",{className:"main-info",children:[Object(V.jsx)($,{src:s.photoURL,alt:s.displayName,size:40}),Object(V.jsx)("h4",{className:"name",children:s.displayName})]}),Object(V.jsxs)("div",{className:"tools",children:[Object(V.jsx)("div",{className:"wrap-icon",children:Object(V.jsx)(te.b,{size:"30px"})}),Object(V.jsx)("div",{className:"wrap-icon ".concat(l?"active":""),onClick:function(){t(D(!l))},children:Object(V.jsx)(te.d,{size:"30px"})})]})]}),Object(V.jsxs)("div",{className:"main-content__body",children:[Object(V.jsx)(ge,{}),Object(V.jsx)(xe,{})]})]})};n(62);var Se=function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.rooms})).selectedRoom,c=Object(i.c)((function(e){return e.control})).isShowInfoBar,s=function(){t(D(!1))};return Object(V.jsxs)("div",{className:"info-bar ".concat(c?"active":""),children:[Object(V.jsxs)("div",{className:"info-bar__top",children:[Object(V.jsx)(te.a,{className:"icon-back",onClick:function(){return s()}}),Object(V.jsx)("h3",{className:"title",children:"Friend Profile"})]}),Object(V.jsxs)("div",{className:"info-bar__content",children:[Object(V.jsx)($,{src:n.photoURL,alt:n.displayName,size:150}),Object(V.jsx)("span",{className:"name",children:n.displayName}),Object(V.jsx)("a",{className:"link",children:"View profile"})]}),Object(V.jsxs)("span",{className:"copyright",children:["Copyright \xa9 2021",Object(V.jsx)("a",{href:"https://toandev.tk/",target:"_blank",children:" toandev.tk"})]}),Object(V.jsx)("div",{className:"hidden-click ".concat(c?"active":""),onClick:function(){return s()}})]})};n(63);var Ie=function(e){var t=Object(G.g)(),n=Object(i.c)((function(e){return e.user})).isLogin;return Object(c.useEffect)((function(){n||t.push("/login")}),[n]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{className:"app-wrapper",children:[Object(V.jsx)(Oe,{}),Object(V.jsx)(ke,{}),Object(V.jsx)(Se,{})]}),n&&Object(V.jsx)(le,{})]})},Ce=(n(64),n(30));var Le=function(e){e.active;var t=e.image,n=(e.onClick,Object(i.c)((function(e){return e.user})).userInfo),c=Object(i.b)();return Object(V.jsxs)("li",{className:"pop-item ".concat(n.photoURL===t?"active":""),children:[Object(V.jsx)("img",{onClick:function(){return function(e){c(y(e))}(t)},src:t,alt:"pop-image",className:"pop-img"}),n.photoURL===t&&Object(V.jsx)(Ce.a,{className:"icon-check"})]})},Ae=[n.p+"static/media/bear.8f109084.png",n.p+"static/media/bee.564afa3a.png",n.p+"static/media/bird.ce78fb36.png",n.p+"static/media/deer.c9975f46.png",n.p+"static/media/fox.c5be04fa.png",n.p+"static/media/monkey.21c34072.png",n.p+"static/media/owl.0ce17351.png",n.p+"static/media/panda.5d09295d.png",n.p+"static/media/reindeer.303185d0.png"];var Re=function(e){return Object(V.jsx)("ul",{className:"pop-avatar",children:Ae.map((function(e){return Object(V.jsx)(Le,{image:e},e)}))})},we=n(31);var Be=function(e){var t=Object(c.useState)(!1),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(i.c)((function(e){return e.user})).userInfo,r=Object(c.useRef)(null);Object(c.useEffect)((function(){return s?document.addEventListener("mouseup",l):document.removeEventListener("mouseup",l),function(){return document.removeEventListener("mouseup",l)}}),[s]);var l=function(e){r.current.contains(e.target)||a(!1)};return Object(V.jsxs)("div",{className:"login-select",children:[Object(V.jsx)("span",{className:"login-label",children:"Avatar"}),Object(V.jsxs)("div",{className:"login-select__avatar",ref:r,children:[Object(V.jsx)($,{src:o.photoURL,size:100,className:"avatar"}),Object(V.jsx)(we.a,{className:"icon-edit",onClick:function(e){a(!s)}}),s&&Object(V.jsx)(Re,{})]})]})};var Ue=function(e){var t=Object(c.useState)(""),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(!1),i=Object(P.a)(o,2),r=i[0],l=i[1];return Object(V.jsxs)("div",{className:"login-input",children:[Object(V.jsx)("span",{className:"login-label",children:"Name*"}),Object(V.jsx)("input",{name:"skyname",type:"text",className:"input ".concat(r?"error":""),placeholder:"What is your name?",onChange:function(e){return a(e.target.value)},onBlur:function(){l(""===s)},required:!0}),Object(V.jsx)("p",{className:"feedback-input ".concat(r?"error":""),children:"*Please enter your name."})]})};n(65);var Me=function(e){var t=Object(c.useState)(!1),n=Object(P.a)(t,2),s=n[0],a=n[1],o=Object(G.g)(),r=Object(i.b)(),l=Object(i.c)((function(e){return e.user})),u=l.userInfo,j=l.isLogin;return Object(c.useEffect)((function(){j&&o.push("/chat")}),[j]),Object(V.jsxs)("div",{className:"login",children:[Object(V.jsx)("div",{className:"login-intro",style:{backgroundImage:"url(".concat(ve,")")}}),Object(V.jsxs)("div",{className:"login-content",children:[Object(V.jsx)("h3",{className:"content-title",children:"Login"}),Object(V.jsxs)("p",{className:"content-subtitle",children:["Hi there! ",Object(V.jsx)("span",{children:"Welcome to Sky Chat."})]}),Object(V.jsxs)("form",{className:"login-content__form",onSubmit:function(e){e.preventDefault(),a(!0);var t=new FormData(e.target),n=Object.fromEntries(t);setTimeout((function(){r(x(n.skyname)),d("userInfo",{displayName:n.skyname,photoURL:u.photoURL,uid:"sky00"}),d("isLogin",!0),a(!1)}),2500)},children:[Object(V.jsx)(Be,{}),Object(V.jsx)(Ue,{}),Object(V.jsx)(q,{isSubmit:!0,name:"Login",type:"primary",size:"large",className:"login-btn"})]}),Object(V.jsxs)("span",{className:"copyright login-copyright",children:["Copyright \xa9 2021",Object(V.jsx)("a",{href:"https://toandev.tk/",target:"_blank",children:" toandev.tk"})]}),s&&Object(V.jsx)("div",{className:"wrap-loading",children:Object(V.jsx)(ee,{})})]})]})};var _e=function(){return Object(V.jsx)(Z.a,{children:Object(V.jsxs)(G.d,{children:[Object(V.jsx)(G.a,{exact:!0,from:"/",to:"chat"}),Object(V.jsx)(G.b,{path:"/login",component:Me}),Object(V.jsx)(G.b,{path:"/chat",component:Ie})]})})};o.a.render(Object(V.jsx)(s.a.StrictMode,{children:Object(V.jsx)(i.a,{store:J,children:Object(V.jsx)(_e,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.498e5ea8.chunk.js.map