/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Itarate over elements", () => {

    beforeEach(function(){
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    })

    it("Log information of all products", function () {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + ": " + $el.text())
         
        })
    })

    it("Add specific product to basket", function () {
    //     cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //         if($el.text().includes("Eau Parfumee au The Vert Shampoo")){
    //             cy.wrap($el).click()
    //         }
    // })
    cy.selectProduct("Curls to straight Shampoo") 
})

it("Add another specific product to basket", function () {
cy.selectProduct("Seaweed Conditioner") 
})

it('Add the third product to the basket', function(){
    cy.selectProduct("Eau Parfumee au The Vert Shampoo")
})
})