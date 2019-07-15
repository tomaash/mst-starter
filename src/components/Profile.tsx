import React from 'react'
import { observer, useLocalStore } from 'mobx-react-lite'
import { RouteComponentProps } from '@reach/router'
import { Button } from '@material-ui/core'

interface ProfileProps extends RouteComponentProps {
  username?: string
}

export const Profile = observer<ProfileProps>(props => {
  const localState = useLocalStore(() => ({
    a: 0
  }))

  return (
    <div className='p-8'>
      <h1>Hello, {props.username}</h1>
      <h3 data-testid='counter' className='text-red-800'>
        You have clicked {localState.a} times
      </h3>
      <br />
      <Button
        data-testid='button'
        className='mb-8'
        color='primary'
        variant='contained'
        onClick={() => {
          localState.a++
        }}
      >
        Click me
      </Button>
      <br />
      {Array(1500)
        .fill('Blah')
        .join(' ')}
    </div>
  )
})
