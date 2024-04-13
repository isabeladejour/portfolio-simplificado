// Objetivo 1 - quando o usuario clicar no botao mostrar mais deve abrir os projetos que estao escondidos no html
// passo 1 - pegar o botao mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', ()=>{

    mostratMaisProjetos();
    esconderBotao();
    
    //objetivo 2 - esconder o botao de mostrar mais
    botaoMostrarProjetos.classList.add('remover');

    function esconderBotao() {
        mostratMaisProjetos();
    }
})

function mostratMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
