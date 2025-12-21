document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle && menuToggle.addEventListener('click',()=>{
    const expanded = nav.style.display === 'flex';
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav
        if(window.innerWidth<=640){nav.style.display='none'}
      }
    })
  })

  // Contact form handling (simulado)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      status.textContent = 'Enviando...';
      const data = new FormData(form);
      // Simular envío
      setTimeout(()=>{
        status.textContent = 'Gracias — recibimos tu solicitud. Te contactaremos pronto.';
        form.reset();
      },900);
    })
  }
});
