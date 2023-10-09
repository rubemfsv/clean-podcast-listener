/// <reference types="cypress" />

describe('Podcast List Flow', () => {
  it('should check if has 100 podcasts displayed', () => {
    cy.visit(Cypress.env('baseUrl') + '/')
    cy.get('[data-testid="podcastCard"]').should('have.length', 100)
  })
})
