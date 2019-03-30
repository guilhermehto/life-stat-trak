const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Started express server on port ${PORT}`)
})

module.exports = app
