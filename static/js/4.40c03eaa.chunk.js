(this["webpackJsonpreact-it-kamasutra-1"]=this["webpackJsonpreact-it-kamasutra-1"]||[]).push([[4],{290:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2YlaB",dialogsItems:"Dialogs_dialogsItems__49UQ7",active:"Dialogs_active__36eoV",dialog:"Dialogs_dialog__1cunV",messages:"Dialogs_messages__2InGc",message:"Dialogs_message__2P3LQ",activeLink:"Dialogs_activeLink__2-pIO"}},295:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(127),c=t(290),r=t.n(c),o=t(14),l=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:r.a.dialog+" "+r.a.active},n.a.createElement(o.b,{to:a,activeClassName:r.a.activeLink},e.name))},m=function(e){return n.a.createElement("div",{className:r.a.message},e.message)},u=t(89),g=t(128),d=t(32),b=t(56),v=Object(b.a)(50),_=Object(g.a)({form:"message"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{placeholder:"Enter your message.",component:d.b,name:"newMessageBody",validate:[b.b,v]})),n.a.createElement("div",null,n.a.createElement("button",null,"Add message")))})),f=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),t=e.messages.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id,id:e.id})}));return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogsItems},a),n.a.createElement("div",{className:r.a.messages},t,n.a.createElement(_,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},p=t(17),E=t(35),h=t(36),O=t(38),j=t(37),k=t(9),y=function(e){return{isAuth:e.auth.isAuth}},D=function(e){var a=function(a){Object(O.a)(s,a);var t=Object(j.a)(s);function s(){return Object(E.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(k.a,{to:"/login"})}}]),s}(n.a.Component);return Object(p.b)(y)(a)},w=t(8);a.default=Object(w.d)(Object(p.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{addMessage:function(a){e(Object(i.a)(a))}}})),D)(f)}}]);
//# sourceMappingURL=4.40c03eaa.chunk.js.map