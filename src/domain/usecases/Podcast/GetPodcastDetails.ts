import { PodcastDetailsRequestModel } from '@/domain/models'

export interface IGetPodcastDetails {
  getDetails: (
    params: GetPodcastDetails.Params
  ) => Promise<GetPodcastDetails.Model>
}

export namespace GetPodcastDetails {
  export type Params = {
    id: number
  }
  export type Model = PodcastDetailsRequestModel
}
