import React from 'react'
import { App } from '~/app'
import { renderText } from '~/utils/testUtils'

it('renders <App/>', () => {
  const text = renderText(<App />)
  expect(text).toMatchSnapshot()
})
