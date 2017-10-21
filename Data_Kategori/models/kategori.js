var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var kategoriSchema = new Schema({
  Kategori: String, 
  Lokasi: String, 
  Jurusan: String, 
  Job_Deskripsi: String
});

var kategori = mongoose.model("kategoris", kategoriSchema);
module.exports.kategori = kategori;