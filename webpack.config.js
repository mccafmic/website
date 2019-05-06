const path = require('path');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        main: "./src/app/app.component.ts"
    },
    mode: 'production',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules|web_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }]
    }  
  };