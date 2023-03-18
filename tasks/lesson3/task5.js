// 5.
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних
// (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /*
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ]
// */

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

const flatArr = arr.flat()
// console.log(flatArr);

function groupByType() {
    const result = [[], []];
    for (let i = 0; i < flatArr.length; i++) {
        const value = flatArr[i];
        if (typeof value === 'number') {
            result[0].push(value);
        } else if (typeof value === 'string') {
            result[1].push(value);
        }
    }
    return result;
}

console.log(groupByType(flatArr));
