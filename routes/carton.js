module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Carton = mongoose.models.Carton,
      api = {};

  // ALL
  api.cartones = function (req, res) {
    Carton.find(function(err, data) {
      if (err) {
        res.json(500, err);
      } else {
        res.json({cartones: data});
      }
    }).sort({created: -1});
  };

  // GET
  api.carton = function (req, res) {
    var id = req.params.id;
    Carton.findOne({ '_id': id }, function(err, data) {
      if (err) {
        res.json(404, err);
      } else {
        res.json(200, {carton: data});
      }
    });
  };

  // POST
  api.addCarton = function (req, res) {

    var post;

    if(typeof req.body.carton == 'undefined'){
      return res.json(500, {message: 'post is undefined'});
    }

    post = new Carton(req.body.carton);

    post.save(function (err) {
      if (!err) {
        console.log("created carton");
        return res.json(201, carton.toObject());
      } else {
         return res.json(500, err);
      }
    });
  };

 /*
 // PUT
  api.editCarton = function (req, res) {
    var id = req.params.id;

    Carton.findById(id, function (err, carton) {
      if(typeof req.body.post["title"] != 'undefined'){
        carton["title"] = req.body.post["title"];
      }

      if(typeof req.body.post["excerpt"] != 'undefined'){
        carton["excerpt"] = req.body.post["excerpt"];
      }

      if(typeof req.body.post["content"] != 'undefined'){
        carton["content"] = req.body.post["content"];
      }

      if(typeof req.body.post["active"] != 'undefined'){
        carton["active"] = req.body.post["active"];
      }

      if(typeof req.body.post["created"] != 'undefined'){
        carton["created"] = req.body.post["created"];
      }


      return post.save(function (err) {
        if (!err) {
          console.log("updated post");
          return res.json(200, post.toObject());
        } else {
         return res.json(500, err);
        }
        return res.json(post);
      });
    });

  };
*/
  // DELETE
  api.deleteCarton = function (req, res) {
    var id = req.params.id;
    Carton.findById(id, function (err, post) {
      return post.remove(function (err) {
        if (!err) {
          console.log("carton borrado:" + id);
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });
  };
  app.get('/api/cartones', api.cartones);
  app.get('/api/carton/:id', api.carton);
  app.post('/api/carton', api.addCarton);
  //app.put('/api/post/:id', api.editCarton);
  app.delete('/api/carton/:id', api.deleteCarton);
};
