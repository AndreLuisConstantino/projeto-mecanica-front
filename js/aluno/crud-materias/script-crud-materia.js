'use strcit'

import { getMateria } from "./API/materiaAPI.js"

const materias = await getMateria()

const listMaterias = materias.materias

const criarCardMateria = (materia) =>{

    const cardMateria = document.createElement('div')
    cardMateria.classList.add('card')

    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = `${materia.nome}`

    const cardCarga = document.createElement('span')
    cardCarga.classList.add('card-carga')
    cardCarga.textContent = `${materia.carga_horaria} Horas`

    cardMateria.append(cardTitle, cardCarga)

    return cardMateria
}

const carregarCard = () => {

    const container = document.querySelector('.container-card')
    const cards = listMaterias.map(criarCardMateria)

    container.replaceChildren(...cards)
}

carregarCard()