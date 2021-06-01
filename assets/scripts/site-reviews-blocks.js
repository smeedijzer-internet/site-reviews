/*! For license information please see site-reviews-blocks.js.LICENSE.txt */
!function(){"use strict";var e={367:function(e,t,n){var s=n(424),i="function"==typeof Symbol&&Symbol.for,r=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,o=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,m=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116,f="function"==typeof Symbol&&Symbol.iterator;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function x(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(w(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var S=_.prototype=new x;S.constructor=_,s(S,b.prototype),S.isPureReactComponent=!0;var C={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var s,i={},a=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,s)&&!k.hasOwnProperty(s)&&(i[s]=t[s]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===i[s]&&(i[s]=l[s]);return{$$typeof:r,type:e,key:a,ref:o,props:i,_owner:C.current}}function L(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g,I=[];function A(e,t,n,s){if(I.length){var i=I.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=s,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:s,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function E(e,t,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var o=!1;if(null===e)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case r:case a:o=!0}}if(o)return n(s,e,""===t?"."+G(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+G(i=e[l],l);o+=E(i,u,n,s)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=f&&e[f]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)o+=E(i=i.value,u=t+G(i,l++),n,s);else if("object"===i)throw n=""+e,Error(w(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return o}function P(e,t,n){return null==e?0:E(e,"",t,n)}function G(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var s=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,s,n,(function(e){return e})):null!=e&&(L(e)&&(e=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n)),s.push(e))}function z(e,t,n,s,i){var r="";null!=n&&(r=(""+n).replace(O,"$&/")+"/"),P(e,M,t=A(t,r,s,i)),D(t)}var U={current:null};function T(){var e=U.current;if(null===e)throw Error(w(321));return e}t.createElement=R},294:function(e,t,n){e.exports=n(367)},424:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(e){s[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var a,o,l=i(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))n.call(a,c)&&(l[c]=a[c]);if(t){o=t(a);for(var d=0;d<o.length;d++)s.call(a,o[d])&&(l[o[d]]=a[o[d]])}}return l}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}!function(){var e=n(294);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var s,i,r=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){o=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=wp.components.CheckboxControl,r=wp.element.useState,a=function(t,n,a){var o=[];return jQuery.each(t,(function(t,l){var u=s(r(!1),2),c=u[0],d=u[1],m=n.split(",").indexOf(t)>-1;o.push((0,e.createElement)(i,{key:"hide-".concat(t),className:"glsr-checkbox-control",checked:m||c,label:l,onChange:function(e){d(e),n=_.without(_.without(n.split(","),""),t),e&&n.push(t),a({hide:n.toString()})}}))})),o},o=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.28-.894v.963h-3.272v2.691h-1.017v-6.3h4.496v.963h-3.479v1.683h3.272z"})),l=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm3.681-3.54h2.592c1.449 0 2.232.648 2.232 1.823 0 1.071-.819 1.782-2.102 1.827l2.075 2.651h-1.26l-2.007-2.651h-.513v2.651h-1.017v-6.3zm2.565.954h-1.548v1.773h1.548c.819 0 1.202-.297 1.202-.905 0-.599-.405-.869-1.202-.869z"})),u=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.415-2.969l-.518.824c-.536-.342-1.13-.54-1.769-.54-.842 0-1.418.365-1.418.941 0 .522.491.725 1.31.842l.437.059c1.022.14 2.03.563 2.03 1.733 0 1.283-1.161 1.985-2.525 1.985-.855 0-1.881-.284-2.534-.846l.554-.81c.432.396 1.247.693 1.976.693.824 0 1.472-.351 1.472-.932 0-.495-.495-.725-1.418-.851l-.491-.068c-.936-.131-1.868-.572-1.868-1.742 0-1.265 1.121-1.967 2.484-1.967.918 0 1.643.257 2.277.68z"})),c=wp.i18n._x,d=[{label:"- "+c("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+c("Select Multiple Post IDs","admin-text","site-reviews")+" -",value:"custom"},{label:c("Assign to the Current Page","admin-text","site-reviews"),value:"post_id"},{label:c("Assign to the Parent Page","admin-text","site-reviews"),value:"parent_id"}],m=wp.i18n._x,p=[],v={label:"- "+m("Select","admin-text","site-reviews")+" -",value:""},g={label:"- "+m("Select Multiple Categories","admin-text","site-reviews")+" -",value:"glsr_custom"};wp.apiFetch({path:"/site-reviews/v1/categories?per_page=50"}).then((function(e){p.push(v),p.push(g),jQuery.each(e,(function(e,t){p.push({label:"".concat(t.name," (").concat(t.slug,")"),value:t.id})}))}));var f=p,w=wp.i18n._x,y=[],h={label:"- "+w("Select","admin-text","site-reviews")+" -",value:""},b={label:"- "+w("Select Multiple Users","admin-text","site-reviews")+" -",value:"glsr_custom"};wp.apiFetch({path:"/wp/v2/users?per_page=50"}).then((function(e){y.push(h),y.push(b),jQuery.each(e,(function(e,t){y.push({label:t.name+" ("+t.slug+")",value:t.id})}))}));var x=y;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var j=["children","custom_value","help","label","onChange","options","className","hideLabelFromVision","selectedValue"],k=(wp.i18n._x,wp.components),R=k.BaseControl,L=(k.TextControl,lodash.isEmpty),O=wp.compose.useInstanceId;function I(t){var n=t.children,s=t.custom_value,i=void 0===s?"custom":s,r=t.help,a=t.label,o=t.onChange,l=t.options,u=void 0===l?[]:l,c=t.className,d=t.hideLabelFromVision,m=(t.selectedValue,C(t,j)),p=O(I),v="inspector-select-control-".concat(p),g=m.value;return!L(u)&&(0,e.createElement)(R,{label:a,hideLabelFromVision:d,id:v,help:r,className:c},(0,e.createElement)("select",S({id:v,className:"components-select-control__input",onChange:function(e){o(e.target.value)},"aria-describedby":r?"".concat(v,"__help"):void 0},m),u.map((function(t,n){return(0,e.createElement)("option",{key:"".concat(t.label,"-").concat(t.value,"-").concat(n),value:t.value,disabled:t.disabled},t.label)}))),i===g&&n)}var A=wp.i18n._x,D=wp.blocks.registerBlockType,E=wp.blockEditor,P=E.InspectorAdvancedControls,G=E.InspectorControls,N=wp.components,M=N.PanelBody,z=(N.SelectControl,N.TextControl),U=wp.serverSideRender,T=GLSR.nameprefix+"/form",$=(D(T,{attributes:{assign_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:A("Display a review form.","admin-text","site-reviews"),edit:function(t){var n=t.attributes,s=n.assign_to,i=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=n.hide,c=n.id,m=n.user,p=(t.className,t.setAttributes),v={assign_to:(0,e.createElement)(I,{key:"assigned_posts",label:A("Assign Reviews to a Page","admin-text","site-reviews"),onChange:function(e){return p({assign_to:e,assigned_posts:"custom"===e?i:""})},options:d,value:s},(0,e.createElement)(z,{className:"glsr-base-conditional-control",help:A("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return p({assigned_posts:e})},placeholder:A("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:i})),category:(0,e.createElement)(I,{key:"assigned_terms",custom_value:"glsr_custom",label:A("Assign Reviews to a Category","admin-text","site-reviews"),onChange:function(e){return p({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:f,value:l},(0,e.createElement)(z,{className:"glsr-base-conditional-control",help:A("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return p({assigned_terms:e})},placeholder:A("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(I,{key:"assigned_users",custom_value:"glsr_custom",label:A("Assign Reviews to a User","admin-text","site-reviews"),onChange:function(e){return p({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:m},(0,e.createElement)(z,{className:"glsr-base-conditional-control",help:A("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return p({assigned_users:e})},placeholder:A("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),hide:a(GLSR.hideoptions.site_reviews_form,u,p)},g={id:(0,e.createElement)(z,{label:A("Custom ID","admin-text","site-reviews"),onChange:function(e){return p({id:e})},value:c})};return[(0,e.createElement)(G,null,(0,e.createElement)(M,{title:A("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorControls",v,t)))),(0,e.createElement)(P,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".form.InspectorAdvancedControls",g,t))),(0,e.createElement)(U,{block:T,attributes:t.attributes})]},example:{},icon:{src:o},keywords:["reviews","form"],save:function(){return null},title:A("Submit a Review","admin-text","site-reviews")}),wp.i18n._x),Q=[{label:"- "+$("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+$("Select Multiple Post IDs","admin-text","site-reviews")+" -",value:"custom"},{label:$("Assigned to the Current Page","admin-text","site-reviews"),value:"post_id"},{label:$("Assigned to the Parent Page","admin-text","site-reviews"),value:"parent_id"}],q=wp.i18n._x,B=[{label:"- "+q("Select","admin-text","site-reviews")+" -",value:""},{label:q("Terms were accepted","admin-text","site-reviews"),value:"true"},{label:q("Terms were not accepted","admin-text","site-reviews"),value:"false"}],F={label:"- "+(0,wp.i18n._x)("Select","admin-text","site-reviews")+" -",value:""},V=[];wp.apiFetch({path:"/site-reviews/v1/types?per_page=50"}).then((function(e){e.length<2||(V.push(F),jQuery.each(e,(function(e,t){V.push({label:t.name,value:t.id})})))}));var H=V,J=wp.i18n._x,K=wp.blocks.registerBlockType,W=wp.blockEditor,X=W.InspectorAdvancedControls,Y=W.InspectorControls,Z=wp.components,ee=Z.PanelBody,te=Z.RangeControl,ne=Z.SelectControl,se=Z.TextControl,ie=Z.ToggleControl,re=wp.serverSideRender,ae=GLSR.nameprefix+"/reviews";wp.hooks.addFilter("blocks.getBlockAttributes",ae,(function(e,t,n,s){return s&&s.count&&(e.display=s.count),e}));K(ae,{attributes:{assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},display:{default:5,type:"number"},hide:{default:"",type:"string"},id:{default:"",type:"string"},pagination:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:J("Display your most recent reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,s=n.assigned_to,i=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=n.display,c=n.hide,d=n.id,m=n.pagination,p=n.rating,v=n.schema,g=n.terms,w=n.type,y=n.user,h=(t.className,t.setAttributes),b={assigned_to:(0,e.createElement)(I,{key:"assigned_posts",label:J("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return h({assigned_to:e,assigned_posts:"custom"===e?i:""})},options:Q,value:s},(0,e.createElement)(se,{className:"glsr-base-conditional-control",help:J("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_posts:e})},placeholder:J("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:i})),category:(0,e.createElement)(I,{key:"assigned_terms",custom_value:"glsr_custom",label:J("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return h({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:f,value:l},(0,e.createElement)(se,{className:"glsr-base-conditional-control",help:J("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_terms:e})},placeholder:J("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(I,{key:"assigned_users",custom_value:"glsr_custom",label:J("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return h({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:y},(0,e.createElement)(se,{className:"glsr-base-conditional-control",help:J("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return h({assigned_users:e})},placeholder:J("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),terms:(0,e.createElement)(ne,{key:"terms",label:J("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return h({terms:e})},options:B,value:g}),pagination:(0,e.createElement)(ne,{key:"pagination",label:J("Enable Pagination","admin-text","site-reviews"),onChange:function(e){return h({pagination:e})},options:[{label:"- "+J("Select","admin-text","site-reviews")+" -",value:""},{label:J("Enabled","admin-text","site-reviews"),value:"true"},{label:J("Enabled (using ajax)","admin-text","site-reviews"),value:"ajax"}],value:m}),type:(0,e.createElement)(ne,{key:"type",label:J("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return h({type:e})},options:H,value:w}),display:(0,e.createElement)(te,{key:"display",label:J("Reviews Per Page","admin-text","site-reviews"),min:1,max:50,onChange:function(e){return h({display:e})},value:u}),rating:(0,e.createElement)(te,{key:"rating",label:J("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return h({rating:e})},value:p}),schema:(0,e.createElement)(ie,{key:"schema",checked:v,help:J("The schema should only be enabled once per page.","admin-text","site-reviews"),label:J("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return h({schema:e})}}),hide:a(GLSR.hideoptions.site_reviews,c,h)},_={id:(0,e.createElement)(se,{label:J("Custom ID","admin-text","site-reviews"),onChange:function(e){return h({id:e})},value:d})};return[(0,e.createElement)(Y,null,(0,e.createElement)(ee,{title:J("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorControls",b,t)))),(0,e.createElement)(X,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".reviews.InspectorAdvancedControls",_,t))),(0,e.createElement)(re,{block:ae,attributes:t.attributes})]},example:{attributes:{display:2,pagination:"ajax",rating:0}},icon:{src:l},keywords:["reviews"],save:function(){return null},title:J("Latest Reviews","admin-text","site-reviews")});var oe=wp.i18n._x,le=wp.blocks.registerBlockType,ue=wp.blockEditor,ce=ue.InspectorAdvancedControls,de=ue.InspectorControls,me=wp.components,pe=me.PanelBody,ve=me.RangeControl,ge=me.SelectControl,fe=me.TextControl,we=me.ToggleControl,ye=wp.serverSideRender,he=GLSR.nameprefix+"/summary";le(he,{attributes:{assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}},category:GLSR.nameprefix,description:oe("Display a summary of your reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,s=n.assigned_to,i=n.assigned_posts,r=n.assigned_terms,o=n.assigned_users,l=n.category,u=(n.display,n.hide),c=(n.id,n.pagination,n.rating),d=n.schema,m=n.terms,p=n.type,v=n.user,g=(t.className,t.setAttributes),w={assigned_to:(0,e.createElement)(I,{key:"assigned_posts",label:oe("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return g({assigned_to:e,assigned_posts:"custom"===e?i:""})},options:Q,value:s},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:oe("Separate multiple IDs with commas.","admin-text","site-reviews"),onChange:function(e){return g({assigned_posts:e})},placeholder:oe("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:i})),category:(0,e.createElement)(I,{key:"assigned_terms",custom_value:"glsr_custom",label:oe("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return g({category:e,assigned_terms:"glsr_custom"===e?r:""})},options:f,value:l},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:oe("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return g({assigned_terms:e})},placeholder:oe("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:r})),user:(0,e.createElement)(I,{key:"assigned_users",custom_value:"glsr_custom",label:oe("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return g({user:e,assigned_users:"glsr_custom"===e?o:""})},options:x,value:v},(0,e.createElement)(fe,{className:"glsr-base-conditional-control",help:oe("Separate with commas.","admin-text","site-reviews"),onChange:function(e){return g({assigned_users:e})},placeholder:oe("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),terms:(0,e.createElement)(ge,{key:"terms",label:oe("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return g({terms:e})},options:B,value:m}),type:(0,e.createElement)(ge,{key:"type",label:oe("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return g({type:e})},options:H,value:p}),rating:(0,e.createElement)(ve,{key:"rating",label:oe("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR.maxrating,onChange:function(e){return g({rating:e})},value:c}),schema:(0,e.createElement)(we,{key:"schema",checked:d,help:oe("The schema should only be enabled once per page.","admin-text","site-reviews"),label:oe("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return g({schema:e})}}),hide:a(GLSR.hideoptions.site_reviews_summary,u,g)};return[(0,e.createElement)(de,null,(0,e.createElement)(pe,{title:oe("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorControls",w,t)))),(0,e.createElement)(ce,null,Object.values(wp.hooks.applyFilters(GLSR.nameprefix+".summary.InspectorAdvancedControls",{},t))),(0,e.createElement)(ye,{block:he,attributes:t.attributes})]},example:{},icon:{src:u},keywords:["reviews","summary"],save:function(){return null},title:oe("Rating Summary","admin-text","site-reviews")})}()}();