export type PodcastDetailsModel = {
  country: string
  episodeUrl: string
  trackTimeMillis: number
  closedCaptioning: string
  collectionId: number
  collectionName: string
  genres: Array<PodcastEpisodeGenreModel>
  episodeGuid: string
  description: string
  artworkUrl60: string
  artistViewUrl: string
  shortDescription: string
  releaseDate: string
  trackId: number
  trackName: string
  feedUrl: string
  trackViewUrl: string
  artistIds: Array<number>
  artworkUrl160: string
  artworkUrl600: string
  episodeFileExtension: string
  episodeContentType: string
  collectionViewUrl: string
  previewUrl: string
  kind: string
  wrapperType: string
}

export type PodcastEpisodeGenreModel = {
  name: string
  id: string
}
