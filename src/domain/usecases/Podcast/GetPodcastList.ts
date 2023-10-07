import { PodcastRequestModel } from '@/domain/models'

export interface IGetPodcastList {
  get: () => Promise<GetPodcastList.Model>
}

export namespace GetPodcastList {
  export type Model = PodcastRequestModel
}
