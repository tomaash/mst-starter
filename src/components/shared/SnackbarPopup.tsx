import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CloseIcon from '@material-ui/icons/Close'
import { Snackbar, IconButton } from '@material-ui/core'

interface PopupMessageProps {
  config: {
    message: string
    open: boolean
  }
}

@observer
export class SnackbarPopup extends Component<PopupMessageProps> {
  handleClose = () => {
    this.props.config.open = false
  }
  render() {
    const { config } = this.props
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={config.open}
        autoHideDuration={3000}
        onClose={this.handleClose}
        message={<span id='message-id'>Settings updated</span>}
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    )
  }
}
