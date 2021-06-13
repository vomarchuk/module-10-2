const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 4444;

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

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', title: 'About' });
});

app.get('/products', (req, res) => {
  //   res.render('products');
  //   res.render('products', { products, .....cssFileName: 'products' });<------- одключяем файл JSON с данными

  res.render('products', { cssFileName: 'products', title: 'Products' });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${4444}`);
});
