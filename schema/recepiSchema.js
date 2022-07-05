const mongoose = require('mongoose')

const recepiSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },

})

module.exports = recepiSchema;