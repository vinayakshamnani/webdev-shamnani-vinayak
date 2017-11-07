module.exports = function (app) {

  var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
  if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds127564.mlab.com:27564/heroku_fjfsrc1g'; // use yours
  }

  var mongoose = require("mongoose");
  mongoose.connect(connectionString, {
    useMongoClient: true
  }
  );

  mongoose.Promise = require('bluebird');
  var userModel = require('./user/user.model.server')(app, mongoose);
  var websiteModel = require('./website/website.model.server')(app,mongoose,userModel);
  var pageModel = require('./page/page.model.server')(app,mongoose,websiteModel)
  var widgetModel = require('./widget/widget.model.server')(app,mongoose,pageModel);
  return {
    userModel: userModel,
    websiteModel: websiteModel,
    pageModel: pageModel,
    widgetModel: widgetModel
  }
  }

