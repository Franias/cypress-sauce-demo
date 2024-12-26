import {logaUsuario} from '../../support/pageObjects/login/loginTask.cy';
import {paginaDeProdutos, adicionaProdutoNoCarrinho} from '../../support/pageObjects/inventory/inventoryTask.cy';
import {abreCarrinhoDeCompras} from '../../support/pageObjects/cart/cartTask.cy';
import {realizaCheckoutStepOne, realizaCheckoutStepTwo, validaCamposVazios} from '../../support/pageObjects/checkOut/checkOutTask.cy';
describe('Jornada de Usuário', () => {
    beforeEach(()=> {
      cy.visit('https://www.saucedemo.com/v1');
      logaUsuario();
      paginaDeProdutos();
      adicionaProdutoNoCarrinho();
      abreCarrinhoDeCompras();
    });

    it('Deve estar com produto no carrinho e realizar checkout', () => {
      realizaCheckoutStepOne();
      realizaCheckoutStepTwo();
    });

    it ('Deve validar campos vazios', () => {
      validaCamposVazios();
    })

    // it('Deve validar campos preenchidos incorretamente', () => {});

    // it('Não deve permitir compras com nenhum item', () => {});
});