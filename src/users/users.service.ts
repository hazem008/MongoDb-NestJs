import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  Add() {
    return 'add page';
  }
  FindAll() {
    return 'find all page';
  }
  FindOne() {
    return 'find one page';
  }
  Update() {
    return 'update page';
  }
  Delete() {
    return 'delete page';
  }
  search() {
    return 'search page';
  }
}
