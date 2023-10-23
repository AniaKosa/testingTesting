/// <reference types="cypress" />

describe("Test mouse actions", ()=>{

    it("Scroll into view", function(){
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })

    it("Drag and drop an element", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#draggable').trigger('mousedown', {which:1})
        cy.get('#droppable').trigger('mousemove')
                            .trigger('mouseup', {force: true})
      })

      it("Doubble click the element", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#double-click').dblclick()

      })

      it("Hold the mouse key", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($el)=>{
          expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

      })
  })