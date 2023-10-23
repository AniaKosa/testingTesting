/// <reference types="cypress" />


describe('Test file upload', ()=>{
    it('upload a file', function(){
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true}) 
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png') 
        cy.get('#submit-button').click()

    })

    it('Upload no file', function(){
         cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
        cy.get('#submit-button').click()

    })
})