/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Inspect store item", () => {

    it("Click on the first item with item header", function () {
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it.only("Click on the first item using item txt", function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeader){

            console.log("Selected the following item: " + itemHeader.text())
        })
        console.log("test123")
    })

    it("Click on the first item using index", function () {
        cy.visit('https://automationteststore.com/')
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click()
        
    })
})