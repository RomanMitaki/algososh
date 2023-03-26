import {circlesArr} from "../constants/constants";
import {DELAY_IN_MS} from "../../src/constants/delays";

describe('String test', () => {
    beforeEach(() => {
        cy.viewport(1536, 960);
        cy.visit('http://localhost:3000/recursion');
    })

    it('should disable button then input is clear', () => {
        cy.get('input').should('have.value', '');
        cy.contains('Развернуть').should('be.disabled');
    })

    it('String recursion test', () => {
        cy.get('input').type('qwerty');
        cy.contains('Развернуть').click();

        cy.get(circlesArr).then((circle) => {
            cy.get(circle[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[0]).children().should('have.text', 'q');
            cy.get(circle[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[1]).children().should('have.text', 'w');
            cy.get(circle[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[2]).children().should('have.text', 'e');
            cy.get(circle[3]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[3]).children().should('have.text', 'r');
            cy.get(circle[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[4]).children().should('have.text', 't');
            cy.get(circle[5]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[5]).children().should('have.text', 'y');
        })

        cy.wait(DELAY_IN_MS);

        cy.get(circlesArr).then((circle) => {
            cy.get(circle[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[0]).children().should('have.text', 'q');
            cy.get(circle[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[1]).children().should('have.text', 'w');
            cy.get(circle[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[2]).children().should('have.text', 'e');
            cy.get(circle[3]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[3]).children().should('have.text', 'r');
            cy.get(circle[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[4]).children().should('have.text', 't');
            cy.get(circle[5]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[5]).children().should('have.text', 'y');
        })

        cy.wait(DELAY_IN_MS);

        cy.get(circlesArr).then((circle) => {
            cy.get(circle[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[0]).children().should('have.text', 'y');
            cy.get(circle[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[1]).children().should('have.text', 'w');
            cy.get(circle[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[2]).children().should('have.text', 'e');
            cy.get(circle[3]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'))
            cy.get(circle[3]).children().should('have.text', 'r');
            cy.get(circle[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[4]).children().should('have.text', 't');
            cy.get(circle[5]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[5]).children().should('have.text', 'q');
        })

        cy.wait(DELAY_IN_MS);

        cy.get(circlesArr).then((circle) => {
            cy.get(circle[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[0]).children().should('have.text', 'y');
            cy.get(circle[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[1]).children().should('have.text', 't');
            cy.get(circle[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[2]).children().should('have.text', 'e');
            cy.get(circle[3]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'))
            cy.get(circle[3]).children().should('have.text', 'r');
            cy.get(circle[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[4]).children().should('have.text', 'w');
            cy.get(circle[5]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[5]).children().should('have.text', 'q');
        })

        cy.wait(DELAY_IN_MS);

        cy.get(circlesArr).then((circle) => {
            cy.get(circle[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[0]).children().should('have.text', 'y');
            cy.get(circle[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[1]).children().should('have.text', 't');
            cy.get(circle[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[2]).children().should('have.text', 'r');
            cy.get(circle[3]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[3]).children().should('have.text', 'e');
            cy.get(circle[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[4]).children().should('have.text', 'w');
            cy.get(circle[5]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'))
            cy.get(circle[5]).children().should('have.text', 'q');
        })

        cy.get('input').should('have.value', '');
        cy.contains('Развернуть').should('be.disabled');
    })
})