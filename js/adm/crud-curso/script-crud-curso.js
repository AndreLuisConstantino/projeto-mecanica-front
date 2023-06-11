'use strict'

import {
    getCursos,
    inserirCurso
} from "./API/cursoAPI.js"

const cursos = await getCursos()

const listaCursos = cursos.cursos

console.log(listaCursos)

const criarCardCurso = (curso) => {
    const cardCurso = document.createElement("div")
    cardCurso.classList.add("card__curso")

    const link = document.createElement("a")
    link.classList.add("link")
    link.href = "./portal-admin.html"

    const cardTitle = document.createElement("span")
    cardTitle.classList.add("card__title")
    cardTitle.textContent = `${curso.nome}`

    const cardH1 = document.createElement("span")
    cardH1.classList.add("card__h1")
    cardH1.textContent = `${curso.sigla}`

    const cardCarga = document.createElement("span")
    cardCarga.classList.add("card__carga")
    cardCarga.textContent = `Carga Horária: ${curso.carga_horaria}`

    link.append(cardTitle, cardH1, cardCarga)

    const cardInteracao = document.createElement("div")
    cardInteracao.classList.add("card__interacao")

    const buttonExcluir = document.createElement("button")
    buttonExcluir.type = "button";
    buttonExcluir.classList.add("btn", "btn-primary")
    buttonExcluir.setAttribute("data-bs-toggle", "modal")
    buttonExcluir.setAttribute("data-bs-target", "#modal-excluir")
    

    const buttonEditar = document.createElement("button")
    buttonEditar.type = "button";
    buttonEditar.classList.add("btn", "btn-primary")
    buttonEditar.setAttribute("data-bs-toggle", "modal")
    buttonEditar.setAttribute("data-bs-target", "#modal-editar")
    buttonEditar.onclick = localStorage.setItem('')
    
    //<i class="fa-solid fa-x"></i> icone de excluir
    const iconeExcluir = document.createElement("i")
    iconeExcluir.classList.add("fa-solid")
    iconeExcluir.classList.add("fa-x")

    //<i class="fa-solid fa-pen-to-square"></i> icone de editar
    const iconeEditar = document.createElement("i")
    iconeEditar.classList.add("fa-solid")
    iconeEditar.classList.add("fa-pen-to-square")

    link.append(cardTitle, cardH1, cardCarga)

    buttonExcluir.append(iconeExcluir)
    buttonEditar.append(iconeEditar)
    cardInteracao.append(buttonEditar, buttonExcluir)

    cardCurso.append(link, cardInteracao)


    return cardCurso
  }

const criarCurso = () => {
    const buttonSalvar = document.getElementById('salvarAdicionar')

    buttonSalvar.addEventListener('click', () => {

        const nomeCurso = document.getElementById('inputNomeCurso').value
        const siglaCurso = document.getElementById('inputSiglaCurso').value
        const cargaCurso = document.getElementById('inputCargaCurso').value
        const descricaoCurso = document.getElementById('textareaDescricaoCurso').value

        if (nomeCurso == '' || siglaCurso == '' || isNaN(cargaCurso) || descricaoCurso == '') {
            alert('Preencha os campos corretamente!')
        } else {

            const curso = {
                "nome": nomeCurso,
                "sigla": siglaCurso,
                "carga_horaria": cargaCurso,
                "descricao": descricaoCurso
            }

            inserirCurso(curso)
            window.location.reload(true)                        
        }
    })
}

const carregarCards = () => {
    const container = document.querySelector('.card-container')
    const cards = listaCursos.map(criarCardCurso)

    container.replaceChildren(...cards)
}

criarCurso()
carregarCards()