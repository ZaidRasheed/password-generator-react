import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'

import App from '../App'
describe('Testing App', () => {
    test('Password changes on refresh', async () => {

        render(<App />)
        const initialPassword = screen.getByTestId('password').value
        const refreshButton = screen.getByRole('button', { name: 'refresh password' })

        await userEvent.click(refreshButton)

        const finalPassword = screen.getByTestId('password').value

        expect(initialPassword).not.toEqual(finalPassword)
    })
})