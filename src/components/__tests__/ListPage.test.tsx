import React from 'react'
import { renderText, squashHtmlTags, startPolly } from '~/utils/testUtils'
import { Provider } from 'mobx-react'
import { ListPage } from '../ListPage'
import { MainStore } from '../../stores/MainStore'

describe('<ListPage />', () => {
  it('renders component', () => {
    const componentSetup = (
      <Provider mainStore={MainStore.create()}>
        <ListPage />
      </Provider>
    )

    const text = renderText(componentSetup)
    expect(squashHtmlTags(text)).toMatchSnapshot()
  })

  it('renders component with data', async () => {
    const mainStore = MainStore.create({
      userStore: {
        isLoading: false,
        users: [
          {
            id: 1,
            first_name: 'George',
            last_name: 'Bluth',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
            email: 'george.bluth@reqres.in'
          },
          {
            id: 2,
            first_name: 'Janet',
            last_name: 'Weaver',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
            email: 'janet.weaver@reqres.in'
          },
          {
            id: 3,
            first_name: 'Emma',
            last_name: 'Wong',
            avatar:
              'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
            email: 'emma.wong@reqres.in'
          }
        ]
      },
      clickStore: { count: 3 }
    })
    const componentSetup = (
      <Provider mainStore={mainStore}>
        <ListPage />
      </Provider>
    )
    expect(renderText(componentSetup)).toMatchSnapshot()
  })
})
