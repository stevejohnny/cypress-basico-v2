Cypress.Commands.add('fillmandatoryFieldsAndSubmit', ()=> {
    cy.get('#firstName').type('Steve')
    cy.get('#lastName').type('Johnny')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('alguma coista')
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
})