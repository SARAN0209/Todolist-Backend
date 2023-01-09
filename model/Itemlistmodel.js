const mongoose = require('mongoose');

const itemlistSchema = new mongoose.Schema ({
    item : {
        type : String,
        required : true
    },

})

const list = mongoose.model('todolist', itemlistSchema);

module.exports = list;