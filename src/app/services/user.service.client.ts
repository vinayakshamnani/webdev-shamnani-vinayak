import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
@Injectable()

export class UserService {
  constructor() { }
  users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi'}
  ];
  api = {
    'createUser'             : this.createUser,
    'findUserById'           : this.findUserById,
    'findUserByUsername'     : this.findUserByUsername,
    'findUserByCredentials'  : this.findUserByCredentials,
    'updateUser'             : this.updateUser,
    'deleteUser'             : this.deleteUser,
  };
  createUser(user: any) {
    let id = Math.floor(Math.random() * 10000);
    // Ids must be unique
    while (this.findUserById(id.toString())) {
      id = id * 2;
    }
    user._id = id.toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string){
    for(let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {return this.users[x]; }
    }
  }


findUserByUsername(username: string) {
  for (let x = 0; x < this.users.length; x++) {
    if (this.users[x].username === username) {return this.users[x]; }
  }
}

findUserByCredentials(username: string, password: string) {
  for (let x = 0; x < this.users.length; x++) {
    if (this.users[x].username === username && this.users[x].password === password) {return this.users[x]; }
  }
}

updateUser(userId: string, user: any) {
  for (let x = 0; x < this.users.length; x++) {
    if (this.users[x]._id === userId) { this.users[x] = user;}
  }
  }

  deleteUser(userId: string) {
    const userIndex = this.users.findIndex(i => i._id === userId);
    if (this.users[userIndex]) {
      this.users.splice(userIndex, 1);
    }
    return this.users[userIndex];
  }
}

