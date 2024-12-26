import { inventoryPage } from '../inventory/inventoryPage.cy.js';

export const paginaDeProdutos = () => {
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/v1/inventory.html')
    })
    cy.get(inventoryPage.logo).should('be.visible');
    cy.get(inventoryPage.products).should('be.visible');
    cy.get(inventoryPage.lista_produtos).should('be.visible');

}

export const validaFiltro = () => {
    cy.get(inventoryPage.filtro_ordenacao).should('be.visible');
    cy.get(inventoryPage.filtro_ordenacao).select('Name (A to Z)');
    cy.get(inventoryPage.produto_backpack).contains('Sauce Labs Backpack');
    cy.get(inventoryPage.produto_tshirt_red).contains('Test.allTheThings() T-Shirt (Red)');
    cy.get(inventoryPage.filtro_ordenacao).select('Name (Z to A)');
    cy.get(inventoryPage.produto_tshirt_red).contains('Test.allTheThings() T-Shirt (Red)');
    cy.get(inventoryPage.produto_backpack).contains('Sauce Labs Backpack');
    cy.get(inventoryPage.filtro_ordenacao).select('Price (low to high)');
    cy.get(inventoryPage.produto_onesie).contains('Sauce Labs Onesie');
    cy.get(inventoryPage.produto_jacket).contains('Sauce Labs Fleece Jacket');
    cy.get(inventoryPage.filtro_ordenacao).select('Price (high to low)');
    cy.get(inventoryPage.produto_jacket).contains('Sauce Labs Fleece Jacket');
    cy.get(inventoryPage.produto_onesie).contains('Sauce Labs Onesie');

}

export const adicionaProdutoNoCarrinho = () => {
    cy.get(inventoryPage.botao_add_to_cart).eq(0).click({force: true});
}

export const removeProdutoNoCarrinho = () => {
    cy.get(inventoryPage.botao_remove_from_cart).eq(0).click({force: true});
}