/// <reference types="cypress" />

describe("Cypress web security", ()=>{

    it("Visiting two super-domains", function(){
 
        cy.visit('https://automationteststore.com/')
        cy.visit('https://webdriveruniversity.com/')

    })

    it("Visiting two super-domains through link on one of them", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
  
    })
  })