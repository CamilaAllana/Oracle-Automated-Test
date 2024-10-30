describe('QA Application Update', () => {
    
    beforeEach(   ()  => {
        cy.visit('https://apex.oracle.com/pls/apex/r/camila_oracle/qa-application/login?session=2839147782907')
        cy.get('#P9999_USERNAME').type('camila.allana91@gmail.com')
        cy.get('#P9999_PASSWORD').type('WorkQA#2024')
        cy.get('#B77155332656728720715').click()
        cy.get('#R77156498640970846641_heading').should('be.visible').and('exist')
    })

    
    it('Comparar o valor antes e depois da alteração', () => {
        let valorInicial;
      
        // Captura o valor inicial
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(5)').invoke('text').then((texto) => {
        valorInicial = texto;
        });
      
        // Executa a alteração na tabela
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(5)').dblclick().type('20{enter}');
      
        // Captura o valor final e compara com o valor inicial
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(5)').invoke('text').then((valorFinal) => {
        expect(valorFinal).not.to.equal(valorInicial); 
        expect(valorFinal).to.equal('20'); 
        });
    });
});
      
