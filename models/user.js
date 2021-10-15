var moongose = require('mongoose');
var Schema = moongose.Schema;

var schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports = moongose.model('User', schema);
