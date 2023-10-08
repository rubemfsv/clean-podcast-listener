import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { PodcastCard } from '@/presentation/components'
import faker from 'faker'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const makeSut = (
  image: string,
  podcastName: string,
  podcastAuthor: string,
  podcastId: string
): RenderResult => {
  return render(
    <Router history={history}>
      <PodcastCard
        image={image}
        podcastName={podcastName}
        podcastAuthor={podcastAuthor}
        podcastId={podcastId}
      />
    </Router>
  )
}

const image = faker.internet.avatar()
const podcastName = faker.lorem.words(3)
const podcastAuthor = faker.internet.userName()
const podcastId = faker.datatype.uuid()
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('PodcastCard Component', () => {
  test('renders PodcastCard with correct data', () => {
    const { getByTestId } = makeSut(
      image,
      podcastName,
      podcastAuthor,
      podcastId
    )
    const podcastCard = getByTestId('podcastCard') as HTMLInputElement
    expect(podcastCard).toBeInTheDocument()
  })

  test('handles onClick in podcast to redirect to details', () => {
    const { getByTestId } = makeSut(
      image,
      podcastName,
      podcastAuthor,
      podcastId
    )
    const podcastCard = getByTestId('podcastCard') as HTMLInputElement
    fireEvent.click(podcastCard)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe(`/podcast/${podcastId}`)
  })
})
