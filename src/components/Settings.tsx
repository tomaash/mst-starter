import React from 'react'
import { observer } from 'mobx-react-lite'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import { MaterialTextField } from './MaterialTextField'
import { Button } from '@material-ui/core'
import { SnackbarPopup } from './shared/SnackbarPopup'
import { useLocalStore } from 'mobx-react-lite'
import { RouteComponentProps } from '@reach/router'

export const Settings = observer<RouteComponentProps>(props => {
  const popupConfig = useLocalStore(() => ({
    message: 'Settings updated',
    open: false
  }))

  const formHooks = {
    onError: form => {
      console.error('Form Error')
    },
    onSuccess: async form => {
      const values = form.values()
      await this.props.appStore.saveSettings(values)
      this.popupConfig.open = true
    }
  }

  const formFields = {
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
  const form = new MobxReactForm(
    { fields: formFields },
    { plugins: { dvr: dvr(validatorjs) }, hooks: formHooks }
  )

  return (
    <div className='p-8'>
      <form onSubmit={form.onSubmit}>
        <MaterialTextField testId='first_name' field={form.$('first_name')} />
        <MaterialTextField testId='last_name' field={form.$('last_name')} />

        <br />
        <Button
          data-testid='submit_button'
          className='mr-2'
          variant='outlined'
          color='primary'
          onClick={form.onSubmit}
        >
          Submit
        </Button>
        <Button
          className='mr-2'
          variant='outlined'
          color='secondary'
          onClick={form.onClear}
        >
          Clear
        </Button>
        <Button variant='outlined' onClick={form.onReset}>
          Reset
        </Button>

        <p>{form.error}</p>
      </form>
      <SnackbarPopup config={popupConfig} />
    </div>
  )
})
