import { inventoryPage } from '../inventory/inventoryPage.cy.js';

export const paginaDeProdutos = () => {
    cy.get(inventoryPage.logo).should('be.visible');
    cy.get(inventoryPage.products).should('be.visible');
    cy.get(inventoryPage.lista_produtos).should('be.visible');
}

