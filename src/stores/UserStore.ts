import { values } from 'mobx'
import { types, getParent, flow } from 'mobx-state-tree'
import axios from 'axios'

export const User = types.model('User', {
  id: types.identifierNumber,
  first_name: types.string,
  last_name: types.string,
  avatar: types.string,
  email: types.string
})

export type IUser = typeof User.Type

export const UserStore = types
  .model('UserStore', {
    isLoading: true,
    users: types.array(User)
  })
  .views(self => ({
    get sortedUsers() {
      return sortUsers(values(self.users))
    }
  }))
  .actions(self => {
    function markLoading(loading) {
      self.isLoading = loading
    }
    function updateUsers(json) {
      self.users = json.data.data
      // json.data.data.forEach(user => {
      //   self.users.put(user)
      // })
    }
    const loadUsers = flow(function* loadUsers() {
      try {
        const json = yield axios.get('https://reqres.in/api/users')
        updateUsers(json)
        markLoading(false)
      } catch (err) {
        console.error('Failed to load books ', err)
      }
    })
    return {
      updateUsers,
      loadUsers
    }
  })

export type IUserStore = typeof UserStore.Type

function sortUsers(books) {
  return books.sort((a, b) =>
    a.last_name > b.last_name ? 1 : a.last_name === b.last_name ? 0 : -1
  )
}
