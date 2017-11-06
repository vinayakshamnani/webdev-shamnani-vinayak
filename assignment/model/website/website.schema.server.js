module.exports = function(app,mongoose){

  var websiteSchema = mongoose.Schema({
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    name: String,
    description: String,
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'page' }],
    dateCreated: Date
  }, {collection: 'websites'}
  );

  return websiteSchema;

}
