import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/primeiro'
//import Multi, { BoaNoite} from './componentes/Multiplos'
//import BomDia from './componentes/BomDia'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
<div>
    <Pai nome="Francisco" sobrenome="Paiva">
        {/*Como passo os componentes Filhos aqui?*/}
        <Filho nome="Luan"  />
        <Filho nome="Clara"  />
        <Filho nome="Maria"  />
    </Pai>
</div>, document.getElementById('root')) 