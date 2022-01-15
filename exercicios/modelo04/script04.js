function contar(){
    var inicio = document.getElementById('txtini')
    var numero = Number(inicio.value)
    var result = document.getElementById('celltab')
    if(numero == 0){
        alert('Digite um número!')
    }
    else{
        let c = 1
        result.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab{c}`
            result.appendChild(item)
            c++
        }
    }
    
    
    
}
