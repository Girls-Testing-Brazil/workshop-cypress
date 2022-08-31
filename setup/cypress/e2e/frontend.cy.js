describe('Front End Tests', () => {
    it('Acessar a página home com sucesso', () => {
        cy.visit("https://angularjs.realworld.io/#/")
        cy.get('.navbar-brand').should('be.visible')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').should('be.visible')
        cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').should('be.visible')
    })

    it('Fazer login com usuario invalido - URL', () => {
        cy.visit("https://angularjs.realworld.io/#/login")
        cy.get('.text-xs-center.ng-binding').should('be.visible')
        // Email:
        cy.get(':nth-child(2) > .form-control').type('invalidemail@email.com')
        // Senha:
        cy.get(':nth-child(3) > .form-control').type('invalidpassword')
        // Botão:
        cy.get('.btn').click()
        cy.get('div.ng-scope > .ng-binding').should('be.visible')
        cy.contains('div.ng-scope > .ng-binding', 'email or password is invalid')
    })

    it('Fazer login com usuario invalido - Home', () => {

        // Carregamento da pagina Home: 
        cy.visit("https://angularjs.realworld.io/#/")
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').should('be.visible')

        // Indo pra pagina de Login
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click()
        cy.get('.text-xs-center.ng-binding').should('be.visible')
        // Email:
        cy.get(':nth-child(2) > .form-control').type('invalidemail@email.com')
        // Senha:
        cy.get(':nth-child(3) > .form-control').type('invalidpassword')
        // Botão:
        cy.get('.btn').click()
        cy.get('div.ng-scope > .ng-binding').should('be.visible')
        cy.contains('div.ng-scope > .ng-binding', 'email or password is invalid')
    })

    it('Fazer login com usuario valido- URL', () => {
        cy.visit("https://angularjs.realworld.io/#/login")
        cy.get('.text-xs-center.ng-binding').should('be.visible')
        // Email:
        cy.get(':nth-child(2) > .form-control').type('VALID_USER')
        // Senha:
        cy.get(':nth-child(3) > .form-control').type('VALID_PASSWORD')
        // Botão:
        cy.get('.btn').click()
        cy.get('[show-authed="true"] > .nav-link').should('be.visible')
        cy.get('[show-authed="true"] > :nth-child(2) > .nav-link').should('be.visible')
    })

  })