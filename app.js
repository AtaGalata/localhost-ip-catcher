//------MODULLER------//
const express = require('express');
const logIpMiddleware = require("./logIpMiddleware")//Yapılan Module.
//------MODULLER------//

const app = express();//Uygulama Tanımlaması.

app.use(express.static("public"));// Siteye Kullanımdayken public Klasöründekileri Paylaş.
app.use(logIpMiddleware);// Siteye Kullanımdayken Modulülü Çalıştır

app.set('view engine', 'ejs');// views/ klasörünün içindeki .ejs ile biten dosyaları görünüm olarak belirle.

app.get('/', function(req, res) {res.render('index', {IP:req.ip.slice(7)})});
/*
  AnaSayfadayken "localhost" index.ejs Dosyasını Renderla (Göster).
  IP Değişkenini req.ip olarak içeri al (siteye giren kişinin ip si).
*/

app.listen(80, () => {// Varsayılan 80 Portu İle Çalıştır.
  console.log('Site Aktif');//Açılınca Log Gönder.
});


