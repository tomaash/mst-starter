import React from 'react'
import { Home } from '../Home'
import { renderText, squashHtmlTags } from '~/utils/testUtils'

describe('<Home />', () => {
  it('renders component', () => {
    const text = renderText(<Home />)
    expect(text).toMatchSnapshot()
  })
})
