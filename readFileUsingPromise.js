const fs = require('fs');

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => ((err) ? (reject(err)) : resolve(data)))
  })
}

module.exports = readFile;