const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps:true,
        versionKey: false
    }
);

module.exports = model('Login', loginSchema);
