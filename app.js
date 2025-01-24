let nomesSorteados = [];
let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        exibirTextoNaTela('ul', 'Por favor, insira um nome.')
    } else {
        if (listaAmigos.includes(amigo)) {
            alert('Esse amigo já está na lista');
        } else {
            listaAmigos.push(amigo);
            console.log(listaAmigos);
            exibirTextoNaTela('ul',listaAmigos);
        }
    }
    limparCampo();
}


function sortearAmigo() {
    if (listaAmigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let nomeSorteado = listaAmigos[indiceAleatorio];
        listaAmigos.splice(indiceAleatorio, 1);
        exibirTextoNaTela('ul',nomeSorteado);
        nomesSorteados.push(nomeSorteado);
    } else {
        exibirTextoNaTela('ul','Todos os participantes já foram sorteados');
    }
    limparCampo();
}