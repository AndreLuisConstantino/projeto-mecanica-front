'use strict'

import {
    getAlunos, inserirAlunos, atualizarAluno, deletarDadosAluno
} from "./API/alunoAPI.js"

const alunos = await getAlunos()

const listaAlunos = alunos.alunos

console.log(listaAlunos)

const criarCardAluno = (aluno) => {
    const cardAluno = document.createElement('div')
    cardAluno.classList.add("card-aluno")

    const link = document.createElement('a')
    link.classList.add("link")
    link.href = "./portal-admin.html"

    const cardNome = document.createElement('span')
    cardNome.classList.add("card-nome")
    cardNome.textContent = `${aluno.nome.toUpperCase()}`

    const cardMatricula = document.createElement('span')
    cardMatricula.classList.add("card-matricula")
    cardMatricula.textContent = `${aluno.numero_matricula}`


    link.append(cardNome, cardMatricula)

    const cardInteracao = document.createElement('div')
    cardInteracao.classList.add("card__interacao")


    const buttonExcluir = document.createElement('button')
    buttonExcluir.type = "button"
    buttonExcluir.classList.add("btn", "btn-primary")
    buttonExcluir.setAttribute("data-bs-toggle", "modal")
    buttonExcluir.setAttribute("data-bs-target", "#modal-excluir")
    buttonExcluir.addEventListener('click', () =>{
        localStorage.setItem('id-excluir', aluno.id)
    })

    const buttonEditar = document.createElement('button')
    buttonEditar.type = "button"
    buttonEditar.classList.add("btn", "btn-primary")
    buttonEditar.setAttribute("data-bs-toggle", "#modal")
    buttonEditar.setAttribute("data-bs-target", "#modal-editar")
    buttonEditar.addEventListener('click', () => {
        localStorage.setItem(`id-editar`, aluno.id)
        localStorage.setItem(`nome-editar`, aluno.nome)
        localStorage.setItem(`rg-editar`, aluno.rg)
        localStorage.setItem(`cpf-editar`, aluno.cpf)
        localStorage.setItem(`data-nascimento-editar`, aluno.data_nascimento)
        editarAluno()
    })

    //<i class="fa-solid fa-x"></i> icone de excluir
    const iconeExcluir = document.createElement("i")
    iconeExcluir.classList.add("fa-solid")
    iconeExcluir.classList.add("fa-x")

    //<i class="fa-solid fa-pen-to-square"></i> icone de editar
    const iconeEditar = document.createElement("i")
    iconeEditar.classList.add("fa-solid")
    iconeEditar.classList.add("fa-pen-to-square")

    link.append(cardNome, cardMatricula)

    buttonExcluir.append(iconeExcluir)
    buttonEditar.append(iconeEditar)
    cardInteracao.append(buttonEditar, buttonExcluir)

    cardAluno.append(link, cardInteracao)

    return cardAluno
}

const criarAluno = () => {
    const buttonSalvar = document.getElementById('salvarAdicionar')

    buttonSalvar.addEventListener('click', () =>{

        const nomeAluno = document.getElementById('inputNomeAluno').value        
        const dataNascimentoAluno = document.getElementById('inputDataNascimento').value
        const matriculaAluno = document.getElementById('inputMatriculaAluno').value
        const emailAluno = document.getElementById('inputEmailAluno').value
        const senhaAluno = document.getElementById('inputSenhaAluno').value

        if(nomeAluno == '' || dataNascimentoAluno == ''){
            alert('Preencha os campos corretamente!')
        }else{

            const aluno = {
                "nome": nomeAluno,
                "data_nascimento": dataNascimentoAluno
            }

            console.log(aluno)

            inserirAlunos(aluno)
            // window.location.reload(true)
        }
    })
}

const editarAluno = () => {
    const buttonEditar = document.getElementById('salvarEditar')

    const inputNomeAlunoEditar = document.getElementById('inputNomeAlunoEditar')
    const inputDataNascimentoEditar = document.getElementById('inputDataNascimentoEditar')
    const inputMatriculaAlunoEditar = document.getElementById('inputMatriculaAlunoEditar')
    const inputEmailAlunoEditar = document.getElementById('inputEmailAlunoEditar')
    const inputSenhaAlunoEditar = document.getElementById('inputSenhaAlunoEditar')

    buttonEditar.addEventListener('click', () => {
        const nomeAluno = inputNomeAlunoEditar.value
        const dataNascimentoAluno = inputDataNascimentoEditar.value
        const matriculaAluno = inputMatriculaAlunoEditar.value
        const emailAluno = inputEmailAlunoEditar.value
        const senhaAluno = inputSenhaAlunoEditar.value

        if(nomeAluno == '' || dataNascimentoAluno == '' || matriculaAluno == ''){
            alert('Preencha os campos corretamente!')
        }else{

            const aluno = {
                "nome": nomeAluno,
                "data_nascimento": dataNascimentoAluno
            }

            atualizarAluno(aluno)
            window.location.reload(true)
        }
        
    })

}

const deletarAluno = () =>{
    const buttonExcluir = document.getElementById('excluir')

    const idAluno = localStorage.getItem('id-excluir')

    buttonExcluir.addEventListener('click', () =>{
        deletarDadosAluno(idAluno)
        window.location.reload(true)
    })
}
const carregarCards = () => {
    const container = document.querySelector('.card-container')
    const cards = listaAlunos.map(criarCardAluno)

    container.replaceChildren(...cards)
}
criarAluno()
editarAluno()
deletarAluno()
carregarCards()