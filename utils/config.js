require ('dotenv').config()

const PORT = process.env.PORT
const MOONGODB_URI = process.env.MOONGODB_URI

module.exports = {
    PORT,
    MOONGODB_URI 
}