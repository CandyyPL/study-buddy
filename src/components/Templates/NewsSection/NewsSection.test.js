import React from 'react'
import NewsSection from './NewsSection'
import { screen } from '@testing-library/react'
import { renderWithProviders } from 'helpers/renderWithProviders'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

const query = `
  {
    allArticles {
      id
      title
      category
      content
    }
  }
`

describe('News section tests', () => {
  afterEach(() => mock.reset())

  test(`Displays error when news can't be loaded`, async () => {
    mock
      .onPost('https://graphql.datocms.com/', {
        query,
      })
      .reply(500)
    renderWithProviders(<NewsSection />)
    await screen.findByText(/Sorry/)
  })
})
