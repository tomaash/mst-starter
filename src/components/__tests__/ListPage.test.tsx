import React from 'react'
import { renderText, squashHtmlTags, startPolly } from '~/utils/testUtils'
import { shallow, mount } from 'enzyme'
import { Provider } from 'mobx-react'
import { AppStore } from '~/stores/AppStore'
import { ListPage } from '../ListPage'
import { when } from 'mobx'

describe('<ListPage />', () => {
  startPolly(__dirname)

  it('renders component', () => {
    const componentSetup = (
      <Provider appStore={new AppStore()}>
        <ListPage />
      </Provider>
    )

    const text = renderText(componentSetup)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })

  it('waits for data load', async () => {
    const appStore = new AppStore()
    const componentSetup = (
      <Provider appStore={appStore}>
        <ListPage />
      </Provider>
    )

    const wrapper = mount(componentSetup)
    await when(() => !!appStore.users.length)
    expect(squashHtmlTags(wrapper.html())).toMatchSnapshot()
  })
})
