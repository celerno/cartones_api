'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
{
    var cartonFields = {
       title: { type: String },
       brief: { type: String },
       img_original: { type: String },
       created: { type: Date , default: Date.now },
       monero:[{firma:{type:String}}], /*solo en le raro caso que un carton sea de más de un monero, como el chamuco*/
       medio:[{
                    link:{type: String}, /*http://www.reforma.com */
                    brief:{type: String},
                    img_logo:{type: String}
                }],
       usuario:{
            user:{type: String, default: '__anon'}, // userid if logged
            ip:{type: String}
                  },
       referencia:[{
            brief:{type: String},
            link:{type:String}, /*can be null, if readed on paper*/
            medio:{type: String} /* link of medio: https://www.reforma.com*/
        }],
        vote:[{
            chamizos:{type: Number }, /* de 1 a 5 */
            created:{type: Date, default: Date.now},
            usuario:{
                     user:{type: String, default: '__anon'}, // userid if logged
                     ip:{type: String}
            }
        }],
        comment:[{
            brief:{type: String},
            usuario:{
                     user:{type: String, default: '__anon'}, // userid if logged
                     ip:{type: String}
            }
        }],
        total_votes:{type: Number, default:0}
     };

    var cartonSchema = new Schema(cartonFields);

    module.exports = mongoose.model('Carton', cartonSchema);
}
