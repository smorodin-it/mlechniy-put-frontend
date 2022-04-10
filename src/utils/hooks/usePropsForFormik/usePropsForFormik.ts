import { useFormikContext } from 'formik';
import { ChangeEvent } from 'react';
import {
  FieldValidationProps,
  SetPropsTextFieldObject,
  UsePropsForFormikReturnType,
} from './types';
import { resolveDataByPath } from '../../functions/resolveDataByPath';

export function usePropsForFormik<
  T extends Record<keyof T, unknown>
>(): UsePropsForFormikReturnType<T> {
  const formik = useFormikContext<T>();

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    formik.handleChange(event);
  };

  const setPropsForTextFieldFormik = (
    name: keyof T,
    required?: boolean
  ): SetPropsTextFieldObject => {
    return {
      name: name as string,
      value: resolveDataByPath(name as string, formik.values),
      onChange: handleTextFieldChange,
      required: required,
      error: formik.touched[name] && !!formik.errors[name],
      helperText: formik.errors[name] as string,
    };
  };

  const setPropsForErrorsFormik = (
    name: keyof T,
    required?: boolean
  ): FieldValidationProps => {
    return {
      name: name as string,
      required: required,
      error: formik.touched[name] && !!formik.errors[name],
      helperText: formik.errors[name] as string,
    };
  };

  return {
    formik,
    setPropsForTextFieldFormik,
    setPropsForErrorsFormik,
  };
}
