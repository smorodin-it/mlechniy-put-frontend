import React from 'react';
import { Card, CardContent } from '@mui/material';
import TextFieldDebounced from '../../../components/inputs/TextFieldDebounced';
import { usePropsForFormik } from '../../../utils/hooks/usePropsForFormik/usePropsForFormik';
import { SignInFormModel } from '../../../models/AuthModel';
import FullContainerFlexLayout, {
  formLayout,
} from '../../../layouts/FullContainerFlexLayout';

interface SignInFormFieldsProps {
  a?: any;
}

const SignInFormFields = (props: SignInFormFieldsProps): JSX.Element => {
  const { setPropsForTextFieldFormik } = usePropsForFormik<SignInFormModel>();
  return (
    <Card>
      <CardContent>
        <FullContainerFlexLayout {...formLayout}>
          <TextFieldDebounced
            label={'Электронная почта'}
            {...setPropsForTextFieldFormik('email')}
          />
          <TextFieldDebounced
            label={'Пароль'}
            {...setPropsForTextFieldFormik('password')}
          />
        </FullContainerFlexLayout>
      </CardContent>
    </Card>
  );
};

export default SignInFormFields;
