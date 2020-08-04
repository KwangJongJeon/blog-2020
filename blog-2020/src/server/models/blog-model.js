const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blog = new Schema(
    {
        title: { type: String, required: true },
        rating: { type: Number, required: true},
        desc: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('blog', blog)