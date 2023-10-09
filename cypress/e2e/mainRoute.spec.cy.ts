/// <reference types="cypress" />

describe('Main route flow', () => {
  it('should check if has 100 podcasts displayed', () => {
    cy.visit(Cypress.env('baseUrl') + '/')
    cy.get('[data-testid="podcastCard"]').should('have.length', 100)
  })

  it('should search podcast and display correct infos', () => {
    cy.visit(Cypress.env('baseUrl') + '/')
    cy.get('[data-testid="searchField"]').click().type('friday')
    const elementsLength =
      cy.get('[data-testid="podcastCard"]').children.length + 1
    cy.get('[data-testid="searchField"]').should('have.length', elementsLength)
  })
})
