import { cartPage } from "./cartPage.cy";
import { inventoryPage } from "../inventory/inventoryPage.cy";

const produtoBackpack = 'Sauce Labs Backpack';

export const abreCarrinhoDeCompras = () => {
    cy.get(inventoryPage.filtro_ordenacao).should('be.visible');
    cy.get(inventoryPage.filtro_ordenacao).select('Name (A to Z)');
    cy.get(inventoryPage.primeiro_produto).contains(produtoBackpack);

    cy.get(cartPage.botao_carrinho).click({force:true});

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/v1/cart.html')
    })
}
export const continuaComprando = () => {
    cy.get(cartPage.botao_add_to_cart).contains('Continue Shopping').click();
    cy.get(cartPage.produto_jacket).click();
    cy.get(cartPage.botao_add_to_cart_shopping).click();
    cy.get(cartPage.botao_voltar).click({force:true});
    cy.get(cartPage.produto_bike_light).click();
    cy.get(cartPage.botao_add_to_cart_shopping).click();
    cy.get(cartPage.botao_voltar).click({force:true});
}

export const removeProdutoDoCarrinho = () => {
    cy.get(cartPage.produto_no_carrinho).eq(0).click({force: true});

}