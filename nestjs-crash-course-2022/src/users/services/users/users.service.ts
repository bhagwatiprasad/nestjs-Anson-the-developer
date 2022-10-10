import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson new', email: 'anson@anson.com' },
    { username: 'Anson new2', email: 'anson@anson.com' },
    { username: 'Anson new3', email: 'anson@anson.com' },
  ];
  fetchUsers() {
    // return [{username: 'Anson' , email: 'anson@anson.com'}]
    return this.fakeUsers;
  }

  createUser(userDetails : CreateUserType) {
    this.fakeUsers.push(userDetails);
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return null;
    return { id: id, username: 'Anson' , email: 'anson@email.com'};

  }
}
