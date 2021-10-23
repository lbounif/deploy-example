const express = require('express')
const path = require('path')

const app = express()

//comment for jenkins

const port = process.env.PORT || 4005

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})