import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes (){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const{exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel} = useTabelaOuForm()
  
    useEffect(obterTodos,[])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
        
    }

    function selecionarCliente(cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
    }  
    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }
    async function salvarCLiente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }
    function novoCLiente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    return{
        cliente,
        clientes,
        novoCLiente,
        salvarCLiente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}