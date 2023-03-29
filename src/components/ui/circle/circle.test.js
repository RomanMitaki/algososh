import {Circle} from "./circle";
import renderer from "react-test-renderer";
import {ElementStates} from "../../../types/element-states";

describe('Тест Circle', () => {
    it('Рендер без буквы', () => {
        const circle = renderer.create(<Circle/>).toJSON();
        expect(circle).toMatchSnapshot()
    })

    it('Рендер с буквами', () => {
        const circle = renderer.create(<Circle letter={'test'}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с head text', () => {
        const circle = renderer.create(<Circle head={'test'}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с head null', () => {
        const circle = renderer.create(<Circle head={null}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с head ReactElement', () => {
        const circle = renderer.create(<Circle head={<Circle/>}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с tail text', () => {
        const circle = renderer.create(<Circle tail="test"/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с tail ReactElement', () => {
        const circle = renderer.create(<Circle tail={<Circle/>}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер с index', () => {
        const circle = renderer.create(<Circle index="0"/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер isSmall', () => {
        const circle = renderer.create(<Circle isSmall={true}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер в состоянии ElementStates.default', () => {
        const circle = renderer.create(<Circle state={ElementStates.Default}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер в состоянии ElementStates.changing', () => {
        const circle = renderer.create(<Circle state={ElementStates.Changing}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

    it('Рендер в состоянии ElementStates.modified', () => {
        const circle = renderer.create(<Circle state={ElementStates.Modified}/>).toJSON();
        expect(circle).toMatchSnapshot();
    })

})