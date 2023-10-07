import { PodcastLabelModel, PodcastLinkModel, PodcastModel } from './'

export type PodcastRequestModel = {
  feed: {
    author: {
      name: PodcastLabelModel
      uri: PodcastLabelModel
    }
    entry: Array<PodcastModel>
    updated: PodcastLabelModel
    rights: PodcastLabelModel
    title: PodcastLabelModel
    icon: PodcastLabelModel
    link: Array<PodcastLinkModel>
    id: PodcastLabelModel
  }
}
