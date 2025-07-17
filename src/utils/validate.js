export const validateEmail = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])\S{8,16}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid"
    if (!isPasswordValid) return "Password ID is not valid"

    return null
};
