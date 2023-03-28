import {circlesArr, defaultColor, changingColor} from "../constants/constants";
import {SHORT_DELAY_IN_MS} from "../../src/constants/delays";

describe('Stack test', () => {

    const addElement = (num) => {
        cy.get('input').type(num);
        cy.contains('Добавить').click();
        cy.get(circlesArr).contains(num).parent().invoke('attr', 'class').then(classList => expect(classList).contains(changingColor));
        cy.tick(SHORT_DELAY_IN_MS);
    }

    beforeEach(() => {
        cy.clock();
        cy.viewport(1536, 960);
        cy.visit('stack');
    })

    it('should disable button then input is not a number', () => {
        cy.get('input').should('have.value', '');
        cy.contains('Добавить').should('be.disabled');
    })

    it('should add element to stack', () => {
        addElement('1');
        cy.get(circlesArr).contains('1').parent().as('circle');
        cy.get('@circle').siblings('div').contains('top');

        addElement('2');
        cy.get(circlesArr).then(num => {
            cy.get(num[0]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(num[0]).should('have.text', '1');
            cy.get(num[1]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(num[1]).should('have.text', '2');
            cy.get(num[1]).siblings('div').contains('top');
        })
    })

    it('should delete from stack', () => {
        addElement('1');
        addElement('2');

        cy.contains('Удалить').click();
        cy.tick(SHORT_DELAY_IN_MS)

        cy.get(circlesArr).should('have.length', 1);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains(defaultColor));
            cy.get(item[0]).should('have.text', '1');
            cy.get(item[0]).siblings('div').contains('top');
        })
    })

    it('should clear stack', () => {
        addElement('1');
        addElement('2');

        cy.contains('Очистить').click();
        cy.tick(SHORT_DELAY_IN_MS);

        cy.get(circlesArr).should('not.exist');
    })
})


