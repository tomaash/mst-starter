import { observable } from 'mobx'
import axios from 'axios'
import { History, HistoryListenerParameter } from '@reach/router'
import { async } from 'q'

interface User {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

interface ApiResponse {
  page: 1
  per_page: 3
  total: 12
  total_pages: 4
}

interface UserResponse extends ApiResponse {
  data: User[]
}

export class AppStore {
  @observable users: User[] = []
  @observable currentRoute: HistoryListenerParameter

  setupHistory(history: History) {
    history.listen(state => {
      console.log(state)
      this.currentRoute = state
    })
  }

  loadUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    this.users = res.data.data
  }

  saveSettings = async data => {
    const res = await axios.post('https://reqres.in/api/users', data)
    console.log(res)
    return res
  }
}
