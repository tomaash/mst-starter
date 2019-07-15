import React from 'react'
import { shallow, mount } from 'enzyme'
import { renderText, sleep } from '~/utils/testUtils'
import { Settings } from '../Settings'
import { AppStore } from '~/stores/AppStore'

describe('<Settings />', () => {
  it('renders component', () => {
    const text = renderText(<Settings appStore={{} as any} />)
    expect(text).toMatchSnapshot()
  })

  it('submits valid form', async () => {
    const appStore = new AppStore()
    appStore.saveSettings = jest.fn()

    const wrapper = mount(<Settings appStore={appStore} />)

    const fnameInput = wrapper.find('[data-testid="first_name"]')
    fnameInput.simulate('change', { target: { value: 'MyFirstName' } })

    const lnameInput = wrapper.find('[data-testid="last_name"]')
    lnameInput.simulate('change', { target: { value: 'MyLastName' } })

    const sButton = wrapper.find('[data-testid="submit_button"]').first()
    sButton.simulate('click')
    await sleep(0)
    expect(appStore.saveSettings).toHaveBeenCalledWith({
      first_name: 'MyFirstName',
      last_name: 'MyLastName'
    })
  })

  it('does not submit invalid form', async () => {
    const appStore = new AppStore()
    appStore.saveSettings = jest.fn()

    const wrapper = mount(<Settings appStore={appStore} />)

    const fnameInput = wrapper.find('[data-testid="first_name"]')
    fnameInput.simulate('change', { target: { value: 'foo' } })

    const lnameInput = wrapper.find('[data-testid="last_name"]')
    lnameInput.simulate('change', { target: { value: 'bar' } })

    const sButton = wrapper.find('[data-testid="submit_button"]').first()
    sButton.simulate('click')
    await sleep(0)
    expect(appStore.saveSettings).not.toHaveBeenCalled()
  })
})
