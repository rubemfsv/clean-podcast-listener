import { IHttpClient, HttpStatusCode } from '@/data/protocols/http'
import { GetPodcastDetails, IGetPodcastDetails } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteGetPodcastDetails implements IGetPodcastDetails {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteGetPodcastDetailsNamespace.Model>
  ) {}

  async getDetails(): Promise<GetPodcastDetails.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteGetPodcastDetailsNamespace {
  export type Model = GetPodcastDetails.Model
}
