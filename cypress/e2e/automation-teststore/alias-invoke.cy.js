/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Alias and invoke", () => {

    it("Validate a specific product", function () {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', "Seaweed Conditioner")

    })

    it.only("Calculate total of normal and sale product", function () {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('thumbnail')
        // cy.get('@thumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0

        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal +=itemsPriceTotal
            cy.log("Total price is: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0
            var saleItemPrice = $linkText.split('$')
            var i
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
               
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPriceTotal
            cy.log("Sale total price is: " + saleItemsPriceTotal)
        
        })
        .then(()=>{
            cy.log("th total price of all is: " + itemsTotal)
            expect(itemsTotal).to.eq(656.5)
        })

    })
})