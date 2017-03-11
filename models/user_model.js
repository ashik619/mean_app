var mongoose = require('mongoose');
mongoose.set('debug', true);
var UserSchema = new mongoose.Schema({
name: String,
phoneNumber: String,
playerId: String,
updated_at: { type: Date, default: Date.now },
});
//TodoSchema.set('collection', 'todos')
module.exports = mongoose.model('User', UserSchema,"userarray");
