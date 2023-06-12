'use strict'

export const getMaterias = async () => {

    const url = `http://localhost:8080/v1/projeto-mecanica-senai/materia`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const inserirMateria = async (materia) => {
    const url = `http://localhost:8080/v1/projeto-mecanica-senai/materia`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(materia)
    }

    fetch(url, options)
}

export const atualizaMateria = async (curso) => {
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