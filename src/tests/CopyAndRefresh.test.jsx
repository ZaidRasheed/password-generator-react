import { render, screen } from "@testing-library/react";
import CopyAndRefresh from "../components/CopyAndRefresh";
import '@testing-library/jest-dom/extend-expect'

describe('Testing Input Component', () => {
    test('Copy and refresh buttons disabled when there is no password ', () => {

        render(<CopyAndRefresh password='' />)
        const refreshButton = screen.getByRole('button', { name: 'refresh password' })
        const copyButton = screen.getByRole('button', { name: 'copy password' })

        expect(refreshButton).toBeDisabled()
        expect(copyButton).toBeDisabled()
    })
})