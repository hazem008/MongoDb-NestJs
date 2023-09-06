import { Module } from '@nestjs/common';
import { TileService } from './tile.service';
import { TileController } from './tile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tile, TileSchema } from 'src/models/tiles.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tile.name, schema: TileSchema, collection: 'Tiles' },
    ]),
  ],
  providers: [TileService],
  controllers: [TileController],
})
export class TileModule {}
