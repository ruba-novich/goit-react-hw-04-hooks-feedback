(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{2:function(e,t,n){e.exports={Statistics:"Statistics_Statistics__14t1X",list:"Statistics_list__3fYCG",item:"Statistics_item__3cM5U",stats_list:"Statistics_stats_list__3ey05"}},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(6),i=n.n(a),r=n(3),o=n(7),l=n.n(o),j=n(0),b=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsx)("button",{className:l.a.btn,type:"button",name:e,onClick:n,children:e},t.toString())}))})},u=n(2),d=n.n(u),m=function(e){var t=e.good,n=e.neutral,s=e.bad,c=e.total,a=e.positivePercentage;return Object(j.jsxs)("ul",{className:d.a.list,children:[Object(j.jsxs)("li",{className:d.a.item,children:["Good: ",t]}),Object(j.jsxs)("li",{className:d.a.item,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:d.a.item,children:["Bad: ",s]}),Object(j.jsxs)("li",{className:d.a.item,children:["Total: ",c]}),Object(j.jsxs)("li",{className:d.a.item,children:["Positive feedback: ",a,"%"]})]})},O=n(8),_=n.n(O),f=function(e){var t=e.message;return Object(j.jsx)("h3",{className:_.a.message,children:t})},x=n(5),h=n.n(x),g=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:h.a.section,children:[Object(j.jsx)("h2",{className:h.a.title,children:t}),n]})},p=(n(15),n(9)),v=n.n(p),k=function(e){var t=e.children;return Object(j.jsx)("div",{className:v.a.Container,children:t})};var S=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(s.useState)(0),d=Object(r.a)(u,2),O=d[0],_=d[1],x={good:n,neutral:o,bad:O};console.log(x);var h=function(){return n+o+O};return Object(j.jsxs)(k,{children:[Object(j.jsx)(g,{title:"Pleas leave feedback",children:Object(j.jsx)(b,{options:Object.keys(x),onLeaveFeedback:function(e){switch(e.target.name){case"good":c((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":_((function(e){return e+1}));break;default:return}}})}),Object(j.jsx)(g,{title:"Statistics",children:0===h()?Object(j.jsx)(f,{message:"No feedback given"}):Object(j.jsx)(m,{good:n,neutral:o,bad:O,total:h(),positivePercentage:0===h()?0:(100*n/h()).toFixed()})})]})},N=(n(21),n(22),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(S,{})})});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={section:"Section_section__16e20",title:"Section_title__1m7pR"}},7:function(e,t,n){e.exports={btn:"FeedBackOptions_btn__V_wjS"}},8:function(e,t,n){e.exports={message:"Notification_message__dwHEZ"}},9:function(e,t,n){e.exports={Container:"Container_Container__3sdrE"}}},[[23,1,2]]]);
//# sourceMappingURL=main.c494109b.chunk.js.map