$(document).ready(
    function () {
        $("#frmCadastro").submit(
            function (e) {
                e.preventDefault();
                Cadastrar();
            }
        );
    }

);

function Cadastrar() {
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#msg").val()
    };
    $.post("/Home/Cadastrar", parametros).done(
        function (data) {
            if (data.status == "OK") {
                $("#frmCadastro").after("<h3>Cadastro enviado com sucesso!</h3>")
                $("#frmCadastro").hide();
            }
            else {
                alert(data.mensagem);
            }
        }).fail(function () {
            alert("Falha no cadastro, tente novamente!");
        })
};