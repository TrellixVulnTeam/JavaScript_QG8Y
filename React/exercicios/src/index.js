import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/primeiro'
import BomDia from './componentes/BomDia'
import Multi, { BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
<div>
    <BomDia nome="Ana"/>
    <Multi.BoaTarde nome="Luan"/>
    <BoaNoite nome="Clara"/>
</div>, document.getElementById('root'))