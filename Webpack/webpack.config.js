const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // vai servir para extrair o css do arquivo js e coloca-lo em um arquivo css
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports ={
    mode: modoDev ?'development' : 'production',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path:__dirname + '/public'
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer:[
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adicionar CSS a DOM injetando a tag <style>
                'css-loader', //interpretar @import, url()..
                'sass-loader',
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}