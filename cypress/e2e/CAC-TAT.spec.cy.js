/// <reference types="Cypress" />


describe('template spec', () => {

  beforeEach('passes', () => {
    cy.visit('./src/index.html');
  })

  it('envia forumulario', ()=> {

    cy.get('#firstName').type('Steve')
    cy.get('#lastName').type('Johnny')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('alguma coista')
    cy.get('.button').click()
    cy.get('.success').should('be.visible')

  } )

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', ()=> {
    cy.get('#firstName').type('Steve')
    cy.get('#lastName').type('Johnny')
    cy.get('#email').type('teste.com')
    cy.get('#open-text-area').type('alguma coista')
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('validar numero nao numerico', ()=> {
    cy.get('#phone').type('dhuiohofd').should('have.value', '')

    cy.get('#phone').type('349911').should('have.value', '349911')
    
  })

  it.only('validar numero campo obrigatorio', ()=> {
    cy.get('#firstName').type('Steve')
    cy.get('#lastName').type('Johnny')
    cy.get('#email').type('teste@teste.com')
    //const textLong = Cypress._.times('adsbtsbr', 10)
    const textLong = 'adufduni'.repeat(100)
    //cy.get('#open-text-area').type('qualquertexto')
    cy.get('#open-text-area').invoke('val', textLong).should('have.value', textLong).clear()
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', ()=> {
    Cypress._.times(4, ()=> {
      cy.get('#firstName').type('Steve').should('have.value', 'Steve').clear().should('have.value', '')

    })
    
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', ()=> {
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
   
  })

  it('envia formulario atraves de commands', ()=> {
    cy.fillmandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
   
  })

  it('seleciona um produto (YouTube) por seu texto', ()=> {
    
    cy.get('select').select('Blog').should('have.value', 'blog')
    cy.get('select').select('blog').should('have.value', 'blog')
    cy.get('select').select(1).should('have.value', 'blog')
   
  })
  

  
  it('marca o tipo de atendimento "Feedback"', ()=> {
    
    cy.get(':nth-child(4) > input').check().should('be.checked')
    // cy.get(':nth-child(4) > input').should('have.length', 4).each(function($radio){
    //   cy.wrap($radio).check()
    //    cy.wrap($radio).should('be.checked')
    // })   
  })

  it('marca ambos checkboxes, depois desmarca o último', ()=> {
    
    cy.get('#email-checkbox').check().should('be.checked')
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.get('#phone-checkbox').uncheck().should('not.be.checked')
 })


  it('seleciona um arquivo da pasta fixtures', ()=> {
    
    
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json').should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })

    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'}).should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
 })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', ()=> {
   // cy.get('.some-link').should('have.attr', 'target', '_blank')
    cy.get('a').should('have.attr', 'target', '_blank').should('have.attr', 'target', '_blank')

 })

 it('acessa a página da política de privacidade removendo o target e então clicanco no link', ()=> {
    cy.get('a').invoke('removeAttr', 'target').click()
 })

 it('testa pagina no link', ()=> {
  cy.get('a').invoke('removeAttr', 'target').click()
  cy.contains('Talking About Testing').should('be.visible')
})



    


  
})