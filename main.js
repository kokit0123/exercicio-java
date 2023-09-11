document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        document.getElementById('mensagem').textContent = 'Formulário válido!';
        document.getElementById('mensagem').style.color = 'green';
    } else {
        document.getElementById('mensagem').textContent = 'Formulário inválido! B deve ser maior que A.';
        document.getElementById('mensagem').style.color = 'red';
    }
});