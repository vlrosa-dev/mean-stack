var moongose = require('mongoose');

var Schema = moongose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = moongose.model('Message', schema);
