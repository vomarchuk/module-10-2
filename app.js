const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 4444;

const manicureData = require('./json/_manicure.json');
const pedicureData = require('./json/_pedicure.json');
const depilacjaPCData = require('./json/_depilacja-pasta-cukrowa.json');
console.log(depilacjaPCData);
// const products = require('./products.json'); подключяем файл JSON с данными

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
  })
);

app.get('/', (req, res) => {
  res.render('home', { cssFileName: 'home', title: 'Home' });
});

app.get('/manicure', (req, res) => {
  res.render('manicure', {
    manicureData,
    cssFileName: 'style',
    title: 'Manicure',
  });
});

app.get('/pedicure', (req, res) => {
  res.render('pedicure', {
    pedicureData,
    cssFileName: 'style',
    title: 'Pedicure',
  });
});

app.get('/depilacjaPC', (req, res) => {
  //   res.render('products');
  //   res.render('products', { products, .....cssFileName: 'products' });<------- подключяем файл JSON с данными

  res.render('depilacjaPC', {
    depilacjaPCData,
    cssFileName: 'style',
    title: 'depilacja pastą-cukrową',
  });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${4444}`);
});
