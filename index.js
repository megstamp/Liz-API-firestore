import express from "express"
import cors from "cors"

import {addNewColor} from './src/colors.js'

const PORT = 3001
const app = express ()

app.use(cors())
app.use(express.json())

app.post ('/colors',addNewColor)

app.listen(PORT, () => {
    console.log (`listening on http://localhost:${PORT}`)
})