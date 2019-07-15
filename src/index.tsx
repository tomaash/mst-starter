import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

import * as serviceWorker from './serviceWorker'
import { MainStore } from './stores/MainStore'
import { connectReduxDevtools } from 'mst-middlewares'
import { getSnapshot, onSnapshot, destroy } from 'mobx-state-tree'

require('./styles/index.css')

declare let module: { hot: any }

const localStorageKey = 'mst-test'

const initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {}

let store
let snapshotListener

function createMainStore(snapshot) {
  // clean up snapshot listener
  if (snapshotListener) snapshotListener()
  // kill old store to prevent accidental use and run clean up hooks
  if (store) destroy(store)

  // create new one
  store = MainStore.create(snapshot)

  // connect devtools
  connectReduxDevtools(require('remotedev'), store)

  // connect local storage
  snapshotListener = onSnapshot(store, snapshot =>
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
  )
  return store
}

function renderApp(App, store) {
  render(<App mainStore={store} />, document.getElementById('root'))
}

// Initial render
renderApp(App, createMainStore(initialState))

// Connect HMR
if (module.hot) {
  module.hot.accept(['./stores/MainStore'], () => {
    // Store definition changed, recreate a new one from old state
    renderApp(App, createMainStore(getSnapshot(store)))
  })

  module.hot.accept(['./components/App'], () => {
    // Componenent definition changed, re-render app
    renderApp(App, store)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
