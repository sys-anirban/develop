var webpack = require("webpack");
var path = require('path');
var Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DIST_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,'src');

module.exports =()=>({
    entry:'./src/index',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    devServer:{
        historyApiFallback:true
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx']
    },
    node:{
        fs:'empty'
    },
    module:{
        rules:[{
            test:/\.(ts|js)x?$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            },
        },
    {
        test:/\.(css|pcss)$/i,
        use:['style-loader','css-loader','postcss-loader']
    },
    {
        test:/\.(jpe?g|png|gif|ico|svg|ttf)$/i,
        use:['file-loader']
    }
    ],
    },
    plugins:[
new Dotenv(),
new HtmlWebpackPlugin({
    template:'./src/index.html'
})
    ]
})