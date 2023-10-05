//alert(123)
const modal= document.querySelector('#janelaModal');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.closeBtn');

//listeners
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click',outsideClick);

//função abrir a modal
function openModal(){
    //console.log(123);
    modal.style.display ='block';
}

//função fechar a modal
function closeModal(){
    modal.style.display ='none';
}

function outsideClick(e){ //o e dá as informações do que acontece
    if(e.target == modal)
    {
        modal.style.display = 'none'; //se e só se a janela estiver aberta é que o clique fecha
    }
   
}