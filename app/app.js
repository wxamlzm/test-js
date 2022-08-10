const express = require('express')
const cors = require('cors')
const app = new express()

const router = express.Router()

app.use(cors())

router.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('server listen at 3000')
})