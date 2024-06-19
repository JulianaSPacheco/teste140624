/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Selecionar produtos da lista', () => {
        
        cy.get('.products > .row')
            //.first()
            //.last()
            //eq(2)



    });
  

});

