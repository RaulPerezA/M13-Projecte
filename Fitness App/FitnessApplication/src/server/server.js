const express = require('express');
const mongoose = require('mongoose');
//rutas 
const recetaRouter = require('./routes/recetaRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://admin:jon%31%32%33@cluster0-ltfic.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(recetaRouter);

app.listen(3000, () => { console.log('Server is running...') });