module.exports=function(app) {

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  app.post("/api/user", createUser);
  app.get('/api/user', findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res) {
    let user = req.body;
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
      id = id * 2;
    user._id = id.toString();
    users.push(user);
    res.send(user);
  }

  function findUser(req, res) {

    let username = req.query.username;
    let password = req.query.password;
    let user = {};
    if(password==undefined){
      user = findUserByUsername(username);
    }else{
      user = findUserByCredentials(username,password);
    }
    if(user!=undefined)
      res.send(user);
    else
      res.status(404).send('User Not found');
  }



  function findUserById(req, res) {
    const userId = req.params.userId;
    for(let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {res.send(users[x]); }
    }
    res.status(404);
  }

  function findUserByCredentials(username, password) {
    for (let x = 0; x < users.length; x++) {
      if (users[x].username === username && users[x].password === password) {return users[x]; }
    }
  }

  function findUserByUsername(username) {
    for (let x = 0; x < users.length; x++) {
      if (users[x].username === username) {return users[x]; }
    }
  }

  function updateUser(req, res) {
    let user = req.body;
    let userId = req.params.userId;
    let flag = false;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x] = user;
        flag = true;
        res.send({
          "Status" : "Updated Successfully"
        });
      }

    }
    res.status(404);
  }

  function deleteUser(req, res) {
    let userId = req.params.userId;
    const userIndex = this.users.findIndex(i => i._id === userId);
    if (this.users[userIndex]) {
      this.users.splice(userIndex, 1);
      res.send(true);
    }
    res.status(404).send('User Not Found');
  }
}


