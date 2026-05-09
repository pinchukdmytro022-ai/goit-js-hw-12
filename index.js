import{a as g,S as M,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();g.defaults.baseURL="https://pixabay.com/";const m=async(e,t)=>{const s={params:{key:"55690304-17dcdc78479c7615073810898",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await g.get("api/",s)).data},u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".js-load-more");let v=new M(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});const L=({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:r,comments:o,downloads:l})=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${e}"
          alt="${s}"
        />
      </a>

      <div class="gallery-info">
        <div class="gallery-info-item">
          <p class="gallery-info-title">Likes</p>
          <p class="gallery-info-text">${a}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Views</p>
          <p class="gallery-info-text">${r}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Comments</p>
          <p class="gallery-info-text">${o}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Downloads</p>
          <p class="gallery-info-text">${l}</p>
        </div>
      </div>
    </li>
  `,x=()=>{u.innerHTML=""},P=e=>{const t=e.map(L).join("");u.innerHTML=t,v.refresh()},E=e=>{const t=e.map(L).join("");u.insertAdjacentHTML("beforeend",t),v.refresh()},b=()=>{f.classList.add("is-open")},w=()=>{f.classList.remove("is-open")},S=()=>{h.classList.remove("is-hidden")},c=()=>{h.classList.add("is-hidden")},q=()=>document.querySelectorAll(".gallery-card").length,H=()=>{const e=u.querySelector(".gallery-card");return e?e.getBoundingClientRect().height:0},y=document.querySelector(".search-form"),$=document.querySelector(".js-load-more");let n="",d=1;const p=e=>{i.error({message:e,position:"topRight"})},I=async e=>{if(e.preventDefault(),n=y.elements.user_query.value.trim(),!n){p("Sorry, there are no images matching your search query. Please try again!");return}d=1,x(),c(),b();try{const t=await m(n,d);if(t.totalHits===0){p("Sorry, there are no images matching your search query. Please try again!");return}P(t.hits),y.reset(),q()<t.totalHits?S():(c(),i.show({message:"We're sorry, but you've reached the end of search results.",color:"yellow",position:"topRight"}))}catch(t){i.error({message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.log(t)}finally{w()}},O=async()=>{d+=1,c(),b();try{const e=await m(n,d);E(e.hits);const t=H();scrollBy({top:t*2,behavior:"smooth"}),q()>=e.totalHits?(c(),i.show({message:"We're sorry, but you've reached the end of search results.",color:"yellow",position:"topRight"})):S()}catch(e){i.error({message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.log(e)}finally{w()}};y.addEventListener("submit",I);$.addEventListener("click",O);
//# sourceMappingURL=index.js.map
