/// <reference types="cypress" />

describe('Listen Podcast flow', () => {
  it('should go to episode page and check if the audio player is correct', () => {
    cy.visit(Cypress.env('baseUrl') + '/')
    cy.get('[data-testid="podcastCard"]').eq(0).click()
    cy.get('[data-testid="episodeRow"]').eq(0).click()
    cy.get('[data-testid="audioPlayer"]').should('be.visible')
    cy.get('[data-testid="audioPlayer"]').should(
      'have.prop',
      'tagName',
      'AUDIO'
    )
  })
})
