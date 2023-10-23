describe('hooks', function () {
    before(function () {
        cy.log('runs once before the first test in this block')
    })

    after(function () {
        cy.log('runs once after the last test in this block')
    })

    beforeEach(function () {
        cy.log('runs before each test in this block')
    })

    afterEach(function () {
        cy.log('runs after each test in this block')
    })

    it('first test', ()=>{
        cy.log('example test 1')

    })
    it('second test', ()=>{
        cy.log('example test 2')
        
    })
})