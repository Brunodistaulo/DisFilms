(()=>{var e={83:(e,t,n)=>{const d=n(742);e.exports=function(e){const t=document.getElementById("cardMovie");e.forEach((e=>{t.appendChild(d(e))}))}},742:e=>{e.exports=function(e){const{title:t,year:n,director:d,genre:o,rate:a,poster:c}=e,s=document.createElement("img");s.src=c,s.classList.add("moviePoster");const r=document.createElement("a");r.textContent=t,r.href="",r.id="movieTitle";const i=document.createElement("p");i.textContent=`Año: ${n}`,i.classList.add("movieYears");const p=document.createElement("p");p.innerHTML=`Director: ${d}`,p.classList.add("movieDirector");const l=document.createElement("p");l.textContent=o,p.classList.add("movieGnere");const m=document.createElement("p");m.textContent=`Rate: ${a}⭐️`,m.classList.add("movieRate");const u=document.createElement("div");u.classList.add("cardDetails");const v=document.getElementById("cardMovie"),C=document.createElement("div");return C.classList.add("divTodo"),C.appendChild(s),u.appendChild(r),u.appendChild(i),u.appendChild(p),u.appendChild(l),u.appendChild(m),v.appendChild(C),C.appendChild(u),C}}},t={};function n(d){var o=t[d];if(void 0!==o)return o.exports;var a=t[d]={exports:{}};return e[d](a,a.exports,n),a.exports}(()=>{const e=n(83);$.get("https://webpt19b.web.app/data/movies.json",(t=>{e(t)}))})()})();