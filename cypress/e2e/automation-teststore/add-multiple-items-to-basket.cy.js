/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { AutoStore_homepage_PO } from "../../support/pageObject/automationTestStore/AutoStore_homepage_PO"
import { AutoStore_HairCare_PO } from "../../support/pageObject/automationTestStore/AutoStore_HairCare_Po"

describe("add multiple items to basket", () => {

    const autoStore_homepage_PO = new AutoStore_homepage_PO()

    before(function(){
        cy.fixture("products").then(function(data){
            globalThis.data = data
        })
    })

    beforeEach(function () {
        autoStore_homepage_PO.accessHomepage()
        autoStore_homepage_PO.clickOnHaiCareLink()


    })

    it("Add specific items to basket", function () {

        AutoStore_HairCare_PO.addHairCareProductsToBasket()


        // globalThis.data.productName.forEach(function(element){
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .label').contains(3)
        // //cy.get('.dropdown-toggle > .fa').click()
    })
    //sample change
    

})