import { PodcastArtistModel, PodcastDetailsModel } from '.'

export type PodcastDetailsRequestModel = {
  resultCount: number
  results: Array<PodcastArtistModel | PodcastDetailsModel>
}
