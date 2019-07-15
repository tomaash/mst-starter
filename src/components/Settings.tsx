import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import { MaterialTextField } from './MaterialTextField'
import { RouteComponentProps } from '@reach/router'
import { Button, Snackbar, IconButton } from '@material-ui/core'
import { AppStore } from '~/stores/AppStore'
import { observable } from 'mobx'
import { SnackbarPopup } from './shared/SnackbarPopup'

interface SettingsProps extends RouteComponentProps {
  appStore?: AppStore
}

@inject('appStore')
@observer
export class Settings extends Component<SettingsProps> {
  @observable popupConfig = {
    message: 'Settings updated',
    open: false
  }

  formHooks = {
    onError: form => {
      console.error('Form Error')
    },
    onSuccess: async form => {
      const values = form.values()
      await this.props.appStore.saveSettings(values)
      this.popupConfig.open = true
    }
  }

  formFields = {
    first_name: {
      label: 'First Name',
      placeholder: 'Insert First Name',
      rules: 'required|string|between:5,25',
      default: 'John'
    },
    last_name: {
      label: 'Last Name',
      placeholder: 'Insert Last Name',
      rules: 'required|string|between:5,25',
      default: 'Doe'
    }
  }
  form = new MobxReactForm(
    { fields: this.formFields },
    { plugins: { dvr: dvr(validatorjs) }, hooks: this.formHooks }
  )
  render() {
    return (
      <div className='p-8'>
        <form onSubmit={this.form.onSubmit}>
          <MaterialTextField
            testId='first_name'
            field={this.form.$('first_name')}
          />
          <MaterialTextField
            testId='last_name'
            field={this.form.$('last_name')}
          />

          <br />
          <Button
            data-testid='submit_button'
            className='mr-2'
            variant='outlined'
            color='primary'
            onClick={this.form.onSubmit}
          >
            Submit
          </Button>
          <Button
            className='mr-2'
            variant='outlined'
            color='secondary'
            onClick={this.form.onClear}
          >
            Clear
          </Button>
          <Button variant='outlined' onClick={this.form.onReset}>
            Reset
          </Button>

          <p>{this.form.error}</p>
        </form>
        <SnackbarPopup config={this.popupConfig} />
      </div>
    )
  }
}
