let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
user: {
type: String,
required: true
},
password: {
type: String,
required: true
}
}, {
versionKey: false
});

module.exports = moongoose.model('User', UserSchema);
