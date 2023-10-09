import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { Template } from '@/presentation/components'

let isLoading = false

const makeSut = (isLoading: boolean): RenderResult => {
  return render(
    <Template isLoading={isLoading}>
      <h1>Template</h1>
    </Template>
  )
}

describe('Template Component', () => {
  beforeEach(() => {
    isLoading = false
  })

  test('Renders spinner when isLoading is true', () => {
    isLoading = true
    const { getAllByTestId } = makeSut(isLoading)
    const spinners = getAllByTestId('spinner')
    const firstSpinner = spinners[0]
    expect(firstSpinner).toBeInTheDocument()
  })

  test('Does not render spinner when isLoading is false', () => {
    const { queryByTestId } = makeSut(isLoading)
    const spinner = queryByTestId('spinner')
    expect(spinner).toBeNull()
  })
})
