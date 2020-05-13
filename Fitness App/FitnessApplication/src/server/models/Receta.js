const mongoose = require('mongoose');

const RecetaSchema = new mongoose.Schema({
  receta: {
    type: String,
    required: true
  },
  alimentos: {
    type: Array,
    required: true
  },
  explicacion: {
    type: String,
    required: true
  },
  tipoReceta: {
    type: String
  },
  calorias: {
    type: String
    /* si las calorias se llegan a convertir en entero, comprobar que vienen mas de 0.
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    }*/
  },
});

const Receta = mongoose.model("Receta", RecetaSchema);
module.exports = Receta;
