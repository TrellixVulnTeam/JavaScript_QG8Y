import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {  
  const {novoCLiente, salvarCLiente, excluirCliente,selecionarCliente, tabelaVisivel,
    exibirTabela, cliente, clientes} = useClientes()
  
  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao 
                cor="gray" 
                className="mb-4"
                onClick={novoCLiente}>
                  Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ):(
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCLiente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>

    </div>
  )
}
