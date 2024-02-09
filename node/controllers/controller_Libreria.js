var express = require("express");

const mongoose = require("mongoose");
const models = require("../models/models");

const CreateLibro = async (req, res) => {
  console.log(req.body);
  
  const { idBook, nombre, author, num_pag, editorial, fecha_publi, ISBN, genero,comentarios, edicion, copias} = req.body;
  const Libro = new models.LibreriaLibros({
    id: idBook,
    nombre: nombre,
    author: author,
    num_pag: num_pag,
    fecha_publi: fecha_publi,
    editorial: editorial,
    ISBN: ISBN,
    genero: genero,
    comentarios: comentarios,
    edicion: edicion,
    copias: copias,
  });

  try {
    const libronew = await Libro.save().then(() => console.log("meow"));
    res.send(libronew)
  } catch (e) {
    console.log(e);
    res.send("ocurrio error" + e)
  }
};

const DeleteLibro = async (req, res) => {
  console.log(req.body);
  
  const { idBook} = req.body;
 

  try {
    const libronew = await models.LibreriaLibros.findOneAndDelete({ id: idBook }).then(() => console.log("meow"));
    res.send(libronew)
  } catch (e) {
    console.log(e);
    res.send("ocurrio error" + e)
  }
};

const UpdateLibro = async (req, res) => {
  console.log(req.body);
  
  const { idBook, campo, dato} = req.body;
  try {
    var libronew; 
    switch(campo)
    {
      case "nombre":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { nombre: dato });
        break;
      case "author":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { author: dato });
        break;
      case "num_pag":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { num_pag: dato });
        break;
      case "fecha_publi":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { fecha_publi: dato });
        break;
      case "editorial":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { editorial: dato });
        break;
      case "ISBN":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { ISBN: dato });
        break;
      case "genero":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { genero: dato });
        break;
      case "comentarios":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { comentarios: dato });
        break;
      case "edicion":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { edicion: dato });
        break;
      case "copias":
        libronew = await models.LibreriaLibros.updateOne({ id: idBook }, { copias: dato });
        break;
    }
    
    
    res.send(libronew)
  } catch (e) {
    console.log(e);
    res.send("ocurrio error" + e)
  }
};

const ReadLibro = async (req, res) => {
  const { idBook } = req.body;
  console.log(idBook)
  

  try {

    var libroFind;
    if(idBook ==  0)
    {
      console.log("novacio")
      libroFind = await models.LibreriaLibros.findOne({ id: idBook }).exec();
      res.send(libroFind)
    }else
    {
      console.log("vacio")
      libroFind = await models.LibreriaLibros.find({}).exec();
      res.send(libroFind)
    }
    
  } catch (e) {
    console.log(e);
    res.send("ocurrio error" + e)
  }
};

module.exports = {
  CreateLibro,
  ReadLibro,
  DeleteLibro,
  UpdateLibro
};
