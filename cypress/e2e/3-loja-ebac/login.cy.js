///<reference types="cypress"/>

const { should } = require("chai")

describe('Funcionalidade: Login',() => { 
it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('adrielekazoku@gmail.com')
cy.get('#password').type('adrielle123')
cy.get('.woocommerce-from > .button').click()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adrielekazoku (nao é adrielekazoku? Sair)')
})
