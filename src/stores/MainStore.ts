import React from 'react'
import { types } from 'mobx-state-tree'
import { UserStore } from './UserStore'
import { MobXProviderContext } from 'mobx-react'
import { ClickStore } from './ClickStore'

export const MainStore = types.model('MainStore', {
  userStore: types.optional(UserStore, {
    isLoading: true,
    users: []
  }),
  clickStore: types.optional(ClickStore, {
    count: 0
  })
})

export type IMainStore = typeof MainStore.Type

export function useStore() {
  return React.useContext(MobXProviderContext) as { mainStore: IMainStore }
}
