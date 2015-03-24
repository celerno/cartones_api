module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Monero = mongoose.models.Monero,
      api = {};

  // ALL
  api.moneros = function (req, res) {
    Monero.find(function(err, data) {
      if (err) {
        res.json(500, err);
      } else {
        res.json({moneros: data});
      }
    });
  };

  // GET
  api.monero = function (req, res) {
    var id = req.params.id;
    Monero.findOne({ '_id': id }, function(err, data) {
      if (err) {
        res.json(404, err);
      } else {
        res.json(200, {monero: data});
      }
    });
  };

  // POST
  api.addMonero = function (req, res) {

    var post;

    if(typeof req.body.monero == 'undefined'){
      return res.json(500, {message: 'post is undefined'});
    }

    post = new Monero(req.body.monero);

    post.save(function (err) {
      if (!err) {
        console.log("created monero");
        return res.json(201, monero.toObject());
      } else {
         return res.json(500, err);
      }
    });
  };

 /*
 // PUT
  api.editMonero = function (req, res) {
    var id = req.params.id;

    Monero.findById(id, function (err, monero) {
      if(typeof req.body.post["title"] != 'undefined'){
        monero["title"] = req.body.post["title"];
      }

      if(typeof req.body.post["excerpt"] != 'undefined'){
        monero["excerpt"] = req.body.post["excerpt"];
      }

      if(typeof req.body.post["content"] != 'undefined'){
        monero["content"] = req.body.post["content"];
      }

      if(typeof req.body.post["active"] != 'undefined'){
        monero["active"] = req.body.post["active"];
      }

      if(typeof req.body.post["created"] != 'undefined'){
        monero["created"] = req.body.post["created"];
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
  api.deleteMonero = function (req, res) {
    var id = req.params.id;
    Monero.findById(id, function (err, post) {
      return post.remove(function (err) {
        if (!err) {
          console.log("monero borrado:" + id);
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });
  };


  app.get('/api/moneros', api.moneros);
  app.get('/api/monero/:id', api.monero);
  app.post('/api/monero', api.addMonero);
  //app.put('/api/post/:id', api.editMonero);
  app.delete('/api/monero/:id', api.deleteMonero);
};
