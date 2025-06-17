const express = require('express');
const app = express();
const path = require('path');


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/:lat/:lng', (req, res) => {
    let latitude = req.params.lat;
    let longitude = req.params.lng;
    res.render("index.ejs", {
        latitude: latitude,
        longitude: longitude
    });
})

app.listen(3000, () => {
    console.log("started")
}) 