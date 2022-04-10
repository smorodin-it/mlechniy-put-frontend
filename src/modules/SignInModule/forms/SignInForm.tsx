import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { SignInFormModel } from '../../../models/AuthModel';
import SignInFormFields from '../components/SignInFormFields';

interface SignInFormProps {
  a?: any;
}

const SignInForm = (props: SignInFormProps): JSX.Element => {
  const formik = useFormik<SignInFormModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <SignInFormFields />
      </Form>
    </FormikProvider>
  );
};

export default SignInForm;
