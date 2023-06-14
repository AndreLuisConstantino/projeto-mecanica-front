'use strict'

export const getCursos = async () => {

    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/curso/`
    const response = await fetch(url)
    const data = await response.json()

    return data
}
