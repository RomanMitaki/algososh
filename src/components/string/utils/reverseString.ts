import {swap} from "../../../services/utils/swap";

export const reverseString = (str: string): string[] => {
    const list = str.split('');
    let i = 0,
        j = list.length - 1;
    while (j >= i) {
        swap(list, i, j);
        j--;
        i++;
    }
    return list;
}