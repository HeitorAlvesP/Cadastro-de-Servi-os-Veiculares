document.getElementById("confirmar").addEventListener("click", function () {
    Swal.fire({
        icon: "success",
        title: "Confirmado",
        text: "Seu agendamento foi realizado com sucesso!",
        confirmButtonText: "OK"
    });
});


document.getElementById("cancelar").addEventListener("click", function () {
    Swal.fire({
        icon: "error",
        title: "Cancelado",
        text: "Seu agendamento foi cancelado.",
        confirmButtonText: "OK"
    });
});