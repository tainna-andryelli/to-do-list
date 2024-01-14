function novaTarefa() {
  let inputTarefa = document.getElementById("input-nova-tarefa");
  let inputDia = document.getElementById("dia");
  let inputNoite = document.getElementById("noite");

  // validações
  if (!inputTarefa.value) {
    alert("Digite uma tarefa para ser inserida na lista.");
  } else if (!inputDia.checked && !inputNoite.checked) {
    alert("Selecione um turno para sua tarefa.");
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
    "<li><p >" +
    tarefa +
    "</p><button class='btn-check' onclick='concluiTarefa(event)'>✔</button></li>";
}

function concluiTarefa(event) {
  const tarefaConcluida = event.target.parentNode;
  console.log(tarefaConcluida);

  tarefaConcluida.querySelector("p").style.textDecoration = "line-through";
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
