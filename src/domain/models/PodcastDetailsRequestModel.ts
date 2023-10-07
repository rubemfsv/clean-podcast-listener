import { PodcastDetailsModel } from '.'

export type PodcastDetailsRequestModel = {
  resultCount: number
  results: Array<PodcastDetailsModel>
}
