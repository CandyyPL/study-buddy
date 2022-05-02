import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders'
import FormField from './FormField'

describe('FormField test', () => {
  test('Render the component', () => {
    renderWithProviders(<FormField label='name' name='name' id='name' />)
  })
})
