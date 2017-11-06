module.exports = function(app, mongoose) {
  var userSchema = mongoose.Schema(
    {
      username: String,
      password: String,
      firstName: String,
      lastName: String,
      email: String,
      websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
      dateCreated: Date
    }, {collection: 'users'}
  );
  return userSchema;
}
