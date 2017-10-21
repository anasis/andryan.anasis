var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lokerSchema = new Schema({
  Judul_Loker: String, 
  Perusahaan: String, 
  Divisi: String, 
  Job_Deskripsi: String, 
  Tanggal_Buka_Lowongan: String, 
  Tanggal_Tutup_Lowongan: String, 
  Kota: String
});

var loker = mongoose.model("lokers", lokerSchema);
module.exports.loker = loker;