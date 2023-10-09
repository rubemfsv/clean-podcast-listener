import React from 'react'
import { RenderResult, fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Template } from '@/presentation/components'

let isLoading = false

const makeSut = (isLoading: boolean): RenderResult => {
  return render(
    <Router history={history}>
      <Template isLoading={isLoading}>
        <h1>Template</h1>
      </Template>
    </Router>
  )
}

const history = createMemoryHistory({
  initialEntries: ['/podcast/123'],
})

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

  test('handles onClick in podcast name to redirect to main route', () => {
    const { getByTestId } = makeSut(isLoading)
    const title = getByTestId('title') as HTMLInputElement
    fireEvent.click(title)
    expect(history.location.pathname).toBe(`/`)
  })

  test('handles onClick in podcast name to redirect to main route', () => {
    const { getByTestId } = makeSut(isLoading)
    const title = getByTestId('title') as HTMLInputElement
    fireEvent.click(title)
    expect(history.location.pathname).toBe(`/`)
  })

  test('handles onClick in podcast name to redirect to main route', () => {
    const { getByTestId } = makeSut(isLoading)
    const backIcon = getByTestId('backIcon') as HTMLInputElement
    fireEvent.click(backIcon)
    expect(history.location.pathname).toBe(`/`)
  })
})
