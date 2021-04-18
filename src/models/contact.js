const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    }
},
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model('Contact', contactSchema);
