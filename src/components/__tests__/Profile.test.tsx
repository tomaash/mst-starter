import React from 'react'
import { squashHtmlTags, renderText } from '~/utils/testUtils'
import { Profile } from '../Profile'

describe('<Profile />', () => {
  it('renders component', () => {
    const text = renderText(<Profile />)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })
})
