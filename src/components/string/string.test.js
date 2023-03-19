import {reverseString} from "./utils/reverseString";

describe('Тестирование StringComponent', () => {
    it('Разворот строки с чётным количеством символов', () => {
        expect(reverseString('qwerty')).toEqual(['y', 't', 'r', 'e', 'w', 'q']);
    });

    it('Разворот строки с нечётным количеством символов', () => {
        expect(reverseString('roman')).toEqual(['n', 'a', 'm', 'o', 'r']);
    });

    it('Разворот строки с одним символов', () => {
        expect(reverseString('Q')).toEqual(['Q']);
    });

    it('Разворот пустой строки', () => {
        expect(reverseString('')).toEqual([]);
    })
})