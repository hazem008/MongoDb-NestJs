import { Controller, Post, Body, Get } from '@nestjs/common';
import { TileService } from './tile.service';
import { Tile } from 'src/models/tiles.models';

@Controller('tile')
export class TileController {
  constructor(private readonly service: TileService) {}
  @Post()
  async Add(@Body() body: Tile) {
    try {
      const newTile = await this.service.Add(body);
      return newTile; // Retournez la tuile nouvellement créée
    } catch (error) {
      throw new Error("Erreur lors de l'ajout de la tuile."); // Gérez les erreurs ici
    }
  }

  @Get()
  FindAll() {
    return this.service.FindAll();
  }
}
