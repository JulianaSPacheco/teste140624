/// <reference types="cypress"/>
import produtosPage from '../../support/page-objects/produtos.page'

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Selecionar produtos da lista', () => {
        
        cy.get('.products > .row')
            produtosPage.buscarProdutoLista('Abominable Hoodie')
            cy.get('.woocommerce-product-details__short-description > p').should('contain','')
        });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });    

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('abominable-hoodie/')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        let qtd=2
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('XL', 'Red', qtd)
        cy.get('.woocommerce-message').should('contain', qtd+ ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
});