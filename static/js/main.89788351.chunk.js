(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(7),s=a.n(n),o=a(2),u=a(3),i=a(5),l=a(4),h=(a(12),a(0));function m(e){var t=e.openModal,a=e.getImage,r=e.largeImage,c=e.preiew,n=e.desc;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(e){t(),a(e)},children:Object(h.jsx)("img",{className:"ImageGalleryItem-image",src:c,"data-source":r,alt:n})})}m.default={preiew:"https://dummyimage.com/280x150/2a2a2a/ffffff&text=Product+image+placeholder",largeImage:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"};var b=m,p=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchValue:"",searchResults:[],page:1},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.searchValue,c=this.props.searchValue;r!==c&&fetch("https://pixabay.com/api/?q=".concat(c,"&page=1&key=23105457-2163ce7f6d7cdb7b080badb2a&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({searchResults:e.hits})}))}},{key:"render",value:function(){return Object(h.jsx)("ul",{className:"ImageGallery",children:this.state.searchResults.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(h.jsx)(b,{preiew:a,largeImage:r,desc:c},t)}))})}}]),a}(r.Component),f=p,j=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchValue:""},e.getSearchValue=function(t){e.setState({searchValue:t.currentTarget.value.toLowerCase()})},e.submitSearchValue=function(t){t.preventDefault(),""!==e.state.searchValue.trim()&&(e.props.onSubmit(e.state.searchValue),e.reset())},e.reset=function(){e.setState({searchValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.submitSearchValue,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.getSearchValue})]})})}}]),a}(r.Component),d=j,g=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchValue:""},e.handleSubmit=function(t){e.setState({searchValue:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{onSubmit:this.handleSubmit}),Object(h.jsx)(f,{searchValue:this.state.searchValue})]})}}]),a}(r.Component),O=g;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.89788351.chunk.js.map