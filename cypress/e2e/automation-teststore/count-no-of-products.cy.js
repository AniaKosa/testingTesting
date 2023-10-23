/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("count no of products and validate add to cart", () => {

    it("Count no of products", function () {
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('contain', "Add to Cart")
         
        })
})

  