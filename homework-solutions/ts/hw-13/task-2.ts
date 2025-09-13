// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
if (password.length < 8) {
    return false && new Error("Password should be at least 8 characters long");
} else if (!/[A-Z]/.test(password)) {
    return false && new Error("Password should contain at least one uppercase letter");
} else if (!/[a-z]/.test(password)) {
    return false && new Error("Password should contain at least one lowercase letter");
} else if (!/[0-9]/.test(password)) {
    return false && new Error("Password should contain at least one number");
} else if (!/\S/.test(password)) {
    return false && new Error("Password should not consist of only whitespaces");
}
return true;
};

console.log(validatePassword("ptFA45Z7g"));
console.log(validatePassword("Dtm5m35"));
console.log(validatePassword("12345678"));
console.log(validatePassword("abcdefgh"));
console.log(validatePassword("ABCDEFGH"));
console.log(validatePassword("abcdEFGH"));
console.log(validatePassword("abcdEFG1"));
console.log(validatePassword("        "));
console.log(validatePassword("abcD1   "));
console.log(validatePassword("abcD1"));
console.log(validatePassword("Abcdefg1"));
console.log(validatePassword("A1      "));
console.log(validatePassword("x5      "));
console.log(validatePassword("A1b2C3d4"));