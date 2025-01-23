const formulario = document.getElementById("my_form");
formulario.addEventListener("submit", (evento) => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    document.getElementById("erro-name").innerText = "";
    document.getElementById("erro-email").innerText = "";
    document.getElementById("erro-message").innerText = "";
    

    document.getElementById("name").classList.remove("erro");
    document.getElementById("email").classList.remove("erro");
    document.getElementById("message").classList.remove("erro");


    let formIsValid = true;


    if (!name.trim()) {
        evento.preventDefault();
        document.getElementById("erro-name").innerText = "O campo 'Nome' é obrigatório.";
        document.getElementById("name").classList.add("error");
        document.getElementById("name").style.borderColor = "red";
        formIsValid = false;
    }

    if (!email.includes("@")) {
        evento.preventDefault();
        document.getElementById("erro-email").innerText = "Introduza um e-mail válido.";
        document.getElementById("email").classList.add("error");
        document.getElementById("email").style.borderColor = "red";
        formIsValid = false;
    }

    if (!message.trim()) {
        evento.preventDefault();
        document.getElementById("erro-message").innerText = "Introduza uma mensagem.";
        document.getElementById("message").classList.add("error");
        document.getElementById("message").style.borderColor = "red";
        formIsValid = false;
    }
});