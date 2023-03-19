import {swap} from "../../../services/utils/swap";

export const bubbleSort = (arr: number[], state: string): number[] => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (state === 'Ascending') {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
        }
    }
    return arr;
}