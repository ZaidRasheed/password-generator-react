import { render, screen } from "@testing-library/react";
import Password from "../components/Password/Password"
import '@testing-library/jest-dom/extend-expect'

describe('Password component test', () => {

    test('Display correct text and color when the length is 0', async () => {
        render(<Password password='' />)

        const strength = screen.getByTestId('strength')

        expect(strength).toHaveStyle({ 'color': '#112D4E' })

        expect(strength).toHaveTextContent('No password')
    })

    test('Display correct text and color for strong password', async () => {
        render(<Password password='2dhG@3.lc(' />)

        const strength = screen.getByTestId('strength')

        expect(strength).toHaveStyle({ 'color': '#2B7A0B' })

        expect(strength).toHaveTextContent('Strong')
    })

    test('Display correct text and color for average password', async () => {
        render(<Password password='rV2XK9sHh' />)

        const strength = screen.getByTestId('strength')

        expect(strength).toHaveStyle({ 'color': '#E6B325' })

        expect(strength).toHaveTextContent('Average')
    })

    test('Display correct text and color for weak password', async () => {
        render(<Password password='123456' />)

        const strength = screen.getByTestId('strength')

        expect(strength).toHaveStyle({ 'color': '#EB1D36' })

        expect(strength).toHaveTextContent('Weak')
    })
})
