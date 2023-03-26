// 2. 
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// propsCount(mentor);  // 3

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
    // return Object.getOwnPropertyNames(currentObject).length; 
}

let mentor = {
    name: " John",
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
console.log(propsCount(mentor));  