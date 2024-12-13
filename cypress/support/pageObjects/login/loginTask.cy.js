import { loginPage } from '../login/loginPage.cy.js';

export const logaUsuario = () => {
    cy.get(loginPage.nome).type('standard_user');
    cy.get(loginPage.senha).type('secret_sauce');
    cy.get(loginPage.botao_login).click();

    cy.location().should((location) => {
        expect(location.pathname).to.eq('/v1/inventory.html');
    });
}

export const validaCamposVazios =() => {
    cy.get(loginPage.botao_login).click();
    cy.get(loginPage.mensagem_erro).should('have.text', 'Epic sadface: Username is required');
    cy.get(loginPage.nome).type('standard_user');    
    cy.get(loginPage.botao_login).click();
    cy.get(loginPage.mensagem_erro).should('have.text', 'Epic sadface: Password is required');
}

export const validaCamposInvalidos =() => {
    cy.get(loginPage.nome).clear();
    cy.get(loginPage.nome).type('teste');
    cy.get(loginPage.senha).type('teste');
    cy.get(loginPage.botao_login).click();
    cy.get(loginPage.mensagem_erro).should('have.text', 'Epic sadface: Username and password do not match any user in this service');

}