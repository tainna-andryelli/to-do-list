function novaTarefa() {
  let inputTarefa = document.getElementById("input-nova-tarefa");
  let inputDia = document.getElementById("dia");
  let inputNoite = document.getElementById("noite");

  // validações
  if (!inputTarefa.value) {
    // alert("Digite uma tarefa para ser inserida na lista.");
    const descricao = document.querySelector(".modal p");
    descricao.innerHTML = "Digite uma tarefa para ser inserida na lista.";

    mostrarModal();
  } else if (!inputDia.checked && !inputNoite.checked) {
    // alert("Selecione um turno para sua tarefa.");
    const descricao = document.querySelector(".modal p");
    descricao.innerHTML = "Selecione um turno para sua tarefa.";

    mostrarModal();
  } else {
    let tarefa = inputTarefa.value;

    let turno = "";
    if (inputDia.checked) {
      turno = "tarefas-dia";
    } else {
      turno = "tarefas-noite";
    }

    insereTarefa(tarefa, turno);
    inputTarefa.value = "";
  }
}

function insereTarefa(tarefa, turno) {
  document.getElementById(turno).innerHTML +=
    "<li><p>" +
    tarefa +
    "</p><div><button class='btn-check' onclick='concluiTarefa(event)'>✔</button><button class='btn-remove' onclick='removeTarefa(event)'>✖</button></div></li>";
}

function concluiTarefa(event) {
  const tarefaConcluida = event.target.parentNode.parentNode;
  tarefaConcluida.querySelector("p").style.textDecoration = "line-through";
}

function removeTarefa(event) {
  const tarefaConcluida = event.target.parentNode.parentNode;
  tarefaConcluida.remove();
}

function mudaTema() {
  const dayMode = document.querySelector(".day-mode");
  const nightMode = document.querySelector(".night-mode");

  dayMode.addEventListener("click", () => {
    document.documentElement.classList.add("light-mode");
  });
  nightMode.addEventListener("click", () => {
    document.documentElement.classList.remove("light-mode");
  });
}

mudaTema();

function mostrarModal() {
  const modal = document.querySelector(".modal-container");
  modal.style.display = "initial";

  const menu = document.querySelector(".menu");
  const tarefas = document.querySelector(".tarefas");
  menu.classList.add("blur");
  tarefas.classList.add("blur");
}

function fecharModal() {
  const modal = document.querySelector(".modal-container");
  const menu = document.querySelector(".menu");
  const tarefas = document.querySelector(".tarefas");

  modal.style.display = "none";
  menu.classList.remove("blur");
  tarefas.classList.remove("blur");
}
