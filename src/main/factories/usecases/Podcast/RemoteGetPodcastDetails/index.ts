import { RemoteGetPodcastDetails } from '@/data/usecases/'
import { IGetPodcastDetails } from '@/domain/usecases'
import { makeAxiosHttpClient, makeApiUrl } from '@/main/factories/http'

export const makeRemoteGetPodcastDetails = (id: number): IGetPodcastDetails => {
  const remoteGetPodcastDetails = new RemoteGetPodcastDetails(
    makeApiUrl(`/lookup?id=${id}&media=podcast &entity=podcastEpisode&limit=20`),
    makeAxiosHttpClient()
  )

  return remoteGetPodcastDetails
}
