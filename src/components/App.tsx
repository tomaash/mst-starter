import React from 'react'
import { Home } from '~/components/Home'
import { Profile } from '~/components/Profile'
import { ListPage } from '~/components/ListPage'
import { Settings } from '~/components/Settings'

import { createHistory, LocationProvider, Router } from '@reach/router'

import { AppMenu } from '~/components/AppMenu'
import { Provider } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { library } from '@fortawesome/fontawesome-svg-core'
import { IMainStore } from '~/stores/MainStore'

import {
  faBookOpen,
  faTasks,
  faSearchDollar,
  faMoneyCheckAlt,
  faHandHoldingUsd,
  faUserFriends,
  faUser,
  faThList,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBookOpen,
  faTasks,
  faSearchDollar,
  faMoneyCheckAlt,
  faHandHoldingUsd,
  faUserFriends,
  faUser,
  faThList,
  faPlusSquare
)

// No window object in test
export const history = window.history
  ? createHistory(window as any)
  : ({ location: { pathname: '/' } } as any)

export const App = observer<{ mainStore: IMainStore }>(props => {
  return (
    <Provider mainStore={props.mainStore}>
      <LocationProvider history={history}>
        <div className='flex flex-col h-screen overflow-hidden'>
          <AppMenu />
          <Router className='flex-grow overflow-y-auto'>
            <Home path='/' />
            <Profile path='profile/:username' />
            <ListPage path='list' />
            <Settings path='settings' />
          </Router>
          <div className='p-2 bg-primary text-center text-sm'>status bar</div>
        </div>
      </LocationProvider>
    </Provider>
  )
})
