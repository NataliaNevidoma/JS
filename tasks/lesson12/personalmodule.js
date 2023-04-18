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