(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01f2":function(t,e,a){t.exports=a.p+"img/call.a614fcfa.svg"},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"14da":function(t,e,a){t.exports=a.p+"img/content-bullet.6584ecba.svg"},"1e31":function(t,e,a){t.exports=a.p+"img/loading.15ff113d.svg"},"43be":function(t,e,a){t.exports=a.p+"img/email.d641aab9.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("db4d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{color:"primary",dark:"",extended:"",flat:""}}),r("v-layout",{attrs:{row:"","pb-2":""}},[r("v-flex",{attrs:{xs8:"","offset-xs2":""}},[r("v-card",{staticClass:"card--flex-toolbar"},[r("v-card-title",{staticClass:" px-0",attrs:{id:"infoCardHeader"}},[r("v-spacer"),r("v-avatar",{attrs:{color:"white",size:"128"}},[t.fetching?r("v-progress-circular",{attrs:{size:110,width:2,color:"rgb(131, 186, 67)",indeterminate:""}}):r("img",{attrs:{src:t.avatarURL.large,alt:"avatar"}})],1),r("v-spacer")],1),r("v-card-text",[r("v-container",{attrs:{fluid:"","fill-height":"","grid-list-xl":"","pa-0":"","ma-0":""}},[r("v-layout",{attrs:{column:""}},[t._l(t.userDetails,function(e,a){return[r("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.userDetails[a].active,expression:"userDetails[key].active"}],key:"card_1"+a+"_inactive",attrs:{"align-center":"",column:"",wrap:""}},[r("v-flex",{staticClass:"ma-0 px-3 py-0"},[r("v-subheader",{staticClass:"title text-capitalize pa-0 ma-0"},[t._v(t._s(e.description))])],1),r("v-flex",{staticClass:"ma-0 px-3 py-0",staticStyle:{"word-break":"break-all"}},["user"===a?r("strong",{staticClass:"headline text-capitalize",attrs:{"text-truncate":""}},[t._v("\n                        "+t._s(e.name.title)+". "+t._s(e.name.first)+" "+t._s(e.name.last)+"\n                      ")]):t._e(),"email"===a?r("a",{staticClass:"headline",attrs:{href:"mailto:"+e.email,"text-truncate":""}},[t._v(t._s(e.email))]):t._e(),"calendar"===a?r("strong",{staticClass:"headline text-capitalize",attrs:{"text-truncate":""}},[t._v("\n                        "+t._s(t.createCustomDateFormat({dateToFormat:new Date(e.dob.date),formatString:"#DD# #MMMM# #YYYY#"}))+"\n                      ")]):t._e(),"location"===a?r("strong",{staticClass:"headline text-capitalize",attrs:{"text-truncate":""}},[t._v("\n                        "+t._s(e.location.street)+", "+t._s(e.location.city)+", "+t._s(e.location.state)+", "+t._s(e.location.postcode)+"\n                      ")]):t._e(),"call"===a?r("a",{staticClass:"headline text-capitalize",attrs:{href:"tel:"+t.cleanPhonenumber(e.cell),"text-truncate":""}},[t._v("\n                        "+t._s(e.cell)+"\n                      ")]):t._e(),"locked"===a?r("strong",{staticClass:"headline",attrs:{"text-truncate":""}},[t._v(t._s(e.login.password))]):t._e()])],1)]}),r("v-layout",{staticClass:"elevation-0",attrs:{"justify-center":"",row:"",wrap:""}},[t._l(t.userDetails,function(e,n){return[r("v-btn",{key:"btn_1_"+n,attrs:{flat:!t.userDetails[n].active,small:"",icon:"",fab:"",color:"rgb(131, 186, 67)"},on:{mouseenter:function(e){return e.stopPropagation(),t.toggleButtonActive(n)}}},[r("v-img",{attrs:{"aspect-ratio":"2",contain:"",src:a("6f32")("./"+n+".svg")}})],1)]})],2)],2)],1)],1)],1)],1)],1),r("v-footer",{attrs:{fixed:"","justify-center":"","align-center":""}},[r("v-spacer"),r("v-btn",{attrs:{"ma-5":"",disabled:t.fetching,color:"rgb(131, 186, 67)"},on:{click:function(e){return t.getUser()}}},[t.fetching?r("v-progress-circular",{attrs:{"pl-5":"",size:20,width:2,color:"rgba(0,0,0,0.5)",indeterminate:""}}):r("span",[t._v("Refresh User")])],1),r("v-spacer")],1)],1)},o=[],i=(a("6762"),a("2fdb"),a("456d"),a("ac6a"),a("a481"),{dateFormatting:{anteMeridiem:"am",postMeridiem:"pm",MONTHS:["January","February","March","April","May","June","July","August","September","October","November","December"],DAYS:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],defaultDateformatString:"#YYYY#-#MM#-#DD#",defaultTimeFormatString:"#hhh#:#mm#"}}),s={user:{active:!0,description:"My Name is:",dataKeys:["name"],name:{title:"--",first:"--",last:"--"}},email:{active:!1,description:"My Email is:",dataKeys:["email"],email:"--"},calendar:{active:!1,description:"My Birthday is:",dataKeys:["dob"],dob:{date:new Date,age:"--"}},location:{active:!1,description:"My Address is:",dataKeys:["location"],location:{street:"--",city:"--",state:"--",postcode:"--"}},call:{active:!1,description:"My Number is:",dataKeys:["cell"],cell:"--"},locked:{active:!1,description:"My Password is:",dataKeys:["login"],login:{password:"--"}}},c={data:function(){return{initialUserDetails:s,fetching:!0,userData:null,avatarURL:null,userDetails:JSON.parse(JSON.stringify(s))}},methods:{createCustomDateFormat:function(t){var e,a,r,n,o,s,c,l,u,f,d,m,g,p,h,v,b,y,D,M,w,x,Y={dateToFormat:"dateToFormat: date, for current time/date skip this parameter",formatString:"string"},_=t.formatString||!1;if(!t)return console.error('Error formatting, date no format date parameters where supplied, please pass parameters: \n"formatOption = %O',Y),console.info('String Formatting options for (Friday the 1st of January 2016 at 1:01:01 am ~ 01/01/2016 01:01:01):\n\tDATE:\n\t\t- #YYYY# for century and year eg: 2016 (CCYY).\n\t\t- #YY# for only the year eg: 16 (YY).\n\t\t- #M# for numerical month eg: 1.\n\t\t- #MM# for numerical month eg: 01.\n\t\t- #MMM# for abbreviated alphabetic month name eg: Jan.\n\t\t- #MMMM# for alphabetic month name eg: January.\n\t\t- #DD# for the numerical day eg: 1.\n\t\t- #DD# for the numerical day eg: 01.\n\t\t- #DDD# for abbreviated alphabetic name of day eg: Fri.\n\t\t- #DDDD# for alphabetic name of day eg: Friday.\n\t\t- #th# for the ordinal indicator eg: rd, th, st, nd (1st, 2nd, 3rd, 4th, 5th).\n\tTIME:\n\t\t- #h#  for hours eg: 1#.\n\t\t- #hh# for hours 12 hour format eg: 01.\n\t\t- #hhh#  for hours 24 hour format eg: 01#.\n\t\t- #m# for minutes eg: 1.\n\t\t- #mm# for minutes eg: 01.\n\t\t- #s# for seconds eg: 1.\n\t\t- #ss# for seconds eg: 01.\n\t\t- #AMPM# for the meridiem indicator in uppercase eg: AM/PM.\n\t\t- #ampm# for the meridiem indicator in lowercase eg: am/pm.\n\t-EG:\n\t-A formatting string: (#DDDD# the #D##th# of #MMMM# #YYYY# at #h#:#mm#:#ss# #ampm#) will Return -> "Friday the 1st of January 2016 at 1:01:01 am"'),!1;if(_||(console.warn('WARNING:::::::::::::::::::::::::::\n\t \n            no "formatString" parameter was supplied, please pass parameters: \n"formatOption = %O \nIf no string is sullpied it will default to: %s',Y,"".concat(i.dateFormatting.defaultDateformatString," ").concat(i.dateFormatting.defaultTimeFormatString)),console.info('String Formatting options for (Friday the 1st of January 2016 at 1:01:01 am ~ 01/01/2016 01:01:01):\n\tDATE:\n\t\t- #YYYY# for century and year eg: 2016 (CCYY).\n\t\t- #YY# for only the year eg: 16 (YY).\n\t\t- #M# for numerical month eg: 1.\n\t\t- #MM# for numerical month eg: 01.\n\t\t- #MMM# for abbreviated alphabetic month name eg: Jan.\n\t\t- #MMMM# for alphabetic month name eg: January.\n\t\t- #DD# for the numerical day eg: 1.\n\t\t- #DD# for the numerical day eg: 01.\n\t\t- #DDD# for abbreviated alphabetic name of day eg: Fri.\n\t\t- #DDDD# for alphabetic name of day eg: Friday.\n\t\t- #th# for the ordinal indicator eg: rd, th, st, nd (1st, 2nd, 3rd, 4th, 5th).\n\tTIME:\n\t\t- #h#  for hours eg: 1#.\n\t\t- #hh# for hours 12 hour format eg: 01.\n\t\t- #hhh  for hours 24 hour format eg: 01#.\n\t\t- #m# for minutes eg: 1.\n\t\t- #mm# for minutes eg: 01.\n\t\t- #s# for seconds eg: 1.\n\t\t- #ss# for seconds eg: 01.\n\t\t- #AMPM# for the meridiem indicator in uppercase eg: AM/PM.\n\t\t- #ampm# for the meridiem indicator in lowercase eg: am/pm.\n\t-EG:\n\t-A formatting string: (#DDDD# the #D##th# of #MMMM# #YYYY# at #h#:#mm#:#ss# #ampm#) will Return -> "Friday the 1st of January 2016 at 1:01:01 am"'),_="".concat(i.dateFormatting.defaultDateformatString," ").concat(i.dateFormatting.defaultTimeFormatString)),t.dateToFormat)e=new Date(t.dateToFormat);else{console.warn('Date Formatting warning, no "dateToFormat" parameter was supplied, the current time and date will be used to format the string.\n If you would like to format another date please pass parameter "dateToFormat" in parameters object: \n"formatOption = %O',Y);var F=(new Date).getTime();e=new Date(F)}return r=((a=e.getFullYear())+"").slice(-2),s=(c=e.getMonth()+1)<10?"0"+c:c,o=(n=i.dateFormatting.MONTHS[c-1]).substring(0,3),f=(d=e.getDate())<10?"0"+d:d,u=(l=i.dateFormatting.DAYS[e.getDay()]).substring(0,3),x=d>=10&&d<=20?"th":1==(w=d%10)?"st":2==w?"nd":3==w?"rd":"th",_=_.replace("#YYYY#",a).replace("#YY#",r).replace("#MMMM#",n).replace("#MMM#",o).replace("#MM#",s).replace("#M#",c).replace("#DDDD#",l).replace("#DDD#",u).replace("#DD#",f).replace("#D#",d).replace("#th#",x),p=m=e.getHours(),0==p&&(p=24),p>12&&(p-=12),g=p<10?"0"+p:p,M=(D=m<12?i.dateFormatting.anteMeridiem:i.dateFormatting.postMeridiem).toUpperCase(),h=(v=e.getMinutes())<10?"0"+v:v,b=(y=e.getSeconds())<10?"0"+y:y,_.replace("#hhh#",m).replace("#hh#",g).replace("#h#",p).replace("#mm#",h).replace("#m#",v).replace("#ss#",b).replace("#s#",y).replace("#ampm#",D).replace("#AMPM#",M)},toggleButtonActive:function(t){var e=this;Object.keys(e.userDetails).forEach(function(a){e.userDetails[a].active=a==t})},addData:function(){var t=this;Object.keys(t.userDetails).forEach(function(e){Object.keys(t.userData).forEach(function(a){t.userDetails[e].dataKeys.includes(a)&&(t.userDetails[e][a]=t.userData[a]),"picture"===a&&(t.avatarURL=t.userData[a])})}),console.log("DATA ADDED",t.userDetails)},getUser:function(){var t=this;t.userDetails=JSON.parse(JSON.stringify(s)),console.log(JSON.stringify(t.userDetails,0,4)),t.fetching=!0,fetch("https://randomuser.me/api/").then(function(t){return t.json()}).then(function(e){t.userData=e.results[0],t.fetching=!1,t.addData()}).catch(function(e){t.fetching=!1})},cleanPhonenumber:function(t){return t.replace(/[`~!@#$%^&*()_|\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi,"")}},mounted:function(){this.getUser()}},l=c,u=(a("034f"),a("2877")),f=Object(u["a"])(l,n,o,!1,null,null,null),d=f.exports,m=a("8c4f");r["default"].use(m["a"]);var g=new m["a"]({routes:[]}),p=a("2f62");r["default"].use(p["a"]);var h=new p["a"].Store({state:{},mutations:{},actions:{}}),v=a("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=a("ce5b"),y=a.n(b);a("bf40"),a("2e94");r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({router:g,store:h,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,a){},"6aed":function(t,e,a){t.exports=a.p+"img/user.56707eb1.svg"},"6f32":function(t,e,a){var r={"./calendar.svg":"b8bd","./call.svg":"01f2","./cash.svg":"c9a3","./content-bullet.svg":"14da","./content-image.svg":"8b0b","./content-section.svg":"de47","./content-text.svg":"a4de","./email.svg":"43be","./hamburger.svg":"f5d5","./home.svg":"ac9d","./loading.svg":"1e31","./location.svg":"d2eb","./locked.svg":"855c","./star.svg":"cc90","./user.svg":"6aed"};function n(t){var e=o(t);return a(e)}function o(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="6f32"},"855c":function(t,e,a){t.exports=a.p+"img/locked.453a907b.svg"},"8b0b":function(t,e,a){t.exports=a.p+"img/content-image.f6eb5f14.svg"},a4de:function(t,e,a){t.exports=a.p+"img/content-text.6fb7ffd3.svg"},ac9d:function(t,e,a){t.exports=a.p+"img/home.f29a5017.svg"},b8bd:function(t,e,a){t.exports=a.p+"img/calendar.6b081cd4.svg"},c9a3:function(t,e,a){t.exports=a.p+"img/cash.2696d9a9.svg"},cc90:function(t,e,a){t.exports=a.p+"img/star.584a0fff.svg"},d2eb:function(t,e,a){t.exports=a.p+"img/location.d718ab94.svg"},de47:function(t,e,a){t.exports=a.p+"img/content-section.2f3634c4.svg"},f5d5:function(t,e,a){t.exports=a.p+"img/hamburger.a28cc8d1.svg"}});
//# sourceMappingURL=app.d3fdfd6a.js.map