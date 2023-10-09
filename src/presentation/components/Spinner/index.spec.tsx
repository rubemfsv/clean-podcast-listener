import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { Spinner } from '@/presentation/components'

const makeSut = (): RenderResult => {
  return render(<Spinner />)
}

describe('Spinner Component', () => {
  test('Renders spinner when isLoading is true', () => {
    const { getByTestId } = makeSut()
    const spinners = getByTestId('spinner')
    expect(spinners).toBeInTheDocument()
  })
})
