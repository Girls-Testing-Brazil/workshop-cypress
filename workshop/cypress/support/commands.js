Cypress.Commands.add('GetMethod', (cep) => { 
    cy.request({ url: "https://viacep.com.br/ws/" + cep + "/json/", failOnStatusCode: false})
 })
