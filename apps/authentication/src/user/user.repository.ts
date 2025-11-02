import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(data: Partial<User>): Promise<User> {
    const created = new this.userModel(data);
    const saved = await created.save();
    return saved.toObject();
  }

  async findAll(): Promise<User[]> {
    const docs = await this.userModel.find().select('-password').exec();
    return docs.map(d => d.toObject());
  }

  async findByEmail(email: string): Promise<User | null> {
    const doc = await this.userModel.findOne({ email }).exec();
    return doc ? doc.toObject() : null;
  }
}
