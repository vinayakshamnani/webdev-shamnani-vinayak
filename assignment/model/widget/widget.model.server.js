module.exports = function(app,mongoose,pageModel){

  var WidgetSchema = require("./widget.schema.server.js")(app,mongoose),
    WidgetModel = mongoose.model("widget", WidgetSchema);
  api = {
    "createWidget":createWidget,
    "findAllWidgetsForPage":findAllWidgetsForPage,
    "findWidgetById":findWidgetById,
    "updateWidget":updateWidget,
    "deleteWidget":deleteWidget
  }

  return api;


  function createWidget(pageId, widget){
    widget._id = mongoose.Types.ObjectId();
    widget.dateCreated = new Date();
    return pageModel.findPageById(pageId)
      .then(
        function(page){
          widget._page = page;
          return WidgetModel
            .create(widget);
        },
        function(err){
          return err;
        }

      )
  }

  function findAllWidgetsForPage(pageId){
    return pageModel.findPageById(pageId)
      .then(
        function(page){
          return WidgetModel
            .find({_page:page});
        },
        function(err){
          return err;
        }
      )
  }

  function findWidgetById(widgetId){
    return WidgetModel
      .findOne({_id:widgetId});
  }

  function updateWidget(widgetId,widget){
    return WidgetModel
      .findOneAndUpdate({_id:widgetId},widget);
  }

  function deleteWidget(widgetId){
    return WidgetModel
      .remove({_id:widgetId});
  }

}
