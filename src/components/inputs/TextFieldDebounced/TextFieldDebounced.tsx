import React, { ChangeEvent, useState } from 'react';
import useDebounce from '../../../utils/hooks/useDebounce';
import { TextField, TextFieldProps } from '@mui/material';

type TextFieldDebounceEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

type TextFieldDebouncedProps = {
  value: string;
  onChange: (event: TextFieldDebounceEvent) => void;
  debounceDelay?: number;
} & Omit<TextFieldProps, 'value' | 'onChange'>;

const TextFieldDebounced = (props: TextFieldDebouncedProps): JSX.Element => {
  const [value, setValue] = useState(props.value);

  const handleDebounceOnChange = useDebounce((event) => {
    if (props.onChange) {
      props.onChange((event as [TextFieldDebounceEvent])?.[0]);
    }
  }, props.debounceDelay ?? 500);

  const handleFieldChange = (event: TextFieldDebounceEvent): void => {
    setValue(event.target.value);
    handleDebounceOnChange([event]);
  };

  return <TextField {...props} value={value} onChange={handleFieldChange} />;
};

export default TextFieldDebounced;
