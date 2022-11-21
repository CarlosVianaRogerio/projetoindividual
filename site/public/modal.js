function iniciaModal(modalid){
    const modal = document.getElementById(modalid);{
    modal.classList.add('mostrar');

    modal.classList.add('mostrar');
                modal.addEventListener('click', (e) => {
                    if(e.target.id == modalid || e.target.className == 'fechar') {
                        modal.classList.remove('mostrar');
                        localStorage.fechaModal = modalid;
                    }

                });
            }
}


function abrirModal(){
    iniciaModal('modal-quiz')}