'use strict'


export const getMateria = async () => {

    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/materia/`
    const response = await fetch(url)
    const data = await response.json()

    return data
}