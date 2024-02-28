require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index');


const app = express();

const PORT = 3000;

serverConfig(app);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server has been started at port:${PORT}`);
});
