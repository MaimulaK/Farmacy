
require('@babel/register');
const express = require('express');
const app = express();

const PORT = 3000;

const indexRouter = require('./routes/index');
const ssr = require('./middleware/ssr');

app.use(express.json);

app.use(ssr);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server has been started at port ${PORT}`);
});

