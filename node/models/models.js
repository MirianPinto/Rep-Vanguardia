var express = require('express');
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://mirian:${process.env.PASSWORD}@cluster0.xvygl4d.mongodb.net/Vanguardia`)
  .then(() => console.log("Conectado!") );


    const Schema = mongoose.Schema;
    const LibroSchema = new Schema({
      id: { type: Number, required: true, unique: true },
      nombre:  { type: String, required: true },
      author:  { type: String , required: true},
      num_pag: { type: Number, required: true},
      fecha_publi: { type: String , required: true},
      editorial: { type: String, required: true },
      ISBN:{ type: Number, required: true},
      genero:{ type: String , required: true},
      comentarios:{ type: String, required: true },
      edicion: { type: String , required: true},
      copias: {type: Number, requiredd: true},
      posicion:  { type: String, required: true },

    });

    const EstanteriaSchema = new Schema({
      id: { type: Number, required: true, unique: true },
      libros: {type: Number},
      genero: { type: String , required: true}

    });

const LibreriaLibros = mongoose.model('Libros', LibroSchema);
const LibreriaEstanteria = mongoose.model('Estanterias', EstanteriaSchema);

module.exports=
  {
    LibreriaLibros,
    LibreriaEstanteria
  }