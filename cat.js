
const fs = require('fs')

module.exports = function(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err
    process.stdout.write(data)
  })
}