// Ativar caixa de mensagem
function botaoMensagem(){
    const botao = document.getElementById("botao-contato-item")
    const caixaMensagem = document.querySelector(".botao-contato-mensagem")
    const botaoFechar = document.querySelector(".botao-contato-fechar");

    botao.onclick = function(){
        caixaMensagem.classList.add("caixaaberta")
    }

    botaoFechar.onclick = function(){
        caixaMensagem.classList.remove("caixaaberta")
    }
}
window.onload = botaoMensagem()

//Ativar caixa de login

function botaoLogin(){
    const botao1 = document.getElementById("botao-login-item")
    const caixaLogin = document.querySelector(".botao-login-abrir")
    const botaoFechar1 = document.querySelector(".botao-login-fechar");
       
        botao1.onclick = function(){
            caixaLogin.classList.add("loginAberto")
        }   

            botaoFechar1.onclick = function(){
            caixaLogin.classList.remove("loginAberto")
        }  
 
}
window.onload = botaoLogin()