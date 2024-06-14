/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    it('Login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password').type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')


    })

})