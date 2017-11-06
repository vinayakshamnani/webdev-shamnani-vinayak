module.exports = function(app,mongoose,userModel) {
  var websiteSchema = require('./website.schema.server')(app,mongoose);
  var websiteModel = mongoose.model('website', websiteSchema);

  api = {
    'createWebsiteForUser': createWebsiteForUser,
    'findAllWebsitesForUser': findAllWebsitesForUser,
    'findWebsiteById': findWebsiteById,
    'updateWebsite': updateWebsite,
    'deleteWebsite': deleteWebsite
  }

  return api;

  function createWebsiteForUser(userId, website) {
    website._id = mongoose.Types.ObjectId();
    website.dateCreated = new Date();
    return userModel.findUserById(userId)
      .then(
        function(user) {
          website._user = user;
          return websiteModel.create(website);
        },
      function(err) {
          return err;
        }
      )
  }

  function findAllWebsitesForUser(userId) {
    return userModel.findUserById(userId)
      .then(
        function(user) {
          return websiteModel.find({_user: user});
        },
        function(err) {
          return err;
        }
      )
  }

  function findWebsiteById(websiteId) {
    return websiteModel.findOne({_id: websiteId});
  }

  function updateWebsite(websiteId, website) {
    return websiteModel.findOneAndUpdate({_id:websiteId},website);
  }

  function deleteWebsite(websiteId){
    return websiteModel.findOneAndRemove({_id:websiteId});
  }
}
