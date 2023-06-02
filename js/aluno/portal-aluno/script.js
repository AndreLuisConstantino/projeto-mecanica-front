'use strict'

const main = document.getElementById('main')
const cardPerfil = document.querySelector('.card-perfil')
const containerPerfil = document.querySelector('.modal')




const abrirContainerPerfil = () => {

    containerPerfil.style.display = 'flex'
    

}

const exit = () => {

    const buttonFechar = document.querySelector('.quit')

    buttonFechar.onclick = function() {

        containerPerfil.style.display = 'none'
    }
    
}

exit()

cardPerfil.addEventListener('click', abrirContainerPerfil);