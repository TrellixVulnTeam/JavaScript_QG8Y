console.log('01)', '1' == 1)//São iguais?
console.log('02)', '1' === 1)//São exatamente iguais?
console.log('03)', '3' != 3)//São diferentes?
console.log('04)', '3' !== 3)//São extremamente diferentes?

console.log('05)', 3< 2)//3 é menor que 2?
console.log('06)', 3> 2)//3 é maior que 2?
console.log('07)', 3<=2)//3 é menor igual a 2?
console.log('08)', 3>=2)//3 é maior igual a 2?

const d1 = new Date(0) //O 0 significa a data de referencia do JS que é 1/1/1970
const d2 = new Date(0)
console.log('09)', d1===d2)//São exatamente iguais?
console.log('10)', d1== d2)//São iguais?
console.log('11)', d1.getTime()===d2.getTime())//São exatamente iguais?

console.log('12)', undefined == null)//São iguais?
console.log('13)', undefined ===null)//São exatamente iguais?
console.log('14)', undefined !=null)//São diferentes?
console.log('15)', undefined !==null)//São exatamente diferentes?



