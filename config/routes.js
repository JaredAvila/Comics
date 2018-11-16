const mongoose = require('mongoose'),
    Fan = mongoose.model('Fan')
var fans = require('../controllers/fans');
var path = require('path');
module.exports = function(app) {
    app.get('/api/fans', function(req, res){
        fans.getAll(req, res);
    })
    app.post('/api/fans/new', function(req, res){
        fans.newFan(req, res);
    })
    app.put('/api/fans/edit', function(req, res){
        fans.editFan(req, res);
    })
    app.get('/api/comics', function(req, res){
        fans.getAllComics(req, res);
    })
    app.post('/api/comics/new', function(req, res){
        fans.newComic(req, res);
    })
    app.put('/api/comics/edit', function(req, res){
        fans.editComic(req, res);
    })
    app.delete('/api/comics/delete', function(req, res){
        fans.deleteComic(req, res);
    })
    app.get('/api/fans/fan/:id', function(req, res){
        fans.getOneFan(req, res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
    
}