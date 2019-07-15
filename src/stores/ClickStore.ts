import { types } from 'mobx-state-tree'

export const ClickStore = types
  .model('ClickStore', {
    count: 0
  })
  .actions(self => {
    function inc() {
      self.count += 1
    }
    return {
      inc
    }
  })

export type IClickStore = typeof ClickStore.Type
