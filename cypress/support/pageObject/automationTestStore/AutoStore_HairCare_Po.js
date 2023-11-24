export class AutoStore_HairCare_PO {
    static addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click()
    }

}

//export default class {AutoStore_HairCare_PO};