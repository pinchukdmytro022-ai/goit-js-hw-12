import{a as u,S as m,i}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const y="55690304-17dcdc78479c7615073810898",f="https://pixabay.com/api/",g=async e=>(await u.get(f,{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data;let l;const h=e=>`
  <li class="gallery-card">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-img" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
        loading="lazy" 
      />
    </a>

    <div class="card-info">
      <p><b>Likes</b> ${e.likes}</p>
      <p><b>Views</b> ${e.views}</p>
      <p><b>Comments</b> ${e.comments}</p>
      <p><b>Downloads</b> ${e.downloads}</p>
    </div>
  </li>
`,b=(e,o)=>{const s=e.map(a=>h(a)).join("");o.innerHTML=s,l?l.refresh():l=new m(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250})},L=e=>{e.innerHTML=""},w=e=>{e.classList.add("is-open")},S=e=>{e.classList.remove("is-open")},c=document.querySelector(".form"),d=document.querySelector(".gallery"),p=document.querySelector(".loader"),q=async e=>{e.preventDefault();const o=c.elements.user_query.value.trim();if(!o){i.show({message:"❌ Please enter a search query",color:"red",position:"topRight"});return}L(d),w(p);try{const s=await g(o);s.total===0?i.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):b(s.hits,d)}catch(s){console.error(s),i.show({message:"❌ Something went wrong. Try again later.",color:"red",position:"topRight"})}finally{S(p),c.reset()}};c.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
