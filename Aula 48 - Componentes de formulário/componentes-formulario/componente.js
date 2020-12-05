function mostrarSenha() {
    var txtSenha = document.getElementById("txtSenha");
    var checkMostrarSenha = document.getElementById("checkMostrarSenha");
    if (checkMostrarSenha.checked == true) {
        txtSenha.type = "text";
    } else {
        txtSenha.type = "password";
    }
}