function contar(){
    var inicio = document.getElementById('txtini')
    var ate = document.getElementById('txtfim')
    var pass = document.getElementById('txtpas')
    var resul = document.getElementById('res')
    var comeco = Number(inicio.value)
    var fim = Number(ate.value)
    var passo = Number(pass.value)
    if(comeco == 0 || fim == 0){
        alert('Algum dado esta vazio')
        resul.innerHTML = 'Impossível contar'
    }
    else {
        if(passo <= 0){
            alert('Passo inválido! Considerando passo 1.')
            passo = 1
        }
        resul.innerHTML +='Contando: '
        if(comeco < fim){
            
            for(let c = comeco; c <= fim; c+=passo){
                resul.innerHTML += `\u{27A1} ${c} `
            } 
        }
        else{
            for(let c = comeco; c >= fim; c-=passo){
                resul.innerHTML += `\u{27A1} ${c}`
            }
        }
        resul.innerHTML+= `\u{1F3C6}`
    }    
   
}
