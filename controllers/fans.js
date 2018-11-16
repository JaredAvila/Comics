const mongoose = require('mongoose');
Fan = mongoose.model('Fan');
Comic = mongoose.model('Comic');
module.exports = {
    getAll: function (req, res) {
        Fan.find({}, function (err, fans) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: fans });
            }
        })
    },
    newFan: function (req, res) {
        let fan = new Fan({ name: req.body.name });
        fan.save(function (err) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: fan });
            }
        })
    },
    editFan: function (req, res) {
        Fan.findOneAndUpdate({ _id: req.body._id }, { name: req.body.name }, function (err) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "Fan has been updated" })
            }
        })
    },
    newComic: function (req, res) {
        let comic = new Comic({ name: req.body.name, imgUrl: req.body.imgUrl });
        comic.save(function (err) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: comic });
            }
        })
    },
    editComic: function (req, res) {
        Comic.findOneAndUpdate({ _id: req.body._id }, { votes: req.body.votes }, function (err) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "votes updated" });
            }
        })
    },
    deleteComic: function(req, res){
        Comic.findByIdAndDelete({ _id: req.params._id }, function(err){
            if(err){
                res.json({ error: err });
            } else{
                res.json({ success: "Comic has been deleted. Sad" });
            }
        })
    },
    getAllComics: function(req, res){
        Comic.find({}, function(err, comics){
            if(err){
                res.json({error: err});
            } else {
                res.json({success:comics});
            }
        })
    },
    getOneFan: function(req, res){
        Fan.findById({_id:req.params.id}, function(err, fan){
            if(err){
                res.json({ error: err });
            } else {
                res.json({ success: fan });
            }
        })
    }
}