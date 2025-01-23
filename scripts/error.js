
    const formulario = document.getElementById("my_form");
    const erro = document.getElementById("erro");


    formulario.addEventListener("submit", (evento) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;


        if (!name.trim()) {
            evento.preventDefault();
            erro.innerText = "O campo 'Nome' é obrigatório.";
            document.getElementById("name").classList.add("erro");
        } else if (!email.includes("@")) {
            evento.preventDefault();
            erro.innerText = "Introduza um e-mail válido.";
            document.getElementById("email").classList.add("erro");
        } else if (message.trim()) {
            evento.preventDefault();
            erro.innerText = "Introduza uma mensagem.";
            document.getElementById("message").classList.add("erro");
        } else {
            erro.innerText = "";
            document.getElementById("name").classList.remove("erro");
            document.getElementById("email").classList.remove("erro");
            document.getElementById("message").classList.remove("erro");
        }
    });



