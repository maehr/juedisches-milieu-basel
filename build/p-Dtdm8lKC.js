/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=(t,r,n)=>{if(typeof MutationObserver==="undefined"){return}const u=new MutationObserver((t=>{n(e(t,r))}));u.observe(t,{childList:true,subtree:true});return u};const e=(t,e)=>{let n;t.forEach((t=>{for(let u=0;u<t.addedNodes.length;u++){n=r(t.addedNodes[u],e)||n}}));return n};const r=(t,e)=>{if(t.nodeType!==1){return undefined}const r=t;const n=r.tagName===e.toUpperCase()?[r]:Array.from(r.querySelectorAll(e));return n.find((t=>t.value===r.value))};export{t as w};
//# sourceMappingURL=p-Dtdm8lKC.js.map