/// <reference types="cypress" />

describe("Test datepicker", ()=>{

    it("Select date from he date picker", function(){
      cy.visit('/')
      cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true})
      cy.get('#datepicker').click()

    //   let date1 = new Date()
    //   date1.setDate(date1.getDate()) //get current date
    //   cy.log(date1.getDate())

    //   let date2 = new Date()
    //   date2.setDate(date1.getDate() + 5) 
    //   cy.log(date2.getDate())

    var date = new Date()
    date.setDate(date.getDate() + 364)

    var futureYear = date.getFullYear()
    var futureMonth = date.toLocaleString("default", {month: "long"})
    var futureDay = date.getDate()

    cy.log(futureYear)
    cy.log(futureMonth)
    cy.log(futureDay)

    function selectMonthAndYear(){
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
            if(!currentDate.text().includes(futureYear)){
                cy.get('.next').first().click()
                selectMonthAndYear()
            }
        }).then(()=>{
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureMonth)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            })
        })
    }
    function selectFutureDay(){
        cy.get('[class="day"]').contains(futureDay).click()
    }

    selectMonthAndYear()
    selectFutureDay()
  
    })

    
    })