module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Carton = mongoose.models.Carton,
      api = {};

  // ALL
  api.medios = function (req, res) {
    Carton.find({medio:{$exist:true}}, function(err, data) {
      if (err) {
        res.json(500, err);
      } else {
        res.json({medios: data});
      }
    });
  };

  // GET
  api.medio = function (req, res) {
    var id = req.params.link;
    Carton.findOne({ medio: {link: link }}, function(err, data) {
      if (err) {
        res.json(404, err);
      } else {
        res.json(200, {medio: data});
      }
    });
  };

  // POST
 /* api.addMedio = function (req, res) {

    var post;

    if(typeof req.body.medio == 'undefined'){
      return res.json(500, {message: 'post is undefined'});
    }

    post = new Medio(req.body.medio);

    post.save(function (err) {
      if (!err) {
        console.log("created medio");
        return res.json(201, medio.toObject());
      } else {
         return res.json(500, err);
      }
    });
  };
*/
  // DELETE
 /* api.deleteMedio = function (req, res) {
    var id = req.params.id;
    Medio.findById(id, function (err, post) {
      return post.remove(function (err) {
        if (!err) {
          console.log("medio borrado:" + id);
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });
  };*/


  app.get('/api/medios', api.medios);
  app.get('/api/medio/:id', api.medio);
  //app.post('/api/medio', api.addMedio);
  //app.put('/api/post/:id', api.editMedio);
  //app.delete('/api/medio/:id', api.deleteMedio);
};
