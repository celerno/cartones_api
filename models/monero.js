'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
{
    var moneroFields = {
        firma:{type:String},
        img_photo:{type: String},
        brief:{type: String},
        social:{
                red:{type:String}, /* Twitter, Facebook, Blog, Instagram */
                link:{type:String} /* https://twitter.com/@moneroequis */
               },
        medio:[{
                    link:{type: String}, /*http://www.reforma.com */
                    brief:{type: String},
                    img_logo:{type: String}
                }],
        referencia:[{
                  brief:{type: String},
                  link:{type:String}, /*can be null, if readed on paper*/
                  medio:{type: String} /* link of medio: https://www.reforma.com*/
        }],
        comment:[{
            brief:{type: String},
            usuario:{
                     user:{type: String, default: '__anon'}, // userid if logged
                     ip:{type: String}
            }
        }]
     };

    var moneroSchema = new Schema(moneroFields);

    module.exports = mongoose.model('Monero', moneroSchema);
}
