import { Injectable } from '@nestjs/common';
import { Tile, TileDocument } from 'src/models/tiles.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TileService {
  constructor(@InjectModel(Tile.name) private TileModel: Model<TileDocument>) {}

  Add(body: Tile) {
    return this.TileModel.create(body);
  }
  FindAll() {
    return this.TileModel.find();
  }
}
