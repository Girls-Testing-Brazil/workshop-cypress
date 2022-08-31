describe("Testes automaticos da API consulta CEP", ()=>{
    it('Consulta de um CEP válido', ()=>{
        const cep = '01001000'
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.cep).to.equal('01001-000')
            expect(response.body.logradouro).to.equal('Praça da Sé')
            expect(response.body.complemento).to.equal('lado ímpar')
            expect(response.body.bairro).to.equal('Sé')
            expect(response.body.localidade).to.equal('São Paulo')
            expect(response.body.uf).to.equal('SP')
            expect(response.body.ibge).to.equal('3550308')
            expect(response.body.gia).to.equal('1004')
            expect(response.body.ddd).to.equal('11')
            expect(response.body.siafi).to.equal('7107')
        })
    })
    it('Consulta de um CEP com menos de 8 digitos', ()=>{
        const cep = '0100100'
       cy.GetMethod(cep).as('response')
       cy.get('@response').should((response)=>{
           expect(response.status).to.equal(400)
       })
   })

    it('Consulta de um CEP com menos de 8 digitos', ()=>{
        const cep = '0100100'
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Consulta de um CEP com mais de 8 digitos', ()=>{
        const cep = '0100100900'
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Consulta de um CEP com letras', ()=>{
        const cep = '0100AAB'
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Consulta de um CEP com espaço', ()=>{
        const cep = '010010 00'
        cy.GetMethod(cep).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(400)
        })
    })   

})