export class AutoStore_homepage_PO{
    accessHomepage(){
        cy.visit('https://automationteststore.com/')
    }

    clickOnHaiCareLink(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    }


}

//export default class AutoStore_homepage_PO
