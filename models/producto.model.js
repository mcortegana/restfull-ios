var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type:String},
    descripcion: {type:String},
    imagen: {type:String},
    precio: {type:Number},
    tipo: {type: Schema.Types.ObjectId, ref: "Tipo"}
});

module.exports = mongoose.model('Producto',ProductoSchema);