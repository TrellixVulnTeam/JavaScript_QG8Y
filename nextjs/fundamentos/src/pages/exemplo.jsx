import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
import Link from 'next/link'
export default function Exemplo(){
    return(

        <Layout titulo="Usando Componente">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprende Next na pratica"/>            
        </Layout>
    )
}