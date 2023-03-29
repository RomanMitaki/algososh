import {circlesArr, changingColor, defaultColor} from "../constants/constants";
import {SHORT_DELAY_IN_MS} from "../../src/constants/delays";

describe('Queue test', () => {

    const addElement = (num) => {
        cy.get('input').type(num);
        cy.contains('Добавить').click();
        cy.get(circlesArr).contains(num).parent().invoke('attr', 'class').then(classList => expect(classList).contains(changingColor));
        cy.tick(SHORT_DELAY_IN_MS);
    }

    beforeEach(() => {
        cy.clock();
        cy.viewport(1536, 960);
        cy.visit('queue');
    })

    it('should disable button then input is not a number', () => {
        cy.get('input').should('have.value', '');
        cy.contains('Добавить').should('be.disabled');
    })

    it('should add element to queue', () => {
        addElement('1');

        cy.get(circlesArr).contains('1').parent().as('circle');
        cy.get('@circle').siblings('div').contains('head');
        cy.get('@circle').siblings('div').contains('tail');

        addElement('2');

        cy.get(circlesArr).then(num => {
            cy.get(num[0]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(num[0]).should('have.text', '1');
            cy.get(num[0]).siblings('div').contains('head');
            cy.get(num[1]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(num[1]).should('have.text', '2');
            cy.get(num[1]).siblings('div').contains('tail');
        })
    })

    it('should delete from queue', () => {
        addElement('1');
        addElement('2');

        cy.contains('Удалить').click();

        cy.get(circlesArr).then(item => {
            cy.get(item[0]).should('have.text', '');
            cy.get(item[1]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(item[1]).should('have.text', '2');
            cy.get(item[1]).siblings('div').contains('tail');
        });
    })

    it('should clear queue', () => {
        addElement('1');
        addElement('2');

        cy.contains('Очистить').click();
        cy.tick(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).contains('1').should('not.exist');
        cy.get(circlesArr).contains('2').should('not.exist');
    })
})