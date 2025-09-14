// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

//function validatePassword(password: string): boolean {
//if (password.length < 8) {
//    return false && new Error("Password should be at least 8 characters long");
//} else if (!/[A-Z]/.test(password)) {
//    return false && new Error("Password should contain at least one uppercase letter");
//} else if (!/[a-z]/.test(password)) {
//    return false && new Error("Password should contain at least one lowercase letter");
//} else if (!/[0-9]/.test(password)) {
//    return false && new Error("Password should contain at least one number");
//} else if (!/\S/.test(password)) {
//    return false && new Error("Password should not consist of only whitespaces");
//}
//return true;
//};

//function validatePassword(password: string): boolean {
//if (password.length < 8) {
//    console.log("Password should be at least 8 characters long")
//    return false;
//} else if (!/[A-Z]/.test(password)) {
//    console.log("Password should contain at least one uppercase letter");
//    return false;
//} else if (!/[a-z]/.test(password)) {
//    console.log("Password should contain at least one lowercase letter");
//    return false;
//} else if (!/[0-9]/.test(password)) {
//    console.log("Password should contain at least one number");
//    return false;
//} else if (!/\S/.test(password)) {
//    console.log("Password should not consist of only whitespaces");
//    return false;
//}
//return true;
//};

function validatePassword(password: string): boolean {
const errors = []
let isValid = true;
if (password.length < 8) {
    errors.push("Password should be at least 8 characters long")
    isValid = false
};
if (!/[A-Z]/.test(password)) {
    errors.push("Password should contain at least one uppercase letter");
    isValid = false
};
if (!/[a-z]/.test(password)) {
    errors.push("Password should contain at least one lowercase letter");
    isValid = false
};
if (!/[0-9]/.test(password)) {
    errors.push("Password should contain at least one number");
    isValid = false
};
if (!password.trim()) {
    errors.push("Password should not consist of only whitespaces");
    isValid = false
};
errors.length ? console.log(errors.join("\n")) :  console.log("Password is valid");
return isValid;
};

console.log(validatePassword("ptFA45Z7g"));
console.log(validatePassword("abcdEFG1"));
console.log(validatePassword("abcD1   "));
console.log(validatePassword("A1b2C3d4"));
console.log(validatePassword("Dtm5m35"));
console.log(validatePassword("12345678"));
console.log(validatePassword("abcdefgh"));
console.log(validatePassword("ABCDEFGH"));
console.log(validatePassword("abcdEFGH"));
console.log(validatePassword("        "));
console.log(validatePassword("abcD1"));
console.log(validatePassword("A1      "));
console.log(validatePassword("x5      "));
