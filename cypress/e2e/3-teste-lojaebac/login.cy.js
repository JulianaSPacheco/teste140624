/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login', () => {

    beforeEach(() => { 
        cy.visit('my-account') 
    });

    afterEach(() => { 
        cy.screenshot()
    });


    it('Login com sucesso', () => {
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password').type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')
    })

    it('Deve exibir msg de erro com usuário inválido', () => {
        cy.get('#username').type('pacheco@outlook.com')
        cy.get('#password').type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir msg de erro com senha inválida', () => {
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password').type('Ju123456')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail julianapacheco@outlook.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error'). should('exist')
    });

    it('Login com sucesso - Através de massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')
    });

    it('Login com sucesso - Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')   

        })
    });


    it.only('login com sucesso - Customizado', () => {
        cy.login('julianapacheco@outlook.com', 'Ju123456!@')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, julianapacheco (não é julianapacheco? Sair)')
    });

});