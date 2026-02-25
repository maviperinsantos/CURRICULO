document.addEventListener('DOMContentLoaded', function() {
    const objetivoSection = document.querySelector('.objective');
    const objetivoBtn = document.createElement('button');
    objetivoBtn.textContent = 'Mostrar mais sobre objetivo';
    
    objetivoBtn.addEventListener('click', function() {
        objetivoSection.innerHTML += '<p>Descrição detalhada sobre o objetivo profissional...</p>';
    });

    objetivoSection.appendChild(objetivoBtn);
});