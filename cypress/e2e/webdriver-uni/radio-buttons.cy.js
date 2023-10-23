/// <reference types="cypress" />

describe("verify radio buttons", ()=>{

  beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

  })

    it("Check specific radio buttons", function(){
      cy.get('#radio-buttons').find("[type = 'radio']").first().check()
      cy.get('#radio-buttons').find("[type = 'radio']").eq(1).check()


    })

    it("validate the state of specific radio buttons", function(){
        cy.get("[value = 'lettuce']").should('not.be.checked')
        cy.get("[value = 'pumpkin']").should('be.checked')

        cy.get("[value = 'lettuce']").check()

        cy.get("[value = 'lettuce']").should('be.checked')
        cy.get("[value = 'pumpkin']").should('not.be.checked')

        cy.get("[value = 'cabbage']").should('be.disabled')
  
      })

  })