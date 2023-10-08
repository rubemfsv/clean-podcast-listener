import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { EpisodeCard } from '@/presentation/components'

const makeSut = (): RenderResult => {
  return render(<EpisodeCard />)
}

describe('EpisodeCard Component', () => {
  test('renders EpisodeCard with correct data', () => {
    const { getByTestId } = makeSut()
    const EpisodeCard = getByTestId('episodeCard') as HTMLInputElement
    expect(EpisodeCard).toBeInTheDocument()
  })
})
