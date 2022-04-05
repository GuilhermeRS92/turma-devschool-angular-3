import { Injectable } from '@angular/core';
import { users } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<users> = [
    {
      id: 1,
      name: 'Guilherme Ribeiro',
      email: 'guilherme@mjv.com.br',
      password: 'gui123',
      type: 'user'
    },
    {
      id: 2,
      name: 'Nathan Carlos',
      email: 'nathan@gmail.com',
      password: 'gui123',
      type: 'user'
    },
    {
      id: 2,
      name: 'Henrique Silva',
      email: 'henrique@gmail.com',
      password: 'gui123',
      type: 'user'
    },
    {
      id: 4,
      name: 'Alan Jhonnes',
      email: 'alan@gmail.com',
      password: 'gui123',
      type: 'user'
    }
  ];

  constructor() { }

  generateNextId(): number {
    return this.users[(this.users.length - 1)].id + 1;
  }

  getDefaultUser(): users {
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
      type: '',
    }
  }

  getUser() {
    return this.users;
  }

  getUserByEmailAndPassword(email : string | undefined, password: string | undefined) {
    return this.users.find((users) => users.email === email && users.password === password);
  }

  getUserById(id: number) {
    return this.users.find((users) => users.id === Number(id));
  }

  getUserByName(name: string) {
    return this.users.find((users) => users.name === name);
  }

  getUserByFilterName(name: string) {
    return this.users.filter((users) => users.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getUserByFilterId(id: number) {
    const users = this.getUserById(Number(id));
    if(!users) {
      return [];
    }
    return [users];
  }

  createUser(users: users) {
    this.users.push(users);
    return this.users;
  }

  authenticate(email: string, password: string) {
    return this.users.find((users) => users.email === email && users.password === password)
}
}