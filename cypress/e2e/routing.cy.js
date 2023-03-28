describe('Routing testing', () => {
    context('macbook 16 resolution', () => {
        beforeEach(() => {
            cy.viewport(1536, 960);
            cy.visit('');
        })

        it('should open main page by default', function () {
            cy.get('h1')
                .should('have.css', 'font-size', '134px')
                .contains('МБОУ АЛГОСОШ');
        });

        it('should open  string-page', function () {
            cy.get("a[href*='recursion']").click();
            cy.get('h3').contains('Строка');
            cy.contains('К оглавлению')
        });

        it('should open  fibonacci-page', function () {
            cy.get("a[href*='fibonacci']").click();
            cy.get('h3').contains('Последовательность Фибоначчи');
            cy.contains('К оглавлению')
        });

        it('should open  sorting-page', function () {
            cy.get("a[href*='sorting']").click();
            cy.get('h3').contains('Сортировка массива');
            cy.contains('К оглавлению')
        });

        it('should open  stack-page', function () {
            cy.get("a[href*='stack']").click();
            cy.get('h3').contains('Стек');
            cy.contains('К оглавлению')
        });

        it('should open  queue-page', function () {
            cy.get("a[href*='queue']").click();
            cy.get('h3').contains('Очередь');
            cy.contains('К оглавлению')
        });

        it('should open  list-page', function () {
            cy.get("a[href*='list']").click();
            cy.get('h3').contains('Связный список');
            cy.contains('К оглавлению')
        });
    })
})