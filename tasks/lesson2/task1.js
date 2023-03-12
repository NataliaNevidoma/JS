// 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c

function checkNumber(a, b, c) {

    if (a < b && b < c) {
        return true
    }
    return false
}

console.log(checkNumber(5, 2, 3))

function checkNumber2(a, b, c) {

    i = 0
    let arr = [a, b, c]
    while (i < arr.length) {
        if (arr[i] > arr[i + 1])
            return false
        i++
    }
    return true
}

console.log(checkNumber2(1, 2, 3))