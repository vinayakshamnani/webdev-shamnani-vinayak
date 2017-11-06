module.exports=function(app, userModel) {

  /*users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];
*/
  app.post("/api/user", createUser);
  app.get('/api/user', findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

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

