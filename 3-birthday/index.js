
const testUser = {
    name: 'Lopush',
    birthday: '2000-02-20'
}

function validateAge (user) {
    const birthdayDate = new Date(user.birthday).getFullYear();
    const now = new Date().getFullYear();
    if (Number.isNaN(birthdayDate)) {
        return false;
    }
    return (now - birthdayDate) > 14;
}

console.log(validateAge(testUser));