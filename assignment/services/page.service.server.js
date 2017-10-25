module.exports= function(app){

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ]

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
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    id = id * 2;
    page._id = id.toString();
    page.websiteId = websiteId;
    pages.push(page);
    res.send(page);
  }

  function findAllPagesForWebsite(req,res){
    let websiteId = req.params.websiteId;
    let list = [];
    for (let x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === websiteId) {
        list.push(pages[x]);
      }
    }
    res.send(list);
  }

  function findPageById(req,res){
    let pageId = req.params.pageId;
    let flag = false;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        res.send(pages[x]);
        flag = true;
      }
    }
    if(!flag){
      res.status(404).send('Page not found for pageId');
    }
  }

  function updatePage(req,res){
    let page = req.body.page;
    let pageId = req.params.pageId;
    let flag = false;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages[x] = page;
        flag = true;
        res.send({flag:true});
      }
    }
    if(!flag){
      res.status(404).send('Page not found for pageId');
    }
  }

  function deletePage(req,res){
    let pageId = req.params.pageId;
    let flag = false;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        let index = pages.indexOf(pages[x], 0);
        if (index > -1) {
          pages.splice(index, 1);
          flag = true;
          res.send({flag:true})
        }
      }
    }
    if(!flag){
      res.status(404).send('Page not found for pageId');
    }

  }

}
