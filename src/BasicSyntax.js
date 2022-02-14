export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    const valueMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let cur = 0;
    let prev = 0;
    for (let char of str.split('').reverse()) {
        cur = valueMap.get(char);
        if (cur < prev) {
            result -= cur;
        } else {
            result += cur;
        }
        prev = cur;
    }

    return result;
}
