module.exports = function (app, mongoose) {

  var userSchema = require('./user.schema.server')(app,mongoose);
  var userModel = mongoose.model('user', userSchema);

  api = {
    'createUser': createUser,
    'findUserById': findUserById,
    'findUserByUsername': findUserByUsername,
    'findUserByCredentials': findUserByCredentials,
    'updateUser': updateUser,
    'deleteUser': deleteUser,
    'findUserByFaceBookId': findUserByFacebookId
  }

  return api;

  function findUserByFacebookId(facebookId) {
    return userModel.findOne({'facebook.id': facebookId});
  }

  function createUser(user) {
    user._id = mongoose.Types.ObjectId();
    user.dateCreated = new Date();
    user = new userModel(user);
    return userModel.create(user);
  }

  function findUserById(userId) {
    return userModel.findById(userId);
  }

  function findUserByUsername(username) {
    return userModel.findOne({username:username});
  }

  function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
  }

  function updateUser(userId, user) {
    return userModel.findOneAndUpdate({_id: userId}, user);
  }

  function deleteUser(userId) {
    return userModel.remove({_id: userId});
  }
}
