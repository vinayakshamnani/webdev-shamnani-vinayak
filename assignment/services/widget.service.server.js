module.exports=function(app) {

  let multer = require('multer');
  let upload = multer({dest: __dirname + '/../../src/uploads'});

  widgets = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget': createWidget,
    'findAllWidgetsForPage': findAllWidgetsForPage,
    'findWidgetById': findWidgetById,
    'updateWidget': updateWidget,
    'deleteWidget': deleteWidget,
    'uploadImage':uploadImage
  };

  app.post('/api/page/:pageId/widget',api.createWidget);
  app.get('/api/page/:pageId/widget',api.findAllWidgetsForPage);
  app.get('/api/widget/:widgetId',api.findWidgetById);
  app.put('/api/widget/:widgetId',api.updateWidget);
  app.delete('/api/widget/:widgetId',api.deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), api.uploadImage);

  function createWidget(req,res){
    let pageId = req.params.pageId;
    let widget = req.body.widget;
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    id = id * 2;
    widget._id = id.toString();
    widget.pageId = pageId;
    widgets.push(widget);
    res.send(widget);
  }

  function findAllWidgetsForPage(req,res){
    let pageId = req.params.pageId;
    let resultWidgets = [];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x].pageId === pageId) {
        resultWidgets.push(widgets[x]);
      }
    }
    res.send(resultWidgets);
  }

  function findWidgetById(req,res){
    let widgetId = req.params.widgetId;
    let flag = false;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        flag = true;
        res.send(widgets[x]);
      }
    }
    if(!flag)
      res.status(404).send('Couldn\'t fnd the widget');
  }

  function updateWidget(req,res){
    let widgetId = req.params.widgetId;
    let widget = req.body.widget;
    let flag = false;
    for(let x = 0; x < widgets.length; x++){
      if(widgets[x]._id === widgetId){
        widgets[x] = widget;
        flag = true;
        res.send({flag:true});
      }
    }
    if(!flag)
      res.status(404).send('Couldn\'t find the widget!');
  }

  function deleteWidget(req,res){
    let widgetId = req.params.widgetId;
    let flag = false;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        let index = widgets.indexOf(widgets[x], 0);
        if (index > -1) {
          widgets.splice(index, 1);
          flag = true;
          res.send({flag:true});
        }
      }
    }
    if(!flag)
      res.status(404).send('Couldn\'t find the widget');
  }

  function uploadImage(req, res) {
    let widget;
    let widgetId      = req.body.widgetId;
    let myFile        = req.file;

    let userId = req.body.userId;
    let websiteId = req.body.websiteId;
    let pageId = req.body.pageId;

    let originalname  = myFile.originalname; // file name on user's computer
    let filename      = myFile.filename;     // new file name in upload folder
    let path          = myFile.path;         // full path of uploaded file
    let destination   = myFile.destination;  // folder where file is saved to
    let size          = myFile.size;
    let mimetype      = myFile.mimetype;

    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widget = widgets[x];
      }
    }
    widget.url = '/uploads/'+filename;
    widget.name = req.body.widgetName;
    widget.text = req.body.widgetText;
    widget.width = req.body.widgetWidth;

    let callbackUrl   = "/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;

    res.redirect(callbackUrl);
  }

}
