Cypress.Commands.add('GetMethod', (cep)=>{
    cy.request({
        method: 'GET',
        url: `${cep}/json`,
        failOnStatusCode: false
    })
})