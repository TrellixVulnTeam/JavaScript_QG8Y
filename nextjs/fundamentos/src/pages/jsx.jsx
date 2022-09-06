import Layout from "../components/Layout"

export default function Jsx(){
    const A = 4.9
    const B = 7.3
    console.log(A * B) 
    const obj = {nome: 'Luan', idade: 20}
    function subtitulo(){
        return <h2>{"muito legal".toUpperCase()} </h2>
    }
    return(
        <Layout titulo="Entendendo o JSX">
            <div>
                <h1>JSX é um conceito central!</h1>
                {subtitulo()}
                <h2>{`Meu nome é ${obj.nome} e tenho ${obj.idade} anos`.toUpperCase()} </h2>
                <p>{JSON.stringify({nome: 'Luan', idade: 20})} </p>

            </div>
        </Layout>
    )
}