import React from 'react'
import { App } from '~/components/App'
import { renderText } from '~/utils/testUtils'
import { MainStore } from '../stores/MainStore'

it('renders <App/>', () => {
  const mainStore = MainStore.create()
  // const text = renderText(<App mainStore={mainStore} />)
  const text = renderText(<App mainStore={mainStore} />)

  expect(text).toMatchSnapshot()
})
