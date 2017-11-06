module.exports= function(app, pageModel){
  /*
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ]
*/
  api = {
    'createPage': createPage,
    'findAllPagesForWebsite': findAllPagesForWebsite,
    'findPageById': findPageById,
    'updatePage': updatePage,
    'deletePage': deletePage
  };

  app.post('/api/website/:websiteId/page',api.createPage);
  app.get('/api/website/:websiteId/page',api.findAllPagesForWebsite);
  app.get('/api/page/:pageId',api.findPageById);
  app.put('/api/page/:pageId',api.updatePage);
  app.delete('/api/page/:pageId',api.deletePage);

  function createPage(req,res){
    let websiteId = req.params.websiteId;
    let page = req.body.page;
    pageModel.createPage(websiteId, page)
      .then(
        function(page) {
          res.send(page);
        },
        function(err) {
          res.status(400)
        }
      )
  }

  function findAllPagesForWebsite(req,res){
    let websiteId = req.params.websiteId;
    pageModel.findAllPagesForWebsite(websiteId)
      .then(
        function(result) {
          res.send(result);
        },
        function(err) {
          res.status(404);
        }
      )
  }

  function findPageById(req,res){
    let pageId = req.params.pageId;
    pageModel.findPageById(pageId)
      .then(
        function(page) {
          res.send(page);
        },
        function(error) {
          res.status(404);
        }
      )
  }

  function updatePage(req,res){
    let page = req.body.page;
    let pageId = req.params.pageId;
    pageModel.updatePage(pageId, page)
      .then(
        function(result) {
          res.send(result);
        },
        function(err) {
          res.status(500);
        }
      )
  }

  function deletePage(req,res){
    let pageId = req.params.pageId;
    pageModel.deletePage(pageId)
      .then(
        function(del) {
          res.send({flag: true});
        },
        function(err) {
          res.status(500);
        }

      )

  }

}
