const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require("path")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(serveStatic(path.join(__dirname, '..', '/dist')));
// // Inserted this so that client-side routing works
// app.use(history({
//   verbose: true
// }));
// // Documentation for connect-history-api-fallback requires this again...
// app.use(serveStatic(path.join(__dirname, '..', '/dist')));

app.get('/endpoint', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

app.post('/newSite', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

app.get('/getSite', (req, res) => {
  let response = {
    site: {
    title: 'Tatev',
    pictures: [
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Tatev_Monastery_from_a_distance.jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/8e/72/94.jpg?fit=crop&w=320&h=140",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Monasterio_de_Tatev%2C_Armenia%2C_2016-10-01%2C_DD_83-85_HDR.jpg/700px-Monasterio_de_Tatev%2C_Armenia%2C_2016-10-01%2C_DD_83-85_HDR.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%D0%94%D0%B2%D0%BE%D1%80_%D0%A2%D0%B0%D1%82%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8F.jpg/2560px-%D0%94%D0%B2%D0%BE%D1%80_%D0%A2%D0%B0%D1%82%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8F.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Tatev_dome.jpg"
    ],
    description: 'The Tatev Monastery is a 9th-century Armenian Apostolic monastery located on a large basalt plateau near the Tatev village in Syunik Province in southeastern Armenia. The term "Tatev" usually refers to the monastery. The monastic ensemble stands on the edge of a deep gorge of the Vorotan River. Tatev is known as the bishopric seat of Syunik and played a significant role in the history of the region as a center of economic, political, spiritual and cultural activity. In the 14th and 15th centuries, the monastery hosted one of the most important Armenian medieval universities, the University of Tatev, which contributed to the advancement of science, religion and philosophy, reproduction of books and development of miniature painting. Scholars of the Tatev University contributed to the preservation of Armenian culture and creed during one of its most turbulent periods in its history. The monastery is the "best-known site" in Syunik. Wings of Tatev, a cableway from Tatev to Halidzor village was opened in October 2010. It was included in the Guinness World Records as world\'s "longest non-stop double track cable car."'
    }
  }
  res.status(200)
  res.json(response)
})

let port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Node js at port', port);
});