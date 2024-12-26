import {logaUsuario} from '../../support/pageObjects/login/loginTask.cy';
import {paginaDeProdutos , adicionaProdutoNoCarrinho} from '../../support/pageObjects/inventory/inventoryTask.cy';
import {abreCarrinhoDeCompras, continuaComprando, removeProdutoDoCarrinho} from '../../support/pageObjects/cart/cartTask.cy';

describe('Jornada de Usuário Carrinho de Compras', () => {
    beforeEach(()=> {
      cy.visit('https://www.saucedemo.com/v1');
      logaUsuario();
      paginaDeProdutos();
      adicionaProdutoNoCarrinho();
    });
    it('Deve adicionar produto ao carrinho', () => {
      abreCarrinhoDeCompras();
      cy.screenshot();
    });
    it('Deve continuar comprando adicionando produtos ao carrinho', () => {
      abreCarrinhoDeCompras();
      continuaComprando();
      cy.screenshot();
    });
    it('Deve remover produto do carrinho', () => {
      abreCarrinhoDeCompras();
      removeProdutoDoCarrinho();
      cy.screenshot();
    });
});