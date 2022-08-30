const express = require('express');

const app = express();

const conn = require('./src/config/db/conn');

//receber resposta do body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


conn
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(`index: ${error}`);
  });
