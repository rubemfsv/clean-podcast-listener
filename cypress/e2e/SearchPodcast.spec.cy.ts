/// <reference types="cypress" />

describe('Search Podcast Flow', () => {
  it('should search podcast and display correct infos', () => {
    cy.visit(Cypress.env('baseUrl') + '/')
    cy.get('[data-testid="searchField"]').click().type('friday')
    const elementsLength =
      cy.get('[data-testid="podcastCard"]').children.length + 1
    cy.get('[data-testid="searchField"]').should('have.length', elementsLength)
  })
})
