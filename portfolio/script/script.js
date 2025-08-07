const projetos = [
  {
    titulo: "Projeto 1",
    descricao: "Landing page responsiva com HTML e CSS.",
    tecnologias: "HTML, CSS",
    imagem: "https://via.placeholder.com/800x500"
  },
  {
    titulo: "Projeto 2",
    descricao: "Blog em React com integração via API.",
    tecnologias: "React, JavaScript",
    imagem: "assets/02-completo.png"
  },
  {
    titulo: "Projeto 3",
    descricao: "Dashboard com gráficos interativos.",
    tecnologias: "JavaScript, Chart.js",
    imagem: "https://via.placeholder.com/800x500"
  },
  {
    titulo: "Projeto 4",
    descricao: "App de tarefas com salvamento local.",
    tecnologias: "HTML, JS, LocalStorage",
    imagem: "https://via.placeholder.com/800x500"
  }
];

function abrirModal(index) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-titulo").textContent = projetos[index].titulo;
  document.getElementById("modal-descricao").textContent = projetos[index].descricao;
  document.getElementById("modal-tecnologias").textContent = projetos[index].tecnologias;
  document.getElementById("modal-img").src = projetos[index].imagem;
  modal.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
