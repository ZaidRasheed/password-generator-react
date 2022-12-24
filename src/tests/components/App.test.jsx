import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'

import App from '../../App'
describe('Testing App', () => {

    test('Password changes on refresh', async () => {
        render(<App />)
        const initialPassword = screen.getByTestId('password').value
        const refreshButton = screen.getByRole('button', { name: 'refresh password' })

        await userEvent.click(refreshButton)

        const finalPassword = screen.getByTestId('password').value

        expect(initialPassword).not.toEqual(finalPassword)
    })

    test('Password and length change when slider changes', async () => {
        render(<App />)
        const initialPassword = screen.getByTestId('password').value
        const initialLength = screen.getByTestId('length').value
        expect(initialLength).toEqual('12')

        const slider = screen.getByTestId('slider')
        fireEvent.change(slider, { target: { value: 13 } })

        const finalPassword = screen.getByTestId('password').value
        const finalLength = screen.getByTestId('length').value

        expect(initialPassword).not.toEqual(finalPassword)
        expect(finalLength).toEqual('13')
    })
})