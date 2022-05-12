import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) {}

  getTodoList() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((getTodo) => {
        console.log({ getTodo });
      });
  }
}
