/// <reference types="cypress" />

describe("verify auto-complete drop down list", () => {

    it("select specific product based on the first letter", function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('a')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
            const prod = $el.text()
            const productToSelect = 'Apple'

            if (productToSelect == prod){
                //$el.click()
                $el.trigger('click')
            cy.get('#submit-button').click()
            cy.url().should('include', productToSelect)

            }
        }).then(()=>{
            cy.get('#myInput').type('G')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
            const prod = $el.text()
            const productToSelect = 'Grapes'
            if (productToSelect == prod){
                //$el.click()
                $el.trigger('click')

            
            cy.get('#submit-button').click()
            cy.url().should('include', productToSelect)
            }
            })})
        })
    })