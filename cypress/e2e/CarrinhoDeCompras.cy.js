import {logaUsuario} from '../support/pageObjects/login/loginTask.cy';
import {paginaDeProdutos , adicionaProdutoNoCarrinho} from '../support/pageObjects/inventory/inventoryTask.cy';
import {abreCarrinhoDeCompras, continuaComprando, removeProdutoDoCarrinho} from '../support/pageObjects/cart/cartTask.cy';

describe('Jornada de Usuário', () => {
    beforeEach(()=> {
      cy.visit('https://www.saucedemo.com/v1');
      logaUsuario();
      paginaDeProdutos();
      adicionaProdutoNoCarrinho();
    });

    it('Deve adicionar produto ao carrinho', () => {
      abreCarrinhoDeCompras();
      
    });

    it('Deve continuar comprando adicionando produtos ao carrinho', () => {
      abreCarrinhoDeCompras();
      continuaComprando();

    });

    it('Deve remover produto do carrinho', () => {
      abreCarrinhoDeCompras();
      removeProdutoDoCarrinho();
    });

});