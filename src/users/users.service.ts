import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User } from 'src/models/users.models';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDto>) {}

  async Add(body: UserDto) {
    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(body.password, 10); // Utilisez bcrypt.hash

    // Créez un nouvel utilisateur avec le mot de passe haché
    const newUser = new this.userModel({
      firstName: body.firstName,
      lastName: body.lastName,
      age: body.age,
      email: body.email,
      password: hashedPassword, // Utilisez le mot de passe haché
    });

    return newUser.save(); // Ajoutez le nouvel utilisateur à la base de données
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
      });
      this.userModel.create(user);
    }
    return 'success';
  }
}
