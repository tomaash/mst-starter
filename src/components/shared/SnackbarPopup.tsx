import React from 'react'
import { observer } from 'mobx-react-lite'
import CloseIcon from '@material-ui/icons/Close'
import { Snackbar, IconButton } from '@material-ui/core'

interface PopupMessageProps {
  config: {
    message: string
    open: boolean
  }
}

export const SnackbarPopup = observer<PopupMessageProps>(props => {
  function handleClose() {
    props.config.open = false
  }
  const { config } = props
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={config.open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={<span id='message-id'>Settings updated</span>}
      action={[
        <IconButton
          key='close'
          aria-label='Close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  )
})
