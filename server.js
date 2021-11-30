import express from 'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'

const server = express()
const PORT = 3001;

server.use(cors())

server.use(express.json())

server.use("/authors", authorsRouter)

console.log(listEndpoints(server))

import authorsRouter from "./authors/index.js"

server.listen(PORT, () => console.log("Server running on port: ", PORT))

server.on("error", (error) =>
console.log(`Server is not running due to: $(error)`) )
