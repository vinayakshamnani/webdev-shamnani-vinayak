module.exports=function(app, websiteModel){

  /*websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  ];
*/
  api = {
    'createWebsite': createWebsite,
    'findAllWebsitesForUser': findAllWebsitesForUser,
    'findWebsiteById': findWebsiteById,
    'updateWebsite': updateWebsite,
    'deleteWebsite': deleteWebsite
  };

  app.post('/api/user/:userId/website',api.createWebsite);
  app.get('/api/user/:userId/website',api.findAllWebsitesForUser);
  app.get('/api/website/:websiteId',api.findWebsiteById);
  app.put('/api/website/:websiteId',api.updateWebsite);
  app.delete('/api/website/:websiteId',api.deleteWebsite);

  function createWebsite(req,res){
    let website = req.body.website;
    let userId = req.params.userId;
    websiteModel.createWebsiteForUser(userId, website)
      .then(
        function(web) {
          res.send(web);
        },
        function(err) {
          res.status(400);
        }
      )
  }

  function findAllWebsitesForUser(req,res){
    let userId = req.params.userId;
    websiteModel.findAllWebsitesForUser(userId)
      .then(
        function(result) {
          res.send(result);
        },
        function(err) {
          res.status(404);
        }
      )
  }

  function findWebsiteById(req,res){
    let websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId)
      .then(
        function(result) {
          res.send(result);
        },
        function(err) {
          res.status(404);
        }
      )
  }

  function updateWebsite(req,res){
    let websiteId = req.params.websiteId;
    let website = req.body.website;
    websiteModel.updateWebsite(websiteId, website)
      .then(
        function(web) {
          res.send(web);
        },
        function(err) {
          res.status(404);
        }
      )
  }

  function deleteWebsite(req,res){
    console.log('Inside delete');
    let websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId)
      .then(
        function (result) {
          res.send({flag: true});
        },
        function(err) {
          res.status(500);
        }
      )
  }


}
