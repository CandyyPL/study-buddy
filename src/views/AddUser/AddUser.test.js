import React from 'react'
import AddUser from './AddUser'
import Dashboard from 'views/Dashboard/Dashboard'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders'

describe('Add User', () => {
  test('Add the user', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    )
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Zdzislawovic' } })
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } })
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } })
    fireEvent.click(screen.getByTestId('Consent'))
    fireEvent.click(screen.getByText('Save'))
    screen.getByText('Zdzislawovic')
  })
})
