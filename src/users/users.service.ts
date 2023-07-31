import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';
import { faker, th } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  Add(body: UserDto) {
    return this.userModel.create(body);
  }
  FindAll() {
    return this.userModel.find();
  }
  FindOne(id: string) {
    return this.userModel.findById({ _id: id });
  }
  Update(id: string, body: UserDto) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }
  Delete(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { firstName: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.userModel.find(keyword);
  }

  faker() {
    for (let i = 0; i < 30; i++) {
      const user = new this.userModel({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: 38,
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: 24255223,
      });
      this.userModel.create(user);
    }
    return 'success';
  }
}
