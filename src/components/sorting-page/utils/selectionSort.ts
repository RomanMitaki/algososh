import {swap} from "../../../services/utils/swap";

export const selectionSort = (arr: number[], state: string): number[] => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (state === 'Ascending') {
                if (arr[i] > arr[j]) {
                    swap(arr, i, j);
                }
            } else {
                if (arr[i] < arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }
    return arr;
};