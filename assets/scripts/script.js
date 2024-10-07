// Função para abrir a modal
function openModal() 
{
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
}


// Função para fechar a modal
function closeModal() 
{
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}