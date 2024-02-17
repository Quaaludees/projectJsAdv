
const testUser = {
    name: 'Lopush',
    birthday: '2010-02-10'
}

function validateAge (user) {
    const birthdayDate = new Date(user.birthday);
    const now = new Date();
    if (Number.isNaN(birthdayDate.getFullYear())) {
        return false;
    }
    return (now.getFullYear() - birthdayDate.getFullYear()) >= 14
        && (birthdayDate.getMonth() > now.getMonth()
            ||
            (birthdayDate.getMonth() === now.getMonth()
                && birthdayDate.getDate() > now.getDate()));
}

console.log(validateAge(testUser));



