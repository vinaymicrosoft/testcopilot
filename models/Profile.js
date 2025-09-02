const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Profile', profileSchema);