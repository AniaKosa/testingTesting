/// <reference types="cypress" />

describe("verify checkboxes", ()=>{

  beforeEach(()=>{
    //cy.log(Cypress.env("name"))
    cy.navigateTo_webdriverUni_checkboxPage()
  })

    it("Check and validate checkboxes", function(){
      // cy.visit('https://webdriveruniversity.com/')
      // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

    //   cy.get('#checkboxes > :nth-child(1) > input').check()
    //   cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    //   cy.get(':nth-child(5) > input').should('be.checked')
    //   cy.get(':nth-child(3) > input').should('not.be.checked')

    cy.get('#checkboxes > :nth-child(1) > input').as('option1')
    cy.get('@option1').check().should('be.checked')

    cy.get('@option1').click() //check always checks (doesn't uncheck), unlike click() which checks and uncheck depend on the state of the window
    cy.get('@option1').should('not.be.checked')
    })

    it("Uncheck and validate checkboxes", function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
  
        cy.get(':nth-child(5) > input').as('option3').should('be.checked')
        .get('@option3').uncheck()
        .get('@option3').should('not.be.checked') 
      
      })

      it("check multiple checkboxes and validate checkboxes", function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('input[type="checkbox"]').as('allBoxes')
        .get('@allBoxes').check().should('be.checked')

        cy.get('input[type="checkbox"]').as('allBoxes')
        .get('@allBoxes').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').as('allBoxes')
        .get('@allBoxes').check(['option-1', 'option-4']).should('be.checked')
  
      
      })
  })