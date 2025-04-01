document.getElementById("confirmar").addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const modelo = document.getElementById("modelo").value;
    const observacoes = document.getElementById("observacoes").value.trim();
    const servicos = document.querySelectorAll('input[name="servico"]:checked');
    const veiculo = document.querySelector('input[name="tipo-veiculo"]:checked');

    if (!nome || !senha || !observacoes || !modelo  || servicos.length === 0 || !veiculo) {
        Swal.fire({
            icon: "info",
            title: "AVISO",
            text: "Preencha todos os campos antes de agendar.",
            confirmButtonText: "OK"
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Agendamento Confirmado",
        text: "Seu agendamento foi realizado com sucesso!",
        confirmButtonText: "OK"
    });
});

document.getElementById("cancelar").addEventListener("click", function () {
    Swal.fire({
        icon: "error",
        title: "Cancelamento",
        text: "O agendamento foi cancelado!",
        confirmButtonText: "OK"
    });

    document.getElementById("formAgendamento").reset();
});
