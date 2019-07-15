import React from 'react'
import { observer, useLocalStore } from 'mobx-react-lite'
import { useDidMount } from 'rooks'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import { useStore } from '~/stores/MainStore'

export const ListPageComponent = observer<RouteComponentProps>(props => {
  const { mainStore } = useStore()
  const { userStore, clickStore } = mainStore

  useDidMount(() => {
    userStore.loadUsers()
  })
  function handleClick() {
    clickStore.inc()
  }

  const localState = useLocalStore(() => ({
    count: 0,
    inc() {
      localState.count += 1
    }
  }))
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userStore.users.map(item => {
            return (
              <TableRow data-testid='table-row' key={item.id}>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <Button onClick={handleClick}>
        Click store count: {clickStore.count}
      </Button>
      <br />
      <Button onClick={localState.inc}>
        Click local count: {localState.count}
      </Button>
    </>
  )
})

// TODO: refactor to smart & dumb
export const ListPage = ListPageComponent
