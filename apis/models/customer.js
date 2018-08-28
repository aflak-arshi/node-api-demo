const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Customer', customerSchema);