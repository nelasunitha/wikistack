const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('testing');
  res.redirect('/wiki');
});

router.post('/', (req, res, next) => {
  res.redirect('/wiki');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
  res.json(req.body);
});

module.exports = router;