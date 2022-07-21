(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(7),s=a.n(i),c=(a(15),a(9)),n=a(2),r=a(1),l=(a(16),a(10)),o=(a(17),a(18),a(0)),d=function(e){var t=e.title,a=e.description,i=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:i,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[a,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,Object(l.a)({},e),e.imdbId)}))})},b=a(4),j=a.n(b),u=function(e){var t=e.onAdd,a=Object(r.useState)(""),i=Object(n.a)(a,2),s=i[0],c=i[1],l=Object(r.useState)(""),d=Object(n.a)(l,2),m=d[0],b=d[1],u=Object(r.useState)(""),p=Object(n.a)(u,2),h=p[0],g=p[1],O=Object(r.useState)(""),v=Object(n.a)(O,2),x=v[0],f=v[1],N=Object(r.useState)(""),M=Object(n.a)(N,2),w=M[0],y=M[1],U=Object(r.useState)(!1),T=Object(n.a)(U,2),B=T[0],S=T[1],_=Object(r.useState)(!1),I=Object(n.a)(_,2),k=I[0],z=I[1],A=Object(r.useState)(!1),D=Object(n.a)(A,2),V=D[0],Y=D[1],C=Object(r.useState)(!1),F=Object(n.a)(C,2),X=F[0],Z=F[1];return Object(o.jsxs)("form",{method:"post",className:"form needs-validation",onSubmit:function(e){return function(e){e.preventDefault(),e.stopPropagation(),S(!s),z(!h),Y(!x),Z(!w),s&&h&&x&&w&&(t({title:s,description:m,imgUrl:h,imdbUrl:x,imdbId:w}),c(""),b(""),g(""),f(""),y(""))}(e)},children:[Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text",id:"basic-title",children:"Title"}),Object(o.jsx)("input",{type:"text",className:j()("form-control",{"is-invalid":B,"is-valid":s}),"data-cy":"form-title","aria-describedby":"basic-title",value:s,onChange:function(e){c(e.target.value),S(!1)}})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text",children:"Description"}),Object(o.jsx)("textarea",{className:"form-control","aria-label":"With textarea","data-cy":"form-title",value:m,onChange:function(e){return b(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"imgUrl"}),Object(o.jsx)("input",{type:"text",className:j()("form-control",{"is-invalid":k,"is-valid":h}),"aria-label":"Username","aria-describedby":"basic-addon1","data-cy":"form-title",value:h,onChange:function(e){g(e.target.value),z(!1)}})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"imdbUrl"}),Object(o.jsx)("input",{type:"text",className:j()("form-control",{"is-invalid":V,"is-valid":x}),"aria-label":"Username","aria-describedby":"basic-addon1","data-cy":"form-title",value:x,onChange:function(e){f(e.target.value),Y(!1)}})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"imdbId"}),Object(o.jsx)("input",{type:"text",className:j()("form-control",{"is-invalid":X,"is-valid":w}),"aria-label":"Username","aria-describedby":"basic-addon1","data-cy":"form-title",value:w,onChange:function(e){y(e.target.value),Z(!1)}})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})},p=a(8),h=function(){var e=Object(r.useState)(p),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:a})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{onAdd:function(e){i((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.f91e4f99.chunk.js.map