const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    timeInit: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    presentation: {
        type: String,
        required: true
    },
    speaker: {
        type: String,
        required: true
    }
});

module.exports = model('Schedule', scheduleSchema);
