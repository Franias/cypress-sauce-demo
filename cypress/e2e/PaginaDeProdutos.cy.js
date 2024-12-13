import {logaUsuario} from '../support/pageObjects/login/loginTask.cy';
import {paginaDeProdutos} from '../support/pageObjects/inventory/inventoryTask.cy';

describe('Jornada de Usuário', () => {
    beforeEach(()=> {
      cy.visit('https://www.saucedemo.com/v1');
      logaUsuario();

    });

    it('Deve apresentar página de produtos', () => {
      paginaDeProdutos();
    });
});