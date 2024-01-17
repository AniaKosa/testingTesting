/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contact Us form via automation test store", ()=>{

  before(function(){
    cy.fixture('userDetails').as('user')
  })

    it("Should be able to submit succesfully", {
      retries:{
        runMode:2,
        openMode: 2
      }
    }, function(){
      cy.visit('https://automationteststore.com/')
      cy.xpath("//a[normalize-space()='Contact Us']").click().then(function(getName){
        cy.log("Name of the button is: " + getName.text())
      })
      cy.get("@user").then((user)=>{
        cy.get('#ContactUsFrm_first_name').type(user.firstName)
        cy.get('#ContactUsFrm_email').type(user.email)
      })
      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.get('#ContactUsFrm_enquiry').type("some comment")
      cy.xpath("//button[@title='Submit']").click()
      cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!")
      cy.log("The testing is over!")
  
    })
  })