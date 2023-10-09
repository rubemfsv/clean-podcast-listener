import {
  RemoteGetPodcastDetails,
  RemoteGetPodcastDetailsNamespace,
} from './RemoteGetPodcastDetails'
import { HttpClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http/'
import { mockGetPodcastDetailsRequestModel } from '@/domain/test/'
import { UnexpectedError } from '@/domain/errors/'
import faker from 'faker'

type SutTypes = {
  systemUnderTest: RemoteGetPodcastDetails
  httpClientSpy: HttpClientSpy<RemoteGetPodcastDetailsNamespace.Model>
}

const makeSystemUnderTest = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy =
    new HttpClientSpy<RemoteGetPodcastDetailsNamespace.Model>()
  const systemUnderTest = new RemoteGetPodcastDetails(url, httpClientSpy)

  return {
    systemUnderTest,
    httpClientSpy,
  }
}

describe('RemoteGetPodcastDetails', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest(url)

    await systemUnderTest.getDetails()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should return an PodcastDetails.Model if HttpPostClient returns 200', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    const httpResult = mockGetPodcastDetailsRequestModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const Message = await systemUnderTest.getDetails()
    expect(Message).toEqual(httpResult)
  })

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = systemUnderTest.getDetails()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 403', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    }
    const promise = systemUnderTest.getDetails()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = systemUnderTest.getDetails()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = systemUnderTest.getDetails()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
