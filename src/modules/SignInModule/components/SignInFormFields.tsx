import React from 'react';
import TextFieldDebounced from '../../../components/inputs/TextFieldDebounced';
import { usePropsForFormik } from '../../../utils/hooks/usePropsForFormik/usePropsForFormik';
import { SignInFormModel } from '../../../models/AuthModel';

interface SignInFormFieldsProps {
  a?: any;
}

const SignInFormFields = (props: SignInFormFieldsProps): JSX.Element => {
  const { setPropsForTextFieldFormik } = usePropsForFormik<SignInFormModel>();
  return (
    <>
      <TextFieldDebounced
        label={'Электронная почта'}
        {...setPropsForTextFieldFormik('email')}
      />
      <TextFieldDebounced
        label={'Пароль'}
        {...setPropsForTextFieldFormik('password')}
      />
    </>
  );
};

export default SignInFormFields;
