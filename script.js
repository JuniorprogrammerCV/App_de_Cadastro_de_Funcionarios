const btnAdicionar = document.getElementById("btn-adicionar");
const segWind = document.getElementById("segunda-janela");
const ocultWind = document.getElementById("ocultar-janela");
const btnFunc = document.getElementById("btn-func");
const listaFuncionarios = document.getElementById("lista-funcionarios");
const detalhesFunc = document.getElementById("detalhes-func");

const funcionarios = [{
    nome: "Jonh Doe",
    idade: 30,
    url: "url",
    morada: "Monte Sossego",
    email: "jonh.doe@cv.com",
    telefone: "+2389646456"
}];

function adicionarFuncionario() {
    segWind.style.display = "block";
}

function ocultarJanela() {
    segWind.style.display = "none";
}


function adicionarNaLista(funcionario) {
    const p = document.createElement("p"); 
    p.textContent = funcionario.nome; 
    const btnRemover = document.createElement("button");
    btnRemover.textContent = " x ";
    btnRemover.addEventListener('click', () => {
        listaFuncionarios.removeChild(p); 
    });

    p.appendChild(btnRemover);
    p.addEventListener('click', () => {
        mostrarDetalhes(funcionario); 
    });

    listaFuncionarios.appendChild(p); 
}


function cadastrarFuncionario() {
    const nome = document.getElementById("nome").value;
    const morada = document.getElementById("morada").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    
    const funcionario = {
        nome: nome,
        morada: morada,
        email: email,
        telefone: telefone
    };

}



function mostrarDetalhes(funcionario) {
    // Seleciona os elementos dentro da seção de detalhes
    const img = detalhesFunc.querySelector('img');
    const p = detalhesFunc.querySelector('p');

    // Atualiza os atributos e o conteúdo dos elementos
    img.src = funcionario.url;
    img.alt = funcionario.nome;
    p.innerHTML = `
        ${funcionario.nome} <br>
        ${funcionario.morada} <br>
        ${funcionario.email} <br>
        ${funcionario.telefone}
    `;
}


ocultWind.addEventListener('click', ocultarJanela);
btnAdicionar.addEventListener('click', adicionarFuncionario);
btnFunc.addEventListener('click', cadastrarFuncionario);


// Adiciona os funcionários iniciais na lista
funcionarios.forEach(funcionario => adicionarNaLista(funcionario));
