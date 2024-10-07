const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
