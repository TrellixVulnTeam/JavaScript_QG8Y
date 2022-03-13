const fs = require('fs')
const caminho =__dirname +'/arquivo.json'

//sincrono..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//ler todos os conteudos da pasta:
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
})
//__dirname é uma constante que esta presente em todos os arquivos do node e que representa o diretório atual