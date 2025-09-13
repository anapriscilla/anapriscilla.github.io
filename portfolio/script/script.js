 const projetos = [
      { titulo: "Projeto 1", descricao: "Landing page responsiva com HTML e CSS.", imagem: "https://via.placeholder.com/800x1200" },
      { titulo: "", descricao: "", imagem: "assets/02-completo.png" },
      { titulo: "Projeto 3", descricao: "Dashboard com gráficos interativos.", imagem: "https://via.placeholder.com/800x1200" },
      { titulo: "", descricao: "", imagem: "assets/revenda-oi.png" }
    ];

    function abrirModal(index) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-titulo").textContent = projetos[index].titulo;
  document.getElementById("modal-descricao").textContent = projetos[index].descricao;
  document.getElementById("modal-img").src = projetos[index].imagem;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-fechar").style.display = "flex"; // mostra botão fechar
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
  document.querySelector(".modal-fechar").style.display = "none"; // esconde botão fechar
}

    function scrollToTopo() {
      const modalContainer = document.querySelector(".modal-container");
      modalContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }