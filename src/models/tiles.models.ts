import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class TileV2 {
  type: string;
  name: string;
  title: string;
  icon: string;
  url: string | null;
  visibility: string;
  availability: string;
  ails: [];
  isEnabled: boolean;
  openExternally: boolean;
  ssoTargetAppName: string | null;
  appVersion: string;
  deviceType: [];
  platformType: [];
  batchKey: string;
  label: string | null;
}

export class Feature {
  isPrmRequired: boolean;

  name: string;

  url: string;

  isEnabled: boolean;

  availableFor: string;
}

export class WebFeature {
  isPrmRequired: boolean;

  name: string;

  url: string;

  isEnabled: boolean;

  availableFor: string;
}

@Schema()
export class Tile {
  countryId: string;

  profile: string;

  features: Feature[];

  webFeatures: WebFeature[];

  createdAt: Date;

  updatedAt: Date;

  tilesV2: TileV2[];
}

export type TileDocument = Tile & Document;

export const TileSchema = SchemaFactory.createForClass(Tile);
