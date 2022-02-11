function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000) 
    /*A diferença para o exemplo do This&Binde02, é que dessa vez com o arrow function, não precisa mais usar o bind nem uma const. Pois, o this já não vareia mais como naquele exemplo*/
}

new Pessoa 