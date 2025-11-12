document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                formMessage.textContent = 'Por favor, preencha todos os campos.';
                formMessage.style.color = 'red';
                return;
            }

            const formData = new FormData(form);

            fetch('php/enviar_contato.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                formMessage.textContent = data;
                formMessage.style.color = 'green';
                form.reset();
            })
            .catch(error => {
                formMessage.textContent = 'Ocorreu um erro ao enviar a mensagem.';
                formMessage.style.color = 'red';
            });
        });
    }
});

// Seleciona o ícone do hambúrguer e a lista de links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Adiciona um evento de clique ao ícone do hambúrguer
hamburger.addEventListener("click", () => {
    // Adiciona/remove a classe 'active' do ícone
    hamburger.classList.toggle("active");
    // Adiciona/remove a classe 'active' da lista de links
    navLinks.classList.toggle("active");
});