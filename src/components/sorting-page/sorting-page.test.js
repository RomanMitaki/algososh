import {bubbleSort} from "./utils/bubbleSort";
import {selectionSort} from "./utils/selectionSort";

describe('Тестирование SortingPage BubbleSort', () => {
    it('Сортировка нескольких элементов по возрастанию', () => {
        expect(bubbleSort([78, 14, 97, 70, 71, 64, 9, 43], 'Ascending')).toEqual([9, 14, 43, 64, 70, 71, 78, 97]);
    });

    it('Сортировка нескольких элементов по убыванию', () => {
        expect(bubbleSort([78, 14, 97, 70, 71, 64, 9, 43], 'Descending')).toEqual([97, 78, 71, 70, 64, 43, 14, 9]);
    });

    it('Сортировка одного элемента с флагом Ascending', () => {
        expect(bubbleSort([1], 'Ascending')).toEqual([1]);
    });

    it('Сортировка одного элемента с флагом Descending', () => {
        expect(bubbleSort([1], 'Descending')).toEqual([1]);
    });

    it('Сортировка пустого массива с флагом Ascending', () => {
        expect(bubbleSort([], 'Ascending')).toEqual([]);
    });

    it('Сортировка пустого массива с флагом Descending', () => {
        expect(bubbleSort([], 'Descending')).toEqual([]);
    });

})

describe('Тестирование SortingPage SelectionSort', () => {
    it('Сортировка нескольких элементов по возрастанию', () => {
        expect(selectionSort([78, 14, 97, 70, 71, 64, 9, 43], 'Ascending')).toEqual([9, 14, 43, 64, 70, 71, 78, 97]);
    });

    it('Сортировка нескольких элементов по убыванию', () => {
        expect(selectionSort([78, 14, 97, 70, 71, 64, 9, 43], 'Descending')).toEqual([97, 78, 71, 70, 64, 43, 14, 9]);
    });

    it('Сортировка одного элемента с флагом Ascending', () => {
        expect(selectionSort([1], 'Ascending')).toEqual([1]);
    });

    it('Сортировка одного элемента с флагом Descending', () => {
        expect(selectionSort([1], 'Descending')).toEqual([1]);
    });

    it('Сортировка пустого массива с флагом Ascending', () => {
        expect(selectionSort([], 'Ascending')).toEqual([]);
    });

    it('Сортировка пустого массива с флагом Descending', () => {
        expect(selectionSort([], 'Descending')).toEqual([]);
    });

})