export interface AnimeInterface {
  data:  Datum[];
  meta:  AnimeInterfaceMeta;
  links: AnimeInterfaceLinks;
}

export interface Datum {
  id:            string;
  type:          TypeEnum;
  links:         DatumLinks;
  attributes:    Attributes;
  relationships: { [key: string]: Relationship };
}

export interface Attributes {
  createdAt:           Date;
  updatedAt:           Date;
  slug:                string;
  synopsis:            string;
  description:         string;
  coverImageTopOffset: number;
  titles:              Titles;
  canonicalTitle:      string;
  abbreviatedTitles:   string[];
  averageRating:       string;
  ratingFrequencies:   { [key: string]: string };
  userCount:           number;
  favoritesCount:      number;
  startDate:           string;
  endDate:             string;
  nextRelease:         null;
  popularityRank:      number;
  ratingRank:          number;
  ageRating:           string;
  ageRatingGuide:      string;
  subtype:             string;
  status:              string;
  tba:                 null | string;
  posterImage:         PosterImage;
  coverImage:          CoverImage | null;
  episodeCount:        number;
  episodeLength:       number | null;
  totalLength:         number;
  youtubeVideoId:      string;
  showType:            ShowTypeEnum;
  nsfw:                boolean;
}

export enum AgeRating {
  PG = "PG",
  R = "R",
}

export interface CoverImage {
  tiny:     string;
  large:    string;
  small:    string;
  original: string;
  meta:     CoverImageMeta;
}

export interface CoverImageMeta {
  dimensions: Dimensions;
}

export interface Dimensions {
  tiny:    Large;
  large:   Large;
  small:   Large;
  medium?: Large;
}

export interface Large {
  width:  number;
  height: number;
}

export interface PosterImage {
  tiny:     string;
  large:    string;
  small:    string;
  medium:   string;
  original: string;
  meta:     CoverImageMeta;
}

export enum ShowTypeEnum {
  Movie = "movie",
  Tv = "TV",
}

export enum Status {
  Finished = "finished",
}

export interface Titles {
  en?:    string;
  en_jp:  string;
  ja_jp:  string;
  en_us?: string;
}

export interface DatumLinks {
  self: string;
}

export interface Relationship {
  links: RelationshipLinks;
}

export interface RelationshipLinks {
  self:    string;
  related: string;
}

export enum TypeEnum {
  Anime = "anime",
}

export interface AnimeInterfaceLinks {
  first: string;
  next:  string;
  last:  string;
}

export interface AnimeInterfaceMeta {
  count: number;
}
