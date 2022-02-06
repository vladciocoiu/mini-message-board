const { response } = require('express');
var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi!",
    user: "Vlad",
    added: new Date()
  },
  {
    text: "Hello there!",
    user: "Ciorap",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form')
});

router.post('/new', (req, res, next) => {
  messages.push(
    {
      text: req.body.text, 
      user: req.body.author, 
      added: new Date()
    }
  );
  res.redirect('/');
});

module.exports = router;
