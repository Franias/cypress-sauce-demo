import { checkoutPage } from "./checkOutPage.cy";

export const realizaCheckoutStepOne = () => {
    cy.get(checkoutPage.botao_checkout).click();

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/v1/checkout-step-one.html')
    })
    cy.get(checkoutPage.nome).type('teste');
    cy.get(checkoutPage.sobrenome).type('teste');
    cy.get(checkoutPage.cep).type('99999-999');
    cy.get(checkoutPage.botao_continue_step_one).click();
}

export const validaCamposVazios =() => {
    cy.get(checkoutPage.botao_checkout).click();
    cy.get(checkoutPage.botao_continue).click();
    cy.get(checkoutPage.mensagem_erro).should('have.text', 'Error: First Name is required');
    cy.get(checkoutPage.nome).type('teste');
    cy.get(checkoutPage.botao_continue).click();
    cy.get(checkoutPage.mensagem_erro).should('have.text', 'Error: Last Name is required');
    cy.get(checkoutPage.sobrenome).type('teste');
    cy.get(checkoutPage.botao_continue).click();
    cy.get(checkoutPage.mensagem_erro).should('have.text', ' Error: Postal Code is required');
}