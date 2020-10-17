document.getElementById('mensagens').style.display = 'none';

function closeMessage(event) {
    event.currentTarget.parentElement.style.display = "none";
}

function abrirMensagem(textoMensagem, classeMensagem) {
    var divMensagens = document.getElementById("mensagens");
    divMensagens.innerHTML = textoMensagem + '<span class="closebtn" onclick="closeMessage(event)">&times;</span>';
    divMensagens.className = 'alert ' + classeMensagem;
    divMensagens.style.display = 'block';
}