document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode fazer o que quiser com os dados, como enviá-los para um servidor
    // Exemplo: Exibir uma mensagem de sucesso
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    responseDiv.style.color = 'green';

    // Limpar o formulário
    document.getElementById('contactForm').reset();
});