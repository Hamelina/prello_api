const mongoose = require('mongoose');

/**
 * The schema of the list in the databas
 * Note that the list does not contain the id of the cards it contains. It is the card that does have the id of the list it contained in.
 */
const listSchema = mongoose.Schema({
    name: {
        type: String,
    },
    idBoard: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Board',
    },
    isClosed: { 
        type: Boolean, 
        default: false
    },
    position: Number
},
{
    timestamps: true
});

// Duplicate the ID field.
listSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
listSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('List', listSchema)