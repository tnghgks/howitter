(this.webpackJsonphowitter=this.webpackJsonphowitter||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(30),s=n.n(c),i=n(5),u=n(17),o=n(3),j=n(6),l=n.n(j),b=n(11),d=n(19);n(39),n(41),n(53);d.initializeApp({apiKey:"AIzaSyBUK838GYPkHbf-hVMAfaS6FirsKaithgI",authDomain:"howitter-912b3.firebaseapp.com",projectId:"howitter-912b3",storageBucket:"howitter-912b3.appspot.com",messagingSenderId:"684309950348",appId:"1:684309950348:web:21f0d0d1ab9a398c5bb0a9"});var h=d,O=d.auth(),p=d.firestore(),x=d.storage(),f=n(0),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),h=d[0],p=d[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},y=function(){var e=Object(b.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"authContainer",children:Object(f.jsxs)("form",{onSubmit:y,className:"authForm",children:[Object(f.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(f.jsx)("input",{type:"submit",value:h?"Create Account":"Log In"}),v,Object(f.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"signBtn",children:h?"Sign In":"Create Account"})]})})})},v=n(18),g=n(8),w=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubeAuthProvider),e.next=4,O.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(g.a,{icon:v.c,size:"3x",color:"#0fbcf9"}),Object(f.jsx)(m,{}),Object(f.jsxs)("div",{className:"socialBtn",children:[Object(f.jsxs)("button",{onClick:e,name:"google",children:["Continue with Google",Object(f.jsx)(g.a,{icon:v.b})]}),Object(f.jsxs)("button",{onClick:e,name:"github",children:["Continue with GitHub",Object(f.jsx)(g.a,{icon:v.a})]})]})]})},y=n(33),C=n(25),N=n(13),k=function(e){var t=e.hweetObj,n=e.isOwner,a=Object(C.useState)(!1),r=Object(i.a)(a,2),c=r[0],s=r[1],u=Object(C.useState)(t.text),o=Object(i.a)(u,2),j=o[0],d=o[1],h=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this hweet?")){e.next=7;break}return e.next=4,p.doc("hweets/".concat(t.id)).delete();case 4:if(!t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return s((function(e){return!e}))},m=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("hweets/".concat(t.id)).update({text:j});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"hweet",children:c?Object(f.jsx)(f.Fragment,{children:n&&Object(f.jsx)("div",{className:"editingContainer",children:Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("input",{type:"text",placeholder:"Edit your hweet",value:j,onChange:function(e){var t=e.target.value;d(t)},required:!0,className:"editInput"}),Object(f.jsxs)("div",{className:"updateBtnContainer",children:[Object(f.jsx)("input",{type:"submit",value:"Update Hweet",className:"updateBtn"}),Object(f.jsx)("button",{onClick:O,className:"updateCancleBtn",children:"Cancle"})]})]})})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl,alt:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(f.jsxs)("div",{className:"editBtnContainer",children:[Object(f.jsx)("button",{onClick:h,children:Object(f.jsx)(g.a,{icon:N.d})}),Object(f.jsx)("button",{onClick:O,children:Object(f.jsx)(g.a,{icon:N.a})})]})]})})},S=n(55),I=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),j=o[0],d=o[1],h=Object(a.useRef)(),O=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,r,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===j){e.next=10;break}return r=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=6,r.putString(j,"data_url");case 6:return i=e.sent,e.next=9,i.ref.getDownloadURL();case 9:a=e.sent;case 10:return u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=13,p.collection("hweets").add(u);case 13:s(""),d("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{onSubmit:O,className:"hweetForm",children:[Object(f.jsxs)("div",{className:"factoryInput_container",children:[Object(f.jsx)("input",{value:c,type:"text",placeholder:"What's on your mind?",maxLength:120,onChange:function(e){var t=e.target.value;s(t)},className:"hweetInput"}),Object(f.jsx)("input",{type:"submit",value:"\u2192",id:"hweetBtn"})]}),Object(f.jsx)("label",{htmlFor:"addPhoto",children:Object(f.jsxs)("span",{children:["Add Photo ",Object(f.jsx)(g.a,{icon:N.b})]})}),Object(f.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},ref:h,id:"addPhoto"}),j&&Object(f.jsxs)("div",{className:"photoContainer",children:[Object(f.jsx)("img",{src:j,alt:j,width:"50px",height:"50px"}),Object(f.jsxs)("button",{onClick:function(){h.current.value=null,d(null)},children:["Remove ",Object(f.jsx)(g.a,{icon:N.c})]})]})]})},U=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){p.collection("hweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(f.jsxs)("div",{className:"homeContainer",children:[Object(f.jsx)(I,{userObj:t}),Object(f.jsx)("div",{className:"hweetContainer",children:c.map((function(e){return Object(f.jsx)(k,{hweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=function(e){var t=e.userObj;return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",children:Object(f.jsx)(g.a,{icon:v.c,size:"2x"})})}),Object(f.jsx)("li",{children:Object(f.jsxs)(u.b,{to:"/profile",children:[Object(f.jsx)(g.a,{icon:N.e,size:"2x"}),Object(f.jsxs)("div",{children:[t.displayName,"\uc758 Profile"]})]})})]})})},A=function(e){e.refreshUser;var t=e.userObj,n=Object(o.g)(),r=Object(a.useState)(t.displayName),c=Object(i.a)(r,2),s=c[0],u=c[1],j=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=4;break}return e.next=4,t.updateProfile({displayName:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:j,children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"Display Name",value:s}),Object(f.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(f.jsx)("button",{onClick:function(){O.signOut(),n.push("/")},children:"Log Out"})]})},F=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(f.jsxs)(u.a,{children:[n&&Object(f.jsx)(P,{userObj:a}),Object(f.jsx)(o.d,{children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(U,{userObj:a})}),Object(f.jsx)(o.b,{exact:!0,path:"/profile",children:Object(f.jsx)(A,{refreshUser:t,userObj:a})}),Object(f.jsx)(o.a,{from:"*",to:"/"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(w,{})}),Object(f.jsx)(o.a,{from:"*",to:"/"})]})})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(F,{refreshUser:function(){var e=O.currentUser;o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null)},isLoggedIn:Boolean(u),userObj:u}):"Initializing...."})};n(51);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c19c9c3a.chunk.js.map