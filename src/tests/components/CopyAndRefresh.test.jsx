import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CopyAndRefresh from "../../components/CopyAndRefresh";
import '@testing-library/jest-dom/extend-expect'

describe('Testing Input Component', () => {
    test('Copy and refresh buttons disabled when there is no password ', () => {

        render(<CopyAndRefresh password='' />)
        const refreshButton = screen.getByRole('button', { name: 'refresh password' })
        const copyButton = screen.getByRole('button', { name: 'copy password' })

        expect(refreshButton).toBeDisabled()
        expect(copyButton).toBeDisabled()
    })

    test('Copy and refresh buttons enabled when there is a password ', () => {

        render(<CopyAndRefresh password='wbfeiuds131?' />)
        const refreshButton = screen.getByRole('button', { name: 'refresh password' })
        const copyButton = screen.getByRole('button', { name: 'copy password' })

        expect(refreshButton).toBeEnabled()
        expect(copyButton).toBeEnabled()
    })
})