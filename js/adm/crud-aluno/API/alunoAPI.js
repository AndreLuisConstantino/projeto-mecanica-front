'use strict'

export const getAlunos = async () => {

    const url = `http://localhost:8080/v1/projeto-mecanica-senai/aluno`
    const response = await fetch(url)
    const data = await response.json()

    return data

}

export const inserirAlunos = async (aluno) => {

    const url = `http://localhost:8080/v1/projeto-mecanica-senai/aluno`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    }

    fetch(url, options)

}

export const atualizarAluno = async (aluno) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/aluno/id/${aluno.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    }

    fetch(url, options)
}

export const deletarDadosAluno = async (id) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/aluno/id/${id}`
    const options = {
      method: 'DELETE'
    }
  
    fetch(url, options)
}

