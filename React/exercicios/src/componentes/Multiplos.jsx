import React from 'react'

export const BoaTarde = props => <h1>Boa Tarde {props.nome}</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>
//Também pode ser exportado da seguinte maneira: 
export default {BoaTarde, BoaNoite}