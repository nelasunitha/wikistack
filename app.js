const express = require('express');
const app = express();
const path = require('path');
const layout = require('./views/layout.js');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

let PORT = 3000;

app.use(express.urlencoded({ extended: false }));

const staticMiddleware = express.static(path.join(__dirname, 'views'));
app.use(staticMiddleware);

app.get('/', (req, res, next) => {
  res.send(layout(''));
});

async function init() {
  await db.sync();
  app.listen(PORT), () => {
    console.log('listening');
  };
}

init();
