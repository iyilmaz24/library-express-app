const express = require('express');
const router = express.Router();


const BookModel = require("../database/schemas/bookSchema");

async function saveBook(titleI) {
  try {
      let newBook = new BookModel( {
          title: titleI,
      })
      await newBook.save();
      console.log(`${titleI} was saved.`)
  }
  catch (err) {
      console.log(err)
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/savebook/:title', function(req, res, next) {
  const title = req.params.title;
  res.render("index", { title: `Saving ${title}...` });
  saveBook(title);
});


module.exports = router;
