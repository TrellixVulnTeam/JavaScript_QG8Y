import Cabecalho from "../components/Cabecalho";
import Link from 'next/link'
export default function Exemplo(){
    return(
        <>
            <Cabecalho nome="xyz" idade={13} ehLegal={true} />
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprende Next na pratica" />
            <Link href="/">Voltar</Link>
        </>
    )
}