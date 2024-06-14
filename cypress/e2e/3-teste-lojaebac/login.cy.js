/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    it('Login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password').type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')

    })

    it('Deve exibir msg de erro com usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('pacheco@outlook.com')
        cy.get('#password').type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click() 

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

        
    });

    it('Deve exibir msg de erro com senha inválida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password').type('Ju123456')
        cy.get('.woocommerce-form > .button').click() 

        cy.get('.woocommerce-error').should('contain', 'rro: A senha fornecida para o e-mail julianapacheco@outlook.com está incorreta. Perdeu a senha?')

        
    });

})