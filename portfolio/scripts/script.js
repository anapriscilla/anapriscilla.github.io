// menu toggle
  function toggleMenu(){
    const sb = document.getElementById('sidebar');
    const isOpen = sb.classList.toggle('open');
    sb.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  // placeholder openCase
  function openCase(id){
    // para agora abre alert; na versão seguinte podemos abrir modal ou case.html
     window.location.href = `../pages/page.html`;
  }

  // close sidebar on Esc
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){
    const sb = document.getElementById('sidebar');
    if(sb.classList.contains('open')) toggleMenu();
  }});


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  });

  const title = document.querySelector('.projects h2');
  observer.observe(title);

  document.getElementById("scrollToProjects").addEventListener("click", function() {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth"
    });
  });


  document.getElementById("ano").textContent = new Date().getFullYear();
