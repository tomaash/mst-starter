import React from 'react'
import { shallow } from 'enzyme'
import { squashHtmlTags, renderText } from '~/utils/testUtils'
import { Profile } from '../Profile'

describe('<Profile />', () => {
  it('renders component', () => {
    const text = renderText(<Profile />)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })

  it('simulates click events', () => {
    let counter
    const wrapper = shallow(<Profile />)
    counter = wrapper.find('[data-testid="counter"]')
    expect(counter).toIncludeText('0')
    wrapper.find('[data-testid="button"]').simulate('click')
    counter = wrapper.find('[data-testid="counter"]')
    expect(counter).toIncludeText('1')
  })
})
