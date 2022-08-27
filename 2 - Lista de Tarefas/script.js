let tarefas = [];

let inputAddTarefa = document.querySelector('.inputAddTarefa');
let botaoAddTarefa = document.querySelector('.botaoAddTarefa');

let listagemDeTarefas = document.querySelector('.listagemDeTarefas');

botaoAddTarefa.addEventListener('click', () => {
    addTarefa(inputAddTarefa.value);
    clearInput(inputAddTarefa);
    listarTarefas()
    console.log(tarefas);
});

document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        addTarefa(inputAddTarefa.value);
        clearInput(inputAddTarefa);
        listarTarefas();
    };
});

listagemDeTarefas.addEventListener('click', (e) => {
    if(e.target.id == 'botaoApagar') {
        let parentId = document.querySelector(`.${e.target.className}`).parentElement.id;

        let tarefasFiltradas = tarefas.filter(obj => obj.id != parentId);

        tarefas = tarefasFiltradas;
        
        listarTarefas();
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
    
    for(let i = 0; i < tarefas.length; i++) {
        listagemDeTarefas.innerHTML += `<div class='divFlex' id='${tarefas[i].id}'><li>${tarefas[i].tarefa}</li> <button class=botaoApagar${i} id='botaoApagar'>Apagar</button></div>`;
    };
};