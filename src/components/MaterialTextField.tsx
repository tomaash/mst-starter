import React from 'react'
import { observer } from 'mobx-react-lite'
import { TextField } from '@material-ui/core'

export const MaterialTextField = observer<{
  field: any
  testId?: string
}>(props => {
  const { field, testId, ...rest } = props
  return (
    <div>
      <TextField
        {...field.bind()}
        inputProps={{
          'data-testid': testId
        }}
        helperText={field.error}
        error={!!field.error}
        {...rest}
      />
    </div>
  )
})
