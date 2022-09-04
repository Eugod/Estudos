let tarefas = [];

let inputAddTarefa = document.querySelector('.inputAddTarefa');
let botaoAddTarefa = document.querySelector('.botaoAddTarefa');

let listagemDeTarefas = document.querySelector('.listagemDeTarefas');

inputAddTarefa.focus();
console.log(tarefas)

botaoAddTarefa.addEventListener('click', () => {
    if (inputAddTarefa.value == '') {
        alert('[ERRO] Ação inválida!');
    } else {
        addTarefa(inputAddTarefa.value);
        clearInput(inputAddTarefa);
        listarTarefas();

        localStorage.removeItem('tarefas');
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    };
});

document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        if (inputAddTarefa.value == '') {
            alert('[ERRO] Ação inválida!');
        } else {
            addTarefa(inputAddTarefa.value);
            clearInput(inputAddTarefa);
            listarTarefas();

            localStorage.removeItem('tarefas');
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        };
    };
});

listagemDeTarefas.addEventListener('click', (e) => {
    if (e.target.id == 'botaoApagar') {
        let parentId = document.querySelector(`.${e.target.className}`).parentElement.id;

        let tarefasFiltradas = tarefas.filter(obj => obj.id != parentId);

        tarefas = tarefasFiltradas;

        listarTarefas();

        localStorage.removeItem('tarefas');
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    };
});

function addTarefa(valorInput) {
    tarefas.push(criaTarefa(valorInput));
};

function criaTarefa(valorInput) {
    return {
        id: Date.now(),
        tarefa: valorInput
    };
};

function clearInput(input) {
    input.value = '';
    input.focus();
};

function listarTarefas() {
    listagemDeTarefas.innerHTML = '';

    for (let i = 0; i < tarefas.length; i++) {
        listagemDeTarefas.innerHTML += `<div class='divFlex' id='${tarefas[i].id}'><li>${tarefas[i].tarefa}</li> <button class=botaoApagar${i} id='botaoApagar'>Apagar</button></div>`;
    };
};

window.onload = function carregarInfos() {
    let tarefasString = localStorage.getItem('tarefas');

    if (tarefasString != null) {
        tarefas = JSON.parse(tarefasString);

        listarTarefas();
    };
};