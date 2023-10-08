import faker from 'faker'
import { GetPodcastDetails } from '../usecases'
import {
  PodcastArtistModel,
  PodcastDetailsModel,
  PodcastEpisodeGenreModel,
} from '../models'

const mockPodcasEpisodeGenreModel = (): PodcastEpisodeGenreModel => ({
  name: faker.lorem.words(2),
  id: faker.lorem.word(),
})

const mockPodcastDetailsModel = (): PodcastDetailsModel => ({
  country: faker.address.countryCode(),
  episodeUrl: faker.internet.url(),
  trackTimeMillis: faker.datatype.number(),
  closedCaptioning: faker.datatype.string(),
  collectionId: faker.datatype.number(),
  collectionName: faker.datatype.string(),
  genres: [
    mockPodcasEpisodeGenreModel(),
    mockPodcasEpisodeGenreModel(),
    mockPodcasEpisodeGenreModel(),
  ],
  episodeGuid: faker.lorem.words(10),
  description: faker.lorem.words(10),
  artworkUrl60: faker.internet.url(),
  artistViewUrl: faker.internet.url(),
  shortDescription: faker.lorem.words(10),
  releaseDate: faker.date.recent().toISOString(),
  trackId: faker.datatype.number(),
  trackName: faker.lorem.words(2),
  feedUrl: faker.internet.url(),
  trackViewUrl: faker.internet.url(),
  artistIds: [faker.datatype.number(), faker.datatype.number()],
  artworkUrl160: faker.internet.url(),
  artworkUrl600: faker.internet.url(),
  episodeFileExtension: faker.datatype.string(),
  episodeContentType: faker.datatype.string(),
  collectionViewUrl: faker.internet.url(),
  previewUrl: faker.internet.url(),
  kind: faker.lorem.word(),
  wrapperType: faker.lorem.word(),
})

export const mockPodcastArtistModel = (): PodcastArtistModel => ({
  ...mockPodcastDetailsModel(),
  artistName: faker.lorem.words(2),
  collectionCensoredName: faker.lorem.words(2),
  trackCensoredName: faker.lorem.words(2),
  artworkUrl30: faker.internet.url(),
  artworkUrl100: faker.internet.url(),
  collectionPrice: faker.datatype.number(),
  trackPrice: faker.datatype.number(),
  collectionHdPrice: faker.datatype.number(),
  collectionExplicitness: faker.lorem.words(2),
  trackExplicitness: faker.lorem.words(2),
  trackCount: faker.datatype.number(),
  currency: faker.finance.currencyCode(),
  primaryGenreName: faker.datatype.string(),
  genreIds: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  genres: [
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
  ] as PodcastEpisodeGenreModel[] & string[],
})

export const mockGetPodcastDetailsModel = (): GetPodcastDetails.Model => ({
  resultCount: faker.datatype.number(),
  results: [
    mockPodcastArtistModel(),
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
  ],
})
