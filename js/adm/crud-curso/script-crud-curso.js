'use strict'

import {
    getCursos,
    inserirCurso,
    atualizaCurso,
    deletarDadosCurso
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
    buttonExcluir.addEventListener('click', () => {
        localStorage.setItem('id-excluir', curso.id)
    })
    
    const buttonEditar = document.createElement("button")
    buttonEditar.type = "button";
    buttonEditar.classList.add("btn", "btn-primary")
    buttonEditar.setAttribute("data-bs-toggle", "modal")
    buttonEditar.setAttribute("data-bs-target", "#modal-editar")
    buttonEditar.addEventListener('click', () => {
        localStorage.setItem('id-editar', curso.id)
        localStorage.setItem(`nome-editar`, curso.nome)
        localStorage.setItem(`descricao-editar`, curso.descricao)
        localStorage.setItem(`sigla-editar`, curso.sigla)
        localStorage.setItem(`carga-editar`, curso.carga_horaria)
    })
    
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
                "nome": `${nomeCurso}`,
                "sigla": `${siglaCurso}`,
                "carga_horaria": cargaCurso,
                "descricao": `${descricaoCurso}`
            }

            inserirCurso(curso)
            // window.location.reload(true)                     
        }
    })
}

const editarCurso = () => {
    const buttonEditar = document.getElementById('salvarEditar')

    const idAntigo = localStorage.getItem('id-editar')
    // const nomeAntigo = localStorage.getItem('nome-editar')
    // const descricaoAntiga = localStorage.getItem('descricao-editar')
    // const siglaAntiga = localStorage.getItem('sigla-editar')
    // const cargaAntiga = localStorage.getItem('carga-editar')

    const inputNomeCursoEditar = document.getElementById('inputNomeCursoEditar')
    const inputSiglaCursoEditar = document.getElementById('inputSiglaCursoEditar')
    const inputCargaCursoEditar = document.getElementById('inputCargaCursoEditar')
    const textareaDescricaoCursoEditar = document.getElementById('textareaDescricaoCursoEditar')

    // inputNomeCursoEditar.value = nomeAntigo
    // inputSiglaCursoEditar.value = siglaAntiga
    // inputCargaCursoEditar.value = cargaAntiga
    // textareaDescricaoCursoEditar.value = descricaoAntiga

    buttonEditar.addEventListener('click', () => {
        const nomeCurso = inputNomeCursoEditar.value
        const siglaCurso = inputSiglaCursoEditar.value
        const cargaCurso = inputCargaCursoEditar.value
        const descricaoCurso = textareaDescricaoCursoEditar.value

        if (nomeCurso == '' || siglaCurso == '' || isNaN(cargaCurso) || descricaoCurso == '') {
            alert('Preencha os campos corretamente!')
        } else {

            const curso = {
                "id": idAntigo, 
                "nome": `${nomeCurso}`,
                "sigla": `${siglaCurso}`,
                "carga_horaria": cargaCurso,
                "descricao": `${descricaoCurso}`
            }
            atualizaCurso(curso)
            // window.location.reload(true) 
        }
    })
}

const deletaCurso = () => {
    const buttonExcluir = document.getElementById('excluir')

    const idCurso = localStorage.getItem('id-excluir')

    buttonExcluir.addEventListener('click', () => {
        deletarDadosCurso(idCurso)
        window.location.reload(true)
    })
}

const carregarCards = () => {
    const container = document.querySelector('.card-container')
    const cards = listaCursos.map(criarCardCurso)

    container.replaceChildren(...cards)
}

criarCurso()
editarCurso()
deletaCurso()
carregarCards()