import HomePage_PO from "../../support/pageObject/webdriver-uni/homePage_PO"
import ContactUs_PO from "../../support/pageObject/webdriver-uni/contactUs_PO"

/// <reference types="cypress" />

describe("Test Contact Us form", ()=>{
  const homepage_PO = new HomePage_PO()
  const contactUs_PO = new ContactUs_PO()

  beforeEach(function(){
    cy.fixture('example').then(function(data){
globalThis.newdata = data
    })
  })

  beforeEach(() => {
    homepage_PO.visitHomePage()
    homepage_PO.clickOn_contactUs_Btn()
    // cy.visit(Cypress.env('webdriverUni_homepage') + 'Contact-Us/contactus.html')
  });

  it("Should be able to submit succesfully", function(){
    
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', "contactus")


    contactUs_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'some comment', 'h1', "Thank You for your Message!")

    // cy.get('[name="first_name"]').type(newdata.first_name)
    // cy.get('[name="last_name"]').type(newdata.last_name)
    // cy.get('[name="email"]').type(newdata.email)
    // cy.get('textarea.feedback-input').type('some comment')
    // cy.get('[type="submit"]').click()
    // cy.get('h1').should('have.text', "Thank You for your Message!")
    // cy.contactForm_submission(newdata.first_name, newdata.last_name, newdata.email, 'some comment', 'h1', "Thank You for your Message!")

  })


  it("Should not be able to submit succesfully", function(){
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('[name="first_name"]').type(newdata.first_name)
    // cy.get('[name="last_name"]').type(newdata.last_name)
    // cy.get('textarea.feedback-input').type('some comment')
    // cy.get('[type="submit"]').click()
    // cy.get('body').contains('Error: all fields are required')
    contactUs_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, " ", 'some comment', 'body', 'Error: Invalid email address')
    // cy.contactForm_submission(Cypress.env("first_name"), newdata.last_name, " ", 'some comment', 'body', 'Error: Invalid email address')

  })
})