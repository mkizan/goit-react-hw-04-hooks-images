(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(4),o=c.n(r),s=(c(15),c(16),c(3)),i=c(7),u=(c(17),c(1));function l(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),""!==a.trim()?(e.onSubmit(a,1),r("")):i.b.error("Enter the name of your picture theme")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:function(e){r(e.target.value)}})]})})}var j=c(9),b=c(10),m=c.n(b);function h(){return Object(u.jsx)(m.a,{type:"Grid",color:"#00BFFF",height:80,width:80,timeout:5e3,className:"loader"})}var d={getData:function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n="https://pixabay.com/api/",a="21953239-920783d9236e07918df0be6ca",r="".concat(n,"?q=").concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=").concat(c);return fetch(r).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))}},O=function(e){var t=e.imageQuery,c=e.openModal;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,a=e.largeImageURL,r=e.tags;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return c(a)},children:Object(u.jsx)("img",{src:n,alt:r,className:"ImageGalleryItem-image"})},t)}))})},f=function(e){var t=e.onPushButton;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},g=document.querySelector("#modal-root");function p(e){Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(t){"Escape"===t.code&&e.closeModal()};return Object(r.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(t){t.currentTarget===t.target&&e.closeModal()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:e.largeImage,alt:""})})}),g)}function x(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1],m=Object(n.useState)(!1),g=Object(s.a)(m,2),x=g[0],y=g[1],v=Object(n.useState)(!1),S=Object(s.a)(v,2),w=S[0],N=S[1];function F(){N(!0),setTimeout((function(){d.getData(e.searchQuery,e.page).then((function(t){1===e.page?r(t.hits):(r((function(e){return[].concat(Object(j.a)(e),Object(j.a)(t.hits))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).finally((function(){N(!1),e.setPage((function(e){return e+1}))}))}),200)}Object(n.useEffect)((function(){e.searchQuery&&(r([]),F())}),[e.searchQuery]);return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:Object(u.jsx)(O,{imageQuery:a,openModal:function(e){y(!0),b(e)}})}),0===a.length&&Object(u.jsx)("p",{children:'No images for your request "'.concat(e.searchQuery,'"')}),x&&Object(u.jsx)(p,{closeModal:function(){y(!1),b("")},largeImage:l}),w&&Object(u.jsx)(h,{}),a.length>0&&Object(u.jsx)(f,{onPushButton:F})]})}function y(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),o=Object(s.a)(r,2),j=o[0],b=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{onSubmit:function(e,t){a(e),b(t)}}),Object(u.jsx)(i.a,{autoClose:3e3}),Object(u.jsx)(x,{searchQuery:c,page:j,setPage:b})]})}o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ace701bf.chunk.js.map