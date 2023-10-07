import { PodcastDetailsModel } from './PodcastEpisodeModel'

export type PodcastArtistModel = PodcastDetailsModel & {
  artistName: string
  collectionCensoredName: string
  trackCensoredName: string
  artworkUrl30: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  currency: string
  primaryGenreName: string
  genreIds: Array<string>
  genres: Array<string>
}
