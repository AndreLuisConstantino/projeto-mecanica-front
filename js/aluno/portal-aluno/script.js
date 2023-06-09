'use strict'

const main = document.getElementById('main')
const cardPerfil = document.querySelector('.card-perfil')
const containerPerfil = document.querySelector('.modal')
const buttonSalvar = document.querySelector('.save')

const abrirContainerPerfil = () => {
    containerPerfil.style.display = 'flex'
}

const exit = () => {

    const buttonFechar = document.querySelector('.quit')

    buttonFechar.onclick = () => {
        containerPerfil.style.display = 'none'
    }
}



const save = () => {
    
    alert('PERFIL SALVO COM SUCESSO')
    containerPerfil.style.display = 'none'
}
exit()

buttonSalvar.addEventListener('click', save)
cardPerfil.addEventListener('click', abrirContainerPerfil);