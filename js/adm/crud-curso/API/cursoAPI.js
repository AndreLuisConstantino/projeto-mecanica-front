'use strict'

export const getCursos = async () => {

    const url = `http://localhost:8080/v1/projeto-mecanica-senai/curso`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const inserirCurso = async (curso) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/curso`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    }

    fetch(url, options)
}

export const atualizaCurso = async (curso) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/curso/id/${curso.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    }

    fetch(url, options)
}

export const deletarDadosCurso = async (id) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/curso/id/${id}`
    const options = {
      method: 'DELETE'
    }
  
    fetch(url, options)
}