let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Sessão Inicial ------------------------------------------------------------------------

let botaoCriptografar = document.querySelector('.botaoCriptografar');
let botaoDescriptografar = document.querySelector('.botaoDescriptografar');

let sessaoInicial = document.querySelector('.sessaoInicial');

let option;

// Sessão Criptografia -------------------------------------------------------------------

let botaoCriptografarMsg = document.querySelector('.botaoCriptografarMsg');
let botaoVoltarCripto = document.querySelector('.botaoVoltarCripto');

let sessaoCriptografia = document.querySelector('.sessaoCriptografia');
let divSaidaMsgCripto = document.querySelector('.divSaidaMsgCripto');

let inputCriptoMsg = document.querySelector('.inputCriptoMsg');
let inputCriptoMetodo = document.querySelector('.inputCriptoMetodo');

// Sessão Descriptografia ----------------------------------------------------------------

let botaoDescriptografarMsg = document.querySelector('.botaoDescriptografarMsg');
let botaoVoltarDescripto = document.querySelector('.botaoVoltarDescripto');

let sessaoDescriptografia = document.querySelector('.sessaoDescriptografia');
let divSaidaMsgDescripto = document.querySelector('.divSaidaMsgDescripto');

let inputDescriptoMsg = document.querySelector('.inputDescriptoMsg');
let inputDescriptoMetodo = document.querySelector('.inputDescriptoMetodo');

// ---------------------------------------------------------------------------------------

botaoCriptografar.addEventListener('click', () => {
    sessaoInicial.setAttribute('style', 'display: none');
    sessaoCriptografia.removeAttribute('style');
    option = 'cripto';
});

botaoDescriptografar.addEventListener('click', () => {
    sessaoInicial.setAttribute('style', 'display: none');
    sessaoDescriptografia.removeAttribute('style');
    option = 'descripto';
});

botaoCriptografarMsg.addEventListener('click', () => {
    criptografia(inputCriptoMsg, inputCriptoMetodo, criptografarOuDescriptografarMsg, divSaidaMsgCripto);
});

botaoVoltarCripto.addEventListener('click', () => {
    voltar(sessaoCriptografia, inputCriptoMsg, inputCriptoMetodo, divSaidaMsgCripto);
});

botaoDescriptografarMsg.addEventListener('click', () => {
    criptografia(inputDescriptoMsg, inputDescriptoMetodo, criptografarOuDescriptografarMsg, divSaidaMsgDescripto);
});

botaoVoltarDescripto.addEventListener('click', () => {
    voltar(sessaoDescriptografia, inputDescriptoMsg, inputDescriptoMetodo, divSaidaMsgDescripto);
});

function criptografia(inputMsg, inputMetodo, funcao, divSaida) {
    let valorMsg = inputMsg.value;
    let valorMetodo = Number(inputMetodo.value);

    if (valorMetodo > 25) {
        alert('O valor máximo para o método é 25.');
        clearInput(inputMetodo);

    } else if (valorMetodo == 0 || valorMetodo < 0) {
        alert('O valor para o método não pode ser igual ou menor que 0.');
        clearInput(inputMetodo);

    } else {
        let msgCriptografada = funcao(valorMsg.toLowerCase(), valorMetodo);

        mostrarMsg(divSaida, msgCriptografada);
    };
};

function criptografarOuDescriptografarMsg(msg, metodo) {
    let msgCriptoOuDescripto = '';
    let letraDoAlfabeto;
    let indiceNoAlfabeto;

    for (let i = 0; i < msg.length; i++) {
        indiceNoAlfabeto = alfabeto.indexOf(msg[i]);

        if (option == 'cripto') {
            if (indiceNoAlfabeto == -1) {
                msgCriptoOuDescripto += msg[i];

            } else {
                if (indiceNoAlfabeto + metodo > 25) {
                    letraDoAlfabeto = alfabeto[(indiceNoAlfabeto + metodo) - 26];

                } else {
                    letraDoAlfabeto = alfabeto[indiceNoAlfabeto + metodo];
                };

                msgCriptoOuDescripto += letraDoAlfabeto;
            };
        } else {
            if (indiceNoAlfabeto == -1) {
                msgCriptoOuDescripto += msg[i];

            } else {
                if (indiceNoAlfabeto - metodo < 0) {
                    letraDoAlfabeto = alfabeto[(indiceNoAlfabeto - metodo) + 26];

                } else {
                    letraDoAlfabeto = alfabeto[indiceNoAlfabeto - metodo];
                };

                msgCriptoOuDescripto += letraDoAlfabeto;
            };
        };
    };

    return msgCriptoOuDescripto;
};

function mostrarMsg(div, msg) {
    div.removeAttribute('style');

    div.innerHTML = '';

    div.innerHTML += `
    <p><b>Mensagem traduzida:</b></p>
    <p>${msg}</p>
    `;
};

function voltar(sessao, inputMsg, inputMetodo, div) {
    sessaoInicial.removeAttribute('style');

    sessao.setAttribute('style', 'display: none');

    div.setAttribute('style', 'display: none')

    inputMsg.value = '';
    inputMetodo.value = '';
    div.innerHTML = '';
};

function clearInput(input) {
    input.value = '';
    input.focus();
};