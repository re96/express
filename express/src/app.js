'use strict'

const express = require('express')
const app = new express()

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
