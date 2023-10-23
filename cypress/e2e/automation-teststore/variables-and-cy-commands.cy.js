/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Verify variables, cy commands and jQuary commands", () => {

    it("Navigating to specific product pages", function () {
        cy.visit("https://automationteststore.com/")
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        makeupLink.click()
        skincareLink.click()
    })

    it("Navigating to specific product pages", function () {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //following lines fail
        // const header = cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log('Header text is: ' + headerText)
            expect(headerText).is.eq("Makeup")
        } )
    
    })


    it.only("validate properties of the contact-us page", function () {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //uses cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should('contain', "First name:")

        //JQuary approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain("First name:")

                 //Embedded commands (cloasure)
                 cy.get('#field_11').then(fnText =>{
                    cy.log(fnText.text())
                    cy.log(fnText)

                 })

        })

        //Embedded commands (cloasure)

    
    })
})