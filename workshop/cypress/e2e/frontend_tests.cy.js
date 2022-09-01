describe('Testes de FrontEnd', () => {
    it('Acessar a página com sucesso', () => {
        cy.visit("https://angularjs.realworld.io/#/")
        // O texto "A place to share your knowledge."
        cy.get('.container > p').should('be.visible')
        // botão sign in
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').should('be.visible')
        // botão sign up
        cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').should('be.visible')

    })

    it('Acessar a página de login com sucesso', ()=>{
        cy.visit("https://angularjs.realworld.io/#/")
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').should('be.visible')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()

        cy.get('.text-xs-center.ng-binding').should('be.visible')
        cy.get('.btn').should('be.visible')
        // email
        cy.get(':nth-child(2) > .form-control').should('be.visible')
        // password
        cy.get(':nth-child(3) > .form-control').should('be.visible')

    })
})