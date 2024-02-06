var express = require('express');
const mongoose = require('mongoose');
const test = async (res,req)=>{
    const {id, nombre, author, numPag, ISBN,fechaPubli, editorial, genero, comentario, edicion }=req.body
    try {
        mongoose.connect('mongodb+srv://cluster0.xvygl4d.mongodb.net/Vanguardia').then(() =>{
        console.log("Conectado!");})
        const Libros = require('./models/Libros');


        
        



    } catch (e) {
        
    }
}