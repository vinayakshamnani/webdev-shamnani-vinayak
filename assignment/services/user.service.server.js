module.exports=function(app, userModel) {

  /*users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];
*/

  var passport = require('passport');
  var LocalStrategy = require('passport-local');
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require('bcrypt-nodejs');
  passport.use(new LocalStrategy(localStrategy));
  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post("/api/user", createUser);
  app.get('/api/user', findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.post ('/api/loggedIn', loggedin);
  app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));



  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user) {
          done(null, user);
        },
        function(error) {
          done(error, null);
        }
      );
  }

  function localStrategy(username, password, done) {

    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(error) {
          if (error)
          {
            return done(error);
          }
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFaceBookId(profile.id)
      .then(
        function(user) {
          if(user !== undefined) {
            return done(null, user);
          }
          else {
            var user = {};
            user.facebook = {
              id: profile.id, token: token
            }
            userModel.createUser(user)
              .then(
                function(user) {
                  if(user) {
                    return done(null, user);
                  }
                }
              );
          }
        },
        function(error) {
          if(error) {return done(error); }
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function createUser(req, res) {
    let user = req.body.user;
    userModel.createUser(user)
      .then(
        function (result) {
          res.send(result);
        },
        function (err) {
          res.status(400);
        }
      );
  }

  function findUser(req, res) {

    let username = req.query.username;
    let password = req.query.password;
    let user = {};
    if (password === undefined) {
      userModel.findUserByUsername(username)
        .then(
          function (user) {
            res.send(user);
          },
          function (err) {
            res.status(404);
          }
        )
    }
    else {
      userModel.findUserByCredentials(username, password)
        .then(
          function (user) {
            res.send(user);
          },
          function (err) {
            res.status(404);
          }
        )
    }

  }


  function findUserById(req, res) {
    const userId = req.params.userId;
    userModel.findUserById(userId)
      .then(
        function (user) {
          res.send(user);
        },
        function (err) {
          res.status(404);
        }
      )
  }

  function updateUser(req, res) {
    let user = req.body.user;
    let userId = req.params.userId;
    userModel.updateUser(userId, user)
      .then(
        function (user) {
          res.send(user);
        },
        function (err) {
          res.status(404);
        }
      )
  }

  function deleteUser(req, res) {
    let userId = req.params.userId;
    userModel.deleteUser(userId)
      .then(
        function (result) {
          res.send({flag: true});
        },
        function (err) {
          res.status(404);
        })
  }

}

