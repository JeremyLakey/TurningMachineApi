const express = require('express')
const config = require('./config.json')
const app = express()
const port = config.port

const userRoutes = require('./routes/user')
const statsRoutes = require('./routes/stats')
const playRoutes = require('./routes/play')


app.use('/user', userRoutes)
app.use('/stats', statsRoutes)
app.use('/play', playRoutes)


app.listen(port, () => {
    console.log(`Turning machine Api listening on ${port}`)
})

