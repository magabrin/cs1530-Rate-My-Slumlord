const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/main/js'),
    output: {
      filename: 'main.js',
      // path: path.resolve(__dirname, 'src/main/resources/static')
      //path: path.resolve(__dirname, 'out/production/resources/static')
      path: path.resolve(__dirname, 'build/resources/main/static')
    },
    module: {      
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env',
                        '@babel/react',{
                        'plugins': ['@babel/plugin-proposal-class-properties']}]
            },
          },        
        },
        {
          test: /\.(css)$/,
          use: {
            loader: "style-loader",
            loader: "css-loader"
          }
        }
      ]
    }
  };