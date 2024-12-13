describe('Jornada de Usuário', () => {
    beforeEach(()=> {
      cy.visit('/');
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#user-name').type('teste');
    });
});