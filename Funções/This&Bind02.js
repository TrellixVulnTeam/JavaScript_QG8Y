function Pessoa(){
    this.idade = 0

    /*const self = this 
    Para essa const funcionar, é preciso trocar os this dentro da função setInserval por self. Fazendo isso, como se trata de uma constante, não importa quem esteja chamando a função, que o valor sempre apontará para a idade da pessoa
    */
    setInterval(function(){
        this.idade++
        console.log(this.idade)

    }.bind(this), 1000)
    /*A função setInterval dispara outra função a partir de um intervalo definido pelo usuário. Nesse caso, o intervalo é de mil mile-segundos (1 segundo). */

    /* O .bind(this) Serve para amarrar o this do objeto á chamada dessa função. Com isso, ele faz a função fazer a contagem, pois sem ele, sempre dava NaN.*/
}

new Pessoa 