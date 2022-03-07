const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const genero = funcionario => funcionario.genero == 'F'
    const pais = funcionario => funcionario.pais == 'China'
    

    const filtradas =funcionarios.filter(genero).filter(pais)
    //console.log(filtradas)

    const resultado = filtradas.map(f => f.salario).reduce(function
        (acumulador, atual){
            
            return Math.max(acumulador, atual)
            
    })
    console.log(filtradas.filter(function(f){
        return f.salario == resultado
    }))
})


