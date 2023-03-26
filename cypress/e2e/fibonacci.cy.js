import {circlesArr} from "../constants/constants";
import {SHORT_DELAY_IN_MS} from "../../src/constants/delays";

describe('String test', () => {
    beforeEach(() => {
        cy.viewport(1536, 960);
        cy.visit('http://localhost:3000/fibonacci');
    })

    it('should disable button then input is clear', () => {
        cy.get('input').should('have.value', '');
        cy.contains('Рассчитать').should('be.disabled');
    })

    it('should generate integers correctly', () => {
        cy.clock();
        cy.get('input').type('5');
        cy.contains('Рассчитать').click();
        cy.tick(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '1').should('have.text', '1');

        cy.tick(SHORT_DELAY_IN_MS);
        //cy.wait(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '2').should('have.text', '11');

        cy.tick(SHORT_DELAY_IN_MS);
        //cy.wait(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '3').should('have.text', '112');

        cy.tick(SHORT_DELAY_IN_MS);
        //cy.wait(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '4').should('have.text', '1123');

        cy.tick(SHORT_DELAY_IN_MS);
        //cy.wait(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '5').should('have.text', '11235');

        cy.tick(SHORT_DELAY_IN_MS);
        //cy.wait(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).children().should('have.length', '6').should('have.text', '112358');

        cy.get('input').should('have.value', '');
        cy.contains('Рассчитать').should('be.disabled');
    })

})
