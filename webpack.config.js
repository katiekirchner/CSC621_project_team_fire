const path = require('path');

module.exports = {
  entry: './src/dicomtest.js',
  output: {
    filename: 'pap.js',
    path: path.resolve(__dirname, 'public/javascripts/'),
  },
};
