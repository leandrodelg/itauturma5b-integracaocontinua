   /// <reference types="cypress" />
 
context('buscar google', () => {
    beforeEach(() => {
      cy.visit('https://google.com.br')
    })
  
    it('procurar pagina', () => {
      cy.get('input[name="q"]').type('torne-se um programador')
      cy.get("form").submit()
  //    cy.get('http://torneseumprogramador.com.br').click()
  cy.get('a[href*="www.torneseumprogramador.com.br"]').click({ force: true })
  })




})