import { PodcastArtistModel, PodcastDetailsModel } from './'

export type LastPodcastDetailsModel = {
  lastArtist: PodcastArtistModel
  lastPodcastEpisodes: PodcastDetailsModel[]
}
