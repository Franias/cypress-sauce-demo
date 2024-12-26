import { logaUsuario } from '../../support/pageObjects/login/loginTask.cy';
import { paginaDeProdutos, validaFiltro, adicionaProdutoNoCarrinho, removeProdutoNoCarrinho } from '../../support/pageObjects/inventory/inventoryTask.cy';

describe('Jornada de Usuário Página de Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1');
    logaUsuario();
  });
  it('Deve apresentar página de produtos', () => {
    paginaDeProdutos();
    validaFiltro();
    cy.screenshot();
  });
  it('Deve adicionar produto ao carrinho', () => {
    adicionaProdutoNoCarrinho();
    cy.screenshot();
  });
  it('Deve remover produto do carrinho', () => {
    adicionaProdutoNoCarrinho();
    removeProdutoNoCarrinho();
    cy.screenshot();
  });
});