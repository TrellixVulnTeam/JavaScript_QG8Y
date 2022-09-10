import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {  
  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedr', 23, '4'),
  ] 
  function clienteSelecionado(cliente: Cliente){
  }  
  function clienteExluido(cliente: Cliente){
  }  
  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="gray" className="mb-4">Novo Cliente</Botao> 
        </div>
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExluido}></Tabela>
      </Layout>

    </div>
  )
}
