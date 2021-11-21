(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},19:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(0),s=n.n(o),i=n(13),u=n.n(i),b=n(6),l=n(10),j=n(2),d=n(8),f=n(3),O=n(4),p=(Object(j.b)("contacts/GetContactsRequest"),Object(j.b)("contacts/GetContactsSuccesses"),Object(j.b)("contacts/GetContactsError"),Object(j.b)("contacts/addContactRequest")),m=Object(j.b)("contacts/addContactSuccesses"),h=Object(j.b)("contacts/addContactError"),C=Object(j.b)("contacts/deleteContactRequest"),x=Object(j.b)("contacts/deleteContactSuccesses"),v=Object(j.b)("contacts/deleteContactError"),_=(Object(j.b)("contacts/Create"),Object(j.b)("contacts/Filter")),g=n(18),y=n.n(g),N=n(30),k=n(31),A=n.n(k),w=Object(j.c)("contacts/addContact",Object(N.a)(y.a.mark((function t(){var e,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),z=Object(j.d)([],(c={},Object(f.a)(c,w.fulfilled,(function(t,e){return Object(l.a)(e.payload)})),Object(f.a)(c,m,(function(t,e){return[].concat(Object(l.a)(t),[e.payload])})),Object(f.a)(c,x,(function(t,e){return t.filter((function(t){return t.id!==e.payload.id}))})),c)),S=Object(j.d)(!1,(a={},Object(f.a)(a,w.pending,(function(){return!0})),Object(f.a)(a,w.fulfilled,(function(){return!1})),Object(f.a)(a,w.rejected,(function(){return!1})),Object(f.a)(a,p,(function(){return!0})),Object(f.a)(a,m,(function(){return!1})),Object(f.a)(a,h,(function(){return!1})),Object(f.a)(a,C,(function(){return!0})),Object(f.a)(a,x,(function(){return!1})),Object(f.a)(a,v,(function(){return!1})),a)),E=Object(j.d)(null,(r={},Object(f.a)(r,w.rejected,(function(t,e){return e.payload})),Object(f.a)(r,v,(function(t,e){return e.payload})),r)),F=Object(j.d)("",Object(f.a)({},_,(function(t,e){return e.payload}))),Z=Object(O.b)({items:z,filter:F,isLoading:S,error:E}),L=[].concat(Object(l.a)(Object(j.e)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[function(t){return function(t){return function(e){console.log("firstMiddleware-> ",e),t(e)}}}]),T=Object(j.a)({reducer:{contacts:Z},middleware:L,devTools:null!==!0}),q=n(20),J=n(7),M=n.n(J),B=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},G=function(t){var e=B(t),n=D(t).toUpperCase();return e.filter((function(t){return t.name.toUpperCase().includes(n)}))},R=n(1);var U=function(){var t=Object(b.c)(B),e=Object(b.b)(),n=Object(o.useState)(""),c=Object(q.a)(n,2),a=c[0],r=c[1],s=Object(o.useState)(""),i=Object(q.a)(s,2),u=i[0],l=i[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}};return Object(R.jsxs)("form",{className:M.a.form,onSubmit:function(n){n.preventDefault();var c=n.target.name.value.toUpperCase();if(t.find((function(t){return t.name.toUpperCase()===c})))return alert("".concat(c," is already in contacts."));var o,s={name:a,phone:u};r(""),l(""),e((o=s,function(t){t(p()),console.log(o),fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)}).then((function(t){return t.json()})).then((function(e){t(m(e))})).catch((function(e){t(h(e))}))}))},children:[Object(R.jsxs)("label",{className:M.a.label,children:["Name",Object(R.jsx)("input",{type:"text",className:M.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:j})]}),Object(R.jsxs)("label",{className:M.a.label,children:["Number",Object(R.jsx)("input",{type:"tel",className:M.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:j})]}),Object(R.jsx)("button",{className:M.a.button,type:"submit",children:"Add contact"})]})},$=n(19),K=n.n($);var P=function(){var t=Object(b.c)(D),e=Object(b.b)();return Object(R.jsx)("section",{className:K.a.container,children:Object(R.jsxs)("label",{children:["Find contact by name",Object(R.jsx)("input",{type:"text",className:K.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:function(t){return e(_(t.target.value))}})]})})},I=n(32),V=n(15),Y=n.n(V);var H=function(){var t=Object(b.c)(G),e=Object(b.b)();return Object(o.useEffect)((function(){e(w())}),[e]),Object(R.jsx)("ul",{className:Y.a.list,children:t&&t.map((function(t){var n=t.id,c=t.name,a=t.phone,r="tel:"+a.replace(/^(\+)|\D/g,"$1");return Object(R.jsxs)("li",{className:Y.a.item,children:[Object(R.jsxs)("p",{children:[c,": ",Object(R.jsx)("a",{href:r,children:a})]}),Object(R.jsx)("button",{className:Y.a.button,type:"button","data-id":n,onClick:function(t){e(function(t){return function(e){e(C()),fetch("https://619416bd0b39a70017b1570d.mockapi.io/api/v1/contacts/".concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){console.log(t),e(x(t))})).catch((function(t){return e(v(t))}))}}(t.currentTarget.dataset.id))},children:Object(R.jsx)(I.a,{})})]},n)}))})};var Q=function(){return Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(U,{}),Object(R.jsx)("h2",{children:"Contacts"}),Object(R.jsx)(P,{}),Object(R.jsx)(H,{})]})};n(63);u.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(b.a,{store:T,children:Object(R.jsx)(Q,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[64,1,2]]]);
//# sourceMappingURL=main.b211ed74.chunk.js.map