
require('@babel/register');

const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

const indexRouter = require('./routes/index');
const ssr = require('./middleware/ssr');
// читать данные из тела запросов
app.use(express.urlencoded({ extended: true }));
// читать JSON-данные из тела запросов
app.use(express.json());
// renderComponent
app.use(ssr);
// подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server has been started at port:${PORT}`);
});
