import { PodcastListRequestModel } from '@/domain/models'

export interface IGetPodcastList {
  getList: () => Promise<GetPodcastList.Model>
}

export namespace GetPodcastList {
  export type Model = PodcastListRequestModel
}
