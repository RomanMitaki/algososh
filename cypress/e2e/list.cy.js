import {circlesArr, smallCircle} from "../constants/constants";
import {SHORT_DELAY_IN_MS} from "../../src/constants/delays";

describe('List test', () => {

    beforeEach(() => {
        cy.clock();
        cy.viewport(1536, 960);
        cy.visit('http://localhost:3000/list');
    })

    it('should disable button then input is not a number', () => {
        cy.get('input').should('have.value', '');
        cy.contains('Добавить в head').should('be.disabled');
        cy.contains('Добавить в tail').should('be.disabled');
        cy.contains('Добавить по индексу').should('be.disabled');
        cy.contains('Удалить по индексу').should('be.disabled');
    })

    it('Test rendering of the default list', () => {
        cy.get(circlesArr).should('have.length', 4).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
    })

    it('should add into head', () => {
        cy.get("input").first().type('11');
        cy.contains('Добавить в head').click();
        cy.get(smallCircle).contains('11').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 5);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'));
            cy.get(item[0]).should('have.text', '11');
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[1]).should('have.text', '0');
            cy.get(item[4]).siblings('div').contains('Tail');
        })

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[0]).should('have.text', '11');
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[4]).siblings('div').contains('Tail');
        })

    })

    it('should add into tail', () => {
        cy.get("input").first().type('77');
        cy.contains('Добавить в tail').click();
        cy.get(smallCircle).contains('77').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 5);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[3]).should('have.text', '1');
            cy.get(item[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'));
            cy.get(item[4]).should('have.text', '77');
            cy.get(item[4]).siblings('div').contains('Tail');
        })

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).then(item => {
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[4]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[4]).should('have.text', '77');
            cy.get(item[4]).siblings('div').contains('Tail');
        })

    })

    it('should delete from head', () => {
        cy.contains('Удалить из head').click();
        cy.get(smallCircle).contains('0').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 3);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[0]).should('have.text', '34');
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[1]).should('have.text', '8');
            cy.get(item[2]).siblings('div').contains('Tail');
        })
    })

    it('should delete from tail', () => {
        cy.contains('Удалить из tail').click();
        cy.get(smallCircle).contains('1').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 3);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[1]).should('have.text', '34');
            cy.get(item[2]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[2]).should('have.text', '8');
            cy.get(item[2]).siblings('div').contains('Tail');
        })
    })

    it('should add by index', () => {
        cy.get("input").first().type('11');
        cy.get("input").last().type('1');
        cy.contains('Добавить по индексу').click();
        cy.get(smallCircle).contains('11').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));
            cy.get(item[0]).should('have.text', '0');
        })

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[0]).should('have.text', '0');
            cy.get(item[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_modified'));
            cy.get(item[1]).should('have.text', '11');
        })

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 5);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[4]).siblings('div').contains('Tail');
        })
    })

    it('should delete by index', () => {
        cy.get("input").last().type('1');
        cy.contains('Удалить по индексу').click();
        cy.get(smallCircle).contains('0').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(smallCircle).contains('34').parent().invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_changing'));
            cy.get(item[0]).should('have.text', '0');
            cy.get(item[1]).should('have.text', '34');
        })

        cy.tick(SHORT_DELAY_IN_MS);
        cy.wait(0);

        cy.get(circlesArr).should('have.length', 3);
        cy.get(circlesArr).then(item => {
            cy.get(item[0]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[0]).should('have.text', '0');
            cy.get(item[0]).siblings('div').contains('head');
            cy.get(item[1]).invoke('attr', 'class').then(classList => expect(classList).contains('circle_default'));
            cy.get(item[1]).should('have.text', '8');
            cy.get(item[2]).siblings('div').contains('Tail');
        })
    })

})