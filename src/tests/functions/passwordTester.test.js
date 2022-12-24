import passwordTester from "../../components/Password/testPasswordStrength";


describe('Testing password testing function', () => {

    test('Password with more than 2 duplicates and length <=10', () => {
        expect(passwordTester('aabbcdd3')).toBe('weak')
    })

    test('Password with more than 3 duplicates and length <=15', () => {
        expect(passwordTester('aacdd33Zbb@L')).toBe('average')
    })

    test('Any password with more than 40% duplicates and length less than 20', () => {
        expect(passwordTester('aaaabc12wew3ewewnmZ')).toBe('weak')
    })

    test('Only numbers password, 10 < length', () => {
        expect(passwordTester('623672')).toBe('weak')
    })

    test('Only numbers password, 10 <= length < 15', () => {
        expect(passwordTester('623672516573')).toBe('average')
    })

    test('Only numbers password, length >= 15', () => {
        expect(passwordTester('246813579042680')).toBe('strong')
    })

    test('Any password with length >= 15 without duplicates', () => {
        expect(passwordTester('ndo3ihs9#Gl2.3Z')).toBe('strong')
    })

    test('Only upper and lower case alphabets password  8<=length<12', () => {
        expect(passwordTester('aSdRLwdedT')).toBe('average')
    })

    test('Alphanumeric with length>=11', () => {
        expect(passwordTester('aSdRL12wdedT')).toBe('strong')
    })

    test('All character types and length >=8', () => {
        expect(passwordTester('aSdRL12wdedT')).toBe('strong')
    })

    test('Any password with length >=15 which passes the duplicate tests', () => {
        expect(passwordTester('19283746bK6473829#0')).toBe('strong')
    })

    test('Two character types and 7<=length<=10', () => {
        expect(passwordTester('Abcder$')).toBe('average')
        expect(passwordTester('Ab.cder$wM')).toBe('average')
    })

    test('All character types and length===7', () => {
        expect(passwordTester('Abc$er1')).toBe('average')
    })

    test('Any password with less length <=6', () => {
        expect(passwordTester('Abc$er')).toBe('weak')
        expect(passwordTester('1S34.$')).toBe('weak')
    })
})