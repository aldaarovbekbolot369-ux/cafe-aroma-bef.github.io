document.addEventListener('DOMContentLoaded',function(){
  const perfEl=document.querySelector('#perf');
  if(perfEl && performance && performance.timing){
    const t=performance.timing;
    const ttfb=Math.max(0,t.responseStart - t.requestStart);
    const dcl=Math.max(0,t.domContentLoadedEventEnd - t.navigationStart);
    perfEl.textContent=`TTFB: ~${ttfb}ms · DOMContentLoaded: ~${dcl}ms`;
  }
  // Smooth anchors (respect reduced-motion)
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:(window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth')});}
  }));
});