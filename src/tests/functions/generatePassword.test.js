import generatePassword from "../../hooks/usePassword/generatePassword";

describe('Tests Generate password function', () => {
    test('Gives the correct length', () => {
        const randomLength = Math.floor(Math.random() * (40))
        const dataTypes = {
            upperCase: true,
            lowerCase: true,
            numbers: true,
            symbols: true,
        }

        const password = generatePassword(randomLength, dataTypes)

        expect(password.length).toBe(randomLength)
    });

    test('Gives no password if no data types given', () => {
        //! if no data types are given
        const dataTypes = {
            upperCase: false,
            lowerCase: false,
            numbers: false,
            symbols: false,
        }
        const password = generatePassword(40, dataTypes)
        expect(password.length).toBe(0)
    });

    test('Gives the correct dataType (Upper Case)', () => {

        const dataTypes = {
            upperCase: true,
            lowerCase: false,
            numbers: false,
            symbols: false,
        }
        const password = generatePassword(20, dataTypes)
        expect(/^[A-Z]*$/.test(password)).toBe(true)
    });

    test('Gives the correct dataType (Lower Case)', () => {

        const dataTypes = {
            upperCase: false,
            lowerCase: true,
            numbers: false,
            symbols: false,
        }
        const password = generatePassword(20, dataTypes)
        expect(/^[a-z]*$/.test(password)).toBe(true)
    });

    test('Gives the correct dataType (Number)', () => {

        const dataTypes = {
            upperCase: false,
            lowerCase: false,
            numbers: true,
            symbols: false,
        }
        const password = generatePassword(20, dataTypes)
        expect(/^[0-9]*$/.test(password)).toBe(true)
    });

    test('Gives the correct dataType (Symbols)', () => {

        const dataTypes = {
            upperCase: false,
            lowerCase: false,
            numbers: false,
            symbols: true,
        }
        const password = generatePassword(4, dataTypes)
        let regex = /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]*$/;
        expect(regex.test(password)).toBe(true)
    });

    test('Gives the correct length', () => {

        const dataTypes = {
            upperCase: true,
            lowerCase: true,
            numbers: true,
            symbols: true,
        }
        const password = generatePassword(0, dataTypes)
        expect(password).toHaveLength(0)
    });
})