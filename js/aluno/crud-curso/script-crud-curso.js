'use strict'

import { getCursos } from "./API/cursoAPI.js";

const cursos = await getCursos()

const listaCursos = cursos.cursos

console.log(listaCursos);

const criarCardCurso = (curso) => {

    const cardCurso = document.createElement('div')
    cardCurso.classList.add('card')

    const link = document.createElement('div')
    link.href = "./portal-aluno.html"

    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = `${curso.nome}`

    const cardSigla = document.createElement('span')
    cardSigla.classList.add('card-h1')
    cardSigla.textContent = `${curso.sigla}`

    const cardCarga = document.createElement('span')
    cardCarga.classList.add('card-carga')
    cardCarga.textContent = `${curso.carga_horaria}`

    link.append(cardCurso)
    cardCurso.append(cardTitle, cardSigla, cardCarga)

    return cardCurso
}

const carregarCard = () =>{
    const container = document.querySelector('.card-container')
    const cards = listaCursos.map(criarCardCurso)

    container.replaceChildren(...cards)
}

console.log(criarCardCurso);

carregarCard()