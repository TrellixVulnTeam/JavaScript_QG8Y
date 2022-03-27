var num = document.getElementById('txtnum')
var numero = Number(num.value)
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var vet = []

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function InLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function add(){ 
    if(IsNumero(num.value) && !InLista(num.value, vet)){
        
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Itém ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Valor Inválido ou Já existente na lista!')
    }
    num.value = ''
    num.focus()   
}
function fim(){
    if(vet.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são <strong>${vet.length}</strong> elementos!</p>`
        var imaior = vet[0]
        var imenor = vet[0]
        var soma = null
        var media = null
        for(let i = 0; i< vet.length; i++){
            if(vet[i] > imaior){
                imaior = vet[i]
            }
            if(vet[i] < imenor){
                imenor = vet[i]
            }
            soma += vet[i]
        }
        media = soma/vet.length
        res.innerHTML += `<p>O maior valor é <strong>${imaior}</strong></p>`
        res.innerHTML += `<p>O menor valor é <strong>${imenor}</strong></p>`
        res.innerHTML += `<p>A soma dos elementos é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média dos elementos é <strong>${media}</strong></p>` 
    }        
    

}