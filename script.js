const botaoMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


// Abre e fecha o menu no celular

botaoMenu.addEventListener("click", function() {

    menu.classList.toggle("ativo");

});


// Fecha o menu quando clicar em um link

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("ativo");

    });

});


// Formulário

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem-enviada");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagem.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();

});