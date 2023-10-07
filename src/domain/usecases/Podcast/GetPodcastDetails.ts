import { PodcastDetailsRequestModel } from '@/domain/models'

export interface IGetPodcastDetails {
  getDetails: () => Promise<GetPodcastDetails.Model>
}

export namespace GetPodcastDetails {
  export type Model = PodcastDetailsRequestModel
}
