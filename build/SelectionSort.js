"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
class SelectionSort {
    static selectionSort(list) {
        for (let i = 0; i < list.length - 1; i++) {
            let currentMin = list[i];
            let currentMinIndex = i;
            for (let j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentMinIndex = j;
                }
            }
            if (currentMinIndex != i) {
                list[currentMinIndex] = list[i];
                list[i] = currentMin;
            }
        }
    }
}
exports.SelectionSort = SelectionSort;
SelectionSort.list = [1, 9, 4.5, 6.6, 5.7, -4.5];
