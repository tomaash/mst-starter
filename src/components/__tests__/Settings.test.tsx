import React from 'react'
import { renderText, sleep } from '~/utils/testUtils'
import { Settings } from '../Settings'
import { AppStore } from '~/stores/AppStore'

describe('<Settings />', () => {
  it('renders component', () => {
    const text = renderText(<Settings appStore={{} as any} />)
    expect(text).toMatchSnapshot()
  })
})
