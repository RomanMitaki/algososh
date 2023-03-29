describe('Application is available', () => {
    context('macbook 16 resolution', () => {
        beforeEach(() => {
            cy.viewport(1536, 960)
        })

        it('should be available on localhost:3000', () => {
            cy.visit('')
        })
    })
})