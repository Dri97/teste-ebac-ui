///<reference types="cypress"/>

describe('Funcionalidade: Login', () => { 

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
    
});

   it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('adrielekazoku@gmail.com')
    cy.get('#password').type('adrielle123')
    cy.get('.woocommerce-from > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adrielekazoku (nao é adrielekazoku? Sair)')

   });

 it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('adrielllekazoku@gmail.com')
    cy.get('#password').type('adrielle123')
    cy.get('.woocommerce-from > .button').click()
    cy.get('.woocommerce-error').should('exist')
 });

 it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('adrielekazoku@gmail.com')
    cy.get('#password').type('adrielle123456')
    cy.get('.woocommerce-from > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail adrielekazoku@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
 });

})
