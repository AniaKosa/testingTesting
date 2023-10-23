/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("add multiple items to basket", () => {

    before(function(){
        cy.fixture("products").then(function(data){
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    })

    it("Add specific items to basket", function () {
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .label').contains(3)
        //cy.get('.dropdown-toggle > .fa').click()
    })
    //sample change
    

})