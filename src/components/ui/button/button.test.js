import {Button} from "./button";
import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Тест Button', () => {
    it('Рендер c текстом', () => {
        const button = renderer.create(<Button text='Текст'/>).toJSON();
        expect(button).toMatchSnapshot()
    })

    it('Рендер без текста', () => {
        const button = renderer.create(<Button/>).toJSON();
        expect(button).toMatchSnapshot();
    })

    it('Тест disabled', () => {
        const button = renderer.create(<Button disabled/>).toJSON();
        expect(button).toMatchSnapshot();
    })

    it('Тест лоадера', () => {
        const button = renderer.create(<Button isLoader={true}/>).toJSON();
        expect(button).toMatchSnapshot();
    })

    it('Тест вызова коллбэка при клике на кнопку', () => {
        const mockFn = jest.fn();
        render(<Button text="button" onClick={mockFn}/>);
        const button = screen.getByText('button');
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalled();
    })

})