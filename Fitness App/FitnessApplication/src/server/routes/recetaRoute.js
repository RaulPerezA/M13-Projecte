const express = require('express');
const recetaModel = require('../models/Receta');
const app = express();

app.get('/todasRecetas', async (req, res) => {
    console.log("aaaaa");
  const recetas = await recetaModel.find({});

  try {
   /* let promesa:Promise<any>;
    promesa = this.resultLogin.toPromise();*/
    res.send(recetas);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app
