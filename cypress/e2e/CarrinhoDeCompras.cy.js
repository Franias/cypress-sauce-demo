import {logaUsuario} from '../support/pageObjects/login/loginTask.cy';
import {paginaDeProdutos , adicionaProdutoNoCarrinho} from '../support/pageObjects/inventory/inventoryTask.cy';
import {abreCarrinhoDeCompras} from '../support/pageObjects/cart/cardTask.cy';

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

});