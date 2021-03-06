const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ProductShema = new Schema ({
    codigo: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true, unique: true},
    precio: {type: Number, required: true},
    costo: {type: Number, required: true},
    stock: {type: Number, required: true},    
    descripcion: {type: String},
    img: {type: String}
})

const model = Mongoose.model('Producto', ProductShema)
module.exports = model