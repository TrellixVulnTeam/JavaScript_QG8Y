function verficar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resul = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value > ano || fano.value == 0){
        alert('Verifíque os dados')
    }
    else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = null
        if(fsex[0].checked){
           genero = 'Homem'
            if(idade >=0 && idade < 4){
               //Recém-nascido
               img.setAttribute('src', 'bb_homem.png')
            }
            else if(idade<13){
               //Criança
               img.setAttribute('src', 'menino.png')
            }
            else if(idade<21){
               //Adolescente
               img.setAttribute('src', 'jovem_homem.png')
            }
            else if(idade<65){
                //adulto
                img.setAttribute('src', 'adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade<4){
                //Recém-nascido
                img.setAttribute('src', 'bb_mulher.png')
             }
             else if(idade<13){
                //Criança
                img.setAttribute('src', 'menina.png')
             }
             else if(idade<21){
                //Adolescente
                img.setAttribute('src', 'jovem_mulher.png')
             }
             else if(idade<65){
                 //adulto
                 img.setAttribute('src', 'adulta.png')
             }
             else{
                 //idoso
                 img.setAttribute('src', 'idosa.png')
             }
        }
        resul.style.textAlign = 'center'
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resul.appendChild(img)
    }
}
