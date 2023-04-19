const os = require('os');
const date = new Date();
function greetUser() {
    const username = os.userInfo().username;

    const hours = date.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return `${greeting}, ${username}!`;
}

module.exports = {
    greetUser,
};


// const curDate = new Date();
// module.exports.date = curDate;

// module.exports.showMessage = function (name) {

//     const hour = curDate.getHours();

//     switch (true) {
//         case hour >= 5 && hour < 11:
//             return `Good morning ${name}`;
//         case hour >= 11 && hour < 17:
//             return `Good afternoon ${name}`;
//         case hour >= 17:
//             return `Good evening ${name}`;
//     }
// }