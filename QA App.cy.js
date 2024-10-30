describe('QA Application - Oracle', () => {
    
    beforeEach(   ()  => {
        cy.visit('https://apex.oracle.com/pls/apex/r/camila_oracle/qa-application/login?session=2839147782907')
        cy.get('#P9999_USERNAME').type('camila.allana91@gmail.com')
        cy.get('#P9999_PASSWORD').type('WorkQA#2024')
        cy.get('#B77155332656728720715').click()
        cy.get('#R77156498640970846641_heading').should('be.visible').and('exist')
    })

    // Save values in chart in memory.
    it('Save values in memory', () => {
        cy.get('#B77156501671004846671').should('be.visible').click()
    }) 
    
    // Access table and change the quantity of order 10 to "20".
    it('Change the quantity of order 10', () => {
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(5)').dblclick().type('20{enter}')
        cy.get('#B77156501671004846671').should('be.visible').click()

        // Verify table data is updated.
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(5)').contains('20')  

        // Verify chart is updated.
        cy.get('#_dvtActiveElement470871493').should('have.value', 'Store A')
        .and('include', 'Grapes')
        .and('contain', '62')
    }) 

    // Access table and change the location of order 10 to "Deli".
    it('Change the location of order 10', () => {
        cy.get('tr.a-GV-row:nth-child(4) > td:nth-child(6)').dblclick().type('Deli')
        cy.get('.a-PopupLOV-doSearch').click()
        cy.get('.popup-lov-highlight').should('be.visible').and('exist').click()
        cy.get('#B77156501671004846671').should('be.visible').click()
        cy.get('li.a-GV-pageSelector-item:nth-child(2) > button:nth-child(1)').click()
        
        // Verify table data is updated.
        cy.get('tr.a-GV-row:nth-child(5) > td:nth-child(6)').contains('Deli')

        // Verify chart is updated
        cy.get('#_dvtActiveElement482388880').should('have.value', 'Store A')
        .and('include', 'Grapes')
        .and('contain', '42')

        cy.get('#_dvtActiveElement185236255').should('have.value', 'Deli')
        .and('include', 'Grapes')
        .and('contain', '42')
    }) 

})        




