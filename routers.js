(function(){

  "use strict"

  var router  = express.Router();
  router.route('/')
    .get(function(req, res){
      Book.find(function(err, books){
        if(err){
          res.send(err);
        }
        res.send(books);
      });
    })
    .post(function(req, res){
       var book = new Book();
       book.author = req.body.author;
       book.bookTitle = req.body.bookTitle;
       book.yearPub = req.body.yearPub;

       book.save(function(err){
        if (err) {
          res.send(err);
        }
        res.send({message : 'book created'});
       });
    });

  router.route('/:book_id')
    .get(function(req, res) {
      Book.findOne({_id : req.params.book_id}, function(err, book){
        if (err) {
          res.send(err);
        }
        res.send(book);
      });
    })
    .put(function(req, res) {
      Book.findOne({_id : req.params.book_id}, function(err, book){
       book.author = req.body.author;
       book.bookTitle = req.body.bookTitle;
       book.yearPub = req.body.yearPub;

       book.save(function(err){
        if (err) {
          res.send(err);
        }
        res.send({message : 'book update'});
       });
      });

    })
    .delete(function(req, res) {
      Book.remove({_id : req.params.book_id}, function(err){
        if (err) {
          res.send(err);
        }
        res.send({message : 'book deleted'});
      });
    });
})();