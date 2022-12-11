import { Controller, Control } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

type FormInputTextProps = {
  name: string
  control: any
}

const FormInputText: React.FC<FormInputTextProps & TextFieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        helperText={error ? error.message : null}
        size="small"
        error={!!error}
        onChange={onChange}
        value={value}
        fullWidth
        label={label}
        variant="outlined"
        {...rest}
      />
    )}
  />
)

export default FormInputText
