var mongoose = require('mongoose');
require('../config/mongoose.js');
module.exports = {
    fan: function() {
        var ComicSchema = new mongoose.Schema({
            name: { type: String, required: [true, "Name must not be blank"], minlength: [3, "Name must be at least 3 characters"]},
            votes: { type: Number, default: 0 },
            imgUrl: { type: String, default: "http://khaoyaiconcrete.co.th/images/no-img.jpg" }
        })
        var FanSchema = new mongoose.Schema({
            name : { type: String, required: [true, "Name must not be blank"], minlength: [3, "Name must be at least 3 characters"] },
            comics: [ComicSchema]
        }, { timestamps: true });
        mongoose.model('Fan', FanSchema);
        mongoose.model('Comic', ComicSchema);
        mongoose.model('Fan');
        mongoose.model('Comic');
    }
}