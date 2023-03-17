import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Controller, FieldName, FieldValues, RegisterOptions } from 'react-hook-form';

export type UseControllerProps<
  TFieldValues extends FieldValues = FieldValues
> = {
  name: FieldName<TFieldValues>;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
  onFocus?: () => void;
  defaultValue?: unknown;
  control?: any;
  type: string;
  label: string;
};

const InputText = ({name, control, type, label}: UseControllerProps) => {
  return (
    <Controller
        name={name}
        control={control}
        render={({
            field: { onChange, value, name },
            fieldState: { invalid, error }
          }) => (
            <FormControl isInvalid={invalid}>
                <FormLabel>{label}</FormLabel>
                <Input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
            </FormControl>
        )}
    />
  )
}

export default InputText
