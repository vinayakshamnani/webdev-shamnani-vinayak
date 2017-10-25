module.exports=function(app){

  websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  ];

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
    if(website!=undefined){
      let id = Math.floor(Math.random() * 10000);
      // Ids must be unique
      id = id * 2;
      website._id = id.toString();
      website.developerId = userId;
      websites.push(website);
      res.send(website);
    }else{
      res.status(500).send("Error creating website. Check logs.");
    }
  }

  function findAllWebsitesForUser(req,res){
    let userId = req.params.userId;
    let list = [];
    for (var x = 0; x < websites.length; x++) {
      if (websites[x].developerId === userId) {
        list.push(websites[x]);
      }
    }
    res.send(list);
  }

  function findWebsiteById(req,res){
    let websiteId = req.params.websiteId;
    let flag = false;
    for(let x = 0; x < websites.length; x++){
      if(websites[x]._id === websiteId){
        res.send(websites[x]);
        flag = true;
      }
    }
    if(!flag)
      res.status(404).send('Not found');
  }

  function updateWebsite(req,res){
    let websiteId = req.params.websiteId;
    let website = req.body.website;
    let flag = false;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites[x] = website;
        flag = true;
        res.send({flag:true});
      }

    }
    if(!flag)
      res.status(404).send("Website Not Found");
  }

  function deleteWebsite(req,res){
    console.log('Inside delete');
    let websiteId = req.params.websiteId;
    let flag = false;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        let index = websites.indexOf(websites[x], 0);
        if (index > -1) {
          websites.splice(index, 1);
          flag = true;
          console.log('Deleted website ' + JSON.stringify(websites[x]))
          res.send({flag:true});
        }
      }
    }
    if(!flag)
      res.status(404).send("Error deleting. Website not found");
  }


}
