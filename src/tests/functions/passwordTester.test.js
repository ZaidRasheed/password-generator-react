import passwordTester from "../../components/Password/testPasswordStrength";


describe('Testing password testing function', () => {

    test('Password with one char type (numbers or letters only) which is not symbols', () => {
        //! more than 2 duplicates and length < 10
        expect(passwordTester('aabbcdd')).toBe('weak')

        //! two duplicates and length < 10 
        expect(passwordTester('aabbefrj')).toBe('average')
    })

    test('Password with letters and numbers only', () => {
        //! if 3 the characters are duplicates and length <= 15
        expect(passwordTester('abL1n1bpOaNe')).toBe('average')

        //! if more than 3 characters are duplicates and length <= 15
        expect(passwordTester('abL1n1bpOane')).toBe('weak')
    })


    test('If percentage of duplicates is >=40% and length is >=20', () => {
        expect(passwordTester('aaaaaaaaaaaa222222')).toBe('weak')
    });


    test('Only numbers password, 10 < length', () => {
        expect(passwordTester('623672')).toBe('weak')
    })

    test('Only numbers password, 10 <= length < 15', () => {
        expect(passwordTester('623672516573')).toBe('weak')
    })

    test('Only numbers password, length >= 15 without enough duplicates', () => {
        expect(passwordTester('246813579042680')).toBe('strong')
    })

    test('Any password with length >= 15 without duplicates', () => {
        expect(passwordTester('ndo3ihs9#Gl2.3Z')).toBe('strong')
    })

    test('Only upper and lower case alphabets password  8<=length<12', () => {
        expect(passwordTester('aSdRLdwedT')).toBe('average')
    })

    test('Password with symbols and length >= 8', () => {
        expect(passwordTester('oJ?][NrY\z')).toBe('strong')
    });


    test('Alphanumeric with length>=11', () => {
        expect(passwordTester('aSb1mK23937')).toBe('strong')
    })

    test('All character types and length >=8', () => {
        expect(passwordTester('aSdRL12.dedT')).toBe('strong')
    })

    test('Any password with if duplicates >= 4 and length is <= 20 ', () => {
        //! if exactly 4 duplicates and not all three char types
        expect(passwordTester('1c283a4wvK64b38290')).toBe('average')

        //! if more than 4 duplicates and not all three char types then weak
        expect(passwordTester('19283746bK647382901')).toBe('weak')

        //! if exactly 6 duplicates and all three char types then weak
        expect(passwordTester('19m@374-bK6473@m9<0')).toBe('average')

        //! if more than 6 duplicates and all three char types then weak
        expect(passwordTester('19m@3746bK6473@m9@0')).toBe('weak')
    })

    test('Two character types and 7<=length<=10 without symbols', () => {
        expect(passwordTester('Abcder1')).toBe('average')
        expect(passwordTester('Asb321Mk3O')).toBe('average')
    })

    test('All character types and length===7', () => {
        expect(passwordTester('Abc$er1')).toBe('average')
    })

    test('Any password with less length <=6', () => {
        expect(passwordTester('Abc$er')).toBe('weak')
        expect(passwordTester('1S34.$')).toBe('weak')
    })
})