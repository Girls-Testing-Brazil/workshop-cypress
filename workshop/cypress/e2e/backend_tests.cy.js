describe('Testando API via CEP', () => {
    it('Buscando um cep válido', () => {
      // const url = "https://viacep.com.br/ws/01001000/json/" - comentário de uma linha
      /*
        Comentários maiores
      */
      const cep = "01001000"
      cy.GetMethod(cep).as('response')
      cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200) //assertion 
        expect(response.body).to.have.property('cep')
        expect(response.body).to.have.property('logradouro')
        expect(response.body).to.have.property('complemento')
        expect(response.body).to.have.property('bairro')
        expect(response.body).to.have.property('localidade')
      })
    })

    it('Buscar um cep com 9 digitos', () => { 
        const cep = "010010000"
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400) //assertion 
          })
    })

    it('Buscar um cep alfanumerico', () => { 

        const cep = "010010BP0"
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400) //assertion 
          })
    })
})