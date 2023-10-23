/// <reference types="cypress" />

describe("handle allerts", ()=>{

    it("Confirm js allert contains a given text", function(){
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
      cy.get("#button1").click()

      cy.on('window:alert', (str) =>{
        expect(str).to.eq("I am an alert box!")
      })

    })

    it("Validate confirm alert box works correctly when clicking ok", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get("#button4").click()
  
        cy.on('window:confirm', () =>{
          return true; 
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
    })

        it("Validate confirm alert box works correctly when clicking cancel", function(){
            cy.visit('/')
            cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
            cy.get("#button4").click()
      
            cy.on('window:confirm', () =>{
              return false; 
            })
            cy.get("#confirm-alert-text").contains("You pressed Cancel!")
        
  
      })

      it ("Validate alert box using a stub", function(){
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true}) 
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get("#button4").click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get("#confirm-alert-text").contains("You pressed OK!")

        })
    

  })
    })