const LibreriaSchema = new Schema({
      id: { type: Number, required: true, unique: true },
      nombre:  { type: String, required: true },
      author:  { type: String , required: true},
      num_pag: { type: Number, required: true},
      fecha_publi: { type: Date , required: true},
      editorial: { type: String, required: true },
      ISBN:{ type: Number, required: true},
      genero:{ type: String , required: true},
      comentarios:{ type: String, required: true },
      edicion: { type: String , required: true},
    });

    const Libreria = mongoose.model('Libros', LibreriaSchema);
   