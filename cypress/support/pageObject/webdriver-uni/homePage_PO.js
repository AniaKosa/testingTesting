class HomePage_PO{
    visitHomePage(){
        cy.visit(Cypress.env("webdriverUni_homepage"))
    }

    clickOn_contactUs_Btn(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
    }

}

export default HomePage_PO