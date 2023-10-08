import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { EpisodeCard } from '@/presentation/components'
import { PodcastArtistModel } from '@/domain/models'
import { mockPodcastArtistModel } from '@/domain/test'

const makeSut = (artist: PodcastArtistModel): RenderResult => {
  return render(<EpisodeCard artist={artist} />)
}

describe('EpisodeCard Component', () => {
  test('renders EpisodeCard with correct data', () => {
    const { getByTestId } = makeSut(mockPodcastArtistModel())
    const EpisodeCard = getByTestId('episodeCard') as HTMLInputElement
    expect(EpisodeCard).toBeInTheDocument()
  })
})
