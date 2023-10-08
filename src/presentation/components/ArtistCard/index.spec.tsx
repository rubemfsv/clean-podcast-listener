import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ArtistCard } from '@/presentation/components'
import { PodcastArtistModel } from '@/domain/models'
import { mockPodcastArtistModel } from '@/domain/test'

const makeSut = (artist: PodcastArtistModel): RenderResult => {
  return render(<ArtistCard artist={artist} />)
}

describe('ArtistCard Component', () => {
  test('renders ArtistCard with correct data', () => {
    const { getByTestId } = makeSut(mockPodcastArtistModel())
    const ArtistCard = getByTestId('episodeCard') as HTMLInputElement
    expect(ArtistCard).toBeInTheDocument()
  })
})
