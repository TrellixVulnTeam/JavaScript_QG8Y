function nota(nota){
    if(nota % 5 ==0){
        return int(Math.floor(nota / 5)) * 5;
    }else{
        return (int(Math.floor(nota / 5))*5) + 5;

    }
}

console.log(nota(34))