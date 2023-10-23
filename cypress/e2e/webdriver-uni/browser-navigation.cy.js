/// <reference types="cypress" />

describe("hompage validation", ()=>{

    it("links validation", function(){
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
      cy.url().should('include', 'contactus')
      cy.go("back")
      cy.url().should('include', 'https://webdriveruniversity.com/')
      cy.reload()
      cy.go('forward')
      cy.url().should('include', 'contactus')
      cy.go("back")
      cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
      cy.url().should('include', 'Login-Portal')
      cy.go('back')

      cy.get("#to-do-list").invoke('removeAttr','target').click({force: true})
      cy.url().should('contain', "To-Do-List")
      cy.go("back")
  
    })

  })