//------MODULLER------//
const fs = require('fs');
const {JsonDatabase} = require("wio.db")
//------MODULLER------//

const antiLog = ["PUBLIC-IP", "PUBLIC-IP2"]//Kaydedilmeyecek IP Listesi. Virgül Atarak Yenisini Ekleyebilirsiniz.

const logIpMiddleware = (req, res, next) => {
  const IP = `${req.ip.slice(7)}`;//Alınan IP'nin Başındaki Gereksiz Yazıları Kesiyoruz.
  const db = new JsonDatabase("./db.json")//Database'i Belirliyoruz.
  if(IP.startsWith("192.168") || !IP )return next()// Eğer Localdan Giriliyorsa Kaydetme.
  if(antiLog.some(ip => ip === IP)) return next();// Eğer Listeden Bir IP ise Kaydetme.
  db.push("IPs", IP)// Database'de Yeni IP'yi Ekle.
  next()//Devam et.
};

module.exports = logIpMiddleware;// Bu Dosyayı Modul Olarak Tanımlıyoruz.