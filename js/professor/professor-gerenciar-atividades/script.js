'use strict'

const main = document.getElementById('main')
const buttonAdcionar = document.querySelector('.adcionar')
const buttonDeletar = document.querySelector('.deletar')
const buttonEditar = document.querySelector('.editar')
const modal = document.querySelector('.modal')

const modalContentDeletar = document.querySelector('.modal-content-deletar')
const modalContentAdcionar = document.querySelector('.modal-content-adcionar')
const modalContentEditar = document.querySelector('.modal-content-editar')
const buttonFecharAdd = document.querySelector('.quit-add')
const buttonFecharDel = document.querySelector('.quit-del')
const buttonFecharEdit = document.querySelector('.quit-edit')





const abrirContainerAdcionar = () => {

    
    modalContentAdcionar.style.display = 'flex'
    modalContentDeletar.style.display = 'none'
    modalContentEditar.style.display = 'none'
    modal.style.display = 'flex'
    

}


const abrirContainerDeletar = () => {

    
    modalContentDeletar.style.display = 'flex'
    modalContentAdcionar.style.display = 'none'
    modalContentEditar.style.display = 'none'
    modal.style.display = 'flex'
    

}

const abrirContainerEditar = () => {

    
    modalContentEditar.style.display = 'flex'
    modalContentDeletar.style.display = 'none'
    modalContentAdcionar.style.display = 'none'
    modal.style.display = 'flex'

}


// const save = () => {
    
//     alert('PERFIL SALVO COM SUCESSO')
//     modal.style.display = 'none'
// }

const exitAdd = () => {

   

    buttonFecharAdd.onclick = function() {
        modal.style.display = 'none'
    }
    
}

const exitDel = () => {

   

    buttonFecharDel.onclick = function() {
        modal.style.display = 'none'
    }
    
}
const exitEdit = () => {

   

    buttonFecharEdit.onclick = function() {
        modal.style.display = 'none'
    }
    
}

exitAdd()
exitDel()
exitEdit()

// buttonSalvar.addEventListener('click', save);
buttonAdcionar.addEventListener('click', abrirContainerAdcionar);
buttonDeletar.addEventListener('click', abrirContainerDeletar);
buttonEditar.addEventListener('click', abrirContainerEditar);