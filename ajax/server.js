const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.') )//ta falando pra servir todos os arquivos presentes na pasta onde o server.js se localiza
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) //se vinher algum dado json, aqui sera responsavel por transformar esse dado em objeto

//app.get('/teste', (req, res) =>res.send(new Date)) quando vinher uma requisição com /teste na url, essa funçao sera acionada e retornará ok

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req,file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
    //isso tudo vai criar uma pasta para o upload de arquivos e vai modificar o nome de cada um com a data atual + o nome dele
})
const upload = multer({storage}).single('arquivo')
app.post('./upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso')
    })
})
app.listen(8080, ()=> console.log('Executando..'))