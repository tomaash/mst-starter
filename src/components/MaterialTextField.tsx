import React, { ChangeEvent } from 'react'
import { observer } from 'mobx-react'
import { TextField } from '@material-ui/core'

@observer
export class MaterialTextField extends React.Component<{
  field: any
  testId?: string
}> {
  render() {
    const { field, testId, ...rest } = this.props
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
  }
}
