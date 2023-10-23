/// <reference types="Cypress" />
describe("Handling data from tables", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of users", () => {
        var userDetails = []
        let number = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list)=>{
            userDetails[index] = $el.text() //extracting text from elements of the table and storing in in array index
        }).then(()=>{
            var i
            for(i=0; i<userDetails.length; i++ ){
                if(Number(userDetails[i])){
                number += Number(userDetails[i])
                //cy.log(userDetails[i])

                }
            }
            cy.log(number)
            expect(number).to.eq(322)
        })
      })
      it.only('Calculate and assert the age of a given user, based on last name', ()=>{
            cy.get('#thumbnail-1 td:nth-child(2)').each(($el, index, $list)=>{
                var text = $el.text()
                if(text.includes('Woods')){
                    cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then((age)=>{
                        const userAge = age.text()
                        expect(userAge).to.eq('80')
                    })
                }

            })

      })
  });
    
  