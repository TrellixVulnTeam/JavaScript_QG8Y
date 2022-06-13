const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // vai servir para extrair o css do arquivo js e coloca-lo em um arquivo css

module.exports ={
    mode: 'development',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path:__dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules:[{
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adicionar CSS a DOM injetando a tag <style>
                'css-loader', //interpretar @import, url()..
            ]
        }]
    }
}