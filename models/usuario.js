'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
{
    var usuarioFields = {
        user:{type: String},
        email:{type: String},
        password:{type: String},
        created:{type: Date, default: Date.now},
        ip:{type: String}
     };

    var usuarioSchema = new Schema(usuarioFields);

    module.exports = mongoose.model('Usuario', usuarioSchema);
}
