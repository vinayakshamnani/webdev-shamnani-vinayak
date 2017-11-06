module.exports = function(app,mongoose,websiteModel) {
  var pageSchema = require('./page.schema.server.js')(app,mongoose);
  var pageModel = mongoose.model('page', pageSchema);

  api = {
    'createPage': createPage,
    'findAllPagesForWebsite': findAllPagesForWebsite,
    'findPageById': findPageById,
    'updatePage': updatePage,
    'deletePage': deletePage
  }

  return api;

  function createPage(websiteId, page) {
    page._id = mongoose.Types.ObjectId();
    page.dateCreated = new Date();
    return websiteModel.findWebsiteById(websiteId)
      .then(
        function(website) {
          page._website = website;
          return pageModel.create(page);
        },
        function(err) {
          return err;
        }
      )
  }

  function findAllPagesForWebsite(websiteId) {
    return websiteModel.findWebsiteById(websiteId)
      .then(
        function(website) {
          return pageModel.find({_website: website});
        },
        function(err) {
          return err;
        }
      )
  }

  function findPageById(pageId) {
    return pageModel.findOne({_id: pageId});
  }

  function updatePage(pageId,page){
    return pageModel.findOneAndUpdate({_id:pageId},page);
  }

  function deletePage(pageId){
    return pageModel.findOneAndRemove({_id:pageId});
  }

}
