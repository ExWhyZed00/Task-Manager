const express = require('express');
const path = require('path');
const fs = require('fs');
const { log } = require('console');

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (request, response) => {
    fs.readdir(`./files`, (err,files) => {
        response.render("index", {files: files});
    })
})

app.get('/file/:filename', (request, response) => {
    fs.readFile(`./files/${request.params.filename}`, "utf-8", (err, filedata) => {
        response.render('show', {filename: request.params.filename, filedata: filedata})
    })
})

app.get('/edit/:filename', (request, response) => {
    response.render('edit', {filename: request.params.filename})
})

app.post('/edit', (request, response) => {
    fs.rename(`./files/${request.body.Prev}`, `./files/${request.body.New}`, (err) => {
        response.redirect('/')
    })
    
})

app.post('/create', (request, response) => {
    fs.writeFile(`./files/${request.body.title.split(' ').join('')}.txt`, request.body.details, (err)  => {
        response.redirect('/')
    })
})

app.listen(3000, () => console.log("Server started"));