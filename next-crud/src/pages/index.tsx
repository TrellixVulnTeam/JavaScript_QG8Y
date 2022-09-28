import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedr', 23, '4'),
  ] 
  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }  
  function clienteExluido(cliente: Cliente){
  }
  function salvarCLiente(cliente: Cliente){
    setVisivel('tabela')
  }
  function novoCLiente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  
  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
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
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExluido}
            />
          </>
        ):(
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCLiente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>

    </div>
  )
}
