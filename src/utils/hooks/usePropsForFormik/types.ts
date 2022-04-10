import { ChangeEvent } from 'react';
import { FormikContextType } from 'formik';

export interface NameProp {
  name: string;
}

export interface FieldValidationProps extends NameProp {
  required?: boolean;
  error: boolean;
  helperText: string;
}

export interface ValueOnChangeTextFieldProps extends NameProp {
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface MinimalConstantObject {
  label: string;
  value: string;
}

export type SetPropsTextFieldObject = FieldValidationProps &
  ValueOnChangeTextFieldProps;

export type UsePropsForFormikReturnType<T, K = keyof T> = {
  setPropsForTextFieldFormik: (
    name: K,
    required?: boolean
  ) => SetPropsTextFieldObject;

  setPropsForErrorsFormik: (
    name: K,
    required?: boolean
  ) => FieldValidationProps;

  /**
   * FormikContext
   */
  formik: FormikContextType<T>;
};

export type ResolveArgObj = Record<string, unknown>;
