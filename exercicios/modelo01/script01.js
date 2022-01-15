function carregar(){
    var msg1 = document.getElementById('msg')
    var foto = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg1.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //Boom dia!
        msg1.style.backgroundColor = 'rgb(126 63 26 / 75%)' 
        img1.src ='dia.png'
        document.body.style.backgroundColor = '#FCB336'
        
    } 
    else if(hora >= 12 && hora < 18){
        //Boa tarde!
        msg1.style.backgroundColor = '#CAD4DF'
        img1.src = "tarde.png"
        document.body.style.backgroundColor = '#798292'
    } 
    else{
        //Boa noite!
        msg1.style.backgroundColor = 'rgb(130 72 88 / 83%)'
        img1.src = "noite.png"
        document.body.style.backgroundColor = '#352C49'
    }
}
