import { cardPage } from "./cardPage.cy";
import { inventoryPage } from "../inventory/inventoryPage.cy";

export const abreCarrinhoDeCompras = () => {

    const produtoBackpack = 'Sauce Labs Backpack';
    
    cy.get(inventoryPage.filtro_ordenacao).should('be.visible');
    cy.get(inventoryPage.filtro_ordenacao).select('Name (A to Z)');
    cy.get(inventoryPage.primeiro_produto).contains(produtoBackpack);

    cy.get(cardPage.botao_carrinho).click();

}