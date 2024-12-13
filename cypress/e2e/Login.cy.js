import {validaCamposInvalidos, logaUsuario, validaCamposVazios} from '../support/pageObjects/login/loginTask.cy';

describe('Jornada de Usuário', () => {
    beforeEach(()=> {
      cy.visit('https://www.saucedemo.com/v1');
    });

    it('Deve fazer login com sucesso', () => {
      logaUsuario();
    });

    it('Não deve permitir login com campos vazios ou inválidos', () => {
      validaCamposVazios();
      validaCamposInvalidos();
    });
});